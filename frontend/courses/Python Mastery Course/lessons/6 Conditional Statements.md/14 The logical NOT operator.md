# --exercise--

# The NOT Operator

In Python, the NOT operator is used to reverse the logical value of a boolean expression. It returns `True` if the expression is `False`, and `False` if the expression is `True`.

## Example

```python
# Using the NOT operator
def allowed_login(active, blocked):
    if is_active and not is_blocked:
        print("Account is active and not blocked. User can log in.")
    else:
        print("Account is either not active or blocked. User cannot log in.")
```

If blocked is false and their active then we'll execute the first statement.

# --hints--

