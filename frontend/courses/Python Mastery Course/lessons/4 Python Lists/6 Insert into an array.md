# --exercise--

# Inserting Elements into an Array

In Python, arrays are data structures used to store collections of elements. 

You can insert new elements into an array at specific positions using the insert() method.

The insert syntax is insert(index, element).

## Example

```
# Create an array
numbers = [1, 2, 3, 4, 5]

# Insert an element at a specific index
numbers.insert(2, 10)

# Print the modified array
print(numbers)  # Output: [1, 2, 10, 3, 4, 5]
```

In the example above, we have an array called numbers containing the values [1, 2, 3, 4, 5]. 

We use the insert method to add the element 10 at index 2. The resulting array is [1, 2, 10, 3, 4, 5].

# --hints--

Insert a "ferrari" into index 3 in the "cars" array

```
True if cars[3] == "ferrari" else False
```

# --preset--

```
cars = ["honda", "tesla", "lamborghini", "mercedez", "BMW", "Audi"]
```