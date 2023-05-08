# Input

In Python, you can get input from the user using the input() function. The input() function reads a line of text from the user and returns it as a string.

## Basic Input Example

Here's a basic example that prompts the user to enter their name and then prints out a greeting:

```
name = input("Enter your name: ")
print("Hello, " + name + "!")
```

The output of this program would look something like this:

```
Enter your name: John
Hello, John!
```

## Getting Numeric Input

You can also use the input() function to get numeric input from the user. However, you need to convert the input string to a numeric type (int, float, etc.) using the appropriate conversion function.

Here's an example that prompts the user to enter two numbers and then adds them together:

```
num1 = int(input("Enter the first number: "))
num2 = int(input("Enter the second number: "))
sum = num1 + num2
print("The sum is:", sum)
```

In this example, we're using the int() function to convert the input strings to integers before performing the addition.

Note: You'll learn more about build-in functions like int() soon!

## Handling User Input Errors

When using input(), it's important to remember that the user can enter anything they want, including invalid input. For example, if you're expecting a number but the user enters a string, your program will crash with a ValueError exception.

To handle user input errors, you can use a try/except block to catch the exception and handle it gracefully.

Here's an example that demonstrates how to handle a ValueError exception:

```
try:
    num = int(input("Enter a number: "))
    print("The number is:", num)
except ValueError:
    print("That was not a valid number. Please try again.")
```

In this example, if the user enters a string that can't be converted to an integer, the program will print an error message and prompt the user to try again.

We'll learn more about error handing soon!

## Conclusion

That's it for this lesson on Input from the user in Python! Remember that input() function reads a line of text from the user and returns it as a string, and that you can convert the input string to a numeric type (int, float, etc.) using the appropriate conversion function. 

And don't forget to handle user input errors gracefully using try/except blocks.