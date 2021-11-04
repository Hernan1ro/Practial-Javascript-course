function calculateMode(
  lista = [1, 2, 3, 2, 2, 2, 2, 1, 1, 3, 2, 4, 1, 6, 4, 2, 3, 100]
) {
  const listaCount = {};
  lista.map(function (elemento) {
    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      listaCount[elemento] = 1;
    }
  });
  console.log(listaCount);
  const listaCountArr = Object.entries(listaCount).sort(function (
    elementoA,
    elementoB
  ) {
    return elementoA[1] - elementoB[1];
  });
  console.log(listaCountArr[listaCountArr.length - 1]);
}

calculateMode();
