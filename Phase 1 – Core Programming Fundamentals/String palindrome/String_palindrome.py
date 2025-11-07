# Python implementation placeholder for String palindrome
# _______________________________________________________________
# _______________________________________________________________
# what is a string palindrome?
# a string palindrome is a sequence of characters that reads the same forwards and backwards
# for example, "madam", "racecar", and "level" are string palindromes
# while "hello" and "world" are not string palindromes
# _______________________________________________________________
# _______________________________________________________________
# logic explanation
# to check if a string is a palindrome, we can compare the string with its reverse
# if both are the same, then the string is a palindrome
# otherwise, it is not a palindrome
# _______________________________________________________________
# _______________________________________________________________
# implementation of string palindrome check in python
s = input("Enter a string to check if it is a palindrome: ") # taking input string from user 
s = "".join(filter(str.isalnum, s)).lower()  # normalize the string by removing non-alphanumeric characters and converting to lowercase 
# what .join(filter(str.isalnum, s)).lower() does is:
# .join() combines the characters back into a single string
# filter(str.isalnum, s) filters out non-alphanumeric characters from the string s
# .lower() converts the entire string to lowercase to ensure the palindrome check is case-insensitive
# _______________________________________________________________
# _______________________________________________________________   

# method 1: using slicing to reverse the string
if s == s[::-1]:
    print(f'"{s}" is a palindrome (using slicing)')
else:
    print(f'"{s}" is not a palindrome (using slicing)')
# _______________________________________________________________
# _______________________________________________________________
# method 2: using iterative approach to check for palindrome
def is_palindrome_iterative(s):
    left, right = 0, len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True
if is_palindrome_iterative(s):
    print(f'"{s}" is a palindrome (using iterative approach)')
else:
    print(f'"{s}" is not a palindrome (using iterative approach)')
# _______________________________________________________________
# _______________________________________________________________
# method 3: using recursive approach to check for palindrome
def is_palindrome_recursive(s):
    if len(s) <= 1:
        return True
    if s[0] != s[-1]:
        return False
    return is_palindrome_recursive(s[1:-1])
if is_palindrome_recursive(s):
    print(f'"{s}" is a palindrome (using recursive approach)')
else:
    print(f'"{s}" is not a palindrome (using recursive approach)')
# _______________________________________________________________
# _______________________________________________________________
# Note: All three methods yield the same result, but they use different approaches to check for palindromes.
# Slicing is the most concise, iterative is efficient for larger strings, and recursion provides a clear conceptual approach.
# This concludes the implementation of string palindrome check using different methods in Python.
# _______________________________________________________________
# _______________________________________________________________   
# you can add input validation like ignoring case sensitivity or non-alphanumeric characters as needed.
# example: s = ''.join(filter(str.isalnum, s)).lower()
# what this line do is it removes all non-alphanumeric characters from the string and converts it to lowercase before processing.
# where should you add this line?
# you can add it right after taking input for the string s.
# _______________________________________________________________
# _______________________________________________________________
# example output after adding the line:
# Enter a string to check if it is a palindrome: A man, a plan, a canal: Panama
# "amanaplanacanalpanama" is a palindrome (using slicing)
# "amanaplanacanalpanama" is a palindrome (using iterative approach)
# "amanaplanacanalpanama" is a palindrome (using recursive approach)    
# _______________________________________________________________
# _______________________________________________________________
# not a palindrome example output:
# Enter a string to check if it is a palindrome: Hello, World!
# "helloworld" is not a palindrome (using slicing)
# "helloworld" is not a palindrome (using iterative approach)
# "helloworld" is not a palindrome (using recursive approach)
# _______________________________________________________________
# _______________________________________________________________   