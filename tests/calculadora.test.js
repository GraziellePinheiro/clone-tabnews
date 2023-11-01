const calculadora = require("../models/calculadora.js");

test("somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("Soma string e numero e retona erro", () => {
  const resultado = calculadora.somar("banana", 100);
  const resultado1 = calculadora.somar(100, "banana");
  expect(resultado && resultado1).toBe("Erro. Digite um numero valido");
});

test("Somar Strings e obter Erro no Typeof", () => {
  const resultado = calculadora.somar("banana", "maça");
  expect(resultado).toBe("Erro. Digite um numero valido");
});

test("Dividir numero obtendo resultado", () => {
  const resultado = calculadora.dividir(100, 10);
  expect(resultado).toBe(10.0);
});

test("Subtrair numero 5 e 2", () => {
  const resultado = calculadora.subtrair(5, 2);
  expect(resultado).toBe(3);
});

test("Deve multiplicar 0 por 0 e apresentar erro", () => {
  const resultado = calculadora.multiplicar(0, 0);
  expect(resultado).toBe("Erro. Número inválido.");
});
