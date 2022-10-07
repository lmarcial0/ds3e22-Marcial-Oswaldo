//Imprime la multiplicatoria de los multiplos de 7 en el rango [200-300]

var mult = 0 

console.time()
for (let i=200; i<=300; i++){
  if(i%7==0){
    mult= i*=i
  }        contador = contador + 1

}
console.timeEnd()
 console.log("Los pasos fueron:"+contador)

console.log(mult)


