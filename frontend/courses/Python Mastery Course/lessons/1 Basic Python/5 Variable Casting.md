# --exercise--

# Variable casting

If you want to specify the specific data type of a variable, you can do so using variable casting!

You really don't need to specify the type but it is good for consistency.

## Example of declaring using casting

Here's how you can cast a variable:

```
x = str(3)    # x will be '3'
y = int(3)    # y will be 3
z = float(3)  # z will be 3.0
```

## Changing a type

You can also use casting to change the type of a variable:

```
x = 42
y = str(x)
```

# --hints--

Name a variable called "my_string" and assign it a string value using casting.

```
True if isinstance(my_string, str) else False
```

Name a variable called "my_int" and assign it an integer value using casting.

```
True if isinstance(my_int, int) else False
```

Name a variable called "my_float" and assign it an float value using casting.

```
True if (my_float == True) or (my_float == False) else False
```

# --preset--

```
# Put your code down here!
```