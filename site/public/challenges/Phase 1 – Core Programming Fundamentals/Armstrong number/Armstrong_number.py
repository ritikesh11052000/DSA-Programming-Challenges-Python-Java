# Python implementation placeholder for Armstrong number
# what is an Armstrong number?
# an Armstrong number (also known as a narcissistic number or pluperfect number) is a number that is equal to the sum of its own digits each raised to the power of the number of digits
# for example, 153 is an Armstrong number because it has 3 digits and 1^3 + 5^3 + 3^3 = 153
# similarly, 9474 is an Armstrong number because it has 4 digits and 9^4 + 4^4 + 7^4 + 4^4 = 9474
# while 123 and 456 are not Armstrong numbers
# _______________________________________________________________
# _______________________________________________________________
# logic explanation
# to check if a number is an Armstrong number, we can follow these steps:
# 1. Convert the number to a string to easily iterate over each digit
# 2. Determine the number of digits (n) in the number
# 3. For each digit, raise it to the power of n and sum all these values
# 4. Compare the sum with the original number
# 5. If they are equal, the number is an Armstrong number; otherwise, it is not
# _______________________________________________________________
# _______________________________________________________________
# implementation of Armstrong number check in python
# using iterative approach to check for Armstrong number
n = int(input("Enter a number to check if it is an Armstrong number: ")) # taking input number from user 
num_str = str(n)  # convert the number to string to iterate over digits
num_digits = len(num_str)  # determine the number of digits
armstrong_sum = 0  # initialize sum to 0
for digit in num_str:  # iterate over each digit in the string representation of the number
    armstrong_sum += int(digit) ** num_digits  # raise digit to the power of num_digits and add to sum
if armstrong_sum == n:  # compare the sum with the original number
    print(f"{n} is an Armstrong number")  # if equal, it is an Armstrong number
else:
    print(f"{n} is not an Armstrong number")  # if not equal, it is not an Armstrong number
# _______________________________________________________________
# _______________________________________________________________
# using recursive approach to check for Armstrong number
def armstrong_recursive(num, num_digits):
    if num == 0:  # base case: if num is 0, return 0
        return 0
    else:
        digit = num % 10  # extract the last digit
        return (digit ** num_digits) + armstrong_recursive(num // 10, num_digits)  # raise digit to power and add to recursive call on remaining digits
n = int(input("Enter a number to check if it is an Armstrong number using recursion: ")) # taking input number from user
num_digits = len(str(n))  # determine the number of digits
result = armstrong_recursive(n, num_digits)  # call the recursive function
if result == n:  # compare the result with the original number
    print(f"{n} is an Armstrong number (using recursion)")  # if equal, it is an Armstrong number
else:
    print(f"{n} is not an Armstrong number (using recursion)")  # if not equal, it is not an Armstrong number
# _______________________________________________________________
# _______________________________________________________________
# using list comprehension to check for Armstrong number
n = int(input("Enter a number to check if it is an Armstrong number using list comprehension: ")) # taking input number from user
num_str = str(n)  # convert the number to string to iterate over digits
num_digits = len(num_str)  # determine the number of digits
armstrong_sum = sum([int(digit) ** num_digits for digit in num_str])  # list comprehension to calculate the sum of digits raised to the power of num_digits
if armstrong_sum == n:  # compare the sum with the original number
    print(f"{n} is an Armstrong number (using list comprehension)")  # if equal, it is an Armstrong number
else:
    print(f"{n} is not an Armstrong number (using list comprehension)")  # if not equal, it is not an Armstrong number
# _______________________________________________________________
# _______________________________________________________________
# Note: This implementation checks for Armstrong numbers for any positive integer input.
# You can add input validation as needed to handle negative numbers or non-integer inputs.
# This concludes the implementation of Armstrong number check in Python.
# _______________________________________________________________
# _______________________________________________________________