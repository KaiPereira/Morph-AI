# introduction

After training our model, it's essential to evaluate its performance. We can do this by using the evaluate() method in Keras. 

This method will give us the values of the loss and accuracy of our model on the validation dataset.

## How to evaluate

Here's how we can evaluate our model:

```
# Evaluate the model
loss, accuracy = model.evaluate(val_dataset)

# Print the model's accuracy and loss
print("Accuracy:", accuracy)
print("Loss:", loss)
```

This will print the accuracy and loss of our model on the validation dataset.

## Visualizing the model

We can visualize our model's training and validation accuracy and loss using the matplotlib library. This will help us understand the performance of our model and identify if there are any overfitting or underfitting issues.

Here's how we can visualize the accuracy and loss of our model:

```
import matplotlib.pyplot as plt

# Plot the accuracy of the model
plt.plot(history.history['accuracy'])
plt.plot(history.history['val_accuracy'])
plt.title('Model Accuracy')
plt.ylabel('Accuracy')
plt.xlabel('Epoch')
plt.legend(['train', 'val'], loc='upper left')
plt.show()

# Plot the loss of the model
plt.plot(history.history['loss'])
plt.plot(history.history['val_loss'])
plt.title('Model Loss')
plt.ylabel('Loss')
plt.xlabel('Epoch')
plt.legend(['train', 'val'], loc='upper left')
plt.show()
```

All of this just uses the training results to plot our results!
