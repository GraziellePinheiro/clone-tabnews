const calculadora = require("../models/calculadora.js");

test("somar 2 + 2 deveria retornar 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

test("Soma string e numero e retona erro", () => {
  const resultado = calculadora.somar("banana", 100);
  const resultado1 = calculadora.somar(100, "banana");
  expect(resultado && resultado1).toBe("Erro");
});

test("Dividir numero obtendo resultado", () => {
  const resultado = calculadora.dividir(100, 10);
  expect(resultado).toBe(10.0);
});
