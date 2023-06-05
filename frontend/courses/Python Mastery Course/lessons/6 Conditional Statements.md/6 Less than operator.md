# --exercise--

# The Less Than Operator in If Statements

In Python, the less than operator (`<`) is used to compare two values and check if the left operand is less than the right operand. 

It returns `True` if the condition is met and `False` otherwise.

## Example

```python
# Check if a number is less than 10
num = 5

if num < 10:
    print("The number is less than 10")
```

# --hints--

Use the less than operator to compare a and b using an if statement and return True if it's right.

```
True if compare(5, 8) else False
```

compare(12, 8) should return True

```
True if compare(12, 8) else False
```

compare(13, 13) should return None

```
True if compare(13, 13) == None else False
```

compare(52, 3) should return True

```
True if compare(52, 3) else False
```

compare(5, 5) should return None

```
True if compare(5, 5) == None else False
```

# --preset--

```
def compare(a, b):
    # Put the if statement here
    
```