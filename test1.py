
T = int(input())

for case in range(1, T+1):

    A = int(input())
    B = int(input())
    K = int(input())
    
    count = 0
    for num in range(A, B+1):
        if num % K == 0:
            count += 1
    
    print("Case {}: {}".format(case, count))
