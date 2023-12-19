// Functional PRogramming

// function log() {
//   console.log("start");
// }

// setTimeout(log, 3000);

// console.log("end");

const animals = ["lion", "giraffe", "monkey", "dog"];

const newArr = animals
  .map((oneAnimal, idx) => `${idx} - ${oneAnimal} is dangerous !`)
  .filter((ani) => {
    return ani.includes("ff");
  });

// console.log(newArr);

// ------- filter -------

const filterAnimals = animals.filter((element) => {
  return element.length <= 3;
});

// console.log(filterAnimals);

// ----------------
const people = Object.freeze([
  { name: "Bob", age: 33 },
  { name: "Alice", age: 25 },
  { name: "Sue", age: 20 },
]);

const newPoeple = people.map((person) => {
  return `${person.name} is ${person.age} years old!`;
});

// console.log(newPoeple);

const filterPeople = people.filter((person) => {
  return person.age >= 30;
});

// console.log(filterPeople);

// ------------------

const pokemon = Object.freeze([
  { id: 1, name: "Bulbasaur", types: ["poison", "grass"] },
  { id: 5, name: "Charmeleon", types: ["fire"] },
  { id: 9, name: "Blastoise", types: ["water"] },
  { id: 12, name: "Butterfree", types: ["bug", "flying"] },
  { id: 16, name: "Pidgey", types: ["normal", "flying"] },
  { id: 23, name: "Ekans", types: ["poison"] },
  { id: 24, name: "Arbok", types: ["poison"] },
  { id: 25, name: "Pikachu", types: ["electric"] },
  { id: 37, name: "Vulpix", types: ["fire"] },
  { id: 52, name: "Meowth", types: ["normal"] },
  { id: 63, name: "Abra", types: ["psychic"] },
  { id: 67, name: "Machamp", types: ["fighting"] },
  { id: 72, name: "Tentacool", types: ["water", "poison"] },
  { id: 74, name: "Geodude", types: ["rock", "ground"] },
  { id: 87, name: "Dewgong", types: ["water", "ice"] },
  { id: 98, name: "Krabby", types: ["water"] },
  { id: 115, name: "Kangaskhan", types: ["normal"] },
  { id: 122, name: "Mr. Mime", types: ["psychic"] },
  { id: 133, name: "Eevee", types: ["normal"] },
  { id: 144, name: "Articuno", types: ["ice", "flying"] },
  { id: 145, name: "Zapdos", types: ["electric", "flying"] },
  { id: 146, name: "Moltres", types: ["fire", "flying"] },
  { id: 148, name: "Dragonair", types: ["dragon"] },
]);

const bPokemon = pokemon.filter((poke) => poke.name[0] === "B");

// console.log(bPokemon);

// an array containing just the first type of all the pokemon whose second type is "flying"

const newPoke = pokemon
  .filter((poke) => {
    return poke.types[1] === "flying";
  })
  .map((p) => {
    return `${p.name}'s first type is ${p.types[0]}`;
  });

console.log(newPoke);
