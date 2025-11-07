# Python implementation placeholder for Fibonacci series
# _______________________________________________________________
# _____________________________________________________________

# iterative approach to generate Fibonacci series
# in python program to generate Fibonacci series up to n terms
# where n is provided by the user # using a simple for loop
# the logic is to initialize first two terms as 0 and 1
# then use a for loop to iterate n times, printing the current term
# and updating the terms accordingly
# like so: a, b = b, a + b
# this will update a to be b, and b to be the sum of a and b
# thus generating the Fibonacci sequence

n = int(input("Enter number of terms: "))
a, b = 0,1
print("Fibonacci Series:")
for i in range(n):
    print(a) # if you want to print the series on the same line, use end=" " in the print function, like this print(a, end=" ")
    a,b = b, a+b # update values of a and b for next iteration like this a, b = b, a + b takes a and assigns it to b, and takes sum of a and b and assigns it to b and so on

# ________________________________________________________________
# _______________________________________________________________
# recursion approach to generate Fibonacci series
# using recursion to generate Fibonacci series 
# what is recursion?
# recursion is a programming technique where a function calls itself
# to solve a problem
# in this case, we can define a function that returns the nth Fibonacci number
# and then call that function for each number from 0 to n-1 to generate the series
# basic structure of a recursive function:
# def function_name(parameters):
#     if base_case_condition:
#         return base_case_value
#     else:
#         return function_name(modified_parameters) + additional_logic
# ________________________________________________________________

def fibonacci_recursive(n):
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci_recursive(n-1) + fibonacci_recursive(n-2)
print("Fibonacci Series using Recursion:")
for i in range(n):
    print(fibonacci_recursive(i))

# Note: Recursive approach is less efficient for large n due to repeated calculations
# An optimized version of the recursive approach using memoization
# can be implemented to store previously computed Fibonacci numbers
# to avoid redundant calculations and improve efficiency.
# However, for simplicity, the basic recursive approach is shown here.
