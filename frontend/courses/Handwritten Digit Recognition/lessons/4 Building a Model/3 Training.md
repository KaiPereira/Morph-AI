# Introduction

Once we have defined the architecture of our neural network and compiled it, the next step is to train the model on our preprocessed data. 

In this lesson, we will learn how to train a basic feedforward neural network using TensorFlow for handwritten digit recognition.

## Training the model

Now, we can train our neural network using the fit method. 

We need to specify the training data, batch size, and number of epochs (iterations over the entire dataset) to train the model.

```
# Train the model
model.fit(x_train, y_train, epochs=10, batch_size=32)
```

## Explanation

During training, the model will iterate over the training data in batches of size 32 (as specified in batch_size) for 10 epochs (as specified in epochs). 

The model will update its weights and biases based on the computed loss and the optimizer used during compilation.

- Batches: During training, the model processes the data in batches rather than all at once. This is because processing the entire dataset at once may require a lot of memory and computing resources. Batching the data allows the model to update its weights and biases more frequently, leading to faster convergence and better training performance. In this case, the batch size is set to 32, which means that the model will process 32 samples at a time during each iteration of an epoch.

- Epochs: An epoch is a complete iteration through the entire training dataset. During training, the model goes through multiple epochs, where it iterates over the entire dataset in batches, updating its weights and biases at each batch. The number of epochs is a hyperparameter that determines how many times the model will go through the entire dataset during training. In this case, the model is trained for 10 epochs, which means that it will process the entire training dataset 10 times.

- Weight and bias updates: During each iteration of an epoch, the model computes the predicted outputs for the batch of input samples, compares them with the actual labels to compute the loss (a measure of how well the model is performing), and then updates its weights and biases based on the computed loss. The optimizer, which is specified during compilation, determines how these updates are performed. Different optimizers use different techniques to update the weights and biases in order to minimize the loss and improve the model's performance.

## Summary of Explanation

In summary, during training, the model processes the data in batches, updating its weights and biases at each batch, and goes through multiple epochs to iteratively improve its performance based on the computed loss and the optimizer used during compilation. 

This process continues for the specified number of epochs until the model has learned the underlying patterns in the data and is ready for evaluation on the test data.

## Conclusion

Now you've trained your model!

Next, we're going to be evaluating the model performance. 

Your code should look something like this now:

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
```


If you run all of this code, you'll see it running multiple epochs for training!