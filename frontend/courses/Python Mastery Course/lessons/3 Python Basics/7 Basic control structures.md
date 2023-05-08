# Basic Control Structures

In programming, control structures are used to control the flow of execution of code. 

Control structures determine which statements in the code are executed, and in what order they are executed. 

In this lesson, we'll cover the basic control structures in Python: if statements and loops.

## If Statements

If statements are used to execute a block of code if a certain condition is true. Here's the basic syntax of an if statement:

```
if condition:
    # Code to execute if condition is true
```

The **condition** is an expression that evaluates to either True or False. If it evaluates to True, the code inside the if statement is executed. If it evaluates to False, the code inside the if statement is skipped.

Here's an example:

```
x = 5

if x > 0:
    print("x is positive")
```

In this example, the condition is x > 0. Since x is 5, which is greater than 0, the code inside the if statement is executed, and the output is:

```
x is positive
```

## Else Statements

Sometimes we want to execute a different block of code if the condition in an if statement is false. In that case, we can use an else statement. Here's the syntax:

```
if condition:
    # Code to execute if condition is true
else:
    # Code to execute if condition is false
```

Here's an example:

```
x = -2

if x > 0:
    print("x is positive")
else:
    print("x is not positive")
```

In this example, the condition is x > 0, but since x is -2, the condition is false. Therefore, the code inside the else statement is executed, and the output is:

```
x is not positive
```

## Elif Statements

Sometimes we want to check multiple conditions, and execute a different block of code depending on which condition is true. 

In that case, we can use an elif statement. 

Here's the syntax:

```
if condition1:
    # Code to execute if condition1 is true
elif condition2:
    # Code to execute if condition2 is true
else:
    # Code to execute if neither condition1 nor condition2 is true
```

Here's an example:

```
x = 0

if x > 0:
    print("x is positive")
elif x < 0:
    print("x is negative")
else:
    print("x is zero")
```

In this example, the condition x > 0 is false, so we move on to the next condition, x < 0. This condition is also false, so we move on to the else statement, and the output is:

```
x is zero
```

## Loops

Loops are used to execute a block of code repeatedly. There are two types of loops in Python: for loops and while loops.

### For Loops

For loops are used to iterate over a sequence of values, such as a list or a string. Here's the syntax of a for loop:

```
for variable in sequence:
    # Code to execute for each value in sequence
```

The variable is a new variable that takes on each value in the sequence, one at a time. Here's an example:

```
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)
```

In this example, the fruits list is iterated over, and the output is:

```
apple
banana
cherry
```

### While Loops

While loops are used to execute a block of code repeatedly as long as a certain condition is true. Here's the syntax of a while loop:

```
while condition:
    # Code to execute while condition is true
```

The **condition** is an expression that evaluates to either True or False. The code inside the while loop is executed repeatedly as long as the condition is true. Here's an example:

```
i = 0

while i < 5:
    print(i)
    i += 1
```

In this example, the condition is i < 5. The code inside the while loop is executed repeatedly as long as i is less than 5. The output is:

```
0
1
2
3
4
```

## Conclusion

In this lesson, we covered the basic control structures in Python: if statements and loops. 

If statements are used to execute a block of code if a certain condition is true. Else statements are used to execute a different block of code if the condition is false. 

Elif statements are used to check multiple conditions and execute a different block of code depending on which condition is true. For loops are used to iterate over a sequence of values, and while loops are used to execute a block of code repeatedly as long as a certain condition is true.

Of course there are a few more iterative methods, but these ones are the basics.