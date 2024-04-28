import pandas as pd

inventory = pd.read_csv('Test.csv')

def getItem(item, qty):
  find = inventory["Item"] == item
  inventory.loc[find, "Quantity"] -= qty
  return inventory

def addItem(item, qty):
  find = inventory["Item"] == item
  inventory.loc[find, "Quantity"] += qty
  return inventory

def sortQty():
  sorted = inventory.sort_values(by=["Quantity"])
  return sorted
  
inventory = addItem("Eggs", 9)
inventory.to_csv("Test.csv", index=False)

print(inventory)