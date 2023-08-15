def count_regions(grid, factions):
    rows = len(grid)
    cols = len(grid[0])
    visited = [[False] * cols for _ in range(rows)]
    
    def is_valid(x, y):
        return 0 <= x < rows and 0 <= y < cols
    
    results = {}
    contested_regions = 0
    
    for start_x in range(rows):
        for start_y in range(cols):
            if visited[start_x][start_y] or grid[start_x][start_y] == '#':
                continue
            
            stack = [(start_x, start_y)]
            faction = grid[start_x][start_y]
            region_size = 0
            
            while stack:
                x, y = stack.pop()
                if visited[x][y]:
                    continue
                
                visited[x][y] = True
                region_size += 1
                
                for dx, dy in [(1, 0), (-1, 0), (0, 1), (0, -1)]:
                    new_x, new_y = x + dx, y + dy
                    if is_valid(new_x, new_y) and grid[new_x][new_y] == faction and not visited[new_x][new_y]:
                        stack.append((new_x, new_y))
            
            if region_size > 1:
                contested_regions += 1
            results[faction] = results.get(faction, 0) + region_size
    
    return results, contested_regions

def main():
    T = int(input())
    for case in range(1, T + 1):
        N = int(input())
        M = int(input())
        grid = [input() for _ in range(N)]
        factions, contested_regions = count_regions(grid, set())
        
        print(f"Case {case}:")
        for faction, regions in sorted(factions.items()):
            print(f"{faction} {regions}")
        
        print(f"contested {contested_regions}")

if __name__ == "__main__":
    main()
