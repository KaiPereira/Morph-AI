# --exercise--

# Multi-Dimensional Arrays

In Python, multi-dimensional arrays are used to store data in multiple dimensions, such as rows and columns. 

They are often referred to as matrices or nested lists.

## Creating a 2-Dimensional Array

To create a 2-dimensional array in Python, you can use a list of lists. Each inner list represents a row, and the elements within that list represent the columns.

Here's an example of creating a 2-dimensional array with 3 rows and 4 columns:

```
# Creating a 2-dimensional array
cars = [["ferrari", "125K"],
          ["tesla", "65K"],
          ["honda", "45K"]]
```

## Accessing Elements in a 2-Dimensional Array

You can access individual elements in a 2-dimensional array by specifying the row and column indices using square brackets.

For example, to access the element in the second row and first column of the matrix:

```
# Accessing an element in a 2-dimensional array
element = matrix[1][0]
print(element)  # Output: "tesla"
```

# --hints--

Name a 2-dimensional array called "my_2d_array". The array should be a list of foods and their price. Ex: ["food", "price"].

```
True if isinstance(my_2d_array, list) else False
```

"my_2d_array" should have at least 3 rows, 2 columns.

```
True if len(my_2d_array) >= 3 and all(len(row) >= 2 for row in my_2d_array) else False
```

Access the third rows, first column using bracket notation and assign it to a variable called "third_row_first_column".

```
True if third_row_first_column == my_2d_array[2][0] else False
```

# --preset--

```
# Put your multi-dimensional array here
```