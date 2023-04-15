# Introduction

In this course we'll be introducing the data and preprocessing for our Handwritten Digit Recognizer!

## Start up a project

For this project, we're going to be using Google Collab.

Go to [Google Collab](https://colab.research.google.com/)

Create a new project by going to:

```
File -> New Notebook
```

And that's all, let's get programming!!

## Load the dataset

First we need to import the necessary libraries:

```
import tensorflow as tf
import numpy as np
```

Next, we will load the MNIST dataset, which is a popular dataset for handwritten digit recognition. 

The dataset consists of 60,000 training images and 10,000 test images, with each image being a 28x28 grayscale image.

```
# Load the MNIST dataset
mnist = tf.keras.datasets.mnist
(x_train, y_train), (x_test, y_test) = mnist.load_data()
```

## Preprocessing the data

### Normalizing

The pixel values in the MNIST dataset images range from 0 to 255, where 0 represents a completely dark pixel and 255 represents a completely bright pixel. 

We normalize(scale back) these pixel values to a range of [0, 1] by dividing all the pixel values by 255.0. 

This normalization helps in ensuring that all the features (pixel values) are on a similar scale, which can help in improving the training process and model performance.

```
# Normalize pixel values to [0, 1]
x_train, x_test = x_train / 255.0, x_test / 255.0
```


### Flattening

The original images in the MNIST dataset are grayscale images of size 28x28 pixels. 

However, most neural networks take input data in the form of a 1D array or vector. 

So, we flatten the images from a 2D array of size 28x28 to a 1D array of size 784 (28x28 = 784) using the reshape method. 

This reshaping allows us to convert the 2D images into a 1D representation that can be fed into the neural network as input.

```
# Flatten the images
x_train = x_train.reshape((-1, 784))
x_test = x_test.reshape((-1, 784))
```

## Conclusion

Now you've preprocess all of your data!

Your current code should look like:

```
import tensorflow as tf

# Load the MNIST dataset
mnist = tf.keras.datasets.mnist
(x_train, y_train), (x_test, y_test) = mnist.load_data()

# Normalize pixel values to [0, 1]
x_train, x_test = x_train / 255.0, x_test / 255.0

# Flatten the images
x_train = x_train.reshape((-1, 784))
x_test = x_test.reshape((-1, 784))
```