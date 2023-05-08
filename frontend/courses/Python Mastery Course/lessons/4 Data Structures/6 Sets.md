# Sets

A set is an unordered collection of unique elements. This means that each element in a set appears only once, regardless of how many times it's added. 

Sets are useful when you want to store a collection of items without any duplicates and perform operations like union, intersection, and difference efficiently.

## Creating a Set

To create a set, you can use the set() function or enclose the elements within curly braces {}.

```
# Creating a set using set() function
my_set = set()
my_set.add(1)
my_set.add(2)
my_set.add(3)

print(my_set)  # Output: {1, 2, 3}

# Creating a set using curly braces
another_set = {4, 5, 6}

print(another_set)  # Output: {4, 5, 6}
```

## Set Operations

Sets support various operations for manipulating their contents. Let's explore some common set operations:

### Adding Elements

To add an element to a set, you can use the add() method.

```
my_set = {1, 2, 3}
my_set.add(4)

print(my_set)  # Output: {1, 2, 3, 4}
```

### Removing Elements

To remove an element from a set, you can use the remove() or discard() method.

```
my_set = {1, 2, 3}
my_set.remove(2)

print(my_set)  # Output: {1, 3}

my_set.discard(3)

print(my_set)  # Output: {1}
```

If you try to remove an element that doesn't exist in the set, the remove() method raises a KeyError, while the discard() method does nothing.

## Set Operations: Union, Intersection, and Difference

Sets allow you to perform various operations such as union, intersection, and difference efficiently.

- Union: To combine two sets and get all the unique elements, you can use the union() method or the | operator.

```
set1 = {1, 2, 3}
set2 = {3, 4, 5}

union_set = set1.union(set2)

print(union_set)  # Output: {1, 2, 3, 4, 5}

# Using the | operator
union_set = set1 | set2

print(union_set)  # Output: {1, 2, 3, 4, 5}
```

- Intersection: To get the common elements between two sets, you can use the intersection() method or the & operator.

```
set1 = {1, 2, 3}
set2 = {3, 4, 5}

intersection_set = set1.intersection(set2)

print(intersection_set)  # Output: {3}

# Using the & operator
intersection_set = set1 & set2

print(intersection_set)  # Output: {3}
```

- Difference: To get the elements that are in one set but not in the other, you can use the difference() method or the - operator.

```
set1 = {1, 2, 3}
set2 = {3, 4, 5}

difference_set = set1.difference(set2)

print(difference_set)  # Output: {1, 2}

# Using the - operator
difference_set = set1 - set2

print(difference_set)  # Output: {1, 2}
```

## Set Membership and Subset Operations

Sets provide methods to check for membership and subset relationships.

- Membership: To check if an element is present in a set, you can use the in keyword.

```
my_set = {1, 2, 3}

print(1 in my_set)  # Output: True
print(4 in my_set)  # Output: False
```

- Subset: To check if a set is a subset of another set, you can use the issubset() method or the <= operator.

```
set1 = {1, 2, 3}
set2 = {1, 2, 3, 4, 5}

print(set1.issubset(set2))  # Output: True

# Using the <= operator
print(set1 <= set2)  # Output: True
```

## Set Size and Clearing a Set

Sets provide methods to get the size of a set and clear its contents.

- Size: To get the number of elements in a set, you can use the len() function.

```
my_set = {1, 2, 3}

print(len(my_set))  # Output: 3
```

Clearing a Set: To remove all elements from a set, you can use the clear() method.

```
my_set = {1, 2, 3}

my_set.clear()

print(my_set)  # Output: set()
```

## Conclusion

Congratulations! You have learned about sets in Python. Sets are useful when you want to store a collection of unique elements and perform set operations efficiently. In the next lesson, we will explore another important data structure: dictionaries.

Keep practicing and exploring different operations on sets to reinforce your understanding. Well done!
