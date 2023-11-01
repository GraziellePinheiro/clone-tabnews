function somar(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Erro. Digite um numero valido";
  } else {
    if (num1 === 0 || num2 === 0) {
      return "Valor inválido";
    }
  }
  return num1 + num2;
}

function dividir(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Erro. Digite um numero valido";
  } else {
    if (num1 === 0 || num2 === 0) {
      return "Valor inválido";
    }
  }
  return num1 / num2;
}

function subtrair(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Erro. Digite um numero valido.";
  } else {
    if (num1 === 0 || num2 === 0) {
      return "Digite um numero acima de 0.";
    }
  }
  return num1 - num2;
}

function multiplicar(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Erro. Digite um numero valido.";
  } else {
    if (num1 === 0 || num2 === 0) {
      return "Erro. Número inválido.";
    }
  }
  return num1 * num2;
}

exports.somar = somar;
exports.dividir = dividir;
exports.subtrair = subtrair;
exports.multiplicar = multiplicar;
