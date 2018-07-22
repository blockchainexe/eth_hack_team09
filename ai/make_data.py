
# coding: utf-8

# In[73]:


import csv
import datetime
import random


# In[74]:


row_num = [[0,0,0,0,0,0,0,0,3,4,5,6,7,8,7,6,5,7,8,9,8,5,0,0],
           [0,0,0,0,0,0,0,0,6,7,8,4,3,0,0,7, 8,9,1,0,0,0,0,0],
           [0,0,0,0,0,0,0,0,0,0,0,2,3,6,7,8, 9,8,7,6,0,0,0,0],
           [0,0,0,0,0,0,0,0,3,4,5,8,8,3,0, 0,8,8,9,9,8,3,0,0],
           [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3, 4,5,6,7,6,0,0,0],
           [0,0,0,0,0,0,0,0,0,0,0,5,5,7,8,7, 2,2,6,7,8,3,0,0]]
row_num


# In[75]:


for j in range(6):
    fname = 'row_data' + str(j) + '.txt'
    file = open(fname, 'w')  #書き込みモードでオープン
    file.write('time,weekday,hour,volume\n')
    t = datetime.datetime(2017, 8, 1, 0, 0, 0)
    for i in range(500):
        t = t + datetime.timedelta(hours=1)
        str_t = t.strftime('%Y-%m-%d %H:%M:%S') #(t, '%Y/%m/%d %H:%M:%S')
        output = str(str_t)+ ','  + str(t.weekday()) +',' + str(t.hour)+  ',' +str(row_num[j][t.hour]+random.randrange(3)) +'\n'
        file.write(output)
    file.close()

