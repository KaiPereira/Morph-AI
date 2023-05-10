# Introduction

In this lesson, we will explore how to work with file paths in Python. 

File paths are essential when working with files and directories on your computer. Understanding how to manipulate file paths correctly will help you navigate and manipulate files in your programs efficiently.

## Absolute vs Relative Paths

Before we dive into manipulating file paths, let's understand the difference between absolute and relative paths:

- Absolute Path: An absolute path refers to the complete path starting from the root directory. For example, /Users/johndoe/Documents/myfile.txt is an absolute path on a Unix-based system.

- Relative Path: A relative path refers to the path relative to the current working directory. For example, if your current working directory is /Users/johndoe/Documents, a relative path could be myfile.txt if the file is in the current working directory.

Understanding the distinction between absolute and relative paths is crucial for correctly referencing files and directories.

## Navigating Directories

Python provides a module called os that allows you to interact with the operating system, including navigating directories. 

Here are some essential functions for navigating directories:

- os.getcwd(): Returns the current working directory as a string.
- os.chdir(path): Changes the current working directory to the specified path.
- os.listdir(path): Returns a list of files and directories in the specified path.

Using these functions, you can navigate through directories in your programs.

## Working with File Paths

Python provides the os.path module with various functions to manipulate file paths. Let's explore some commonly used functions:

### Joining Paths

To concatenate directory paths and file names correctly, you can use the os.path.join() function. 

This function takes multiple path components and joins them into a single path, handling any necessary separators:

```
import os

path = os.path.join('/path/to/directory', 'filename.txt')
print(path)  # Output: /path/to/directory/filename.txt
```

### Getting the Filename

If you have a file path, you might need to extract the filename from it. The os.path.basename() function allows you to retrieve the base filename from a path:

```
import os

path = '/path/to/directory/filename.txt'
filename = os.path.basename(path)
print(filename)  # Output: filename.txt
```

### Getting the Directory

Conversely, you might want to extract the directory path from a file path. The os.path.dirname() function can be used to obtain the directory component of a path:

```
import os

path = '/path/to/directory/filename.txt'
directory = os.path.dirname(path)
print(directory)  # Output: /path/to/directory
```

### Checking Path Existence

To check if a file or directory exists at a given path, you can use the os.path.exists() function:

```
import os

path = '/path/to/file_or_directory'

if os.path.exists(path):
    print(f"{path} exists!")
else:
    print(f"{path} does not exist!")
```

The os.path.exists() function returns True if the specified path exists, whether it's a file or directory. 

You can use this function to verify the existence of a path before performing further operations.

### Checking if Path is a File or Directory

In addition to checking the existence of a path, you might want to determine whether it's a file or a directory. 

For this purpose, you can use the os.path.isfile() and os.path.isdir() functions:

```
import os

path = '/path/to/file_or_directory'

if os.path.isfile(path):
    print(f"{path} is a file!")
elif os.path.isdir(path):
    print(f"{path} is a directory!")
else:
    print(f"{path} does not exist!")
```

The os.path.isfile() function returns True if the specified path is a file, while os.path.isdir() returns True if it's a directory. 

These functions allow you to perform different operations based on the type of path.

## Conclusion


In this lesson, we covered the basics of working with file paths in Python. Understanding how to manipulate file paths correctly is crucial for navigating and manipulating files and directories in your programs. 

We explored functions to join paths, extract the filename and directory, and check path existence and type. By mastering these concepts, you'll be better equipped to handle file operations in Python.

In the next lesson, we'll dive into advanced topics such as exception handling. Stay tuned!