import os
import json

# List of folder names
folders = [
    "Fibonacci series",
    "Checking for prime number",
    "String palindrome",
    "Integer palindrome",
    "Armstrong number",
    "Avoiding deadlocks",
    "Factorial",
    "Reversing strings",
    "Removing repeated elements from an arraylist",
    "Printing patterns",
    "Printing repetitive characters in a string",
    "Finding the greatest common denominator of two numbers",
    "Finding the square root of a number",
    "Reversing an array in place",
    "Reversing the order of words in a sentence",
    "Checking if a string contains a substring",
    "Performing binary search",
    "Checking for anagrams",
    "Designing a vending machine",
    "Reversing a number",
    "Finding the first unique character of a string",
    "Finding the middle element of a linked list",
    "Performing pre-order traversal",
    "Performing pre-order traversal without recursion",
    "Performing in-order traversal",
    "Performing in-order traversal without recursion",
    "Performing post-order traversal",
    "Performing post-order traversal without recursion",
    "Printing all leaves of a binary tree",
    "Sorting an array using quick-sort",
    "Performing insertion sort",
    "Performing bubble sort",
    "Transposing a matrix",
    "Printing all permutations of a string",
    "Reversing a string in place",
    "Adding matrices",
    "Multiplying matrices",
    "Removing spaces in a string",
    "Reversing a linked list",
    "Finding the length of a linked list",
    "Checking for loops in a linked list",
    "Finding the start of looping in a linked list",
    "Finding the middle element of a linked list",
    "Finding the nth element from the tail of a linked list",
    "Converting a linked list to a binary tree",
    "Sorting a linked list",
    "Performing bucket sort",
    "Performing counting sort",
    "Performing merge sort",
    "Checking if two strings are rotations of each other",
    "Changing the Order of the Parameters of Methods",
    "Overriding non-static method",
    "Determining leap year"
]

# Minimal empty notebook JSON
empty_notebook = {
    "cells": [],
    "metadata": {},
    "nbformat": 4,
    "nbformat_minor": 4
}

# Create folders and files
for folder in folders:
    # Create folder
    os.makedirs(folder, exist_ok=True)
    # File name
    file_name = folder.replace(" ", "_")
    # Python file
    py_file = os.path.join(folder, file_name + ".py")
    with open(py_file, 'w') as f:
        f.write(f"# Python implementation placeholder for {folder}\n")
    # Java file
    java_file = os.path.join(folder, file_name + ".java")
    with open(java_file, 'w') as f:
        f.write(f"// Java implementation placeholder for {folder}\n")
    # Jupyter notebook file
    ipynb_file = os.path.join(folder, file_name + ".ipynb")
    with open(ipynb_file, 'w') as f:
        json.dump(empty_notebook, f, indent=1)

print("Structure created successfully.")
