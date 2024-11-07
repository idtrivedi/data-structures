using System;
using System.Collections.Concurrent;
using System.Threading;

public class TokenBucketRateLimiter
{
    // Maximum tokens that can be in the bucket
    private readonly int maxTokens;
    // Rate at which tokens are added (tokens per second)
    private readonly double refillRate;
    private double availableTokens; // Current number of tokens in the bucket
    private DateTime lastRefillTimestamp; // Last time tokens were refilled

    public TokenBucketRateLimiter(int maxTokens, double refillRate)
    {
        this.maxTokens = maxTokens;
        this.refillRate = refillRate;
        this.availableTokens = maxTokens;
        this.lastRefillTimestamp = DateTime.UtcNow;
    }

    private void RefillTokens()
    {
        DateTime now = DateTime.UtcNow;
        double timeElapsed = (now - lastRefillTimestamp).TotalSeconds;
        
        // Calculate how many tokens to add based on the time elapsed and refill rate
        double tokensToAdd = timeElapsed * refillRate;
        availableTokens = Math.Min(maxTokens, availableTokens + tokensToAdd);
        
        // Update the last refill timestamp
        lastRefillTimestamp = now;
    }

    public bool IsRequestAllowed()
    {
        // Refill the bucket before checking if we have enough tokens
        RefillTokens();

        // Check if we have enough tokens to allow the request
        if (availableTokens >= 1)
        {
            availableTokens -= 1; // Consume a token
            return true; // Request is allowed
        }

        return false; // Request is denied
    }
}

public class Program
{
    public static void Main()
    {
        // Create a rate limiter that allows up to 5 requests per second
        var rateLimiter = new TokenBucketRateLimiter(5, 5); // max 5 tokens, refilled at 5 tokens per second

        // Simulate 10 requests
        for (int i = 1; i <= 10; i++)
        {
            bool isAllowed = rateLimiter.IsRequestAllowed();
            Console.WriteLine($"Request {i}: {(isAllowed ? "Allowed" : "Blocked")}");
            Thread.Sleep(200); // Add delay to simulate request intervals
        }
    }
}
