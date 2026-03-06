k = int(input())
rooms = list(map(int, input().split()))

print((sum(set(rooms)) * k - sum(rooms)) // (k - 1))

#https://www.hackerrank.com/challenges/py-the-captains-room/problem?isFullScreen=true