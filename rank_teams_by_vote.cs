public class Solution {
    public string RankTeams(string[] votes) {
        if (votes.Length == 1)
            return votes[0];
        
        int n = votes[0].Length;
        
        // Dictionary to store each team's ranking counts
        Dictionary<char, int[]> rankCount = new Dictionary<char, int[]>();
        
        // Initialize dictionary to store votes count for each rank for each team
        foreach (char team in votes[0]) {
            rankCount[team] = new int[n];
        }
        
        // Count the votes for each rank position for each team
        foreach (string vote in votes) {
            for (int i = 0; i < vote.Length; i++) {
                char team = vote[i];
                rankCount[team][i]++;
            }
        }
        
        // Sort the teams based on the ranking system
        List<char> teams = votes[0].ToList();
        teams.Sort((a, b) => {
            for (int i = 0; i < n; i++) {
                if (rankCount[a][i] != rankCount[b][i]) {
                    return rankCount[b][i] - rankCount[a][i]; // Descending order by rank count
                }
            }
            return a.CompareTo(b); // Alphabetical order in case of tie
        });
        
        // Return the teams in the sorted order as a string
        return new string(teams.ToArray());        
    }
}
