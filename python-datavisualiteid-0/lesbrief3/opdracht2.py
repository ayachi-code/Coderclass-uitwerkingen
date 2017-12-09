import pandas as pd;

cijfers = pd.Series([8,10,4,6,7,7,6,5,4,9,7,8,4,6,6,6,7,8,7,9,5,10])

hoogstecijfer = cijfers.max()
Laagstecijfer = cijfers.min()
gemidelde = cijfers.mean()
aantal = cijfers.count()

print("hoogste cijfer is " + str(hoogstecijfer))
print("Laagstecijfer is " + str(Laagstecijfer))
print("gemidelde is " + str(gemidelde))
print("Aantal cijfers " + str(aantal))
