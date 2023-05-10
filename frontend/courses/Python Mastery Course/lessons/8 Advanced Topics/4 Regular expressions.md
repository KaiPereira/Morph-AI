# Regular Expressions

Regular expressions (regex) are powerful tools for pattern matching and manipulation of text. 

In Python, we can use the re module to work with regular expressions. In this lesson, we'll cover the basics of regular expressions and how to use them effectively.

## What they are

Regular expressions are a sequence of characters that define a search pattern. They can be used to match, search, and manipulate strings based on certain patterns. 

Regular expressions provide a concise and flexible way to find, extract, and manipulate text data.

## Basic Regular Expression Syntax

Regular expressions in Python use a combination of special characters and literal characters to define a pattern. 

Here are some basic elements of regular expression syntax:

**Literal Characters: Any characters that are not special characters in regex are treated as literal characters. For example, the pattern "hello" matches the string "hello" exactly.**

**Character Classes: Character classes allow us to specify a set of characters to match. Some common character classes are:**

[0-9]: Matches any digit.
[a-z]: Matches any lowercase letter.
[A-Z]: Matches any uppercase letter.
[a-zA-Z0-9]: Matches any alphanumeric character.

**Quantifiers: Quantifiers define the number of times a character or a group of characters can occur. Some common quantifiers are:**

*: Matches zero or more occurrences.
+: Matches one or more occurrences.
?: Matches zero or one occurrence.
{n}: Matches exactly n occurrences.
{n,}: Matches n or more occurrences.
{n,m}: Matches between n and m occurrences.


**Anchors: Anchors are used to match patterns at specific positions in a string. Some common anchors are:**

^: Matches the start of a string.
$: Matches the end of a string.
\b: Matches a word boundary.

## Using the re Module

In Python, we can work with regular expressions using the re module. 

Here are some commonly used functions and methods from the re module:

- re.match(pattern, string): Checks if the pattern matches at the beginning of the string.

- re.search(pattern, string): Searches the string for a match to the pattern.

- re.findall(pattern, string): Returns all non-overlapping matches of the pattern in the string as a list.

- re.sub(pattern, replacement, string): Replaces occurrences of the pattern in the string with the replacement.

## Examples

Let's see some examples of using regular expressions in Python:

```
import re

# Match a pattern at the beginning of a string
pattern = r"^Hello"
string = "Hello, World!"
match = re.match(pattern, string)
print(match)  # Output: <re.Match object; span=(0, 5), match='Hello'>

# Search for a pattern in a string
pattern = r"\d+"
string = "I have 10 apples and 5 oranges."
match = re.search(pattern, string)
print(match.group())  # Output: 10

# Find all occurrences of a pattern in a string
pattern = r"\b\w{4}\b"
string = "This is a test string with some words."
matches = re.findall(pattern, string)
print(matches)  # Output: ['This', 'test', 'with', 'some']
```

### Replace occurrences of a pattern in a string

```
pattern = r"apple"
replacement = "banana"
string = "I have an apple."
new_string = re.sub(pattern, replacement, string)
print(new_string) # Output: "I have an banana."
```

## Conclusion

In these examples, we demonstrated the usage of regular expressions in Python. We used re.match() to check if a pattern matches at the beginning of a string, re.search() to search for a pattern in a string and retrieve the match, re.findall() to find all occurrences of a pattern in a string, and re.sub() to replace occurrences of a pattern in a string.

Regular expressions offer a powerful way to work with text data and perform complex pattern matching operations. By mastering regular expressions, you can efficiently extract and manipulate information from strings in Python.

That concludes our lesson on regular expressions. Next, we'll move on to another advanced topic.