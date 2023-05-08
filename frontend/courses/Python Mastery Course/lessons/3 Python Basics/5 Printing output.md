# Printing Output

In Python, you can use the print() function to output text to the console. The print() function can take one or more arguments, separated by commas. Here are some examples:

```
print("Hello, world!")
print("My favorite number is", 42)
```

The first example prints a string literal, "Hello, world!", to the console. The second example prints two things: a string literal, "My favorite number is", and an integer, 42. When you run this code, you'll see the following output:

```
Hello, world!
My favorite number is 42
```

## Sep

Notice that the two arguments to the print() function are separated by a space when printed. You can also separate them with commas or any other string:

```
print("My name is", "John", "Doe", sep="-")
```

This will print the following output:

```
My name is-John-Doe
```

## End

You can also use the end parameter to specify what string should be printed at the end of the output:

```
print("Hello", end="")
print(", world!")
```

This will print the following output:

```
Hello, world!
```

Notice that the two separate print() calls output to the same line because we set the end parameter of the first call to an empty string.

## Formatted strings

Finally, you can use formatted strings to output variables or expressions:

```
name = "John"
age = 42
print(f"My name is {name} and I am {age} years old.")
```

This will print the following output:

```
My name is John and I am 42 years old.
```

Notice the use of the f prefix before the string. This tells Python to format the string using the curly braces as placeholders for the variables name and age.

## Running Code

If you ever want to run the code demonstrated here, you can just input it into VSCode (in your .py file) and then go to:

```
Terminal -> New Terminal
```

and inside of the terminal run:

```
python filename.py
```

Make sure you replace filename with the name of your file!

## Conclusion

That's it for this lesson on printing output in Python! Next, we'll cover Input from the user.
