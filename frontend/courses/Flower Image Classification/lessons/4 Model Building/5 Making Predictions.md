# Introduction

In this lesson, we will learn how to make predictions with our trained neural network model using Keras.

We will make predictions and then actually visualize them with the predicted labels!

## Dependencies

First we need to import the necessary libraries for our predictions:

```
import matplotlib.pyplot as plt
import numpy as np
```

Here, we're using:
- Matplotlib for visualizing the images
- Numpy for mathematical operations

## Visualization

### Code

Here's the code we're going to use for visualizing and making predictions:

```
class_names=['daisy', 'dandelion', 'roses', 'sunflowers', 'tulips']

# Iterate over the validation dataset and make predictions
for images, labels in val_dataset:
    # Make predictions on the images
    predictions = model.predict(images)
    
    # Get the predicted label for each image
    predicted_labels = np.argmax(predictions, axis=1)
    
    # Plot the images and the predicted labels
    for i in range(len(images)):
        plt.imshow(images[i].numpy().astype("uint8"))
        plt.title("Predicted: " + str(class_names[int(predicted_labels[i])]))
        plt.show()
```

### Explanation

- The class_names variable is a list containing the names of the flower classes we want to classify (in order that the dataset specifies) - daisy, dandelion, roses, sunflowers, and tulips.

- The for loop iterates over each batch of images and labels in the validation dataset. Within the loop, the model.predict method is used to make predictions on the images. The predictions variable is a numpy array containing the predicted probabilities for each image belonging to each class.

- Next, the argmax method is used to find the index of the class with the highest predicted probability for each image. The predicted_labels variable is a numpy array containing the index of the predicted class for each image.

- Finally, another for loop is used to plot the images and display the predicted class labels. The imshow method is used to display the image, while the title method is used to display the predicted class name for each image. The int method is used to convert the predicted label index from a numpy integer to a regular Python integer, which is then used to index into the class_names list to get the actual class name.

By running this code, we can see the images in the validation dataset along with their predicted class labels. This allows us to visually inspect the performance of our model and see how well it is able to classify the different types of flowers.

## Conclusion

And that's it! We have successfully made predictions with our trained neural network model.

Your code should look something like this now:

```
import pathlib
import tensorflow as tf
from keras import layers
import matplotlib.pyplot as plt
import numpy as np

dataset_url = "https://storage.googleapis.com/download.tensorflow.org/example_images/flower_photos.tgz"
archive = tf.keras.utils.get_file(origin=dataset_url, extract=True)
data_dir = pathlib.Path(archive).with_suffix('')

# Define the batch size
batch_size = 32

# Load the dataset
train_dataset = tf.keras.preprocessing.image_dataset_from_directory(
    data_dir,
    validation_split=0.2,
    subset="training",
    seed=42,
    image_size=(256, 256),
    batch_size=batch_size,
    label_mode="int"
)

val_dataset = tf.keras.preprocessing.image_dataset_from_directory(
    data_dir,
    validation_split=0.2,
    subset="validation",
    seed=42,
    image_size=(256, 256),
    batch_size=batch_size,
    label_mode="int"
)

input_shape = (256, 256, 3)

# Define the data resizing and rescaling pipeline
resize_and_rescale = tf.keras.Sequential([
  layers.Resizing(input_shape[0], input_shape[1]),
  layers.Rescaling(1./255)
])

# Data augmentation
data_augmentation = tf.keras.Sequential([
  layers.RandomFlip("horizontal"),
  layers.RandomRotation(0.1),
  layers.RandomZoom(0.1),
  layers.RandomContrast(0.1)
])


# Define the neural network architecture
model = tf.keras.Sequential([
    # Preprocessing layers
    resize_and_rescale,
    data_augmentation,
    
    # Flatten the input
    layers.Flatten(),
    
    # Hidden layers
    layers.Dense(256, activation='relu'),
    layers.Dense(128, activation='relu'),
    
    # Output layer
    layers.Dense(5, activation='softmax')
])

model.compile(
    optimizer='adam', 
    loss='sparse_categorical_crossentropy', 
    metrics=['accuracy'])

# Define training parameters
num_epochs = 20
learning_rate = 0.001

# Train the model
history = model.fit(
    train_dataset,
    epochs=num_epochs,
    batch_size=batch_size,
    validation_data=val_dataset
)

class_names=['daisy', 'dandelion', 'roses', 'sunflowers', 'tulips']

# Iterate over the validation dataset and make predictions
for images, labels in val_dataset:
    # Make predictions on the images
    predictions = model.predict(images)
    
    # Get the predicted label for each image
    predicted_labels = np.argmax(predictions, axis=1)
    
    # Plot the images and the predicted labels
    for i in range(len(images)):
        plt.imshow(images[i].numpy().astype("uint8"))
        plt.title("Predicted: " + str(class_names[int(predicted_labels[i])]))
        plt.show()
```
