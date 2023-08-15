import java.util.*;

public class Puzzle {

    int found;
    int[] x = { -1, -1, -1, 0, 0, 1, 1, 1 };
    int[] y = { -1, 0, 1, -1, 1, -1, 0, 1 };

    // public void puzzleString(Object[] input) {
    public void puzzleString() {
        Scanner input = new Scanner(System.in);

        try {
            // int T = (Integer) input[0];
            int T = input.nextInt();
            // int point = 0;

            for (int i = 1; i <= T; i++) {
                found = 0;
                int row = input.nextInt();
                int col = input.nextInt();
                // point++;
                // int row = (Integer) input[point];
                // point++;
                // int col = (Integer) input[point];
                char[][] wordPuzzle = new char[row][col];
                // int[] array = new int[col];

                for (int j = 0; j < row; j++) {
                    // point++;
                    // array[j] = input.nextInt();
                    // wordPuzzle[j] = input[point].toString().toCharArray();
                    wordPuzzle[j] = input.next().toString().toCharArray();
                }
                // point++;
                // String word = input[point].toString();
                String word = input.next().toString();

                for (int r = 0; r < row; r++) {
                    for (int c = 0; c < col; c++) {
                        searchWordPuzzle(wordPuzzle, r, c, word);
                    }
                }
                System.out.println("Case " + i + ": " + found);
            }
        } finally {
            input.close();
        }
    }

    public static void main(String[] args) throws Exception {
        Puzzle p = new Puzzle();

        // Sample input data
        // Object[] input = {
        // 3, 3, 4, "tatt", "aata", "tatc", "cat",
        // 5, 5, "gogog", "ooooo", "godog", "ooooo", "gogog", "dog",
        // 2, 8, "bananana", "kalibrrr", "nana"
        // };

        // p.puzzleString(input);
        p.puzzleString();
    }

    void searchWordPuzzle(char[][] grid, int row, int col, String word) {
        if (grid[row][col] != word.charAt(0))
            return;

        int len = word.length();
        for (int dir = 0; dir < 8; dir++) {
            int k, rd = row + x[dir], cd = col + y[dir];

            for (k = 1; k < len; k++) {
                if (rd >= grid.length || rd < 0 || cd >= grid[0].length || cd < 0)
                    break;

                if (grid[rd][cd] != word.charAt(k))
                    break;

                rd += x[dir];
                cd += y[dir];
            }
            if (k == len)
                found++;
        }
    }
}
