# Introduction

Welcome to our lesson on loss functions! 

In this lesson, we will learn about an important concept in machine learning called "loss functions" and how they help us measure the mistakes our models make. Let's get started!

## What are loss functions

Loss functions are like a tool that helps us measure how good or bad our models are at making predictions.

Imagine you are playing a game of darts, and your goal is to hit the bullseye. The closer your dart lands to the bullseye, the better you are doing. Loss functions work in a similar way - they measure how close our model's predictions are to the actual outcomes.

Here's an example of a loss function. The arrows represent the loss.

![Loss Function](https://developers.google.com/machine-learning/crash-course/images/LossSideBySide.png)

**Credit [Google Developers](https://developers.google.com/machine-learning/crash-course/descending-into-ml/training-and-loss#:~:text=Loss%20is%20the%20penalty%20for,otherwise%2C%20the%20loss%20is%20greater.)**

## Why they are important

Loss functions have a ton of important aspects. Some include:

- Loss functions help us train our models to make better predictions over time.

- When we train a model, it makes predictions based on the data it has seen. The loss function then calculates how different those predictions are from the 

- actual outcomes, and this difference is called "loss" or "error."
Our goal is to minimize the loss or error, which means making our model's predictions as close as possible to the actual outcomes.

## How do Loss Functions actually help

Loss functions help us to understand how well our model is doing and guide it towards making better predictions.

When the loss is high, it means our model's predictions are not close to the actual outcomes, and we need to make adjustments to our model to reduce the loss.

During training, our model tries to minimize the loss by adjusting its parameters. It's like practicing darts and adjusting your aim to get closer to the bullseye.

With each adjustment, our model gets better at making predictions, and the loss decreases. This process continues until our model becomes really good at making accurate predictions.