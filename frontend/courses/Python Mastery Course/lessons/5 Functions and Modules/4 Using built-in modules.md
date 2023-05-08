# Using Built-in Modules

In this module, we'll explore the usage of built-in modules in Python. Python provides a rich collection of modules that extend its functionality and allow us to perform a wide range of tasks. 

We'll cover some commonly used built-in modules and demonstrate their usage.

Please note: It's not too important to memorize all of these functions because you can just Google them whenever needed.

## Working with math Module

The math module provides a set of mathematical functions and constants. Let's explore how to use this module:

Importing the math Module
To use the math module, we need to import it at the beginning of our script:

```
import math
```

Commonly Used Functions:

- math.sqrt(x): Returns the square root of x.

- math.ceil(x): Returns the smallest integer greater than or equal to x.

- math.floor(x): Returns the largest integer less than or equal to x.

- math.pow(x, y): Returns x raised to the power y.

- math.sin(x), math.cos(x), math.tan(x): Returns the trigonometric sine, cosine, and tangent of x, respectively.

- math.radians(x): Converts x from degrees to radians.

- math.degrees(x): Converts x from radians to degrees.

Example Usage:

```
import math

# Calculate the square root of a number
print(math.sqrt(16))  # Output: 4.0

# Round up a number
print(math.ceil(3.7))  # Output: 4

# Round down a number
print(math.floor(3.7))  # Output: 3

# Calculate the power of a number
print(math.pow(2, 3))  # Output: 8.0

# Calculate the sine, cosine, and tangent of an angle
angle = math.radians(45)
print(math.sin(angle))  # Output: 0.7071067811865475
print(math.cos(angle))  # Output: 0.7071067811865476
print(math.tan(angle))  # Output: 0.9999999999999999
```

## Working with random Module

The random module allows us to generate random numbers and make random choices. Let's dive into its usage:

Importing the random Module
To use the random module, we need to import it at the beginning of our script:

```
import random
```

Commonly Used Functions:

- random.random(): Returns a random float between 0 and 1.

- random.randint(a, b): Returns a random integer between a and b (inclusive).

- random.choice(seq): Returns a random element from the given sequence.

- random.shuffle(seq): Shuffles the elements in a sequence in-place.

```
import random

# Generate a random float between 0 and 1
print(random.random())  # Output: 0.5324195169622357

# Generate a random integer between 1 and 10
print(random.randint(1, 10))  # Output: 7

# Choose a random element from a list
fruits = ["apple", "banana", "cherry", "durian"]
print(random.choice(fruits))  # Output: "cherry"

# Shuffle the elements in a list
random.shuffle(fruits)
print(fruits)  # Output: ["cherry", "durian", "apple", "banana"]
```

## Working with datetime Module

The datetime module allows us to work with dates and times. Let's explore its usage:

Importing the datetime Module
To use the datetime module, we need to import it at the beginning of our script:

```
import datetime
```

Commonly Used Classes:

- datetime.datetime: Represents a specific date and time.

- datetime.date: Represents a date (year, month, day).

- datetime.time: Represents a time (hour, minute, second, microsecond).

Example Usage:

```
import datetime

# Get the current date and time
current_datetime = datetime.datetime.now()
print(current_datetime)  # Output: 2023-05-08 12:34:56.789012

# Get the current date
current_date = datetime.date.today()
print(current_date)  # Output: 2023-05-08

# Create a specific date
custom_date = datetime.date(2023, 5, 1)
print(custom_date)  # Output: 2023-05-01

# Create a specific time
custom_time = datetime.time(9, 30, 15)
print(custom_time)  # Output: 09:30:15
```

## Conclusion

In this lesson, we explored some commonly used built-in modules in Python. We covered the math module for mathematical operations, the random module for generating random numbers and making random choices, and the datetime module for working with dates and times. 

These modules provide powerful functionalities that can enhance your Python programs.