//imprime los 11 primeros elementos de la sucesionde fibonacci


var fibonacci = []
fibonacci[0] = 0
fibonacci[1] = 1

console.time()
for (var i = 2; i < 11; i++) {
  
  fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1]
     contador = contador + 1

}
console.timeEnd()
 console.log("Los pasos fueron:"+contador)

console.log(fibonacci)