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

Use the less than operator to compare a and b using an if statement and return "message" if it's right.

```
True if compare(5, 8) == message else False
```

compare(12, 8) should return False

```
True if compare(12, 8) == None else False
```

compare(13, 13) should return None

```
True if compare(13, 13) == None else False
```

compare(3, 52) should return True

```
True if compare(3, 52) == message else False
```

compare(5, 5) should return None

```
True if compare(5, 5) == None else False
```

# --preset--

```
message = "A is less than b"

def compare(a, b):
    # Put the if statement here
    
```