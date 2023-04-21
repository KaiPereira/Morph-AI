# Introduction

Welcome to the lesson on compiling a neural network model in TensorFlow using Keras. 

Once we have defined the architecture of our neural network, we need to compile it before we can start training it on our dataset. 

Compiling the model involves configuring various settings that affect the training process, such as the optimizer, loss function, and metrics to evaluate the model's performance. 

Let's learn how to compile a neural network model in TensorFlow using Keras!

## The compiler

### Code

Here's the code for the compiler:

```
model.compile(
    optimizer='adam', 
    loss='sparse_categorical_crossentropy', 
    metrics=['accuracy'])
```

### Explanation

- Optimizer: The optimizer is an algorithm that adjusts the weights of the neural network during training to minimize the loss function. In this example, we are using the 'adam' optimizer, which is a popular optimizer that is known for its fast convergence and good performance on various tasks.

- Loss Function: The loss function is a mathematical function that measures the difference between the predicted output and the true output (labels) for each sample in the training dataset. The goal of training is to minimize the value of the loss function. In this example, we are using the 'categorical_crossentropy' loss function, which is commonly used for multi-class classification problems.

- Metrics: Metrics are used to evaluate the performance of the model during training. In this example, we are using the 'accuracy' metric, which measures the percentage of correctly predicted samples out of the total samples in the dataset.

## Conclusion

In this lesson, we learned how to compile a neural network model in TensorFlow using Keras. We discussed the importance of compiling the model to configure various settings for the training process, such as the optimizer, loss function, and metrics.

Now, we are ready to move on to the next step, which is training the model on our dataset!