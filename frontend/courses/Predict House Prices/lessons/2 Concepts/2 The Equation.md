# The equation

The Linear Regression equation can be written as follows:

```
y = mx + b
```

where:

- y is the predicted value of the output variable
- m is the slope of the line, which represents how much the output variable changes for a unit change in the input variable
- x is the value of the input variable
- b is the y-intercept, which represents the value of the output variable when the input variable is 0


## Example

Here's an example of the formula:

Let's say we want to predict the *height* (in inches) of a child based on their *age* (in years). 

We have a dataset of 10 children with their corresponding ages and heights as follows:

```
Age (x)    Height (y)
5           40
6           42
7           44
8           46
9           48
10          50
11          52
12          54
13          56
14          58
```

We can use linear regression to find the **best-fit** line that represents the relationship between age (input variable) and height (output variable) in this dataset.

```
Height (y) = Slope (m) * Age (x) + Y-intercept (b)
```

Let's assume the slope m is 2 and the y-intercept b is 30.

```
Height (y) = 2 * Age (x) + 30
```

Now, if we want to predict the height of a child who is 15 years old, we can plug in the value of x into the equation and calculate y:

```
Age (x) = 15
Height (y) = 2 * 15 + 30
Height (y) = 60
```

This is a simple example of how we can use the equation

```
y = mx + b
```

in linear regression to make predictions based on the relationship between input and output variables. 

In **practice**, the slope m and y-intercept b are determined through the training process, and the model is optimized to minimize the difference between predicted and actual values.