# --exercise--

# Accessing Elements in an Array

In Python, arrays are called lists. They are used to store multiple values in a single variable. Each value in a list is called an element.

To access individual elements in a list, you can use their index. The index represents the position of an element in the list, starting from 0 for the first element.

You can also use negative numbers like [-1] to go from back to front in the array. For example, [-1] in ["value_1", "value_2", "value_3"] would be "value_3"

## Example

```
# Accessing elements in a list
fruits = ['apple', 'banana', 'cherry', 'durian']

# Accessing the first element
first_fruit = fruits[0]
print(first_fruit)  # Output: apple

# Accessing the third element
third_fruit = fruits[2]
print(third_fruit)  # Output: cherry
```

# --hints--

Assign "my_list" more than 4 elements.

```
True if len(my_list) >= 4 else False
```

Access the first element in the array and assign it to "first_element"

```
True if first_element == my_list[0] else False
```

Access the last element in the array and assign it to "last_element"

```
True if last_element == my_list[-1] else False
```

# --preset--

```
my_list = []

# Assign these values
first_element = 
last_element = 
```