//mas de  [n/2], sin ordenar (fuerza bruta)

let a = [], 
b = [], x, y, numeroRepetido, 
k = 0, 
repeticiones = 0;
console.time()

function aleatorios(a) {
  a.length = x;
  b.length = y;
  for (j = 0; j <= x - 1; j++) {
    a[j] = Math.floor(Math.random() * ((x - 1) - 1 + 1) + 1);

  }
  console.log(a);
}

function repeticion(x) {

  y = x - 1
  aleatorios(a)
  for (l = 0; l <= y; l++) {
    b[l] = 0;

  }
  k = 1;
  do {
    for (i = 0; i < a.length; i++) {
 
      if (k == a[i]) {
        b[k - 1] = parseInt(b[k - 1]) + 1
      }
     contador = contador + 1

    }
    k++;
  } while (k < x);
  for (j = 0; j < b.length; j++) {

    if (b[j] >= repeticiones) {
      repeticiones = b[j];
      numeroRepetido = j + 1;
    }

  }


  dd = Math.floor((a.length / 2))
  
  
  if(repeticiones>dd){

    console.log("El numero que mas se repite es " + numeroRepetido + " por " + repeticiones + " veces")
  }
  else{
    console.log("No hay mayoria en esta secuencia")

  }
}
console.timeEnd()
 console.log("Los pasos fueron:"+contador)

repeticion(x = 5)