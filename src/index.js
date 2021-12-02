alert(
  "Bienvenido a Le Nuit, que desea pedir?" +
    "\n" +
    "Precio" +
    "\n" +
    "Hamburguesa: $650" +
    "\n" +
    "Lomo: $900" +
    "\n" +
    "Papas con Cheddar: $500"
);

// ===== Precios ===== //
let hamburguesa = 650;
let lomo = 900;
let papasconcheddar = 500;

// ===== Pedido ===== //
let hamburguesaPedido = parseFloat(prompt("¿Cuantas hamburguesas quieres?"));
let hamburguesaTotal = hamburguesa * hamburguesaPedido;
let cantidadHamburguesa;
if (hamburguesaPedido === 1 && hamburguesaPedido != 0) {
  cantidadHamburguesa =
    hamburguesaPedido + "Hamburguesa = $" + hamburguesaTotal;
} else if (hamburguesaPedido > 1 && hamburguesaPedido != 0) {
  cantidadHamburguesa =
    hamburguesaPedido + "Hamburguesa = $" + hamburguesaTotal;
} else {
  cantidadHamburguesa = "No compraste Hamburguesa";
  hamburguesaTotal = 0;
}

let lomoPedido = parseFloat(prompt("¿Cuantos lomos quieres?"));
let lomoTotal = lomo * lomoPedido;
let cantidadLomo;
if (lomoPedido === 1 && lomoPedido != 0) {
  cantidadLomo = lomoPedido + "Hamburguesa = $" + lomoTotal;
} else if (lomoPedido > 1 && lomoPedido != 0) {
  cantidadLomo = lomoPedido + "Hamburguesa = $" + lomoTotal;
} else {
  cantidadLomo = "No compraste Lomo";
  lomoTotal = 0;
}

let papasPedido = parseFloat(prompt("¿Cuantas Papas con Cheddar quieres?"));
let papasTotal = hamburguesa * hamburguesaPedido;
let cantidadPapas;
if (papasPedido === 1 && papasPedido != 0) {
  cantidadPapas = papasPedido + "Hamburguesa = $" + papasTotal;
} else if (papasPedido > 1 && papasPedido != 0) {
  cantidadPapas = papasPedido + "Hamburguesa = $" + papasTotal;
} else {
  cantidadPapas = "No compraste Papas con Cheddar";
  papasTotal = 0;
}

// ===== Cobro ===== //
let totalCompra = hamburguesaTotal + lomoTotal + papasTotal;
alert(
  "Tu Pedido:" +
    "\n" +
    hamburguesaTotal +
    "\n" +
    lomoTotal +
    "\n" +
    papasTotal +
    "\n" +
    "Total del Pedido" +
    totalCompra
);
