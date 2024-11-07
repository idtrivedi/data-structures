using System;
using System.Collections.Generic;

public class Election
{
    public static string[] Winner(string[] arr, int n)
    {
        // Dictionary to store vote counts for each candidate
        Dictionary<string, int> voteCount = new Dictionary<string, int>();

        // Count the votes for each candidate
        foreach (var name in arr)
        {
            if (voteCount.ContainsKey(name))
            {
                voteCount[name]++;
            }
            else
            {
                voteCount[name] = 1;
            }
        }

        // Variables to keep track of the candidate with max votes and their count
        string winner = "";
        int maxVotes = 0;

        // Determine the candidate with the highest votes, preferring lexicographically smaller name in case of a tie
        foreach (var candidate in voteCount)
        {
            if (candidate.Value > maxVotes || (candidate.Value == maxVotes && candidate.Key.CompareTo(winner) < 0))
            {
                winner = candidate.Key;
                maxVotes = candidate.Value;
            }
        }

        // Return result as required format: name and vote count as a string array
        return new string[] { winner, maxVotes.ToString() };
    }

    public static void Main(string[] args)
    {
        // Test case 1
        int n1 = 13;
        string[] arr1 = { "john", "johnny", "jackie", "johnny", "john", "jackie", "jamie", "jamie", "john", "johnny", "jamie", "johnny", "john" };
        var result1 = Winner(arr1, n1);
        Console.WriteLine($"{result1[0]} {result1[1]}"); // Expected Output: john 4

        // Test case 2
        int n2 = 3;
        string[] arr2 = { "andy", "blake", "clark" };
        var result2 = Winner(arr2, n2);
        Console.WriteLine($"{result2[0]} {result2[1]}"); // Expected Output: andy 1
    }
}
