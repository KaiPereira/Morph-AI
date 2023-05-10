# Introduction

Decorators are a powerful feature in Python that allow you to modify the behavior of functions or classes without directly changing their source code. 

They provide a clean and efficient way to add functionality to existing functions or classes.

## Understanding Decorators

Decorators are implemented as callables that take a function or class as an argument and return a modified version of that function or class. 

**They are denoted by the @decorator_name syntax, which is placed before the function or class definition.**

Decorators are commonly used for:

- Adding additional functionality to functions or classes
- Modifying the behavior of functions or classes
- Implementing cross-cutting concerns such as logging, timing, or authentication

## Implementing a Decorator

To implement a decorator, you need to define a callable that takes a function as an argument and returns a modified version of that function. 

Here's a basic example of a decorator that adds a simple timer to a function:

```
import time

def timer_decorator(func):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"Execution time: {end_time - start_time} seconds")
        return result
    return wrapper

@timer_decorator
def my_function():
    # Function code here
    pass

my_function()
```

In the example above, the timer_decorator takes a function func as an argument and defines an inner function wrapper. 

The wrapper function wraps the original function, adds the timing functionality, and then calls the original function. 

The modified function is returned by the decorator and assigned back to the original function name.

## Applying Multiple Decorators

You can apply multiple decorators to a function by stacking them using the @decorator syntax. The decorators are applied in the order they appear, from top to bottom. 

Here's an example:

```
def decorator1(func):
    # Decorator 1 implementation

def decorator2(func):
    # Decorator 2 implementation

@decorator1
@decorator2
def my_function():
    # Function code here
    pass
```

In this example, my_function is first decorated with decorator2, and then the result of that decoration is decorated with decorator1. 

The order of decorators is important as it affects the execution flow.

## Class Decorators

In addition to decorating functions, decorators can also be applied to classes. The process is similar, but the decorator function takes a class as an argument instead of a function. 

Here's an example of a class decorator that adds a custom attribute to a class:

```
def custom_attribute_decorator(cls):
    cls.custom_attribute = "Custom Value"
    return cls

@custom_attribute_decorator
class MyClass:
    pass

print(MyClass.custom_attribute)  # Output: Custom Value
```

In this example, the custom_attribute_decorator adds a custom_attribute to the MyClass by modifying the class object itself.

## Conclusion

Decorators are a powerful feature in Python that allow you to modify the behavior of functions or classes without changing their source code. 

They provide a clean and efficient way to add functionality or modify existing behavior. 

By mastering decorators, you can significantly enhance your Python programs.

That's the end of the lesson on decorators! 

Decorators are just one of the many advanced topics in Python that we'll cover in this mastery course.