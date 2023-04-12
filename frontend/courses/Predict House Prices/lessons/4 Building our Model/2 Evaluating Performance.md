# Introduction
 
In this lesson, we will learn about one of the commonly used evaluation metrics, MAE, which is used to assess the performance of regression models. 

We will understand what MAE is, how it is calculated, and how it can be interpreted to evaluate the accuracy of our models.

## What is Mean Square Error(MSE)

Mean Absolute Error (MAE) is a measure of the average absolute difference between the predicted values and the actual values in a regression model. 

It is used to evaluate the accuracy of a model's predictions in terms of the magnitude of the error. 

MAE is calculated as the average of the absolute differences between the predicted values and the actual values.

*PS: You don't need to understand this yet*

```
MAE = (1/n) * Σ |yi - ŷi|
```

where:

- n is the number of samples in the dataset
- yi is the actual value of the target variable for the i-th sample
- ŷi is the predicted value of the target variable for the i-th sample
- | | denotes the absolute value

## Interpretation

A lower MAE value indicates better model performance, as it means the model's predictions are closer to the actual values. 

Conversely, a higher MAE value indicates higher prediction errors and lower accuracy of the model. 

MAE is expressed in the same unit as the target variable, making it easy to interpret.


## Implementation

Sklearn, a popular Python library for machine learning, provides functionality to calculate MAE for evaluating model performance. 

Here's an example of how to calculate MAE using Sklearn:

Import the dependencies:

```
from sklearn.metrics import mean_absolute_error
```

Then add it to the code:

```
mae = mean_absolute_error(prediction, y_test)
```

Once you have that in, you can log it to see how you did!

```
print(mae)
```

This will tell you how accurate your model was in predicting a house price!

## Conclusion

Amazing job, you just made your first Linear Regression model. 

Your code right now should look something like:

```
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error

data = pd.read_csv('./House_Dataset.csv')

objective = data[["SalePrice"]]

feature_vars = ["LotArea", "LotShape", "Utilities"]
training = data[feature_vars]
training = pd.get_dummies(training)

X_train, X_test, y_train, y_test = train_test_split(training, objective)

model = LinearRegression()
model.fit(X_train, y_train)
prediction = model.predict(X_test)

mae = mean_absolute_error(prediction, y_test)

print(mae)
```