# --exercise--

# Order of Operations

In Python, the order of operations determines the sequence in which mathematical expressions are evaluated. Understanding the order of operations is important for writing correct and efficient code.

The order of operations in Python is as follows:

1. Parentheses: Expressions inside parentheses are evaluated first.

2. Exponentiation: The exponentiation operator `**` is used to raise a number to a power.

3. Multiplication, Division, and Remainder: These operations are evaluated from left to right. The multiplication operator `*` is used for multiplication, the division operator `/` is used for division, and the remainder operator `%` is used to find the remainder of a division.

4. Addition and Subtraction: These operations are evaluated from left to right. The addition operator `+` is used for addition, and the subtraction operator `-` is used for subtraction.

## Example

```
# Example 1: Using parentheses
result = (2 + 3) * 4
# The expression inside the parentheses is evaluated first, giving us 5
# Then, the result is multiplied by 4, resulting in 20

# Example 2: Exponentiation
result = 2 ** 3
# 2 raised to the power of 3 is 8

# Example 3: Multiplication, Division, and Remainder
result = 10 * 3 / 2 % 4
# First, multiplication is performed: 10 * 3 = 30
# Then, division is performed: 30 / 2 = 15
# Finally, remainder is calculated: 15 % 4 = 3

# Example 4: Addition and Subtraction
result = 10 + 5 - 2
# Addition is performed first: 10 + 5 = 15
# Then, subtraction is performed: 15 - 2 = 13
```

## Challenge

Now we're going to make a little script that calculate the leg^2 of a triangle using the pythagorean theorem!

Right now this is just a basic function but later on we'll learn about using the math library.

# --hints--

Create a variable called "a" and assign it the value of 25.

```
True if a == 25 else False
```

Create a variable called "b" and give it the value of 16.

```
True if b == 16 else False
```

Create a variable called leg and assign it the value of "a squared" (a to the power of 2) + "b squared" (b to the power of 2)

```
True if a^2 + b^2 else False
```

# --preset--

```
# Put your code down here
```