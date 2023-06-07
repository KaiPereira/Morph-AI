# --exercise--

# The OR Operator

The OR operator (`or`) is a logical operator in Python that returns `True` if at least one of the operands is `True`, and `False` otherwise.

## Example

```python
# Using the OR operator
x = 5
y = 10

if (x > 3) or (y > 5):
    print(True) # Will print true
```

# --hints--

Create an if statement that checks if someone is bigger or equal to the "minimum age" or their entry_pass is equal to "allowed_pass". Return "success_message" if True

```
True if entry(16, "VIP") == success_message else False
```

Create an else statement that returns "error_message".

```
True if entry(17, "None") == error_message else False
```

entry(18, "None") should be allowed

```
True if entry(18, "None") == success_message else False
```

entry(15, "VIP") should be allowed

```
True if entry(15, "VIP") == success_message else False
```

entry(17, "None") should be an error

```
True if entry(17, "None") == error_message else False
```

# --preset--

```
minimum_age = 18
pass = "VIP"

success_message = "Allowed to enter"
error_message = "Not allowed"

def entry(age, pass):
    # Put your if statements here
```