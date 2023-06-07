# --exercise--

# Using the "More Than" Operator in If Statements

In Python, the "more than" operator (`>`) is used to compare two values and check if the left operand is greater than the right operand. 

It returns `True` if the condition is satisfied, and `False` otherwise.

## Example

```python
# Comparing two numbers using the "more than" operator
x = 10
y = 5

if x > y:
    print("x is greater than y")
```

# --hints--

Use the more than operator to compare a and b using an if statement and return "A is more than b" if it's right.

```
True if compare(8, 5) == "A is more than b" else False
```

compare(15, 4) should return True

```
True if compare(15, 4) == "A is more than b" else False
```

compare(18, 18) should return None

```
True if compare(18, 18) == None else False
```

compare(58, 47) should return True

```
True if compare(58, 47) == "A is more than b" else False
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