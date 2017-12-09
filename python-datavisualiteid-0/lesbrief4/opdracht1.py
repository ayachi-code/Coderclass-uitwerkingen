import pandas as pd


games = pd.read_csv("games.csv")
kollomen = ["Name","EU_Sales"]
games_klein = games[kollomen]
print(games_klein.head(15))
