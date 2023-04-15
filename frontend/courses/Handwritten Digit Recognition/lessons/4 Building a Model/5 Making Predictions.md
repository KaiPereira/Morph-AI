# introduction

In the previous lessons, we learned how to implement a basic feedforward neural network for handwritten digit recognition using TensorFlow. 

We preprocessed the data, built the neural network architecture, compiled the model, and trained it on the MNIST dataset. 

Now, in this lesson, we will learn how to use our trained model to make predictions on new, unseen images.

## Loading New Images

To make predictions, we need some new images that our model has not seen during training. 

You can either collect your own images of handwritten digits or use existing images. 

For simplicity, let's use the first 5 images from the test set of the MNIST dataset as our new images.

```
# Load new images
new_images = x_test[:5]
```

## Making predictions

Now, we can use our trained model to make predictions on the new images using the predict method.

```
# Make predictions on new images
predictions = model.predict(new_images)
predicted_labels = np.argmax(predictions, axis=1)
```

## Displaying predictions

### Code

We can display the predicted labels and the corresponding images to see how well our model is performing.

```
# Display predictions
import matplotlib.pyplot as plt

# Function to display image and predicted label
def display_prediction(image, label):
    plt.imshow(image.reshape((28, 28)), cmap='gray')
    plt.title("Predicted Label: " + str(label))
    plt.axis('off')
    plt.show()

# Loop through the new images and display predictions
for i in range(len(new_images)):
    display_prediction(new_images[i], predicted_labels[i])
```

### Explanation

1. Importing Matplotlib: The first line of the code imports the Matplotlib library, which is a widely used data visualization library in Python.

2. Defining a Function: The code defines a function called display_prediction that takes an image and a predicted label as inputs. This function is responsible for displaying the image along with the predicted label as the title.

3. Using Matplotlib to Display Images: The plt.imshow() function is used to display the image, which takes the image data as input along with the colormap (cmap) parameter set to 'gray', indicating that the image is grayscale. The plt.title() function is used to set the title of the plot as "Predicted Label: " concatenated with the predicted label converted to a string. The plt.axis() function with parameter 'off' is used to turn off the axes in the plot.

4. Looping Through Predictions: The code then loops through the new images and their corresponding predicted labels using a for loop. For each image, the display_prediction() function is called with the image and predicted label as inputs to display the image along with the predicted label as the title.

5. Displaying the Plot: Finally, the plt.show() function is called to display the plot with the image and predicted label.

Overall, this code snippet is used to display the predicted labels for a set of new images in a Handwritten Digit Recognition task using Matplotlib in Python.

The focus of this course isn't on Matplotlib so we didn't go too in-depth about it!

## Conclusion

Now you can make full predictions using brand new images using your handwritten digit recognition model!

Your final project should look something like this: 

```
import tensorflow as tf
import numpy as np
import matplotlib.pyplot as plt


# Load the MNIST dataset
mnist = tf.keras.datasets.mnist
(x_train, y_train), (x_test, y_test) = mnist.load_data()

# Normalize pixel values to [0, 1]
x_train, x_test = x_train / 255.0, x_test / 255.0

# Flatten the images
x_train = x_train.reshape((-1, 784))
x_test = x_test.reshape((-1, 784))

# Define the neural network architecture
model = tf.keras.models.Sequential([
    tf.keras.layers.Dense(128, activation='relu', input_dim=784),
    tf.keras.layers.Dense(10, activation='softmax')
])

# Compile the model with loss function
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

# Train the model
model.fit(x_train, y_train, epochs=10, batch_size=32)

# Evaluate the model
loss, accuracy = model.evaluate(x_test, y_test)
print("Test Loss:", loss)
print("Test Accuracy:", accuracy)

# Load new images
new_images = x_test[:5]

# Make predictions on new images
predictions = model.predict(new_images)
predicted_labels = np.argmax(predictions, axis=1)

# Function to display image and predicted label
def display_prediction(image, label):
    plt.imshow(image.reshape((28, 28)), cmap='gray')
    plt.title("Predicted Label: " + str(label))
    plt.axis('off')
    plt.show()

# Loop through the new images and display predictions
for i in range(len(new_images)):
    display_prediction(new_images[i], predicted_labels[i])
```

If you run this, you should get some results from your model [digits] labelled with that they are!