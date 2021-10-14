# ********优化前********
# 在一个无序的数组中，只有一个数字 obj 出现了一次，
# 其他数字都出现了两次，尝试去查找出这个出现了一次的 obj。
# 绝大多数程序员的代码逻辑，应该都是设计两层 for 循环：一层遍历每个数字，一层计算每个数字出现的次数，
# 直到找到 obj。
# 时间复杂度: O(n^2)
a = [2, 1, 4, 3, 4, 2, 3]
for i in range(0, len(a)):
    times = 0
    for j in range(0, len(a)):
        if a[j] == a[i]:
            times += 1
    if times == 1:
        print(a[i])
        break
# *********优化后***********
# 第一，满足交换律和结合律；
# 第二，可以把相同元素计算为 0；
# 第三，0 异或任何数字都是其本身。
result = a[0]
for i in range(1, len(a)):
    result = result ^ a[i]
print(result)
