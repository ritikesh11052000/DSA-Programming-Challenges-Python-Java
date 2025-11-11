# Python implementation placeholder for Determining leap year
# what is a leap year?
# a leap year is a year that has an extra day added to it, making it 366 days long instead of the usual 365 days
# this extra day is added to the month of February, which has 29 days in a leap year instead of the usual 28 days
# leap years are necessary to keep our calendar year synchronized with the astronomical year
# _______________________________________________________________
# _______________________________________________________________
# logic explanation
# a year is a leap year if it is divisible by 4
# however, if the year is divisible by 100, it is not a leap year, unless it is also divisible by 400
# this means that the year 2000 was a a leap year (divisible by 400), but the year 1900 was not (divisible by 100 but not by 400)
# Meaning:
# - If a year is divisible by 4, it is a leap year.
# - If a year is divisible by 100, it is not a leap year, unless it is also divisible by 400. and then it is a leap year. also.
# - Therefore, years like 1600, 2000, and 2400 are leap years, while years like 1700, 1800, and 1900 are not a leap years.
# _______________________________________________________________
# _______________________________________________________________
# implementation of leap year check in python
year = int(input("Enter a year to check if it is a leap year: ")) # taking input year from user 
if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0): # check if year is divisible by 4 and not divisible by 100 or divisible by 400
    print(f"{year} is a leap year") # if condition is true, it is a leap year
else:
    print(f"{year} is not a leap year") # if condition is false, it is not a leap year
# _______________________________________________________________
# _______________________________________________________________
# Note: This implementation checks for leap years for any positive integer input.
# You can add input validation as needed to handle negative numbers or non-integer inputs.
# example: year = abs(int(input("Enter a year to check if it is a leap year: ")))
# what this line do is it takes the absolute value of the input year to ensure it's non-negative before processing.
# where should you add this line?
# you can replace the existing input line with this one at the beginning where year is taken as input.
# _______________________________________________________________
# _______________________________________________________________
# This concludes the implementation of leap year check in Python.
# _______________________________________________________________
# _______________________________________________________________   