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

Create a variable called fruit and assign it the value "apple".

```
True if fruit == "apple" else False
```

Use a format string to create a sentence using the fruit variable. The sentence should say "I like eating apples.". **Assign the format string to a variable called "sentence"**.

```
True if sentence == "I like eating apples." else False
```

Use an **f-string this time** to create a new sentence. Create a variable called "sentence_2". Sentence_2 should have a value of "I don't like apples.". 

```
True if sentence_2 == "I don't like apples." else False
```

# --preset--

```
# Put your format/f strings here
```

