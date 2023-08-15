def permutations():
    global running
    global characters
    global bitmask
    if len(running) == len(characters):
        print(''.join(running))
    else:
        for i in range(len(characters)):
            if ((bitmask>>i)&1) == 0:
                bitmask |= 1<<i
                running.append(characters[i])
                permutations()
                bitmask ^= 1<<i
                running.pop()

raw = input()
characters = list(raw)
# characters.sort() 
running = []
bitmask = 0
permutations()