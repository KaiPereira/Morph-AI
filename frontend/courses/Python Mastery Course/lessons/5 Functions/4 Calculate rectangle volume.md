# --exercise--

# Calculate rectangle volume

Now time for a little exercise with everything you've learned.

We're now going to calculate the volume of a rectangle from it's length, width and height as the arguments.

The equation for the volume of a rectangle is: length x width x height.

Let's create the function now!

# --hints--

Create a function called "calculate_volume".

```
True if 'calculate_volume' in locals() else False
```

"calculate_volume" should take in 3 arguments, l, w, h. (In this order)

```
import inspect

arguments = inspect.getfullargspec(calculate_volume)[0]

True if (arguments[0] == "l") and (arguments[1] == "w") and (arguments[2] == "h") else False
```

Return "l" multipled by "w" multipled by "h" in the function

```
True if calculate_volume(3, 3, 3) == 27 else False
```

Call the function with arguments 4, 5, 4 and save it to a variable called result.

```
True if result == calculate_volume(4, 5, 4) else False
```

# --preset--

```
# Put your function down here
```