
# coding: utf-8

import pandas as pd
from datetime import datetime
import matplotlib.pyplot as plt
get_ipython().run_line_magic('matplotlib', 'inline')
import statsmodels.api as sm

#filename：ファイル名, predict_time：この先の予測期間
def predict_length(filename,predict_time):
    #CSV読み込み
    data = pd.read_csv(filename, index_col='time')
    #print(data.tail())
    # ローカルレベルモデルによる状態推定
    model = sm.tsa.UnobservedComponents(data, 'local level')
    result = model.fit()
    #print(result.summary())
    predicted = result.predict(len(data.index),len(data.index)+predict_time)
    print(predicted)

#predict_length('./data.csv',100)
