import matplotlib.pyplot as plt
import pandas as pd

Gamelijst = pd.read_csv("games.csv")
Kollomen = ["Name","Platform","Critic_Score"]



Gamelijstklein = Gamelijst[Kollomen]
Gamelijstklein_sorteer = Gamelijstklein.sort_values("Critic_Score",ascending=False)
Gamelijstklein_sorteer_platform = Gamelijstklein_sorteer[Gamelijstklein_sorteer.Platform == "PS3"]

Gamelijstklein_sorteer_platform.plot(kind="bar",x="Name",y="Critic_Score")

plt.show()
