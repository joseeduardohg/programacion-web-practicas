import '../styles/main.scss';

// number, string, boolean, object, array, tuple, enum, any, unknown, void, null, undefined, never
const number: number = 1.1;
const message: string = 'Hello World';
const isOk: boolean = true; // true o false

// Operadores aritméticos
// +, -, *, /, %, ++, --
// 10 % 2 = 0
// 10 % 3 = 1

// Operadores de asignación
// =, +=, -=, *=, /=, %=

// Operadores de comparación
// ==, ===, !=, !==, >, <, >=, <=

// Operadores lógicos
// &&, ||, !

console.log(number);
console.log(message);
console.log(isOk);

// Arrays
const fruits: string[] = ['apple', 'banana', 'orange'];
console.log(fruits);

fruits.push('watermelon');
console.log(fruits);

const lastFruit = fruits.pop();
console.log('last fruit:', lastFruit);
console.log(fruits);

console.log('original first fruit:', fruits[0]);
fruits[0] = 'kiwi';
console.log('new first fruit:', fruits[0]);
console.log(fruits);

function foo(...args: unknown[]) {
  console.log(args);
}

function bar(a: number, b: number) {
  return a + b;
}

console.log(foo(1, 2.5, 'hello', true, [1, 2, 3], { name: 'Jane' }));
console.log(bar(...[1, 2])); // bar(1, 2);

// Objetos
type Message = string;
const message1: Message = 'Hello World';
console.log(message1);

type Person = {
  name: string;
  lastName: string;
  age: number;
  isStudent: boolean;
  email?: string; // Propiedad opcional - Puede o no estar presente
};

const jane: Person = {
  name: 'Jane',
  lastName: 'Doe',
  age: 19,
  isStudent: true,
};
console.log(jane);

// Acceder a las propiedades de un objeto
console.log(jane.name);
console.log(jane.email);

// Modificar las propiedades de un objeto
console.log(jane.age);
jane.age = 21;
console.log(jane.age);

// Añadir nuevas propiedades a un objeto
jane.email = 'jane.doe@example.com';

// JSON (JavaScript Object Notation)
// GET /tracks/1
const json = JSON.stringify(jane);
console.log(json);

// Seleccionar un elemento del DOM
const title: HTMLHeadingElement = document.querySelector(
  '.title',
) as HTMLHeadingElement;
title.innerText = 'Sí funciona';

const input: HTMLInputElement = document.querySelector(
  'input',
) as HTMLInputElement;
input.addEventListener('change', (event) => {
  event.preventDefault();
  console.log(input.value);
});

const button: HTMLButtonElement = document.querySelector(
  'button',
) as HTMLButtonElement;
button.addEventListener('click', (event) => {
  console.log('Button clicked');
});
