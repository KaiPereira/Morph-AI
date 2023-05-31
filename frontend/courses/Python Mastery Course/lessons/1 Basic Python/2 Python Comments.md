# --exercise--

# Python Comments

In Python, comments are used to add explanatory notes or annotations to the code. They are ignored by the Python interpreter and are meant for human readers to understand the code better.

Comments can be single-line or multi-line. Single-line comments start with a hash symbol (#), while multi-line comments are enclosed within triple quotes (''').

## Single-line Comments

Single-line comments are used to explain code on a single line. They are typically used to provide context or document the purpose of a particular line of code.

Example:

```
# This is a single-line comment
x = 10  # Assigning a value to the variable x
```

## Multi-line Comments

Multi-line comments are used to provide explanations or documentation for multiple lines of code. They are useful when you need to provide detailed information about a section of code.

Example:

```
'''
This is a multi-line comment.
It can span across multiple lines.
Useful for providing detailed explanations.
'''
```

# --hints--

Create a single-line comment that says a word

```
import re
pattern = r"^#.*"
True if re.findall(pattern, code, re.MULTILINE) else False
```

Create a multi-line comment that spans a few lines

```
import re
pattern = r"'''([\s\S]*?)'''"
True if re.findall(pattern, code, re.MULTILINE) else False
```

# --preset--

```

```