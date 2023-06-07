# --exercise--

# The Less Than or Equal Operator

In Python, the less than or equal operator (`<=`) is used to compare two values and check if the left operand is less than or equal to the right operand. 

It returns a boolean value (`True` or `False`) based on the comparison result.

## Example

```python
# Less than or equal operator
car_1 = "honda"
car_2 = "tesla"

if len(car_1) <= len(car_2): # True
    print(True)
```

# --hints--

The due date for a school project is day 32. Make an if statement that will check if you still have time left for the project based off of the argument "day". Return "Still time" if there is still time.

```
True if deadline(15) == "Still time" else False
```

If it's day 18, there should still be time.

```
True if deadline(15) == "Still time" else False
```

If it's day 34, there shouldn't be any more time.

```
True if deadline(34) == None else False
```

If it's day 32, there should still be time.

```
True if deadline(32) == "Still time" else False
```

# --preset--

```
def deadline(day):
    # Put your if statements here
```