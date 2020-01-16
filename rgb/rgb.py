"""
This problem was asked by Google.
Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the Rs come first, the Gs come second, and the Bs come last. You can only swap elements of the array.
Do this in linear time and in-place.
For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].
"""


def rgb(arr:list) -> list:
  pointer = 0

  for i in range(0, len(arr)):
    if arr[i] == 'R':
      swap(arr, i, pointer)
      pointer += 1
    
  for i in range(pointer, len(arr)):
    if arr[i] == 'G':
      swap(arr, i, pointer)
      pointer += 1
  
  return arr


def swap(arr, i:str, p:str) -> None:
  arr[i], arr[p] = arr[p], arr[i]

arr = ['G', 'B', 'R', 'R', 'B', 'R', 'G']

print(rgb(arr))