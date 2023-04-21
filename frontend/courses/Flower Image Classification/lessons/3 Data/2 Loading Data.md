# Introduction

Image classification is a popular deep learning task that involves training a model to categorize images into different classes. 

In this lesson, we will focus on flower image classification using TensorFlow, a powerful deep learning framework. 

Loading our data is crucial to allow us to train and validate our model using actual data!

## Our dataset

For this project, we will use the "Flowers Recognition" dataset, which consists of 4,116 images of flowers belonging to 5 different classes: 

1. daisy 
2. dandelion 
3. rose 
4. sunflower 
5. tulip

The dataset is available on [Tensorflow](https://www.tensorflow.org/datasets/catalog/tf_flowers) and is divided into a training set and a validation set, with 3,670 images, respectively. 

Each image is in RGB format.

## Downloading the dataset

## The Code

To load our dataset we use tensorflow's built-in dataset:

```
import pathlib
import tensorflow as tf

dataset_url = "https://storage.googleapis.com/download.tensorflow.org/example_images/flower_photos.tgz"
archive = tf.keras.utils.get_file(origin=dataset_url, extract=True)
data_dir = pathlib.Path(archive).with_suffix('')
```

## The explanation

- The pathlib library is imported to work with file paths and directories.

- The dataset_url variable contains the URL of the flower image dataset to be downloaded.

- The get_file() function from tf.keras.utils module is used to download the dataset from the given URL and store it in a temporary directory. The origin parameter specifies the URL to download from, and the extract parameter is set to True to automatically extract the downloaded archive.

- The pathlib.Path() function is used to create a Path object from the downloaded archive file path.

- The with_suffix('') method is used to remove the file extension from the archive file path, resulting in the data_dir variable containing the path to the extracted dataset directory.

## Loading the dataset

### Batch size

In machine learning, batch size refers to the number of samples that are processed together in a single iteration during training. 

It is a hyperparameter that determines the number of samples that are passed through the neural network at once during each update of the model's weights.

```
# Define the batch size
batch_size = 32
```

### Load the training dataset

```
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
```

This code is using the tf.keras.preprocessing.image_dataset_from_directory() function to load the flower image dataset from the extracted directory path (data_dir) into memory as a TensorFlow Dataset object.

Here's how the parameters used in the function call work:

data_dir: This is the path to the directory containing the image dataset. The images should be organized in subdirectories representing different classes or labels.

validation_split: This parameter specifies the fraction of the data to be used for validation. In this case, 20% of the data is set aside for validation.

subset: This parameter specifies which subset of the data to load. In this case, "training" is specified, indicating that the training subset of the data should be loaded.

seed: This parameter is used to specify a seed value for shuffling the data. Setting it to a specific value (e.g., 42) ensures that the data is shuffled in a consistent manner across different runs of the code, which can be useful for reproducibility.

image_size: This parameter specifies the size to which the images should be resized. In this case, the images are resized to 256x256 pixels.

batch_size: This parameter specifies the number of images to include in each batch of the dataset. In this case, a batch size of 32 is specified, which means that 32 images will be loaded into memory at a time during training.

The train_dataset object returned by this function call is a TensorFlow Dataset object that represents the training subset of the flower image dataset. It can be used directly for training a machine learning model using TensorFlow, and it provides an efficient way to load and preprocess the data in parallel during training for better performance.

### Load the validation dataset

```
val_dataset = tf.keras.preprocessing.image_dataset_from_directory(
    data_dir,
    validation_split=0.2,
    subset="validation",
    seed=42,
    image_size=(256, 256),
    batch_size=batch_size,
    label_mode="int"
)
```

The validation dataset here is used to see if our predictions are accurate.

## Visualizing the data

### Code

Next up, we can visualize our loaded images using matplotlib!

```
# Get the class names
class_names = train_dataset.class_names

# Visualize the data
import matplotlib.pyplot as plt

plt.figure(figsize=(10, 10))
for images, labels in train_dataset.take(1):
    for i in range(9):
        ax = plt.subplot(3, 3, i + 1)
        plt.imshow(images[i].numpy().astype("uint8"))
        plt.title(class_names[labels[i]])
        plt.axis("off")
plt.show()
```

### Explanation

```
# Get the class names
class_names = train_dataset.class_names
```

In this part of the code, train_dataset is a TensorFlow ImageDataset object that represents the training dataset loaded from the extracted flower image dataset directory. 

The class_names attribute of the ImageDataset object contains a list of class names, which are inferred from the subdirectories in the dataset directory. Each subdirectory represents a different class of flowers, and the class names are automatically extracted from these subdirectories. 

In this code, we simply assign the class_names attribute to a variable class_names for later use in data visualization.

```
# Visualize the data
import matplotlib.pyplot as plt

plt.figure(figsize=(10, 10))
for images, labels in train_dataset.take(1):
    for i in range(9):
        ax = plt.subplot(3, 3, i + 1)
        plt.imshow(images[i].numpy().astype("uint8"))
        plt.title(class_names[labels[i]])
        plt.axis("off")
plt.show()
```

In this part of the code, we use matplotlib library to visualize a few images from the training dataset. The plt.figure() function is called to create a new figure with a size of 10x10 inches. The outer loop for images, labels in train_dataset.take(1): is used to iterate over the first batch of images and labels from the training dataset. The inner loop for i in range(9): is used to iterate over the first 9 images in the batch.

Inside the inner loop, we use plt.subplot() function to create a subplot in a 3x3 grid, with i + 1 as the subplot index. We then use plt.imshow() function to display the image, and plt.title() function to set the title of the subplot to the corresponding class name retrieved from the class_names list using the label of the image. Finally, plt.axis("off") function is called to turn off the axis of the subplot.

After the inner loop completes, plt.show() function is called to display the entire figure with the visualized images of flowers from the training dataset. This helps in visually inspecting the data and gaining insights into the images and their corresponding class labels, which can be useful for understanding the dataset and building an image classification model.

## Conclusion

At this point, your code should look something like this:

```
import pathlib
import tensorflow as tf

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

# Get the class names
class_names = train_dataset.class_names

# Visualize the data
import matplotlib.pyplot as plt

plt.figure(figsize=(10, 10))
for images, labels in train_dataset.take(1):
    for i in range(9):
        ax = plt.subplot(3, 3, i + 1)
        plt.imshow(images[i].numpy().astype("uint8"))
        plt.title(class_names[labels[i]])
        plt.axis("off")
plt.show()
```