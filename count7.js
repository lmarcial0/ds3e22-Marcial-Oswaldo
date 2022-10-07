//imprime el numero de multiplos de 7 en el rango [200-300] (¿cuantos?)

var cont = 0,
  contador=0
console.time()
for (let i=200; i<=300; i++){
  if(i%7==0){
    cont+=1
    
   contador = contador + 1
  }  
 
}
console.log(cont) 
 console.log("Los pasos fueron:"+contador)
console.timeEnd()




