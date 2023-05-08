# Dictionaries in Python

In Python, a dictionary is a collection of key-value pairs. Each key-value pair is called an item. Dictionaries are useful when you want to associate a value with a particular key.

## Creating a Dictionary

To create a dictionary, you can use curly braces {} and separate the keys and values with a colon :. 

Here's an example:

```
person = {
    'name': 'John',
    'age': 30,
    'city': 'New York'
}
```

In this example, we've created a dictionary called person with three key-value pairs. The keys are name, age, and city, and the values are 'John', 30, and 'New York', respectively.

You can also create a dictionary using the dict() function. Here's an example:

```
person = dict(name='John', age=30, city='New York')
```

In this example, we've created a dictionary called person with the same three key-value pairs.

## Accessing Items

You can access the value of an item in a dictionary by using its key in square brackets []. 

Here's an example:

```
print(person['name'])
```

This will output 'John', the value associated with the key 'name'.

If you try to access a key that doesn't exist in the dictionary, you'll get a KeyError. To avoid this, you can use the get() method. Here's an example:

```
print(person.get('gender', 'Unknown'))
```

In this example, we're trying to access the value associated with the key 'gender', which doesn't exist in the dictionary. The get() method will return the default value 'Unknown' instead of raising a KeyError.

## Changing Items

You can change the value of an item in a dictionary by assigning a new value to its key. 

Here's an example:

```
person['age'] = 40
```

In this example, we're changing the value associated with the key 'age' from 30 to 40.

## Adding Items

You can add a new item to a dictionary by assigning a value to a new key. Here's an example:

```
person['gender'] = 'Male'
```

In this example, we're adding a new key-value pair 'gender': 'Male' to the dictionary.

## Removing Items

You can remove an item from a dictionary using the del keyword. Here's an example:

```
del person['city']
```

In this example, we're removing the key-value pair associated with the key 'city' from the dictionary.

## Looping through a Dictionary

You can loop through a dictionary using a for loop. By default, the loop will iterate over the keys in the dictionary. 

Here's an example:

```
for key in person:
    print(key, person[key])
```

This will output each key-value pair in the dictionary.

You can also use the items() method to loop through both the keys and values in the dictionary. Here's an example:

```
for key, value in person.items():
    print(key, value)
```

This will output each key-value pair in the dictionary in a more readable format.

## Dictionary Methods

There are several useful methods you can use with dictionaries. Here are a few:

- keys(): returns a list of all the keys in the dictionary.
- values(): returns a list of all the values in the dictionary.
- items(): returns a list of all the key-value pairs in the dictionary as tuples.

Here are some examples of using these methods:

```
# Get a list of keys
keys = person.keys()
print(keys)

# Get a list of values
values = person.values()
print(values)

# Get a list of key-value pairs
items = person.items()
print(items)
```

This will output the following:

```
dict_keys(['name', 'age', 'gender'])
dict_values(['John', 40, 'Male'])
dict_items([('name', 'John'), ('age', 40), ('gender', 'Male')])
```

## Nested Dictionaries

You can also create nested dictionaries, which are dictionaries that contain other dictionaries as values. Here's an example:

```
people = {
    'person1': {
        'name': 'John',
        'age': 30,
        'city': 'New York'
    },
    'person2': {
        'name': 'Jane',
        'age': 25,
        'city': 'San Francisco'
    }
}
```

In this example, we've created a dictionary called people with two key-value pairs. The values are themselves dictionaries, with keys 'name', 'age', and 'city'.

You can access an item in a nested dictionary by chaining multiple square bracket [] operators. Here's an example:

```
print(people['person1']['name'])
```

This will output 'John', the value associated with the key 'name' in the nested dictionary associated with the key 'person1'.

## Conclusion

Dictionaries are a powerful and versatile data structure in Python. They allow you to store and retrieve data using keys instead of indexes, making your code more readable and maintainable. 

With the knowledge you've gained from this lesson, you should be able to create and manipulate dictionaries in your own Python programs.

There are of course more advanced ways to manipulate dictionairies but these are just the basics!