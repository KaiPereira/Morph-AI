# --exercise--

# Python Function Arguments

In Python, functions can have arguments, which are values passed into the function when it is called. Arguments allow us to provide input to a function and make it more versatile and reusable.

## Positional Arguments

Positional arguments are the most basic type of arguments. They are passed to a function in a specific order, and their values are assigned based on their position.

```python
# Example of a function with positional arguments
def greet(name, age):
    print(f"Hello, {name}! You are {age} years old.")

# Calling the greet function with positional arguments
greet("Alice", 25)
```

# --hints--

Create a function called "multiply" that takes two arguments "a" and "b".

```
import inspect

arguments = inspect.getfullargspec(multiply)[0]

True if (arguments[0] == "a") and (arguments[1] == "b") else False
```

Inside of the function, print the sum of the argument "a" multiplied by "b".

```
import re
pattern = r"^def multiply\(a, b\):\n\s\s\s\sprint\(a \* b\)"
True if re.findall(pattern, code, re.MULTILINE) else False
```

Call the function with 2 different numbers as arguments.

```
import re
pattern = r"^multiply\(\d+, \d+\)"
True if re.findall(pattern, code, re.MULTILINE) else False
```

# --preset--

```
# put your function down here
```

