import pandas as pd

inventory = pd.read_csv('Inventory.csv')

# Check out items / Keep track of demands
def getItems(item, qty):
  find = inventory.index[inventory["Item"] == item].tolist()[0]
  if (inventory.loc[find, "Quantity"] < 1):
    print("Out of stock")
  elif (qty > inventory.loc[find, "Quantity"]):
    print("Not enough items")
  else:
    inventory.loc[find, "Quantity"] -= qty
    
  # Keep track of the demands
  inventory.loc[find, "Taken"] += qty
  if (inventory.loc[find, "Taken"] > 20):
    inventory.loc[find, "Taken"] = 1
  
  inventory.to_csv("Inventory.csv", index=False)
  

# Add more items to inventory
def addItems(item, qty):
  find = inventory.index[inventory["Item"] == item].tolist()[0]
  inventory.loc[find, "Quantity"] += qty
  inventory.to_csv("Inventory.csv", index=False)

# Sort inventory by quantity
def sortQty():
  sorted = inventory.sort_values(by=["Quantity"])
  sorted.to_csv("Inventory.csv", index=False)

# Create a new item
def createItem(code, item, qty, priority):
  new = {"Code": code, "Item": item, "Quantity": qty, "Priority": priority}
  inventory.loc[len(inventory)] = new
  inventory.to_csv("Inventory.csv", index=False)

print(inventory)