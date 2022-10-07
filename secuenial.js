// 10e3, 10e4, 10e5, sinordenar, tomar/mostrar pasos
 let array = []


    let cont=0;
    for (let i = 0; i < 10e5; i++) {

      array[i] = (1 + Math.floor(Math.random() * 10e5))

    }


    var primeroSecuencial = function(a){

    while(a>0){
      
    for (var i in array) {
      cont = cont+1 
      if (array[i] == a) {
        return "el numero del array se encuentra en la posicion " + i;
      }
      
    }
      return "el numero no se encuentra en el array";  
}
 } 
  let a = 5
  console.log(array)
  console.time()
  console.log(primeroSecuencial(a))
  console.log("El tiempo estimado fue de: "); console.timeEnd()
  console.log("Los pasos fueron de: "+cont)
