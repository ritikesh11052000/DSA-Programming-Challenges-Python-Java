# Python implementation placeholder for Checking for prime number
# to find prime number in python we use the following code
# we will also explain the logic behind it and the complexity analysis
# the formula we use for finding prime number is based on trial division method
# the formula is n % i == 0
# where n is the number to be checked for primality
# and i is the divisor ranging from 2 to sqrt(n)
# if n is divisible by any i in this range, then n is not prime
# otherwise, n is prime 
# we will also discuss alternative approaches and their complexities
# _______________________________________________________________
# _______________________________________________________________
# what is a prime number?   
# prime number is a number greater than 1 that has no positive divisors other than 1 and itself
# how to calculate prime number?
# To calculate whether a number is prime or not, we can use the following:
# to calculate prime numbers, we can use various algorithms and methods
# some of the common methods to calculate prime numbers are:
# 1. Trial Division: This is the simplest method where we check if a number n is divisible by any number from 2 to sqrt(n).
# If it is divisible by any of these numbers, then it is not prime. how we implement this in our code is by using a for loop to iterate through the range and checking for divisibility using the modulus operator (%). and if we find any divisor, we can conclude that the number is not prime.
# 2. Sieve of Eratosthenes: This is an efficient algorithm to find all prime numbers up to a given limit.
# It works by iteratively marking the multiples of each prime number starting from 2. how to implement this in our code is by creating a boolean array and marking non-prime numbers. and finally, the remaining unmarked numbers are prime.
# 3. Miller-Rabin Primality Test: This is a probabilistic algorithm that can quickly determine if a number is composite or probably prime.
# It is particularly useful for large numbers. how we implement this in our code is by using modular exponentiation and random bases to test the primality of the number.and if the number passes the test for several bases, it is considered probably prime.
# 4. AKS Primality Test: This is a deterministic algorithm that can determine if a number is prime in polynomial time.
# However, it is not as efficient as other methods for practical use. how we implement this in our code is by using properties of polynomials and modular arithmetic to test the primality of the number. and if the number satisfies certain conditions, it is considered prime.
# 5. Wilson's Theorem: This theorem states that a natural number n > 1 is a prime if and only if (n-1)! ≡ -1 (mod n).
# However, this method is not practical for large numbers due to the factorial calculation. how we implement this in our code is by calculating the factorial of (n-1) and checking the congruence condition. and if the condition holds, then n is prime. what is congruence condition? congruence condition means that when we divide (n-1)! by n, the remainder should be n-1 (which is equivalent to -1 mod n). and hence, we can use this property to check for primality. and if the condition holds, then n is prime.
# 6. Using Precomputed Lists: For small ranges, we can use precomputed lists of prime numbers to quickly check for primality.
These methods can be implemented in various programming languages to check for prime numbers efficiently. how we implement these methods in our code is by using appropriate data structures and algorithms to optimize the primality testing process.and we can choose the method based on the size of the number and the required efficiency. and finally, we can combine multiple methods for better performance in certain scenarios. like using trial division for small numbers and switching to probabilistic tests for larger numbers. hence, we can effectively calculate prime numbers using these methods.
# _______________________________________________________________
# _______________________________________________________________
# Key Properties of Prime Numbers:  
# first we need to understand the basic properties of prime numbers those are:
# 1. A prime number is a natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers.
# 2. The only even prime number is 2, all other even numbers are not prime.
# 3. A prime number has exactly two distinct positive divisors: 1 and itself.
# 4. The number 1 is not considered a prime number.
# 5. The number 2 is the smallest and the only even prime number.
# 6. All other prime numbers are odd numbers.
# 7. Prime numbers are infinite, there is no largest prime number.
# 8. Prime numbers play a crucial role in number theory and have applications in cryptography
# and computer science.
# 9. The distribution of prime numbers among natural numbers is a subject of study in mathematics.
# 10. There are various algorithms to check for primality, such as trial division,
# the Sieve of Eratosthenes, and probabilistic tests like the Miller-Rabin primality test.
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