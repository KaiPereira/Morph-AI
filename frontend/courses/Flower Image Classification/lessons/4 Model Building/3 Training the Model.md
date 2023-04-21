# Introduction

Welcome to the lesson on training a neural network model in TensorFlow using Keras. 

Once we have defined and compiled our model, we can start the training process to optimize the weights of the neural network using our dataset. 

Training a model involves feeding the data through the network, calculating the loss, and updating the weights based on the optimizer's algorithm. 

Let's learn how to train a neural network model in TensorFlow using Keras!

## Define training params

Now, we need to define the parameters for training our model. This includes the number of epochs (i.e., the number of times the model will iterate over the entire dataset during training), the batch size (i.e., the number of samples per update of the weights), and any additional settings such as learning rate, momentum, etc.

```
# Define training parameters
num_epochs = 15
```

## Training the model

### The code

Here's the code for our training model:

```
# Train the model
history = model.fit(
    train_dataset,
    epochs=num_epochs,
    batch_size=batch_size,
    validation_data=val_dataset
)
```

### Explanation

- model: This refers to the compiled neural network model that we defined earlier using Keras. It's the model that we want to train.

- train_dataset: This is the training dataset that we loaded and preprocessed in Step 1. It's the data that we will use to train our model. It should be in the format of a TensorFlow Dataset object, which is a high-performance data loading and preprocessing API provided by TensorFlow.

- epochs: This is the number of times the model will iterate over the entire training dataset during training. One epoch means one pass through the entire dataset.

- batch_size: This is the number of samples per update of the weights. During training, the model doesn't update the weights after each individual sample, but after a certain number of samples called a batch. Batch size determines how many samples are processed at once before updating the weights.

- validation_data: This is the validation dataset that we loaded and preprocessed in Step 1. It's the data that we will use to evaluate the model's performance during training. The model will calculate the loss and accuracy on this validation dataset after each epoch, and the results will be used to monitor the model's performance and make any necessary adjustments.

- history: This is a variable that will store the training history, including the training loss, training accuracy, validation loss, and validation accuracy for each epoch. It can be used later to visualize the training progress and analyze the model's performance.

During training, the model will iterate over the training dataset for the specified number of epochs, and for each epoch, it will calculate the loss, update the weights based on the optimizer's algorithm, and evaluate the performance on the validation dataset. 

The training progress will be displayed with information such as loss, accuracy, and validation loss/accuracy for each epoch. 

Once training is complete, the history object will store the training results, which can be used for further analysis and evaluation of the trained model.

## NOTE

Training your model can take a long time, so it's a good idea to run it with a GPU.

In Google Colab go to:

```
Runtime -> Change runtime type -> Select GPU -> Save
```

This will run the training using a GPU and make it faster.

**You can also reduce the number of epochs your model makes!**

## Conclusion

Now you've fitted your model in keras! Next up we're going to visualize and evalutate out model success!

Your code should look something like this now:

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
num_epochs = 15

# Train the model
history = model.fit(
    train_dataset,
    epochs=num_epochs,
    batch_size=batch_size,
    validation_data=val_dataset
)
```