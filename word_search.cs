public class Solution {
    public bool Exist(char[][] board, string word) {
        int m = board.Length;
        int n = board[0].Length;        

        // if(m == 1 && n == 1){
        //     return board[0][0] == word[0];
        // }
        
        for(int i = 0; i < m; i++){
            for(int j = 0; j < n; j++){
                if(board[i][j] == word[0] && backtrack(board, word, i, j, 0)){
                    return true;
                }
            }
        }

        return false;
    }

    private bool backtrack(char[][] board, string word, int i, int j, int index){
        if(index == word.Length) return true;

        if(i < 0 || j < 0 || i >= board.Length || j >= board[0].Length || board[i][j] != word[index]){
            return false;
        }            
        
        board[i][j] = '*';
        bool found = backtrack(board, word, i + 1, j, index + 1)
                    || backtrack(board, word, i - 1, j, index + 1)
                    || backtrack(board, word, i, j + 1, index + 1)
                    || backtrack(board, word, i, j - 1, index + 1);

        board[i][j] = word[index];

        return found;
    }
}
