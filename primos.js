//imprime los 11 primeros numeros primos 

var c = 32;
var j = 2;
var numerosPrimos = [];

console.time()

for (; j < c; j++) {

  if (primo(j)) {
    numerosPrimos.push(j);
  }
  
}

console.log(numerosPrimos);

function primo(numero) {

  for (var i = 2; i < numero; i++) {
    contador = contador + 1

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}

console.timeEnd()
 console.log("Los pasos fueron:"+contador)
