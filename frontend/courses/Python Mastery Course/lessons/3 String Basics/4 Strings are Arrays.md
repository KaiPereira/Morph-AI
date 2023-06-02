# --exercise--

# Strings as Arrays

In Python, strings can be treated as arrays of characters. This means that you can access individual characters of a string using their index.

## Bracket notation

Bracket notation is a way of getting a specific index/letter in a string.

The counting doesn't start counting at 1 though, it starts at 0.


You can also use negative numbers to go from back to front. For example you can do string[-1] to grab the very last letter of "Hello World"

## Example

```
# Accessing individual characters of a string
my_string = "Hello, World!"
print(my_string[0])  # Output: 'H'
print(my_string[7])  # Output: 'W'
```

# --hints--

Assign the second letter of my_string (index position 1) to the variable "secondLetterOfString" using bracket notation.

```
True if secondLetterOfString == my_string[1] else False
```

Assign the last letter of my_string to the variable "lastLetterOfString" using bracket notation.

```
True if lastLetterOfString == my_string[-1] else False
```

# --preset--

```
my_string = "Hello World!"

# Change this to have the second character of my_string
secondLetterOfString = 

# Change this to have the last character of my_string
lastLetterOfString = 
```
