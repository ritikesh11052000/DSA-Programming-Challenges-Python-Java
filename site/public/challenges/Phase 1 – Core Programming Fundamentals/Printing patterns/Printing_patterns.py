# Python implementation placeholder for Printing patterns
# what is printing patterns?
# printing patterns involves displaying characters or symbols in a specific arrangement or design
# patterns can be created using loops to control the number of rows and columns
# for example, we can print patterns like triangles, squares, diamonds, etc.
# _______________________________________________________________
# _______________________________________________________________
# logic explanation
# to print patterns, we typically use nested loops
# the outer loop controls the number of rows, while the inner loop controls the number of columns
# we can use conditions within the inner loop to determine what character to print based on the current row and column indices
# _______________________________________________________________
# _______________________________________________________________
# example 1: printing a right-angled triangle pattern
n = int(input("Enter the number of rows for the triangle pattern: "))  # taking input for number of rows
for i in range(1, n + 1):  # outer loop for each row
    for j in range(i):  # inner loop for printing stars in each row
        print("*", end="")  # print star without newline
    print()  # move to the next line after each row
# _______________________________________________________________
# _______________________________________________________________
# example 2: printing a square pattern
n = int(input("Enter the size of the square pattern: "))  # taking input for size of the square
for i in range(n):  # outer loop for each row
    for j in range(n):  # inner loop for printing stars in each row
        print("*", end="")  # print star without newline
    print()  # move to the next line after each row
# _______________________________________________________________
# _______________________________________________________________
# example 3: printing a pyramid pattern
n = int(input("Enter the number of rows for the pyramid pattern: "))  # taking input for number of rows
for i in range(1, n + 1):  # outer loop for each row
    print(" " * (n - i), end="")  # print leading spaces
    print("* " * i)  # print stars with a space 
# _______________________________________________________________
# _______________________________________________________________
#  example 4: printing a diamond pattern
n = int(input("Enter the number of rows for the diamond pattern (half): "))  # taking input for half the number of rows
# upper half of the diamond
for i in range(1, n + 1):  # outer loop for each row
    print(" " * (n - i), end="")  # print leading spaces
    print("* " * i)  # print stars with a space
# lower half of the diamond
for i in range(n - 1, 0, -1):  # outer loop for each row
    print(" " * (n - i), end="")  # print leading spaces
    print("* " * i)  # print stars with a space
# _______________________________________________________________
# _______________________________________________________________
# example 5: printing a hollow square pattern
n = int(input("Enter the size of the hollow square pattern: "))  # taking input for size of the square
for i in range(n):  # outer loop for each row
    for j in range(n):  # inner loop for printing stars in each row
        if i == 0 or i == n - 1 or j == 0 or j == n - 1:  # condition for borders
            print("*", end="")  # print star for borders
        else:
            print(" ", end="")  # print space for inside
    print()  # move to the next line after each row
# _______________________________________________________________
# _______________________________________________________________
# example 6: printing a right-angled triangle pattern with numbers
n = int(input("Enter the number of rows for the number triangle pattern: "))  # taking input for number of rows
for i in range(1, n + 1):  # outer loop for each row
    for j in range(1, i + 1):  # inner loop for printing numbers in each row
        print(j, end="")  # print number without newline
    print()  # move to the next line after each row
# _______________________________________________________________
# _______________________________________________________________
# example 7: printing a Floyd's triangle pattern
n = int(input("Enter the number of rows for Floyd's triangle pattern: "))  # taking input for number of rows
num = 1  # initialize number to be printed
for i in range(1, n + 1):  # outer loop for each row
    for j in range(i):  # inner loop for printing numbers in each row
        print(num, end=" ")  # print number with a space
        num += 1  # increment number
    print()  # move to the next line after each row
# _______________________________________________________________
# _______________________________________________________________
# example 8: printing an inverted right-angled triangle pattern
n = int(input("Enter the number of rows for the inverted triangle pattern: "))  # taking input for number of rows
for i in range(n, 0, -1):  # outer loop for each row
    for j in range(i):  # inner loop for printing stars in each row
        print("*", end="")  # print star without newline
    print()  # move to the next line after each row
# _______________________________________________________________
# _______________________________________________________________
# example 9: printing a checkerboard pattern
n = int(input("Enter the size of the checkerboard pattern: "))  # taking input for size of the checkerboard
for i in range(n):  # outer loop for each row
    for j in range(n):  # inner loop for printing characters in each row
        if (i + j) % 2 == 0:  # condition for checkerboard pattern
            print("*", end="")  # print star for even sum of indices
        else:
            print(" ", end="")  # print space for odd sum of indices
    print()  # move to the next line after each row
# _______________________________________________________________
# _______________________________________________________________
# example 10: printing a right-angled triangle pattern with alphabets
n = int(input("Enter the number of rows for the alphabet triangle pattern: "))  # taking input for number of rows
for i in range(n):  # outer loop for each row
    for j in range(i + 1):  # inner loop for printing alphabets in each row
        print(chr(65 + j), end="")  # print alphabet without newline (65 is ASCII for 'A')
    print()  # move to the next line after each row
# _______________________________________________________________
# _______________________________________________________________
# example 11: printing a hollow pyramid pattern
n = int(input("Enter the number of rows for the hollow pyramid pattern: "))  # taking input for number of rows
for i in range(1, n + 1):  # outer loop for each row
    print(" " * (n - i), end="")  # print leading spaces
    for j in range(1, 2 * i):  # inner loop for printing characters in each row
        if j == 1 or j == 2 * i - 1 or i == n:  # condition for borders
            print("*", end="")  # print star for borders
        else:
            print(" ", end="")  # print space for inside
    print()  # move to the next line after each row
# _______________________________________________________________
# _______________________________________________________________
# example 12: printing a mirrored right-angled triangle pattern
n = int(input("Enter the number of rows for the mirrored triangle pattern: "))  # taking input for number of rows
for i in range(1, n + 1):  # outer loop for each row
    print(" " * (n - i), end="")  # print leading spaces
    for j in range(i):  # inner loop for printing stars in each row
        print("*", end="")  # print star without newline
    print()  # move to the next line after each row
# _______________________________________________________________
# _______________________________________________________________
# example 13: printing a hollow diamond pattern
n = int(input("Enter the number of rows for the hollow diamond pattern (half): "))  # taking input for half the number of rows
# upper half of the diamond
for i in range(1, n + 1):  # outer loop for each row
    print(" " * (n - i), end="")  # print leading spaces
    for j in range(1, 2 * i):  # inner loop for printing characters in each row
        if j == 1 or j == 2 * i - 1:  # condition for borders
            print("*", end="")  # print star for borders
        else:
            print(" ", end="")  # print space for inside
    print()  # move to the next line after each row
# lower half of the diamond
for i in range(n - 1, 0, -1):  # outer loop for each row
    print(" " * (n - i), end="")  # print leading spaces
    for j in range(1, 2 * i):  # inner loop for printing characters in each row
        if j == 1 or j == 2 * i - 1:  # condition for borders
            print("*", end="")  # print star for borders
        else:
            print(" ", end="")  # print space for inside
    print()  # move to the next line after each row
# _______________________________________________________________
# _______________________________________________________________
# example 14: printing a hollow right-angled triangle pattern
n = int(input("Enter the number of rows for the hollow triangle pattern: "))  # taking input for number of rows
for i in range(1, n + 1):  # outer loop for each row
    for j in range(1, i + 1):  # inner loop for printing characters in each row
        if j == 1 or j == i or i == n:  # condition for borders
            print("*", end="")  # print star for borders
        else:
            print(" ", end="")  # print space for inside
    print()  # move to the next line after each row
# _______________________________________________________________
# _______________________________________________________________
# example 15: printing a hollow square pattern with diagonals
n = int(input("Enter the size of the hollow square pattern with diagonals: "))  # taking input for size of the square
for i in range(n):  # outer loop for each row
    for j in range(n):  # inner loop for printing characters in each row
        if i == 0 or i == n - 1 or j == 0 or j == n - 1 or i == j or j == n - i - 1:  # condition for borders and diagonals
            print("*", end="")  # print star for borders and diagonals
        else:
            print(" ", end="")  # print space for inside
    print()  # move to the next line after each row
# _______________________________________________________________
# _______________________________________________________________
# example 16: printing a right-angled triangle pattern with alternating 1s and 0s
n = int(input("Enter the number of rows for the alternating 1s and 0s triangle pattern: "))  # taking input for number of rows
for i in range(1, n + 1):  # outer loop for each row
    for j in range(1, i + 1):  # inner loop for printing characters in each row
        if (i + j) % 2 == 0:  # condition for alternating 1s and 0s
            print("1", end="")  # print 1 for even sum of indices
        else:
            print("0", end="")  # print 0 for odd sum of indices
    print()  # move to the next line after each row
# _______________________________________________________________
# _______________________________________________________________
# example 17: printing a hollow right-angled triangle pattern with numbers
n = int(input("Enter the number of rows for the hollow number triangle pattern: "))  # taking input for number of rows
for i in range(1, n + 1):  # outer loop for each row
    for j in range(1, i + 1):  # inner loop for printing characters in each row
        if j == 1 or j == i or i == n:  # condition for borders
            print(j, end="")  # print number for borders
        else:
            print(" ", end="")  # print space for inside
    print()  # move to the next line after each row
# _______________________________________________________________
# _______________________________________________________________
# example 18: printing a hollow square pattern with numbers
n = int(input("Enter the size of the hollow square pattern with numbers: "))  # taking input for size of the square
for i in range(1, n + 1):  # outer loop for each row
    for j in range(1, n + 1):  # inner loop for printing characters in each row
        if i == 1 or i == n or j == 1 or j == n:  # condition for borders
            print(j, end="")  # print number for borders
        else:
            print(" ", end="")  # print space for inside
    print()  # move to the next line after each row
# _______________________________________________________________
# _______________________________________________________________
# example 19: printing a right-angled triangle pattern with increasing numbers
n = int(input("Enter the number of rows for the increasing number triangle pattern: "))  # taking input for number of rows
for i in range(1, n + 1):  # outer loop for each row
    for j in range(1, i + 1):  # inner loop for printing numbers in each row
        print(j, end="")  # print number without newline
    print()  # move to the next line after each row
# _______________________________________________________________
# _______________________________________________________________
# example 20: printing a right-angled triangle pattern with decreasing numbers
n = int(input("Enter the number of rows for the decreasing number triangle pattern: "))  # taking input for number of rows
for i in range(n, 0, -1):  # outer loop for each row
    for j in range(1, i + 1):  # inner loop for printing numbers in each row
        print(j, end="")  # print number without newline
    print()  # move to the next line after each row
# _______________________________________________________________
# _______________________________________________________________
# example 21: printing a pyramid pattern with numbers
n = int(input("Enter the number of rows for the number pyramid pattern: "))  # taking input for number of rows
for i in range(1, n + 1):  # outer loop for each row
    print(" " * (n - i), end="")  # print leading spaces
    for j in range(1, i + 1):  # inner loop for printing numbers in each row
        print(j, end=" ")  # print number with a space
    print()  # move to the next line after each row
# _______________________________________________________________
# _______________________________________________________________
#  example 22: Pascal’s Triangle
n = int(input("Enter the number of rows for Pascal's Triangle: "))  # taking input for number of rows
for i in range(n):  # outer loop for each row
    print(" " * (n - i), end="")  # print leading spaces
    coeff = 1  # initialize coefficient
    for j in range(i + 1):  # inner loop for printing coefficients in each row
        print(coeff, end=" ")  # print coefficient with a space
        coeff = coeff * (i - j) // (j + 1)  # calculate next coefficient
    print()  # move to the next line after each row
# _______________________________________________________________
# _______________________________________________________________
# example 23: Hollow Number Pyramid
n = int(input("Enter the number of rows for the hollow number pyramid pattern: "))  # taking input for number of rows
for i in range(1, n + 1):  # outer loop for each row
    print(" " * (n - i), end="")  # print leading spaces
    for j in range(1, 2 * i):  # inner loop for printing characters in each row
        if j == 1 or j == 2 * i - 1 or i == n:  # condition for borders
            print(i, end="")  # print row number for borders
        else:
            print(" ", end="")  # print space for inside
    print()  # move to the next line after each row
# _______________________________________________________________
# _______________________________________________________________
# example 24: Symmetric Hourglass Pattern
n = int(input("Enter the number of rows for the symmetric hourglass pattern (half): "))  # taking input for half the number of rows
# upper half of the hourglass
for i in range(n, 0, -1):  # outer loop for each row
    print(" " * (n - i), end="")  # print leading spaces
    print("* " * i)  # print stars with a space
# lower half of the hourglass
for i in range(2, n + 1):  # outer loop for each row
    print(" " * (n - i), end="")  # print leading spaces
    print("* " * i)  # print stars with a space
# _______________________________________________________________
# _______________________________________________________________
# example 25: Diamond with Numbers (1–9 then 9–1)
n = int(input("Enter the number of rows for the diamond with numbers pattern (half): "))  # taking input for half the number of rows
# upper half of the diamond
for i in range(1, n + 1):  # outer loop for each row
    print(" " * (n - i), end="")  # print leading spaces
    for j in range(1, i + 1):  # inner loop for printing increasing numbers
        print(j, end="")  # print number without newline
    for j in range(i - 1, 0, -1):  # inner loop for printing decreasing numbers
        print(j, end="")  # print number without newline
    print()  # move to the next line after each row
# lower half of the diamond
for i in range(n - 1, 0, -1):  # outer loop for each row
    print(" " * (n - i), end="")  # print leading spaces
    for j in range(1, i + 1):  # inner loop for printing increasing numbers
        print(j, end="")  # print number without newline
    for j in range(i - 1, 0, -1):  # inner loop for printing decreasing numbers
        print(j, end="")  # print number without newline
    print()  # move to the next line after each row
# _______________________________________________________________
# _______________________________________________________________
# example 26: Multiplication Table Pattern
n = int(input("Enter the size of the multiplication table pattern: "))  # taking input for size of the multiplication table
for i in range(1, n + 1):  # outer loop for each row
    for j in range(1, n + 1):  # inner loop for printing multiplication values
        print(f"{i * j:4}", end="")  # print multiplication value with formatting for alignment
    print()  # move to the next line after each row
# _______________________________________________________________
# _______________________________________________________________
#  example 27: Zigzag Star Pattern
n = int(input("Enter the number of rows for the zigzag star pattern: "))  # taking input for number of rows
for i in range(n):  # outer loop for each row
    for j in range(n):  # inner loop for printing characters in each row
        if (i + j) % 2 == 0:  # condition for zigzag pattern
            print("*", end="")  # print star for even sum of indices
        else:
            print(" ", end="")  # print space for odd sum of indices
    print()  # move to the next line after each row
# _______________________________________________________________
# _______________________________________________________________
# example 28: Hollow Diamond with Diagonals
n = int(input("Enter the number of rows for the hollow diamond with diagonals pattern (half): "))  # taking input for half the number of rows
# upper half of the diamond
for i in range(1, n + 1):  # outer loop for each row
    print(" " * (n - i), end="")  # print leading spaces
    for j in range(1, 2 * i):  # inner loop for printing characters in each row
        if j == 1 or j == 2 * i - 1 or j == i:  # condition for borders and diagonals
            print("*", end="")  # print star for borders and diagonals
        else:
            print(" ", end="")  # print space for inside
    print()  # move to the next line after each row
# lower half of the diamond
for i in range(n - 1, 0, -1):  # outer loop for each row
    print(" " * (n - i), end="")  # print leading spaces
    for j in range(1, 2 * i):  # inner loop for printing characters in each row
        if j == 1 or j == 2 * i - 1 or j == i:  # condition for borders and diagonals
            print("*", end="")  # print star for borders and diagonals
        else:
            print(" ", end="")  # print space for inside
    print()  # move to the next line after each row
# _______________________________________________________________
# _______________________________________________________________
# example 29: Hourglass Number Pattern
n = int(input("Enter the number of rows for the hourglass number pattern (half): "))  # taking input for half the number of rows
# upper half of the hourglass
for i in range(n, 0, -1):  # outer loop for each row    
    print(" " * (n - i), end="")  # print leading spaces
    for j in range(1, i + 1):  # inner loop for printing numbers in each row
        print(j, end=" ")  # print number with a space
    print()  # move to the next line after each row
# lower half of the hourglass
for i in range(2, n + 1):  # outer loop for each row
    print(" " * (n - i), end="")  # print leading spaces
    for j in range(1, i + 1):  # inner loop for printing numbers in each row
        print(j, end=" ")  # print number with a space
    print()  # move to the next line after each row
# _______________________________________________________________
# _______________________________________________________________
# example 30: Cross Star Pattern
n = int(input("Enter the size of the cross star pattern (odd number): "))  # taking input for size of the cross star pattern
if n % 2 == 0:
    n += 1  # ensure n is odd
for i in range(n):  # outer loop for each row
    for j in range(n):  # inner loop for printing characters in each row
        if i == j or j == n - i - 1:  # condition for cross pattern
            print("*", end="")  # print star for cross
        else:
            print(" ", end="")  # print space for other positions
    print()  # move to the next line after each row
# _______________________________________________________________
# _______________________________________________________________
# Note: You can modify the patterns by changing the characters, adding spaces, or adjusting the loop conditions.
# This concludes the implementation of printing basic patterns using nested loops in Python.
# _______________________________________________________________
# _______________________________________________________________