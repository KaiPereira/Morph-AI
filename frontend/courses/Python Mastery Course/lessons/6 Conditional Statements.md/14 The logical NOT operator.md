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

Create an if statement that checks if it's **not** daytime and that person_at_door is True. Return robber_message if it's True

```
True if alarm_activation(False, True) == robber_message else False
```

Create an elif statement that checks if it's daytime and there's a person_at_door. Return person_message if True.

```
True if alarm_activation(True, True) == person_message else False
```

Create an else statement that returns none_message.

```
True if alarm_activation(False, False) == none_message else False
```

alarm_activation(True, False) should be none_message.

```
True if alarm_activation(True, False) == none_message else False
```

# --preset--

```
robber_message = "There is a robber at the door"
person_message = "There is a person at the door"
none_message = "There is no one at the door"

def alarm_activation(daytime, person_at_door):
    # Put your if statement here
```
