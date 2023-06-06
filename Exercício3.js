let numero;
do {
  numero = prompt("Insira um número maior que 10:");
} while (numero <= 10 || isNaN(numero));

console.log("O número inserido é válido: " + numero);
