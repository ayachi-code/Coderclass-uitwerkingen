import matplotlib.pyplot as plt
import pandas as pd



Gamelijst = pd.read_csv("games.csv")
Kollomen = ["Genre","NA_Sales","EU_Sales","JP_Sales","Other_Sales","Global_Sales"]


Gamelijst_klein = Gamelijst[Kollomen]
Gamelijst_klein_groep = Gamelijst_klein.groupby("Genre")
Totaal = Gamelijst_klein_groep.count()


Totaal.plot(kind="bar",stacked=True)
plt.show()
