# Python implementation placeholder for Checking for prime number
# _______________________________________________________________
# _______________________________________________________________
# logic explanation
# to check if a number is prime or not
# a prime number is a natural number greater than 1
# that cannot be formed by multiplying two smaller natural numbers
# in other words, a prime number has exactly two distinct positive divisors: 1 and itself
# for example, 2, 3, 5, 7, 11 are prime numbers
# while 4, 6, 8, 9, 10 are not prime numbers
# what is the logic to check for prime numbers?
# we can check if a number n is prime by testing if it is divisible by any number from 2 to sqrt(n)
# if n is divisible by any of these numbers, it is not prime
# otherwise, it is prime
# we only need to check up to sqrt(n) because if n = a * b and both a and b were greater than sqrt(n), then a * b would be greater than n
# hence, at least one of those factors must be less than or equal to sqrt(n)
# for example, to check if 29 is prime, we only need to test divisibility by numbers 2, 3, 4, and 5 (since sqrt(29) is approximately 5.39)
# how exctly we check for divisibility?
# we can use the modulus operator (%) to check for divisibility
# if n % i == 0, then n is divisible by i and hence not prime
# if n % i != 0 for all i from 2 to sqrt(n), then n is prime

# _______________________________________________________________
# _______________________________________________________________
# implementation of prime number check in python using the above logic and math module

import math
n = int(input("enter a number:"))

if n<=1:
    print(f"{n} is not a prime number")
else:
    is_prime = True
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            is_prime = False
            break
    if is_prime:
        print(f"{n} is a prime number")
    else:
        print(f"{n} is not a prime number")


# Note: This implementation assumes that the input number is a non-negative integer.
# Additional optimizations can be made, such as checking only for odd numbers after checking for
# divisibility by 2, but for simplicity, the basic approach is shown here.
# _______________________________________________________________
# _______________________________________________________________
# Alternative approach without using math module
# we can also check for prime numbers without using the math module
# by iterating from 2 to n//2
# since a number n cannot be divisible by any number greater than n/2 (except n itself)
# thus, we can check for divisibility from 2 to n//2    
n = int(input("enter a number:"))
if n<=1:
    print(f"{n} is not a prime number")
else:
    is_prime = True
    for i in range(2, (n//2) + 1):
        if n % i == 0:
            is_prime = False
            break
    if is_prime:
        print(f"{n} is a prime number")
    else:
        print(f"{n} is not a prime number")
# Note: This approach is less efficient for large n compared to the sqrt(n) approach
# but it avoids the need for importing the math module.
# _______________________________________________________________
# _______________________________________________________________
# Another alternative approach using trial division up to n-1
n = int(input("enter a number:"))
if n<=1:
    print(f"{n} is not a prime number")
else:
    is_prime = True
    for i in range(2, n):
        if n % i == 0:
            is_prime = False
            break
    if is_prime:
        print(f"{n} is a prime number")
    else:
        print(f"{n} is not a prime number")
# Note: This is the most straightforward approach but also the least efficient
# especially for large n, as it checks all numbers up to n-1.
# It is included here for completeness and educational purposes.
# _______________________________________________________________
# _______________________________________________________________

# complexity analysis:
# what is the time and space complexity of these implementations?
# The time complexity is determined by the number of iterations in the loop.
# the sapce complexity is determined by the amount of extra space used by the algorithm.
# what is extra space? in space complexity means the additional space or memory used by the algorithm and how we determine it? is by analyzing the variables and data structures used in the algorithm.
# what are the variables and data structures used in these implementations?
# we are using a few variables like n, is_prime, and i
# these variables use a constant amount of space regardless of the input size
# hence, the space complexity is O(1) for all three implementations
# now, let's analyze the time complexity for each approach:
# 1. First approach using sqrt(n):
# the loop runs from 2 to sqrt(n), which gives us approximately sqrt(n) iterations
# hence, the time complexity is O(√n)
# 2. Second approach using n//2:
# the loop runs from 2 to n//2, which gives us approximately n/2 iterations
# hence, the time complexity is O(n)
# 3. Third approach using n-1:
# the loop runs from 2 to n-1, which gives us approximately n-2 iterations
# hence, the time complexity is O(n)
# summarizing the complexities:
# in this case, time complexity and sapce complexity for all three approaches are as follows:
# and determined as using big O notation
# and the complexities are:
# Time Complexity: O(√n) for the first approach using sqrt(n), O(n) for the second approach using n//2, and O(n) for the third approach using n-1.
# Space Complexity: O(1) for all approaches, as we are using a constant amount of space.
# efficiency: sqrt(n) is best n//2 is moderate n-1 is least efficient


"""
Complexity Analysis:
-------------------------------------------------
Approach           | Time Complexity | Space Complexity | Efficiency
-------------------------------------------------
sqrt(n) approach   | O(√n)           | O(1)             | ✅ Best
n//2 approach      | O(n)            | O(1)             | ⚠️ Moderate
n-1 approach       | O(n)            | O(1)             | ❌ Least Efficient
-------------------------------------------------
"""

# # Summary:
# - The sqrt(n) approach is the most efficient for checking prime numbers.
# - The n//2 and n-1 approaches are less efficient but included for educational purposes.
# - All implementations have O(1) space complexity.
# - For large numbers, the sqrt(n) approach significantly reduces computation time.

# ______________________________________________________________
# End of prime number checking implementations and analysis
# ______________________________________________________________