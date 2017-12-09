import pandas as pd

Bestand_games = pd.read_csv("games.csv")
kollomen = ["Name","EU_Sales","Platform"]


games_klein = Bestand_games[kollomen]
games_klein_sorteer = games_klein.sort_values("EU_Sales",ascending=False)
games_klein_sorteer_playstation = games_klein_sorteer[games_klein_sorteer.Platform == "PS3"]
print(games_klein_sorteer_playstation.head(10))
