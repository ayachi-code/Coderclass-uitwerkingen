import pandas as pd

Game_lijst = pd.read_csv("games.csv")
kollomen = ["Name","Platform","Year_of_Release"]


Game_lijst_klein = Game_lijst[kollomen]
Game_lijst_klein_sorteer = Game_lijst_klein.sort_values("Year_of_Release", ascending=False)
Game_lijst_klein_sorteer_platform = Game_lijst_klein_sorteer[Game_lijst_klein_sorteer.Platform == "Wii"]
print(Game_lijst_klein_sorteer_platform.head(5))
