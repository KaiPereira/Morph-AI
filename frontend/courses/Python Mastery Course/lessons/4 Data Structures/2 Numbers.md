# Numbers

In Python, numbers are a common data type used to represent numerical values. In this lesson, we'll cover the basics of numbers in Python.

## Integer Numbers

Integer numbers are whole numbers without a decimal point. In Python, we can create integer numbers using the int function:

```
x = int(5)
y = int(10)
```

We can also create integer numbers using the standard notation:

```
x = 5
y = 10
```

## Floating-Point Numbers

Floating-point numbers are decimal numbers. In Python, we can create floating-point numbers using the float function:

```
x = float(3.14)
y = float(2.71828)
```

We can also create floating-point numbers using the standard notation:

```
x = 3.14
y = 2.71828
```

## Type Conversion

Python allows us to convert between different types of numbers. We can convert integer numbers to floating-point numbers using the float function:

```
x = 5
y = float(x)
```

We can also convert floating-point numbers to integer numbers using the int function. Note that this operation will truncate any decimal places:

```
x = 3.14
y = int(x)
```

We can also convert numbers to strings using the str function:

```
x = 5
y = str(x)
```

## Number Systems

In addition to decimal numbers, Python also supports binary, octal, and hexadecimal numbers. 

Binary numbers are represented by a leading 0b or 0B, octal numbers are represented by a leading 0o or 0O, and hexadecimal numbers are represented by a leading 0x or 0X. 

For example:

```
x = 0b1010  # binary representation of 10
y = 0o12    # octal representation of 10
z = 0xA     # hexadecimal representation of 10

print(x)
```

We can convert numbers from one system to another using the bin, oct, and hex functions. For example:

```
x = 10
y = bin(x)  # binary representation of 10
z = oct(x)  # octal representation of 10
w = hex(x)  # hexadecimal representation of 10

print(y)    # Output: 0b1010
print(z)    # Output: 0o12
print(w)    # Output: 0xa
```

## Complex Numbers

In addition to real numbers, Python also supports complex numbers. Complex numbers are represented by a real part and an imaginary part, separated by a + or - sign, and ending with a j or J to indicate the imaginary unit. 

For example:

```
x = 2 + 3j
y = 4 - 2j
z = 1j

print(x)    # Output: (2+3j)
print(y)    # Output: (4-2j)
print(z)    # Output: 1j
```

We can perform arithmetic operations on complex numbers using the standard arithmetic operators. 

For example:

```
x = 2 + 3j
y = 4 - 2j

print(x + y)  # Output: (6+1j)
print(x - y)  # Output: (-2+5j)
print(x * y)  # Output: (14+8j)
print(x / y)  # Output: (-0.1+0.7j)
```

Note that the floor division (//) and modulus (%) operators do not make sense with complex numbers.

## Conclusion

That concludes our lesson on numbers in Python. In summary, we covered integers, floating-point numbers, type conversion, number systems, and complex numbers. 

These are the fundamental concepts you need to know about numbers to begin programming in Python.