const arrayObjetos = [ 
  { nombre: 'Juanma', apellido1: 'Cano' }, 
  { nombre: 'David', apellido1: 'Quiñones' } 
];

function getListProp (arrayObjetos, prop) {
  return arrayObjetos.map(obj => obj[prop]);
}

console.log (getListProp(arrayObjetos, 'nombre' ));