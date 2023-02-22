# 输入一个正整数 n，求不大于 n 的所有 2 的正整数次幂的数字之和。
# 例如，输入 17，则输出 1+2+4+8+16 = 31；输入 8，则输出 1+2+4+8 = 15。
# 你可以尝试两种方法来开发，分别是 O(n) 复杂度的 for 循环，和 O(1) 复杂度的等比数列求和公式。
import sys
import math
# solution1 O(n)
n = int(sys.argv[1])
result = 0
for i in range(0, n+1):
    temp = pow(2, i)
    if temp <= n:
        result += temp
print(result)

# solution2 O(1)
# 公式： S_{n} =  a(1-pow(r, n))/ (1-r)
# 1. 获取等比数列
length = math.floor(math.log(n, 2)) + 1  # 计算等比数列项数
a0 = 1
r = 2
res = a0*(1 - pow(r, length))/(1 - r)
print(int(res))
