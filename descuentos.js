// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function calcularDescuento() {
  const inputPrice = document.getElementById("inputPrecio");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("inputDescuento");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountValue
  );

  const resultP = document.getElementById("descuento");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });
