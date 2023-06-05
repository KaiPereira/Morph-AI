# --exercise--

# Using .pop()

In Python, you can use the `pop()` method to remove elements from an array. 

The `pop()` method removes and returns the element at the specified index.

## Example

If you don't specify an index, it will remove the last item:

```
# Create an array
fruits = ['apple', 'banana', 'cherry', 'date']

# Remove and return the last element
removed_element = fruits.pop()
print(removed_element)  # Output: 'date'
print(fruits)           # Output: ['apple', 'banana', 'cherry']
```

You can also remove items at a specific index:

```
# Create an array
fruits = ['apple', 'banana', 'cherry', 'date']

# Remove and return the last element
removed_element = fruits.pop(2)
print(removed_element)  # Output: 'cherry'
print(fruits)           # Output: ['apple', 'banana', 'date']
```

# --hints--

Pop the last element in the array and save it to "last_element_removed".

```
True if last_element_removed == "ferrari" else False
```

Pop the car at index 2 and save it to "specific_element_removed".

```
True if specific_element_removed == "tesla" else False
```

# --preset--

```
cars = ["ford", "honda", "tesla", "BMW", "ferrari"]

last_element_removed = 
specific_element_removed = 
```