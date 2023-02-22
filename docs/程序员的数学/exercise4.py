import sys

# n = int(sys.argv[1])
n = 6
result = 0
# O(n)
for i in range(0, n+1):
    if i % 2 == 0:
        result += i

print(result)
# 数学角度：等差数列求和问题O(1)
a1 = 0
d = 2
nn = n / 2 + 1
result = nn * a1 + 2 * nn * (nn - 1) / d
# result2 = n * a1 + n(n - 1) * d / 2 FIXME
print(int(result))
# print(result2)
