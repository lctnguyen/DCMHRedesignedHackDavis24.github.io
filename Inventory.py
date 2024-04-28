import pandas as pd

inventory = pd.read_csv('Inventory.csv')

def getItems(item, qty):
  find = inventory["Item"] == item
  inventory.loc[find, "Quantity"] -= qty
  inventory.to_csv("Inventory.csv", index=False)

def addItems(item, qty):
  find = inventory["Item"] == item
  inventory.loc[find, "Quantity"] += qty
  inventory.to_csv("Inventory.csv", index=False)

def sortQty():
  sorted = inventory.sort_values(by=["Quantity"])
  sorted.to_csv("Inventory.csv", index=False)

def createItem(code, item, qty, priority):
  new = {"Code": code, "Item": item, "Quantity": qty, "Priority": priority}
  inventory.loc[len(inventory)] = new
  inventory.to_csv("Inventory.csv", index=False)
  
createItem(10, "Pasta", 25, 0)

print(inventory)