import java.util.Scanner;

public class WordSearch {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int T = scanner.nextInt(); // Jumlah test cases
        
        for (int testCase = 1; testCase <= T; testCase++) {
            int N = scanner.nextInt(); // Baris grid
            int M = scanner.nextInt(); // Kolom grid
            char[][] grid = new char[N][M];
            
            // Membaca grid
            for (int i = 0; i < N; i++) {
                String row = scanner.next();
                for (int j = 0; j < M; j++) {
                    grid[i][j] = row.charAt(j);
                }
            }
            
            String word = scanner.next(); // Kata yang dicari
            int wordCount = searchWord(grid, N, M, word);
            
            // Output hasil
            System.out.println("Case " + testCase + ": " + wordCount);
        }
        
        scanner.close();
    }
    
    public static int searchWord(char[][] grid, int N, int M, String word) {
        int count = 0;
        
        // Mengiterasi seluruh posisi di grid
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < M; j++) {
                if (grid[i][j] == word.charAt(0)) {
                    // Memulai pencarian kata dari posisi (i, j)
                    if (searchDirection(grid, N, M, word, i, j)) {
                        count++;
                    }
                }
            }
        }
        
        return count;
    }
    
    public static boolean searchDirection(char[][] grid, int N, int M, String word, int row, int col) {
        int[] dx = {-1, -1, -1, 0, 0, 1, 1, 1}; // Posisi baris sekitar
        int[] dy = {-1, 0, 1, -1, 1, -1, 0, 1}; // Posisi kolom sekitar
        
        for (int dir = 0; dir < 8; dir++) {
            int newRow = row + dx[dir];
            int newCol = col + dy[dir];
            int k;
            
            // Memeriksa apakah kata cocok dalam arah dir
            for (k = 1; k < word.length(); k++) {
                if (newRow >= N || newRow < 0 || newCol >= M || newCol < 0) {
                    break;
                }
                
                if (grid[newRow][newCol] != word.charAt(k)) {
                    break;
                }
                
                newRow += dx[dir];
                newCol += dy[dir];
            }
            
            if (k == word.length()) {
                return true; // Kata ditemukan
            }
        }
        
        return false; // Kata tidak ditemukan dalam semua arah
    }
}
