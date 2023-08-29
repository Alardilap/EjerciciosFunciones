function saludar(nombre) {
  console.log(nombre);
}

saludar("alejandra");

function multiplicar(a, b) {
  console.log(a * b);
}

multiplicar(4, 9);

function areaTriangulo(a, b) {
  console.log((a * b) / 2);
}

areaTriangulo(2, 2);

function calcularPrecio(precio, cantidadProducto) {
  let total = cantidadProducto * precio;
  if (cantidadProducto >= 10 && cantidadProducto < 20) {
    let descuento10 = total * 0.1;
    total -= descuento10;
  }
  if (cantidadProducto >= 20) {
    let descuento20 = total * 0.2;
    total -= descuento20;
  }
  return total;
}
console.log(calcularPrecio(1000, 10));

function esMayorDeEdad(edad) {
  return edad >= 18 ? "es mayor de edad" : "es menor de edad";
}
console.log(esMayorDeEdad(29));

function calcularImpuesto(ingreso) {
  let impuesto;
  if (ingreso <= 10000) {
    impuesto = ingreso * 0.1;
  } else {
    if (ingreso <= 20000) {
      impuesto = ingreso * 0.15;
    } else {
      if (ingreso > 20000) {
        impuesto = ingreso * 0.2;
      }
    }
  }
  return impuesto;
}
console.log(calcularImpuesto(5000));

function verificarDia(dia) {
  let mensaje;

  switch (dia) {
    case 1:
      mensaje = "Es un día laboral";
      break;
    case 2:
      mensaje = "Es un día laboral";
      break;
    case 3:
      mensaje = "Es un día laboral";
      break;
    case 4:
      mensaje = "Es un día laboral";
      break;
    case 5:
      mensaje = "Es un día laboral";
      break;
    case 6:
      mensaje = "Es fin de semana";
      break;
    case 7:
      mensaje = "Es fin de semana";
      break;
    default:
      mensaje = "Número invalido";
      break;
  }
  return mensaje;
}
console.log(verificarDia(15));
