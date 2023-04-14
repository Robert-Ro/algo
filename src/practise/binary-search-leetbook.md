# 二分查找

二分查找是计算机科学中最基本的,最有用的算法之一.它描述了在有序集合中搜索特定值的过程.

> 二分查找中的术语:
>
> - 目标 Target:要查找的值
> - 索引 Index:要查找的当前位置
> - 左右指示符 Left, Right: 用来维持查找空间的指标
> - 中间指示符 Mid: 用来应用条件来确定应向左还是向右继续查找的索引

## 背景

### 如何工作的

在最简单的形式中,二分查找对具有指定左索引和右索引的连续序列进行操作.这就是所谓的查找空间.

> 二进制搜索可以采用许多替代形式,并且可能并不总是直接搜索特定值.有时候希望应用特定规则来确定接下来要搜索的哪一侧(左侧还是右侧).

### 识别和模板简介

二分查找一般由三个部分组成:

1. 预处理: 如果集合未排序,则进行排序
2. 二分查找: 使用循环或递归在每次比较后将查找空间分为两半
3. 后处理: 在剩余空间中确定可行的候选者

分题型整理

### 模板 1

```c++
int binarySearch(vector<int>& numbers, int target){
  if(numbers.size() == 0)
    return -1;

  int left = 0, right = numbers.size() - 1;
  while(left <= right){
    // Prevent (left + right) overflow
    int mid = left + (right - left) / 2;
    if(numbers[mid] == target){ return mid; }
    else if(numbers[mid] < target) { left = mid + 1; }
    else { right = mid - 1; }
  }

  // End Condition: left > right
  return -1;
}
```

区分语法:

- 初始条件：`left = 0, right = length-1`
- 终止：`left > right`
- 向左查找：`right = mid-1`
- 向右查找：`left = mid+1`

### 模板 2
