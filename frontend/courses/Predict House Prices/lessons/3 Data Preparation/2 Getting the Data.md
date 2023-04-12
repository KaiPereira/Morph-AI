# Getting the Data

In this lesson, we will learn how to get the data we need to build our linear regression model using Sklearn. 

Data is the **foundation** of any machine learning model, and it's important to understand how to obtain and prepare it for analysis. 

## Understanding Data

Data is simply a collection of information that we can use to train our machine learning model. 

It can come in different forms, such as *numbers*, *text*, *images*, or *audio*. 

For example, if we want to build a model to predict the price of houses based on their size, we would need data on house sizes and their corresponding prices.

## Obtaining Data

1. Manually Collecting Data: We can manually collect data by observing and recording information ourselves. For example, we can measure the size of houses and record their prices by visiting different houses in our neighborhood or using a measuring tape and a notebook.

2. Using Existing Datasets: We can also use existing datasets that are available online or provided by others. These datasets can be obtained from websites, databases, or data repositories. For example, we can find datasets on house prices from websites that provide real estate data.

3. Generating Synthetic Data: In some cases, we may need to generate synthetic data if real-world data is not available or insufficient. Synthetic data is artificially created data that resembles real-world data. For example, we can generate synthetic data for a simple linear regression model by using mathematical formulas to create a relationship between house sizes and prices.

For this lesson, we're going to keep it simple and use a dataset from [Kaggle](https://www.kaggle.com/datasets), a great place to get a variety of datasets.

**Please download the dataset [here](https://res.cloudinary.com/dtgjeknbw/raw/upload/v1681265709/Morph%20AI/House_Dataset_epjuvy.csv).**

## Importing the data

### Google Collab

For this project, we're going to be using Google Collab!

Go to:

```
Google Collab -> File -> New Notebook
```

Once you have that setup we're going to start preparing our data

### Loading our Data

Start off by importing the necessary dependencies. Add this to the code block:

```
import pandas as pd
from sklearn.model_selection import train_test_split
```

Next we're going to load the data in using pandas, a data manipulation tool.

**Connect to the runtime by clicking on the *connecting* button in the top right**

**Drag the dataset that you downloaded into the files panel on the *left* side of Google Colab.**

Now we're going to load the dataset. Add this to your code:

```
data = pd.read_csv('/content/House_Dataset.csv')
```

**Make sure** you replace House_dataset.csv with the name of your dataset!

## Conclusion

Now that you've loaded in your first dataset you can view the value of it if you want:

```
data.head()
```

Your code right now should look something like this:

```
import pandas as pd
from sklearn.model_selection import train_test_split

data = pd.read_csv('/content/House_Dataset.csv')

data.head()
```

Nice job! Now we're going to move onto splitting the data!