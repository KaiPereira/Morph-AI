# --exercise--

# Declaring Functions

In programming, functions are reusable blocks of code that perform a specific task. They help in organizing code and making it more modular.

To declare a function in Python, you can use the following syntax:

```
def function_name(parameters):
    # Function body
    # Code to be executed
    # when the function is called

# call the function
function_name()
```

The def keyword is used to define a function, followed by the function name and a pair of parentheses. Inside the parentheses, you can specify any parameters that the function should accept.

The function body is indented below the function declaration and consists of the code that will be executed when the function is called.

## Example

Here's an example of a function that will print something:

```
def my_function():
    print("Hello world from a function!")

# call the function
my_function()
```

# --hints--

Create a function called "my_function".

```
True if 'my_function' in locals() else False
```

"my_function" should print "Hello World!" when called.

```
import re
pattern = r"^def my_function\(\):\n\s\s\s\sprint\([\"|\'].*[\"|\']\)"
True if re.findall(pattern, code, re.MULTILINE) else False
```

Call the function now.

```
import re
pattern = r"^my_function\(\)"
True if re.findall(pattern, code, re.MULTILINE) else False
```

# --preset--

```
# Put your function down here
```