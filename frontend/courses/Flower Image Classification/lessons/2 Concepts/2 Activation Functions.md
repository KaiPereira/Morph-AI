# Summary

Activation functions play a critical role in neural networks used in deep learning models. 

They introduce non-linearity, allowing neural networks to learn complex patterns from data. In this comprehensive guide, we will explore the different types of activation functions used in deep learning, their properties, and how to choose the right activation function for your neural network.

## What are Activation Functions

**Activation functions are mathematical functions applied to the output of a neuron in a neural network. **

They determine whether the neuron should be activated or not, and if so, to what degree. 

Activation functions introduce non-linearity into the neural network, allowing it to learn complex patterns from data that would not be possible with only linear transformations.

## Importance of activation functions

Activation functions play a crucial role in deep learning for the following reasons:

- Introducing Non-linearity: Linear functions, such as the identity function, cannot capture non-linear patterns in data. Activation functions introduce non-linearity, enabling neural networks to learn complex relationships between input and output.

- Enabling Gradient-based Optimization: Gradient-based optimization methods, such as backpropagation, are widely used for training deep neural networks. Activation functions need to be differentiable to allow the computation of gradients, which are essential for updating weights during training.

- Controlling Neuron Activation: Activation functions control the level of activation of neurons in a neural network. They determine the output range of neurons and can limit the magnitude of the output, preventing neurons from becoming overly active or inactive.