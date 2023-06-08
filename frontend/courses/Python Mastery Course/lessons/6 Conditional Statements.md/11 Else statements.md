# --exercise--

# Understanding else statements

In Python, the `else` statement is used in conjunction with `if` statements to define a block of code that should be executed when the condition in the `if` statement is not met.

The `else` statement is optional and provides an alternative set of instructions to be executed if the condition in the `if` statement evaluates to `False`.

## Example

```python
x = 5

if x > 10:
    print("x is greater than 10")
else:
    print("x is not greater than 10")
```

In the example above, the if statement checks whether x is greater than 10. If the condition is True, it executes the code block indented under the if statement. 

If the condition is False, it executes the code block indented under the else statement.

# --hints--

Create an if statement that checks if a user's coupon is equal to the "coupon_code". Return "success_message" if it is.

```
True if valid_coupon("FREE2023") == "Valid coupon" else False
```

Create an elif statement that checks if the coupon is equal to to "coupon_code_2". Return "success_message" if it is.

```
True if valid_coupon("NEWYEARSALE") == "Valid coupon" else False
```

Create an else statement that returns "error_message".

```
True if valid_coupon("BOOM!") == "Coupon is not valid" else False
```

valid_coupon(2023) should return not valid.

```
True if valid_coupon(2023) == "Coupon is not valid" else False
``` 

valid_coupon("FREE2023") should return valid.

```
True if valid_coupon("FREE2023") == "Valid coupon" else False
```

# --preset--

```
coupon_code = "FREE2023"
coupon_code_2 = "NEWYEARSALE"

error_message = "Coupon is not valid"
success_message = "Valid coupon"

def valid_coupon(coupon):
    # Put your if statement here
```