module.exports.area_quadrado = function quadrado(lado) {
  return lado * 4;
};
module.exports.area_retalgulo = function retangulo(base, altura) {
  return base * altura;
};
module.exports.area_triangulo = function triangulo(base, altura) {
  return (base * altura) / 2;
};
module.exports.area_ciruclo = function circulo(raio) {
  const pi = 3.14;
  return pi * (raio * raio);
};
