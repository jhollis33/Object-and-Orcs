const adventurer = {
  name: "Jerry",
  hitPoints: 10,
  belongings: ["Sword", "Potion", "Tums"],
  companion: {
    name: "blaze",
    type: "Dog"
  }
}

//access the values in the array
console.log(adventurer.belongings)

//Access the first belonging
console.log(`First belonging: ${adventurer.belongings[0]}`);

//iterate over an array inside of an object
for(let i = 0; i < adventurer.belongings.length;i++) {
  console.log(adventurer.belongings[i]);
}

//#1 OBJ within OBJ
console.log(`My companion name is ${adventurer.companion.name}`);