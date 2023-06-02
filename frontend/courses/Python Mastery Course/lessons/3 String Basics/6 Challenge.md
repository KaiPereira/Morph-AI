# --exercise--

# Challenge

Now it's time for a little challenge! 

Utilizing everything you learned, let's create a dynamic sentence that will change whenever people alter the inputs!

# --hints--

Fill out the last, middle and last name.

```
True if len(first) > 0 and len(middle) > 0 and len(last) > 0 else False
```

Fill out your age.

```
True if isinstance(age, int) else False
```

Assign the len of your first, middle and last name concatenated (with a space in-between) to "name_characters_long".

```
True if name_characters_long == len(f"{first} {middle} {last}") else False
```

Replace all of the inputs in the sentence using f/format strings.

```
True if sentence == f"Hello! My name is {first} {middle} {last}, My full name is {name_characters_long} characters long. I'm {age} years old" else False
```

Print "sentence" to the console.

```
import re
pattern = r"^print\(sentence\)"
True if re.findall(pattern, code, re.MULTILINE) else False
```

# --preset--

```
first, middle, last = "", "", ""

age = 

name_characters_long = 

sentence = "Hello! My name is {} {} {}, My full name is {} characters long. I'm {} years old"
```
