A = set(map(int, input().split()))
n = int(input())

ok = True
for _ in range(n):
    s = set(map(int, input().split()))
    if not (A > s):   # strict superset
        ok = False

print(ok)