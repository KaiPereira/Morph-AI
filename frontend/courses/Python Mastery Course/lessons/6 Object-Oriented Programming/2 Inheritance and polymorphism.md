# Introduction

Inheritance and polymorphism are two important concepts in object-oriented programming (OOP). In Python, you can create new classes that inherit attributes and methods from existing classes, allowing for code reuse and creating relationships between classes. 

Polymorphism, on the other hand, allows objects of different classes to be treated as if they are of the same class, providing flexibility and modularity in your code.

## Inheritance

Inheritance is a way to create a new class from an existing class. The new class is called the subclass, and the existing class is called the superclass. The subclass inherits all the attributes and methods of the superclass, and can also add its own attributes and methods. 

This allows you to reuse code and avoid duplicating code.

### Defining a Subclass

To define a subclass in Python, you use the class keyword followed by the name of the subclass, and then the name of the superclass in parentheses:

```
class SubclassName(SuperclassName):
    # Subclass attributes and methods go here
```

For example, suppose we have a class Person that has an attribute name and a method speak:

```
class Person:
    def __init__(self, name):
        self.name = name
    
    def speak(self):
        print("Hello, my name is", self.name)
```

We can define a subclass Student that inherits from the Person class:

```
class Student(Person):
    def __init__(self, name, student_id):
        super().__init__(name)
        self.student_id = student_id
    
    def learn(self):
        print(self.name, "is learning.")
```

In this example, the Student class has an additional attribute student_id and a method learn.

### Calling Superclass Methods

Sometimes, you may want to call a method in the superclass from the subclass. To do this, you use the super() function:

```
class SubclassName(SuperclassName):
    def __init__(self, arg1, arg2, ...):
        super().__init__(arg1, arg2, ...)
```

For example, in the Student class, we call the __init__ method of the Person class using super().__init__(name):


```
class Student(Person):
    def __init__(self, name, student_id):
        super().__init__(name)
        self.student_id = student_id
```

### Overriding Superclass Methods

Sometimes, you may want to override a method in the superclass in the subclass. To do this, you define a method in the subclass with the same name as the method in the superclass. The subclass method will replace the superclass method when called from an object of the subclass.

For example, suppose we have a Rectangle class with a method area

```
class Rectangle:
    def __init__(self, width, height):
        self.width = width
        self.height = height
    
    def area(self):
        return self.width * self.height
```

We can define a subclass Square that overrides the area method:

```
class Square(Rectangle):
    def __init__(self, side):
        super().__init__(side, side)
    
    def area(self):
        return self.width ** 2
```

In this example, the Square class has a different implementation of the area method than the Rectangle class. When you call the area method on an object of the Square class, the overridden method in the Square class will be executed.

## Polymorphism

Polymorphism is the ability of objects of different classes to be treated as if they were objects of the same class. This allows you to write code that can work with different types of objects without knowing their specific types. Polymorphism is achieved through method overriding and method overloading.

### Method Overriding

Method overriding occurs when a subclass defines a method with the same name as a method in the superclass. The subclass method replaces the superclass method when called from an object of the subclass. 

This allows you to provide a different implementation of the method in the subclass.

```
class Superclass:
    def method(self):
        # Superclass method implementation

class Subclass(Superclass):
    def method(self):
        # Subclass method implementation
```

For example, consider the following Shape class with a method called draw:

```
class Shape:
    def draw(self):
        print("Drawing a shape")
```

We can define two subclasses, Circle and Rectangle, that override the draw method:

```
class Circle(Shape):
    def draw(self):
        print("Drawing a circle")

class Rectangle(Shape):
    def draw(self):
        print("Drawing a rectangle")
```

In this example, when you call the draw method on an object of type Circle or Rectangle, the corresponding subclass method will be executed.

### Method Overloading

Method overloading occurs when a class defines multiple methods with the same name but different parameters. The appropriate method is selected based on the number and types of arguments provided when the method is called. Python doesn't natively support method overloading, but you can achieve a similar effect using default argument values and variable-length arguments.

For example, suppose we have a class called Math with a method called add:

```
class Math:
    def add(self, a, b):
        return a + b
```

We can define an overloaded version of the add method that takes three arguments:

```
class Math:
    def add(self, a, b, c):
        return a + b + c
```

In this example, you can call the add method with two or three arguments, and the appropriate version of the method will be called based on the number of arguments provided.

## Summary

Inheritance and polymorphism are powerful concepts in object-oriented programming. Inheritance allows you to create new classes based on existing classes, reusing code and adding new functionality. Polymorphism allows objects of different classes to be treated as if they were objects of the same class, enabling code to work with different types of objects without knowing their specific types.

In this lesson, we covered:

- Defining subclasses and superclasses
- Calling superclass methods using super()
- Overriding superclass methods in subclasses
- Achieving polymorphism through method overriding and method overloading

Understanding inheritance and polymorphism will greatly enhance your ability to design and implement complex software systems using Python's object-oriented features.