# Introduction

In this lesson, we'll explore how to read from and write to files in Python. File handling is an essential skill in programming as it allows us to work with external data and persist information. 

We'll cover the basics of file handling, including reading and writing files.

## Last lesson

In the last lesson, we covered opening and closing files using the open() and close().

Now we'll check out manipulating these.

## Reading from a File

To read from a file, we can use the read() or readline() methods. The read() method reads the entire contents of the file, while readline() reads a single line at a time.

```
# Read the entire file
content = file.read()

# Read a single line
line = file.readline()
```

After reading the file, the file pointer advances, so subsequent calls to readline() will return the next line.

## Writing to a File

To write to a file, we can use the write() method. It allows us to write data to the file. If the file doesn't exist, the write() method will create it.

```
file.write("Hello, world!")
```

We can also write multiple lines by using the newline character (\n).

```
file.write("Line 1\n")
file.write("Line 2\n")
```

## Closing a File

After we finish working with a file, it's important to close it using the close() method. Closing a file releases the system resources associated with it.

```
file.close()
```

It's a good practice to close the file when we no longer need it.

## Conclusion

In this lesson, we learned how to read from and write to files in Python. We covered opening a file, reading its contents, writing to it and closing the file properly.

By understanding file handling in Python, you can interact with external data sources, store and retrieve information, and perform various data processing tasks.