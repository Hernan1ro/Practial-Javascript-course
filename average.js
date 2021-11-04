function average(lista = [1, 2, 3, 4]) {
  let sumaLista = 0;
  let promedio = 0;
  // for (let i = 0; i < lista.length; i++) {
  //   sumaLista = lista[i] + sumaLista;
  //   promedio = sumaLista / lista.length;
  // }
  sumaLista = lista.reduce((acum, elemt) => acum + elemt);
  promedio = sumaLista / lista.length;
  console.log(promedio);
}

average();
