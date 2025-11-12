# Python implementation placeholder for Factorial
# what is factorial?
# factorial is the product of all positive integers up to a given number n and is denoted by n! and defined as: # n! = n * (n-1) * (n-2) * ... * 1
# for example, 5! = 5 * 4 * 3 * 2 * 1 = 120
# special case: 0! = 1 (by definition)
# _______________________________________________________________
# _______________________________________________________________
# logic explanation
# to calculate the factorial of a number n, we can use either an iterative or a recursive approach
# iterative approach involves using a loop to multiply numbers from 1 to n
# recursive approach involves defining a function that calls itself to compute the factorial
# _______________________________________________________________
# _______________________________________________________________
# iterative approach to calculate factorial
n = int(input("Enter a number to calculate its factorial: "))
factorial = 1
for i in range(1, n + 1):
    factorial *= i  # multiply factorial by i for each i from 1 to n
print(f"The factorial of {n} is {factorial}")
# _______________________________________________________________
# _______________________________________________________________
# recursive approach to calculate factorial
def factorial_recursive(n):
    if n == 0 or n == 1:  # base case: factorial of 0 or 1 is 1
        return 1
    else:
        return n * factorial_recursive(n - 1)  # recursive case: n! = n * (n-1)!
n = int(input("Enter a number to calculate its factorial using recursion: "))
result = factorial_recursive(n)
print(f"The factorial of {n} using recursion is {result}")
# _______________________________________________________________
# _______________________________________________________________
# Note: Both approaches yield the same result, but the iterative approach is generally more efficient for large n due to lower function call overhead.
# Recursive approach can lead to stack overflow for very large n due to deep recursion.
# Additionally, Python's built-in math module provides a factorial function that can be used directly:
import math
n = int(input("Enter a number to calculate its factorial using math module: "))
print(f"The factorial of {n} using math module is {math.factorial(n)}")
# _______________________________________________________________
# _______________________________________________________________   
# This concludes the implementation of factorial calculation using both iterative and recursive approaches in Python.
