package main

import (
	"bufio"
	"fmt"
	"os"
)

var (
	directions = [][2]int{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}
)

func processRegion(grid []string, row, col int, visited [][]bool) (map[byte]bool, bool) {
	factions := make(map[byte]bool)
	isContested := false

	if row < 0 || row >= len(grid) || col < 0 || col >= len(grid[0]) || grid[row][col] == '#' || visited[row][col] {
		return factions, false
	}

	visited[row][col] = true

	if grid[row][col] != '.' {
		factions[grid[row][col]] = true
	}

	for _, dir := range directions {
		newRow, newCol := row+dir[0], col+dir[1]
		newFactions, newIsContested := processRegion(grid, newRow, newCol, visited)
		for faction := range newFactions {
			factions[faction] = true
		}
		if newIsContested {
			isContested = true
		}
	}

	if len(factions) > 1 {
		isContested = true
	}

	return factions, isContested
}

func main() {
	var T int
	fmt.Scan(&T)

	for caseNum := 1; caseNum <= T; caseNum++ {
		fmt.Printf("Case %d:\n", caseNum)

		var N, M int
		fmt.Scan(&N, &M)

		scanner := bufio.NewScanner(os.Stdin)
		grid := make([]string, N)
		for i := 0; i < N; i++ {
			scanner.Scan()
			grid[i] = scanner.Text()
		}

		factions := make(map[byte]bool)
		for _, row := range grid {
			for _, char := range row {
				if char >= 'a' && char <= 'z' {
					factions[byte(char)] = true
				}
			}
		}

		var controlledRegions = make(map[byte]int)
		var contestedRegions int
		visited := make([][]bool, N)
		for i := 0; i < N; i++ {
			visited[i] = make([]bool, M)
		}

		for row := 0; row < N; row++ {
			for col := 0; col < M; col++ {
				if factions[grid[row][col]] && !visited[row][col] {
					regionFactions, isContested := processRegion(grid, row, col, visited)
					if isContested {
						contestedRegions++
					} else {
						for faction := range regionFactions {
							controlledRegions[faction]++
						}
					}
				}
			}
		}

		for faction, regions := range controlledRegions {
			if regions > 0 {
				fmt.Printf("%c %d\n", faction, regions)
			}
		}

		fmt.Printf("contested %d\n", contestedRegions)
	}
}
