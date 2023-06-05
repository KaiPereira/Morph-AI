# --exercise--

# Boolean Values and Truthiness

In Python, Boolean values are either `True` or `False`. They are used to represent the truth or falsity of an expression or condition.

## Boolean Values

The two boolean values in Python are:

- `True`: Represents a true condition or a positive result.
- `False`: Represents a false condition or a negative result.

## Truthiness and Falsiness

In addition to the boolean values `True` and `False`, Python also has the concept of truthiness and falsiness. This means that certain values can be evaluated as either true or false in a boolean context.

In Python, the following values are considered falsy (evaluated as `False`):

- `False`: The boolean value `False`.
- `None`: Represents the absence of a value.
- `0`: The integer zero.
- `0.0`: The floating-point zero.
- `''`: An empty string.
- `[]`: An empty list.
- `()`: An empty tuple.
- `{}`: An empty dictionary.
- `set()`: An empty set.

Any other value not listed above is considered truthy (evaluated as `True`).

## Bool function

You can use the `bool()` function to determine if something is true of false.

# --hints--

Use the bool() function to determine if "string_value" is True or False.

```
import re
pattern = r"^bool\(string_value\)"
True if re.findall(pattern, code, re.MULTILINE) else False
```

Use the bool() function to determine if "int_value" is True or False.

```
import re
pattern = r"^bool\(int_value\)"
True if re.findall(pattern, code, re.MULTILINE) else False
```

Use the bool() function to determine if "empty_value" is True or False.

```
import re
pattern = r"^bool\(empty_value\)"
True if re.findall(pattern, code, re.MULTILINE) else False
```

Use the bool() function to determine if "empty_string" is True or False.

```
import re
pattern = r"^bool\(empty_string\)"
True if re.findall(pattern, code, re.MULTILINE) else False
```

# --preset--

```
string_value = "Hello World!"

int_value = 25

empty_value = []

empty_string = ""
```