'Use strict';

let personas = [
  { nombre: 'Juanma', apellido: 'Cano', edad: 22 },
  { nombre: 'Juanma', apellido: 'Armario', edad: 45 },
  { nombre: 'David', apellido: 'Quiñones', edad: 18 },
  { nombre: 'Alberto', apellido: 'Rus', edad: 18 },
  { nombre: 'Alberto', apellido: 'Rus', edad: 24 },
  { nombre: 'Alberto', apellido: 'Rodriguez', edad: 80 },
];

let newPersonas = [...personas];

newPersonas.sort( (a,b) => {
  if (a.nombre < b.nombre) return -1; 
  if (a.nombre > b.nombre) return 1;

  if (a.edad < b.edad) return -1;
  if (a.edad > a.edad) return 1;

  if (a.apellido < a.apellido) return -1;
  if (a.apellido > a.apellido) return 1;
});

console.log (newPersonas);


