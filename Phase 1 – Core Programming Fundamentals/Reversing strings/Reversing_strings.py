# Python implementation placeholder for Reversing strings
# what is reversing a string?
# reversing a string means creating a new string that has the characters of the original string in the opposite order
# for example, the reverse of "hello" is "olleh"
# similarly, the reverse of "Python" is "nohtyP"
# _______________________________________________________________
# _______________________________________________________________
# logic explanation
# to reverse a string, we can use various methods such as slicing, iterative approach, or recursive approach
# slicing involves using Python's built-in string slicing capabilities to create a reversed copy of the string
# iterative approach involves looping through the string from the end to the beginning and constructing the reversed string
# recursive approach involves defining a function that calls itself to build the reversed string
# _______________________________________________________________
# _______________________________________________________________
# method 1: using slicing to reverse a string
s = input("Enter a string to reverse using slicing: ")  # taking input string from user
reversed_s = s[::-1]  # slicing to reverse the string
print(f"The reversed string using slicing is: {reversed_s}")
# _______________________________________________________________
# _______________________________________________________________
# method 2: using iterative approach to reverse a string
def reverse_string_iterative(s):
    reversed_s = ""  # initialize an empty string to store the reversed string
    for char in s:  # iterate through each character in the original string
        reversed_s = char + reversed_s  # prepend the character to the reversed string
    return reversed_s
s = input("Enter a string to reverse using iterative approach: ")  # taking input string from user
reversed_s = reverse_string_iterative(s)  # call the iterative function to reverse the string
print(f"The reversed string using iterative approach is: {reversed_s}")
# _______________________________________________________________
# _______________________________________________________________
# method 3: using recursive approach to reverse a string
def reverse_string_recursive(s):
    if len(s) == 0:  # base case: if the string is empty, return an empty string
        return s
    else:
        return s[-1] + reverse_string_recursive(s[:-1])  # recursive case: last character + reverse of the rest of the string
s = input("Enter a string to reverse using recursive approach: ")  # taking input string from user
reversed_s = reverse_string_recursive(s)  # call the recursive function to reverse the string
print(f"The reversed string using recursive approach is: {reversed_s}")
# _______________________________________________________________
# _______________________________________________________________
# Note: All three methods yield the same result.
# You can choose any method based on your preference or specific use case.
# This concludes the implementation of string reversal using different methods in Python.
# _______________________________________________________________
# _______________________________________________________________