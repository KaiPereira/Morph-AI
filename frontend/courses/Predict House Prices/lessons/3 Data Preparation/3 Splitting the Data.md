# Introduction

Once we have obtained our data, we need to **prepare** it before using it to train our linear regression model. Here are some basic steps to prepare the data:

1. Cleaning Data: We need to ensure that our data is clean and free from errors or inconsistencies. This may involve removing or correcting inaccurate data, filling in missing values, and handling outliers or anomalies.

2. Formatting Data: Our data may need to be formatted in a way that our linear regression model can understand. For example, we may need to convert text data into numerical values, normalize numerical values to a common scale, or one-hot encode categorical variables.

3. Splitting Data: We usually need to split our data into two sets: a training set and a test set. The training set is used to train our linear regression model, while the test set is used to evaluate its performance. This helps us assess how well our model is likely to perform on unseen data.

## Format Your Data

### Prediction Target

When building a model, you have to decide what your goal is from predicting survival rates to stock prices you need to know what your goal is.

From the housing dataset, we want to predict the the price, grab the price using:

```
objective = data[["SalePrice"]]
```

this will grab the objective from the data.

### Training Features

Next you need to have your training features which you will use to predict "SalePrice"

You want to make sure you choose features that are going to be accurate and help with your goals. For example

- LotArea, is probably important for predicting the "SalePrice"
- SaleCondition, might not be very important for predicting "SalePrice" so we probably won't use that.

Using:

```
data.head()
```

figure out which variables you want to include. It's important you don't include too many or your model will actually be less accurate.

Add them into an array like:

```
feature_vars = ["LotArea", "LotShape", "Utilities", etc]
```

**MAKE SURE YOU DON'T INCLUDE THE OBJECTIVE VAR ["SalePrice"] IN THIS!**

Once you have all of your variables, you want to use all of these filters for your training so:

```
training = data[feature_vars]
```

## Non-numerical values

One problem with your model is that some of the features might not be numerical like $10000 or 4567sqf. 

In that case we need to make them **numerical**.

For this we're going to use pd.get_dummies:

```
training = pd.get_dummies(training)
```

## Splitting the data

For our model we also need to split our data into training and testing. We do this to see how accurate we are - comparing our training predictions with testing.

To split our data use:

```
X_train, X_test, y_train, y_test = train_test_split(training, objective)
```

## Conclusion

And that's all for preparing your data. Your code should look something like:

```
import pandas as pd
from sklearn.model_selection import train_test_split

data = pd.read_csv('/content/House_Dataset.csv')

objective = data[["SalePrice"]]

feature_vars = ["LotArea", "LotShape", "Utilities"]
training = data[feature_vars]
training = pd.get_dummies(training)

X_train, X_test, y_train, y_test = train_test_split(training, objective)
```

If you have any problems, feel free to reach out on our [Discord server](https://discord.gg/fMM8SdJ49a).