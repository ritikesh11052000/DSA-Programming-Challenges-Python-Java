# python implementation placeholder for Sum of digits of a number
# _______________________________________________________________
# _______________________________________________________________
# what is sum of digits of a number?
# sum of digits of a number is the sum of all individual digits present in that number
# for example, the sum of digits of 1234 is 1 + 2 + 3 + 4 = 10
# _______________________________________________________________
# _______________________________________________________________
# logic explanation
# to calculate the sum of digits of a number, we can use either an iterative or a recursive approach
# iterative approach involves using a loop to extract each digit and add it to a cumulative sum cumulative sum meaning keeping a running total 

# recursive approach involves defining a function that calls itself to compute the sum of digits
# _______________________________________________________________
# _______________________________________________________________
# iterative approach to calculate sum of digits
n = int(input("Enter a number to calculate the sum of its digits: ")) # n = abs(int(input("Enter a number to calculate the sum of its digits: "))) to handle negative inputs 
sum_of_digits = 0
while n > 0:
    digit = n % 10  # extract the last digit
    sum_of_digits += digit  # add the digit to the sum
    n = n // 10  # remove the last digit from the number
print(f"The sum of digits is {sum_of_digits}")
# _______________________________________________________________
# _______________________________________________________________
# recursive approach to calculate sum of digits
def sum_of_digits_recursive(n):
    if n == 0:  # base case: if n is 0, the sum of digits is 0
        return 0
    else:
        return (n % 10) + sum_of_digits_recursive(n // 10)  # recursive case: last digit + sum of remaining digits
n = int(input("Enter a number to calculate the sum of its digits using recursion: ")) # n = abs(int(input("Enter a number to calculate the sum of its digits using recursion: "))) to handle negative inputs
result = sum_of_digits_recursive(n)
print(f"The sum of digits using recursion is {result}")
# _______________________________________________________________   
# _______________________________________________________________
# Note: Both approaches yield the same result, but the iterative approach is generally more efficient for large n due to lower function call overhead.
# Recursive approach can lead to stack overflow for very large n due to deep recursion.
# This concludes the implementation of sum of digits calculation using both iterative and recursive approaches in Python.
# _______________________________________________________________
# _______________________________________________________________   
# you can add input validation like ignoring negative numbers or non-integer inputs as needed.
# example: n = abs(int(input("Enter a number to calculate the sum of its digits: ")))
# what this line do is it takes the absolute value of the input number to ensure it's non-negative before processing.
# where should you add this line?
# you can replace the existing input lines with this one in both iterative and recursive sections.
# at the beginning of each section where n is taken as input.