"""
This problem was asked by Microsoft.

Compute the running median of a sequence of numbers. That is, given a stream of numbers, print out the median of the list so far on each new element.
Recall that the median of an even-numbered list is the average of the two middle numbers.
For example, given the sequence [2, 1, 5, 7, 2, 0, 5], your algorithm should print out:
2
1.5
2
3.5
2
2
2
"""

def running_median(arr:list) -> int:
  res, median_list = [], []

  for i in range(0, len(arr)):
    res.append(arr[i])
    res = sorted(res)
    middle = len(res) // 2
    if len(res) % 2 == 0:
      median = (res[middle - 1] + res[middle]) / 2
      median_list.append(median)
    else:
      median = res[middle]
      median_list.append(median)

  for num in median_list:
    print(num)

arr = [2, 1, 5, 7, 2, 0, 5]
running_median(arr)


