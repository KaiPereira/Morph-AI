# Introduction

In image classification tasks, data preprocessing is a crucial step that involves preparing the image data for training a machine learning model. 

Data preprocessing techniques such as data augmentation, normalization, and resizing can significantly impact the performance and generalization ability of the trained model. 

In this lesson, we will explore various data preprocessing techniques using TensorFlow, a popular deep learning framework, for flower image classification.

## Adding preprocessing

### Image preprocessing

Keras is a great tool to easily add preprocessing.

One common preprocessing step in image classification is resizing the images to a consistent size and rescaling the pixel values to a smaller range for easier training. We can use the preprocessing module from Keras to apply these transformations.

```
from keras import layers

input_shape = (256, 256, 3)

# Define the data resizing and rescaling pipeline
resize_and_rescale = tf.keras.Sequential([
  layers.Resizing(input_shape[0], input_shape[1]),
  layers.Rescaling(1./255)
])
```

Here's an explanation of this step:

- The input_shape variable is defined as (256, 256, 3). This represents the expected input shape of the images in the CNN model. The first two values, 256, represent the height and width of the input images, respectively, and the last value, 3, represents the number of color channels in the images (3 for RGB images).

- layers.Resizing: This layer resizes the input images to the specified dimensions input_shape[0] and input_shape[1]. It takes care of resizing the images while maintaining their aspect ratio.

- layers.Rescaling: This layer normalizes the pixel values of the resized images by dividing them by 255.0, which scales them to the range [0, 1]. This is a common practice in image preprocessing to bring the pixel values to a smaller range that is suitable for training neural networks.

### Data augmentation

Data augmentation is a technique used to artificially increase the diversity of the training dataset by applying various transformations to the images, such as rotation, zooming, flipping, etc. 

This helps the model to learn more robust and generalizable features. 

We can use the preprocessing module from Keras to apply data augmentation techniques.

```
# Data augmentation
data_augmentation = tf.keras.Sequential([
  layers.RandomFlip("horizontal"),
  layers.RandomRotation(0.1),
  layers.RandomZoom(0.1),
  layers.RandomContrast(0.1)
])
```

The RandomFlip layer randomly flips the images horizontally, the RandomRotation layer randomly rotates the images by a specified angle, the RandomZoom layer randomly zooms the images by a specified factor, and the RandomContrast layer randomly adjusts the contrast of the images by

## Conclusion

At this point, your code should look something like this:

```
import pathlib
import tensorflow as tf
from keras import layers

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
```