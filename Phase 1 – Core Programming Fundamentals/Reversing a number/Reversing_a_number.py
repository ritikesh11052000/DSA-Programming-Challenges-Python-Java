# Python implementation placeholder for Reversing a number
# what is reversing a number?
# reversing a number means creating a new number that has the digits of the original number in the opposite order
# for example, the reverse of 1234 is 4321
# similarly, the reverse of 56789 is 98765
# _______________________________________________________________
# _______________________________________________________________
# logic explanation
# to reverse a number, we can convert the number to a string and then reverse the string
# alternatively, we can use mathematical operations to extract each digit and build the reversed number
# _______________________________________________________________
# _______________________________________________________________
# method 1: using string conversion to reverse a number
n = int(input("Enter a number to reverse using string conversion: "))  # taking input number from user
reversed_n_str = int(str(n)[::-1])  # convert number to string, reverse it using slicing, and convert back to integer
print(f"The reversed number using string conversion is: {reversed_n_str}")
# _______________________________________________________________
# _______________________________________________________________
# method 2: using iterative approach to reverse a number
def reverse_number_iterative(n):
    reversed_n = 0  # initialize reversed number to 0
    while n > 0:  # loop until all digits are processed
        digit = n % 10  # extract the last digit
        reversed_n = reversed_n * 10 + digit  # append the digit to the reversed number
        n = n // 10  # remove the last digit from the original number
    return reversed_n
n = int(input("Enter a number to reverse using iterative approach: "))  # taking input number from user
reversed_n_iter = reverse_number_iterative(n)  # call the iterative function to reverse the number
print(f"The reversed number using iterative approach is: {reversed_n_iter}")
# _______________________________________________________________
# _______________________________________________________________
# method 3: using recursive approach to reverse a number
def reverse_number_recursive(n, reversed_n=0):
    if n == 0:  # base case: if n is 0, return the reversed number
        return reversed_n
    else:
        digit = n % 10  # extract the last digit
        reversed_n = reversed_n * 10 + digit  # append the digit to the reversed number
        return reverse_number_recursive(n // 10, reversed_n)  # recursive call with remaining digits
n = int(input("Enter a number to reverse using recursive approach: "))  # taking input number from user
reversed_n_rec = reverse_number_recursive(n)  # call the recursive function to reverse the number
print(f"The reversed number using recursive approach is: {reversed_n_rec}")
# _______________________________________________________________
# _______________________________________________________________
# Note: All three methods yield the same result.
# You can choose any method based on your preference or specific use case.
# This concludes the implementation of number reversal using different methods in Python.
# _______________________________________________________________
# _______________________________________________________________