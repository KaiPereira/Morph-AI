# --exercise--

# Modifying Array Elements Using Indexes

In Python, you can modify elements in an array by accessing them using their indexes. An index represents the position of an element in the array. 

By changing the value at a specific index, you can update the array.

## Example

```python
# Initializing an array
numbers = [1, 2, 3, 4, 5]

# Modifying an element at index 2
numbers[2] = 10

print(numbers)  # Output: [1, 2, 10, 4, 5]
```

In the example above, we have an array numbers with elements [1, 2, 3, 4, 5]. 

We modify the element at index 2 (which is 3) and assign it a new value of 10. The resulting array becomes [1, 2, 10, 4, 5].

# --hints--

Modify the second element in "my_array" with any **valid** value.

```
True if my_array[1] != "Marie Smith" else False
```

Print the new array to the console

```
import re
pattern = r"^print\(my_array\)"
True if re.findall(pattern, code, re.MULTILINE) else False
```

# --preset--

```
my_array = ["John Doe", "Marie Smith", "Karen Dodd"]
```