# --exercise--

# Format Strings and f-strings

Format strings and f-strings are powerful tools in Python for creating formatted output. They allow you to embed variables, expressions, and even perform basic formatting operations within a string.

## Format Strings

Format strings are created using the `str.format()` method. They contain replacement fields surrounded by curly braces `{}` which will be replaced with corresponding values.

### Example

```python
name = "Alice"
age = 25

# Using format strings
message = "My name is {} and I am {} years old.".format(name, age)
print(message)
```

## f-strings

f-strings, also known as formatted string literals, provide a concise way to embed expressions inside string literals. 

They are prefixed with the letter f and allow you to directly reference variables and expressions inside curly braces {}.

### Example

```
name = "Bob"
age = 30

# Using f-strings
message = f"My name is {name} and I am {age} years old."
print(message)
```

# --hints--

Create a variable called "name" and assign it the value of your name.

```
True if isinstance(name, str) else False
```

Create a variable called "age" and assign it the **int** value of your age.

```
True if isinstance(age, int) else False
```

Create a variable called "sentence" and using **format strings**, assign it the value of "My name is {} and I am {} years old". With the blanks filled as your name and age using format strings.

```
True if sentence == "My name is {} and I am {} years old".format(name, age) else False
```

Create a variable called "sentence_2" and using **f-strings** this time, assign it the value of "Hello, I'm {} and I am {}" with the blanks filled with your name and age.

```
True if sentence_2 == f"Hello, I'm {name} and I am {age}" else False
```

# --preset--

```
# Put your format/f strings here
```

