import pandas as pd

sNum = pd.Series([23,43,102,76,8,98,90])
print (sNum[(sNum < 20) & (sNum > 100)])
