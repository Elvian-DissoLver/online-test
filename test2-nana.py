def find_max_length(matrix, word):
    rows = len(matrix)
    cols = len(matrix[0])
    word_len = len(word)
    
    def check_match(start_row, start_col, direction):
        row, col = start_row, start_col
        for i in range(word_len):
            if row < 0 or row >= rows or col < 0 or col >= cols or matrix[row][col] != word[i]:
                return False
            row += direction[0]
            col += direction[1]
        return True
    
    directions = [(0, 1), (1, 0), (1, 1), (-1, 1)]  # right, down, diagonal down-right, diagonal up-right
    
    max_length = 0
    for r in range(rows):
        for c in range(cols):
            for direction in directions:
                if check_match(r, c, direction):
                    max_length = max(max_length, word_len)
    
    return max_length

# Read input and process test cases
T = int(input())
for case in range(1, T + 1):
    N = int(input())
    M = int(input())
    matrix = [input().strip() for _ in range(N)]
    query = input().strip()
    result = find_max_length(matrix, query)
    print(f"Case {case}: {result}")
