I own a construction supply company in Rohan and I build houses, so I need a lot of doors. Do you think you can help me by building a door factory?

## Simple Factory

At first, I will just need basic square doors of varying sizes. Each door should come back in the width and height I request.
Each door should also have a price. Price is calculated by multiplying the area of the door by the per-square-foot cost of the material the door is made out of. Since our buisiness is just starting out, I'll only be building Rohanese long houses so I'll only need doors made out of wood (1 pening / sqft).

## Factory Method

After I've cornered the longhouse buisiness in Rohan, I'm going to want to expand. I'll start selling houses to the humans south of the mountains in Gondor, the orcs to the south west, and the dwarves of Khazad-dun! As an extra challenge, I might even build houses for the hobbits of the shire!

Each of these races has a different sence of style and wants a door made out of a different material. I will tell you what type of customer is ordering the door, and which dimensions you should build the door to. I want you to send me back a door made from the right material.

The humans of Rohan (and the hobbits!)like their doors made out of basic wood, but the Gondorians are more fancy. They require doors made out of steel. The orcs want animal-hide doors and the dwarves want doors made out of iron.

Each material has a different price according to this price sheet:

| Customer Type | Material    | price (penning/sqft) |
| ------------- | ----------- | -------------------- |
| Rohirrim      | wood        | 1                    |
| Gondorian     | steel       | 5                    |
| Orc           | animal hide | 2                    |
| Dwarf         | iron        | 3                    |

Hobbits are extra-challenging because they have round doors, which makes the price calculation tricky.

## Abstract Factory

I've been wasting too much time waiting around for installers to come and install the doors. From now on, I want to easily get contact information for the right type of installer for each door. Each contractor contact information object should include a name, location, and best method of contact. I've put together all their buissiness cards for you. Here is a list of the contractors I use:

| Door Material | Contractor                                                    |
| ------------- | ------------------------------------------------------------- |
| wood          | Fulthain Brodred, Rohan, horse messenger                      |
| steel         | name: Ferui Dorn, location: Minas Tirith, contact: letter     |
| animal hide   | Nag Zhurgha - edge of Mordor, contact _carefully_             |
| iron          | Gadorlig Runeview/ Erebor/ Meet at The Gilded Goblin Festhall |
