# --exercise--

# The Equality Operator

In Python, the equality operator (`==`) is used to compare two values for equality. 

It returns `True` if the values are equal and `False` otherwise.

## Example

```python
# Comparing two numbers
x = 5
y = 7

if x == y:
    print("x and y are equal")
else:
    print("x and y are not equal")
```

# --hints--

Use the equality operator to compare a and b using an if statement and return "A is equal to b" if it's right.

```
True if compare(5, 5) == "A is equal to b" else False
```

compare(6, 8) should return None

```
True if compare(6, 8) == None else False
```

compare(10, 10) should return True

```
True if compare(10, 10) == "A is equal to b" else False
```

compare(9, 3) should return None

```
True if compare(9, 3) == None else False
```

compare(28, 28) should return True

```
True if compare(28, 28) == "A is equal to b" else False
```

# --preset--

```
def compare(a, b):
    # Put the if statement here
    
```