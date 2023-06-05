# --exercise--

# The Less Than Operator in If Statements

In Python, the more than operator (`>`) is used to compare two values and check if the left operand is more than the right operand. 

It returns `True` if the condition is met and `False` otherwise.

## Example

```python
# Check if a number is less than 10
num = 15

if num > 10:
    print("The number is more than 10")
```

# --hints--

Use the less than operator to compare a and b using an if statement and return True if it's right.

```
True if compare(8, 5) else False
```

compare(15, 4) should return True

```
True if compare(15, 4) else False
```

compare(18, 18) should return None

```
True if compare(18, 18) == None else False
```

compare(58, 47) should return True

```
True if compare(58, 47) else False
```

compare(1, 1) should return None

```
True if compare(1, 1) == None else False
```

# --preset--

```
def compare(a, b):
    # Put the if statement here
    
```