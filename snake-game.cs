public class SnakeGame {

    private int width;
    private int height;
    private int score;
    private int foodIndex;
    private LinkedList<(int, int)> snake;
    private HashSet<(int, int)> snakeSet;
    private List<(int, int)> food;    
    public SnakeGame(int width, int height, int[][] food) {
        this.width = width;
        this.height = height;        
        this.foodIndex = 0;
        this.snake = new LinkedList<(int, int)>();
        this.snake.AddLast((0, 0));
        this.snakeSet = new HashSet<(int, int)>();        
        this.snakeSet.Add((0, 0));
        this.food = new List<(int, int)>();
        foreach(var f in food){
            this.food.Add((f[0], f[1]));
        }        
    }
    
    public int Move(string direction) { 
        var snakeHead = this.snake.First.Value;
        int row = snakeHead.Item1;
        int col = snakeHead.Item2;        
        if(direction == "U"){
            row--;
        } else if(direction == "D"){
            row++;
        } else if(direction == "L"){
            col--;
        } else if(direction == "R"){
            col++;
        }

        var newHead = (row, col);
        var currTail = this.snake.Last.Value;

        if(row < 0 || row >= height || col < 0 || col >= width){
            return -1;
        }        

        if(snakeSet.Contains(newHead) && newHead != currTail){
            return -1;
        }        

        if(foodIndex < food.Count && newHead == food[foodIndex]){            
            foodIndex++;            
        } else {
            var tail = this.snake.Last.Value;
            this.snakeSet.Remove(tail);
            this.snake.RemoveLast();
        }    

        this.snake.AddFirst(newHead);
        this.snakeSet.Add(newHead);
        return this.snake.Count - 1;
    }
}

/**
 * Your SnakeGame object will be instantiated and called as such:
 * SnakeGame obj = new SnakeGame(width, height, food);
 * int param_1 = obj.Move(direction);
 */
