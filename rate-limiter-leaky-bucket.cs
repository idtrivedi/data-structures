using System;
using System.Collections.Concurrent;
using System.Threading;

public class LeakyBucketRateLimiter
{
    private readonly int capacity; // Maximum capacity of the bucket
    private readonly double leakRate; // Rate at which requests are processed (requests per second)
    private double currentWaterLevel; // Current level of water in the bucket (analogous to queued requests)
    private DateTime lastLeakTimestamp; // Last time the bucket leaked

    public LeakyBucketRateLimiter(int capacity, double leakRate)
    {
        this.capacity = capacity;
        this.leakRate = leakRate;
        this.currentWaterLevel = 0;
        this.lastLeakTimestamp = DateTime.UtcNow;
    }

    private void LeakRequests()
    {
        DateTime now = DateTime.UtcNow;
        double timeElapsed = (now - lastLeakTimestamp).TotalSeconds;

        // Calculate the amount of water (requests) to leak based on time elapsed
        double leakedAmount = timeElapsed * leakRate;
        currentWaterLevel = Math.Max(0, currentWaterLevel - leakedAmount);

        // Update the last leak timestamp
        lastLeakTimestamp = now;
    }

    public bool IsRequestAllowed()
    {
        // Leak any requests that have passed through the bucket over time
        LeakRequests();

        // Check if there is enough capacity in the bucket for a new request
        if (currentWaterLevel < capacity)
        {
            currentWaterLevel += 1; // Add request to the bucket
            return true; // Request is allowed
        }

        return false; // Request is denied (bucket overflow)
    }
}

public class Program
{
    public static void Main()
    {
        // Create a rate limiter with a bucket capacity of 5 and a leak rate of 2 requests per second
        var rateLimiter = new LeakyBucketRateLimiter(5, 2);

        // Simulate 10 requests
        for (int i = 1; i <= 10; i++)
        {
            bool isAllowed = rateLimiter.IsRequestAllowed();
            Console.WriteLine($"Request {i}: {(isAllowed ? "Allowed" : "Blocked")}");
            Thread.Sleep(300); // Add delay to simulate request intervals
        }
    }
}
