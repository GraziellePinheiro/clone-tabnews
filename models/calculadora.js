function somar(num1, num2) {
  if (typeof num1 !== "number") {
    return "Erro";
  } else {
    if (typeof num2 !== "number") {
      return "Erro";
    }
  }
  return num1 + num2;
}

function dividir(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Erro";
  } else {
    if (num1 === 0 || num2 === 0) {
      return "Valor inválido";
    }
  }
  return num1 / num2;
}

exports.somar = somar;
exports.dividir = dividir;
