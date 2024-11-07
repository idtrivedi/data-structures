using System;
using System.Collections.Concurrent;
using System.Threading;

public class FixedWindowRateLimiter
{
    // Dictionary to store request counts per user in each window
    private readonly ConcurrentDictionary<string, int> requestCounts = new ConcurrentDictionary<string, int>();
    
    // Lock for synchronizing window reset
    private readonly object lockObj = new object();

    private readonly int maxRequests; // Maximum allowed requests per window
    private readonly TimeSpan windowSize; // Window size (e.g., 1 minute)
    private DateTime windowStart; // Start time of the current window

    public FixedWindowRateLimiter(int maxRequests, TimeSpan windowSize)
    {
        this.maxRequests = maxRequests;
        this.windowSize = windowSize;
        this.windowStart = DateTime.UtcNow;
    }

    public bool IsRequestAllowed(string userId)
    {
        // Check if the current window has expired
        lock (lockObj)
        {
            if (DateTime.UtcNow - windowStart >= windowSize)
            {
                // Reset the window
                requestCounts.Clear();
                windowStart = DateTime.UtcNow;
            }
        }

        // Increment the request count for the user
        requestCounts.AddOrUpdate(userId, 1, (key, count) => count + 1);

        // Check if the user has exceeded the max allowed requests in this window
        return requestCounts[userId] <= maxRequests;
    }
}

public class Program
{
    public static void Main()
    {
        // Create a rate limiter that allows 5 requests per minute
        var rateLimiter = new FixedWindowRateLimiter(5, TimeSpan.FromMinutes(1));

        string userId = "user1";

        // Simulate 7 requests
        for (int i = 1; i <= 7; i++)
        {
            bool isAllowed = rateLimiter.IsRequestAllowed(userId);
            Console.WriteLine($"Request {i}: {(isAllowed ? "Allowed" : "Blocked")}");
            Thread.Sleep(200); // Add delay to simulate request intervals
        }
    }
}
