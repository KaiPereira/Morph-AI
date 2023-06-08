# --exercise--

# More Than or Equal Operator (>=)

In Python, the "more than or equal" operator (>=) is used to compare two values and check if the left operand is greater than or equal to the right operand. It returns a boolean value of True or False.

## Example

```python
# Comparing two numbers
x = 5
y = 3

if x >= y:
    print(True)  # Output: True
```

# --hints--

Create a function that will check if a student got an **A (86)** using the argument "grade" and the more than or equal operator. Return "message" if true.

```
True if final_grade(87) == message else False
```

final_grade(86) should return that the student got an A.

```
True if final_grade(86) == message else False
```

final_grade(72) should not say that the student got an A.

```
True if final_grade(72) == None else False
```

final_grade(21) should not say that the student got an A.

```
True if final_grade(21) == None else False
```

# --preset--

```
message = "Student got an A"

def final_grade(grade):
    # Put your if statement here
```