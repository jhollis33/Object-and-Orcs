const adventurer = {
  name: "Jerry",
  hitPoints: 10,
  belongings: ["Sword", "Potion", "Tums"],
  companion: {
    name: "blaze",
    type: "Dog",
    belongings: ["Chew Toys", "Shampoo", "Health Insurance"]
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
console.log(`One of my companions belongins is ${adventurer.companion.belongings[2]}`);

const movies = [ 
  { title: "Tokyo Story" },  
  { title: "Paul Blart: Mall Cop" }, 
  { title: "L'Avventura" } 
];

console.log(movies[0].title); //Object

//looping over an array of objects
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i].title);  
}

const foo = {
  arr:[1,2,3],
  obj: {
    prop:`object property`
  },
  doSomething:() => {
    console.log(`I did something!`)
  }
}

console.log(foo.arr[0]);
console.log(foo.obj.prop);
foo.doSomething();

//An Array of Arrays 
const foa = [
  [1,2,3],
  ["4","5","6"],
  [7,8,9],
  ()=> {
    console.log(`I am a function inside an array`);
  }
]

console.log(foa[0]);
console.log(foa[0][1]);
console.log(foa[3]());