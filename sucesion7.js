//imprime la sucecsion de los multiplos de 7 en el rango [200-300]
console.time()
for (let i = 200; i<=300; i++){
    contador = contador + 1

  if(i%7==0){
    console.log(i)
  }
}
console.timeEnd()

 console.log("Los pasos fueron:"+contador)









