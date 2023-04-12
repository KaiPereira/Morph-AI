# Building the Model

## Import from Sklearn

First we need to implement Sklearn for the Linear Regression Model

```
from sklearn.linear_model import LinearRegression
```

## Add the model

We've already loaded and preprocessed the data, so now create and train the linear regression model using Sklearn's LinearRegression class. 

Here's an example of how to do it:

```
model = LinearRegression()
```

## Train the model

Now, we're going to use our X_train and y_train to train/fit our model to make it able to predict what we want:

```
model.fit(X_train, y_train)
```

## Making predictions

After training the model, we can use it to make predictions on new data. 

We can use the predict() method of the trained model to predict the target variable (y) based on the predictor variable (X) values. 

Here's an example of how to do it:

```
prediction = model.predict(X_test)
```

The predict() method returns an array of predicted target variable values based on the new predictor variable values.

## Conclusion

Now you've prepared your data and now have a model predicting house value. If you want to see your results do:

```
print(prediction)
```

Next we're going to see how our model scored and graph results!!
