# Variables and Assignments

In Python, variables are used to store data values. A variable is created when you assign a value to it using the assignment operator =.

For example:

```
x = 5
```

In the above example, x is a variable and 5 is the value that is being assigned to it.

## Naming rules

In Python, variable names must follow certain rules. Here are the rules for variable names:

- A variable name must start with a letter or an underscore.
- A variable name cannot start with a number.
- A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ ).
- Variable names are case sensitive (e.g. myVar and myvar are two different variables).

## Examples of Assignments 

You can assign different types of values to a variable. Here are some examples:

```
# Assigning an integer
x = 5

# Assigning a float
y = 3.14

# Assigning a string
name = "John"

# Assigning a boolean
is_active = True
```

## Reassigning Variables

You can also reassign the value of a variable by using the assignment operator = again.

```
x = 5     # x is 5
x = 10    # x is now 10
```

In the above example, the value of x is first assigned to 5, and then it is reassigned to 10.

## Multiple Assignments 

You can also assign multiple variables in a single line of code.

```
x, y, z = 5, 10, 15
```

In the above example, the values 5, 10, and 15 are assigned to the variables x, y, and z, respectively.

## Swapping Variables

Python allows you to swap the values of two variables using a single line of code.

```
x = 5
y = 10

# Swapping variables
x, y = y, x

print("x =", x)   # Output: x = 10
print("y =", y)   # Output: y = 5
```

In the above example, the values of x and y are swapped using a single line of code.

## Conclusion

In this lesson, we learned about variables and assignments in Python. We learned how to create variables, assign values to them, reassign variables, and swap variables. 

We also learned the rules for naming variables in Python.

Next up we'll look at basic arithmetic operations!