const salariosColombia = colombia.map((persona) => persona.salary);
const salariosSorted = salariosColombia.sort((a, b) => a - b);

const spliceStart = salariosSorted.length * 0.9;
const spliceEnd = salariosSorted.length - spliceStart;

const salariosTop10 = salariosSorted.splice(spliceStart, spliceEnd);

function calcularMediana(lista = [100, 200, 300, 400, 500, 600, 700, 800]) {
  function average(lista = [1, 2, 3, 4]) {
    let sumaLista = 0;
    let promedio = 0;

    sumaLista = lista.reduce((acum, elemt) => acum + elemt);
    promedio = sumaLista / lista.length;
    return promedio;
  }
  let media;
  function esPar(num) {
    media = parseInt(lista.length / 2);
    if (num % 2 === 0) {
      const numero1 = lista[media - 1];
      const numero2 = lista[media];
      console.log(numero1, numero2);
      const mediana = average([numero1, numero2]);
      console.log(mediana);
    } else {
      console.log(lista[media]);
    }
  }
  esPar(lista.length);
}

function calcularMedianaSalarios(salarios) {
  calcularMediana(salarios);
}

calcularMedianaSalarios(salariosSorted);
calcularMedianaSalarios(salariosTop10);
