# --exercise--

# Using elif Statements

In Python, the `elif` statement allows you to check for multiple conditions sequentially after an initial `if` statement. It provides an alternative branch of code execution when the previous condition(s) are not met.

## Syntax

```python
if condition1:
    # code to be executed if condition1 is True
elif condition2:
    # code to be executed if condition1 is False and condition2 is True
elif condition3:
    # code to be executed if condition1 and condition2 are False and condition3 is True
```

## Example

```python
# Checking the value of a number

num = 10

if num < 0:
    print("The number is negative")
elif num == 0:
    print("The number is zero")
```

In this example, the elif statement is used to check additional conditions after the initial if statement. If the num variable is less than zero, the first condition is satisfied. 

If the num variable is not less than zero but equal to zero, the second condition is satisfied.

# --hints--

Create an if statement to check if a person is under the age of 13. If they are, return "child"

```
True if age_func(12) == "child" else False
```

Create an else if statement that returns "teenager" if they are under the age of 18.

```
True if age_func(17) == "teenager" else False
```

Create another if else statement that returns "adult" if they are over or equal to the age of 18.

```
True if age_func(18) == "adult" else False
```

# --preset--

```
def age_func(age):
    # Put your if/else statements
```