# --exercise--

# If Statements

In programming, if statements allow you to execute certain blocks of code conditionally. They are used to make decisions based on whether a certain condition is true or false.

Python supports different logical conditions. For example:
- Equals: a == b
- Not Equals: a != b
- Less than: a < b
- Less than or equal to: a <= b
- Greater than: a > b
- Greater than or equal to: a >= b

## Syntax

The general syntax of an if statement in Python is. Note, there must be an indent after the if statement (use tab):

```
if condition:
    # code to be executed if the condition is true
```

## Example

Suppose we want to check if a number is positive. If the number is greater than 0, we'll print a message saying it's positive.

```
# Check if a number is positive
number = 10

if number > 0:
    print("The number is positive")
```

# --hints--

Create an if statement that checks if a is bigger than b.

```
import re
pattern = r"if a > b:"
True if re.findall(pattern, code, re.MULTILINE) else False
```

Return "print_message" if the "if statement" is true.

```
True if number_is_bigger(5, 3) == return_message else False
```

# --preset--

```
return_message = "A is bigger than b"

def number_is_bigger(a ,b):
    # Put your if statement here
```