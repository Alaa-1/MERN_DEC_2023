// ==== Scope ====

// var name = "John";

// function sayHi(){
//     console.log(name);
//     name = "alice"
// }

// sayHi();
// console.log(name);


// === Hoisting ===

// console.log("what is x?", x);
// const x = 3;

// let message = "How are you doing ?"
// message = "I'm good"

// console.log(message);
// ==== primitives =====
// string
// number
// boolean
// undefined/null
// === Composite Types ===
// arrays
// objects
// const numbers = [55,88,99]
// numbers[0] = 101;
// numbers.push(85)
// console.log(numbers);
//! pass by refernce
// const arr1 = [1,2,3,4]
// const arr2 = arr1

// arr1.push(101)
// arr2.push(0)

// console.log(arr1);
// console.log(arr2);
//! pass by value
// var x = 15
// var y = x

// x+=15
// y+=1
// console.log(x);
// console.log(y);

// === Destructuring ===
// const email = "a@a.com";
// const person = { 
//     firstName: 'Bob', 
//     lastName: 'Marley', 
//     email: 'bob@marley.com', 
//     password: 'sekureP@ssw0rd9', 
//     username: 'barley', 
//     createdAt: 1543945177623
// };

// const firstName = person.firstName
// const email = person.email
// const password = person.password

// const {firstName, email:userEmail, password} = person

// console.log(firstName, userEmail, password);

// const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// const firstAnimal = animals[0]
// const pet = animals[1]
// const anotherPet = animals[2]

// const [, , , bestPet] = animals
// console.log(bestPet);

// const person = {
//     firstName: 'Bob',
//     lastName: 'Marley',
//     email: 'bob@marley.com',
//     password: 'sekureP@ssw0rd9',
//     username: 'barley',
//     addresses: [
//       {
//         address: '1600 Pennsylvania Avenue',
//         city: 'Washington, D.C.',
//         zipcode: '20500',
//       },
//       {
//         address: '221B Baker St.',
//         city: 'London',
//         zipcode: 'WC2N 5DU',
//       }
//     ],
//     createdAt: 1543945177623
//   };

//   const {addresses:[, {city}]} = person

//   console.log(first);
//   console.log(city);


  // === Rest/Spread ===

  const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

  const [firstPet, secondPet, ...otherPets] = animals

//   console.log(otherPets);

  const animalList = ['horse', 'dog', 'fish', 'cat', 'bird']
  const petList = [...animalList]

  console.log(petList);

  console.log(animalList === petList);

  const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
      {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
      },
      {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
      }
    ],
    createdAt: 1543945177623
  };

  const {firstName, lastName, ...anotherObject} = person

  console.log(anotherObject);


  const {anotherPerson} = {...person}

  console.log(anotherPerson === person);

  const another = {
      ...person,
      firstName: "Tom"
  }

  console.log(another);