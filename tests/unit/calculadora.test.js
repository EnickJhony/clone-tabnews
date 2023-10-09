const calculadora = require("../../models/calculadora");

test("Somando 2 mais 2", () => {
  const result = calculadora.soma(2, 2);
  expect(result).toBe(4);
});

test("Somando 5 + 100 deveria ser 105", () => {
  const result = calculadora.soma(5, 100);
  expect(result).toBe(105);
});

test("somar 'banana' + 2 deveria retornar um 'erro'", () => {
  const result = calculadora.soma("banana", 2);
  expect(result).toBe("Erro");
})