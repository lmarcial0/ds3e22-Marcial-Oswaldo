//Imprime la sumatoria de lo multiplos de 7 en el rango [200-300]


var suma = 0
  console.time
  for (let i = 200; i<=300; i++){
      contador = contador + 1

    if(i%7==0){
      suma += i
    }   
  }
console.timeEnd()
 console.log("Los pasos fueron:"+contador)

  console.log(suma)


