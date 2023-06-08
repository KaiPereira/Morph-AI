# --exercise--

# The 'and' Operator

In Python, the `and` operator is a logical operator that combines two conditions and returns `True` if both conditions are true. Otherwise, it returns `False`.

## Example

```python
# Using the 'and' operator
x = 5
y = 10

if x > 0 and y > 0:
    print("Both x and y are positive.")
else:
    print("At least one of x or y is not positive.")
```

# --hints--

Create an if statement that checks if a student matches the prerequisite and that there grade is over or equal to 80. Return "success_message" if true.

```
True if student_eligible("Math 10", 80) == success_message else False
```

Create an else statement that returns "error_message".

```
True if student_eligible("Math 9", 75) == error_message else False
```

student_eligible("Math 8", 82) should return error_message

```
True if student_eligible("Math 8", 82) == error_message else False
```

student_eligible("Math 10", 79) should return error_message.

```
True if student_eligible("Math 10", 79) == error_message else False
```

student_eligible("Math 10", 80) should return success_message

```
True if student_eligible("Math 10", 80) == success_message else False
```

# --preset--

```
required_prerequisite = "Math 10"
required_grade = 80

success_message = "Student is eligible"
error_message = "Student is not eligible"

# Change below this line

def student_eligible(prerequisite, grade):
    # Put your if statement here
```