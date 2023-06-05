# --exercise--

# Shopping List Challenge

Now it's time for a challenge with everything you've learned so far. We're going to create a shopping list!

## The challenge

In this challenge we'll create a multi-dimensional shopping list. Then we're going to remove and add values to the list.

# --hints--

Assign a multi-dimensional array to "shopping_list".

```
True if isinstance(shopping_list, list) else False
```

"shopping_list" should have 5 rows, 2 columns. The first column should be the food name and the second should be the price (as an int). Ex. ["food", price]

```
True if len(shopping_list) == 5 and all(len(row) == 2 for row in shopping_list) else False
```

Remove the last element of your "shopping_list" array.

```
import re
pattern = r"^shopping_list.pop\(\)"
True if re.findall(pattern, code, re.MULTILINE) else False
```

Add a new element to the **end** shopping list with the name "mushroom" and a price of 5.

```
True if shopping_list[4] == ["mushroom", 5] else False
```

# --preset--

```
shopping_list = 
```