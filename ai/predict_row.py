import pandas as pd

from sklearn.ensemble import RandomForestRegressor
def predict_length(filename,weekday,hour):
    df = pd.read_csv(filename)
    X = df.loc[:, ['weekday','hour']]
    y = df.loc[:, 'volume']

    regr = RandomForestRegressor(max_depth=2, random_state=0)
    regr.fit(X, y)
    return regr.predict([[ weekday,hour]])
