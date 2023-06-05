# --exercise--

# Returning Values in Functions

In Python, functions can return values using the `return` statement. 

This allows you to compute a result within the function and pass it back to the code that called the function.

## Example

```python
# A function that returns the sum of two numbers
def add_numbers(a, b):
    return a + b

# Save the returned value from the add_numbers function to result
result = add_numbers(25, 81)
```

In the example above, the function add_numbers takes two parameters a and b, and it returns their sum using the return statement.

We then grab the returned value and save it to a variable.

# --hints--

Name a function called "divide_numbers" that takes two parameters.

```
import inspect

arguments = inspect.getfullargspec(divide_numbers)[0]

True if arguments[0] and arguments[1] else False
```

Divide should return the first param divided by the second param.

```
True if divide_numbers(15, 5) == 3 else False
```

Save the function with arguments: 25 and 5 to a variable called "result".

```
True if result == 5 else False
```

# --preset--

```
# Put your function down here
```