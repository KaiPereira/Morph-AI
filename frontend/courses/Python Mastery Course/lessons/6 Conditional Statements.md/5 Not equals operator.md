# --exercise--

# The "not equals" operator in if statements

In Python, the "not equals" operator (`!=`) is used to compare if two values are not equal. 

It returns `True` if the values are different and `False` if they are equal.

## Example

```python
# Check if a number is not equal to 0
x = 10

if x != 0:
    print("The number is not equal to zero")
else:
    print("The number is equal to zero")
```

# --hints--

Use the not equals operator to compare a and b using an if statement and return True if it's right.

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