# Python implementation placeholder for Integer palindrome
# What is an integer palindrome?
# an integer palindrome is a number that remains the same when its digits are reversed
# for example, 121, 1331, and 12321 are integer palindromes
# while 123, 456, and 789 are not integer palindromes
# _______________________________________________________________
# _______________________________________________________________
# logic explanation
# to check if an integer is a palindrome, we can convert the integer to a string
# then compare the string with its reverse
# if both are the same, then the integer is a palindrome
# otherwise, it is not a palindrome
# _______________________________________________________________
# _______________________________________________________________
# implementation of integer palindrome check in python
n = int(input("Enter an integer to check if it is a palindrome: ")) # taking input integer from user 
# n = abs(int(input("Enter an integer to check if it is a palindrome: "))) to handle negative inputs 
s = str(n)  # convert the integer to string
# _______________________________________________________________
# _______________________________________________________________   
# method 1: using slicing to reverse the string representation of the integer
if s == s[::-1]: # slicing to reverse the string : s[::-1] gives the reversed string
    print(f"{n} is a palindrome (using slicing)") # if original string is same as reversed string # then it is a palindrome
else:
    print(f"{n} is not a palindrome (using slicing)")# else it is not a palindrome
# _______________________________________________________________
# _______________________________________________________________
# method 2: using iterative approach to check for palindrome
def is_palindrome_iterative(s): # iterative function to check palindrome
    left, right = 0, len(s) - 1 # initialize two pointers: left at start, right at end of the string
    while left < right: # loop until the two pointers meet in the middle 
        if s[left] != s[right]: # compare characters at left and right pointers
            return False # if they are not the same, return False (not a palindrome)
        left += 1 # move left pointer to the right
        right -= 1 # move right pointer to the left
    return True # if all characters matched, return True (it is a palindrome)
if is_palindrome_iterative(s): # check using iterative method
    print(f"{n} is a palindrome (using iterative approach)")    # if it is a palindrome         
else:
    print(f"{n} is not a palindrome (using iterative approach)") # if it is not a palindrome
# _______________________________________________________________
# _______________________________________________________________
# method 3: using recursive approach to check for palindrome
def is_palindrome_recursive(s): # recursive function to check palindrome
    if len(s) <= 1:  # base case: if string length is 0 or 1, it is a palindrome
        return True # return True
    if s[0] != s[-1]: # compare first and last characters and if they are not the same then
        return False # return False (not a palindrome)
    return is_palindrome_recursive(s[1:-1]) # recursive case: check the substring excluding first and last characters
if is_palindrome_recursive(s): # check using recursive method is palindrome_recursive is a function defined above and here we are calling it with s as argument this s is the string representation of the integer n and store the result in if condition
    print(f"{n} is a palindrome (using recursive approach)") # if it is a palindrome
else:  #else case
    print(f"{n} is not a palindrome (using recursive approach)") # if it is not a palindrome
# _______________________________________________________________
# _______________________________________________________________
# Note: All three methods yield the same result.    
# you can choose any method based on your preference or specific use case.
# This concludes the implementation of integer palindrome check using three different approaches in Python.
# _______________________________________________________________
# _______________________________________________________________   
# you can add input validation like ignoring negative numbers or non-integer inputs as needed.
# example: n = abs(int(input("Enter an integer to check if it is a palindrome: ")))
# what this line do is it takes the absolute value of the input number to ensure it's non-negative before processing.
# where should you add this line?
# you can replace the existing input line with this one at the beginning where n is taken as input.
# example:
# n = abs(int(input("Enter an integer to check if it is a palindrome: ")))  
# s = str(n)  # convert the integer to string
# This ensures that negative integers are treated as their positive counterparts for palindrome checking.
# Note: Negative integers are not typically considered palindromes due to the presence of the negative sign.
# _______________________________________________________________   
# _______________________________________________________________
# output examples:
# Enter an integer to check if it is a palindrome: 121
# 121 is a palindrome (using slicing)
# 121 is a palindrome (using iterative approach)
# 121 is a palindrome (using recursive approach)
# _______________________________________________________________
# _______________________________________________________________
# Enter an integer to check if it is a palindrome: -121 
# 121 is a palindrome (using slicing)
# 121 is a palindrome (using iterative approach)
# 121 is a palindrome (using recursive approach)
# _______________________________________________________________
# _______________________________________________________________
# different output example: 121,1331,12321 are palindromes and 123,456,789 are not palindromes
# this concludes the examples for integer palindrome check in Python.
# _______________________________________________________________
# _______________________________________________________________