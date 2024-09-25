import '../styles/main.scss';

// Algunos tipos de datos
// const num: number = 0;
// const text: string = 'Hello, world!';
// const itsOk: boolean = true; // or false

let a: number = 0;
let b = 0;

b = 10.1;

let c = a + b;

console.log(c);

const isConnected = true;

if (!isConnected) {
  throw new Error('No hay conexión');
}

// && and y || or ! not
if (a > 0 && b > 0) {
  console.log('Ambos son mayores a 0');
} else if (a > 0 || b > 0) {
  console.log('Al menos uno es mayor a 0');
} else {
  console.log('Ninguno es mayor a 0');
}

const names = ['Juan', 'Pedro', 'Pablo'];

for (let i = 0; i < names.length; i++) {
  const name = names[i];
  console.log(name);
}

// let isSignIn = true;
// while (!isSignIn) {
//   console.log('No has iniciado sesión');
//   if (false) {
//     isSignIn = true;
//   }
// }

console.log('---'.repeat(10));

for (const name of names) {
  console.log(name);
}

console.log('---'.repeat(10));

names.forEach((name) => {
  console.log(name);
});

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
];

matriz.forEach((row) => {
  row.forEach((cell) => {
    console.log(cell);
  });
});

function sum(a: number, b: number): number {
  return a + b;
}

const resultado = sum(0, 1);

console.log(resultado);

const suma = (a: number, b: number): number => {
  return a + b;
};

suma(0, 1);
