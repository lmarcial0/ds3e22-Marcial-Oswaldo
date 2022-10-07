//mas de  [n/2], ordenados



let a = [], 
x, 
c2 = 0, 
c3 = 0, 
c = 1;

console.time()
function numAleatorios(a) {
  a.length = x;
  for (j = 0; j <= x - 1; j++) {
    a[j] = Math.floor(Math.random() * ((x - 1) - 1 + 1) + 1);
       contador = contador + 1

  }
  console.log(a);
}

function elOptimizado(x) {
  numAleatorios(a);
  t = Math.floor(a.length / 2)
  a.sort()
  console.log(a)

  for (i = 0; i < a.length; i++) {
    if (a[i] == a[i + 1]) {
      c++
    } else {
      if (c > c2) {
        c2 = c;
        c2 - 1
        c3 = a[i];
      } else {
        c = 1
      }
    }
  }

  if (c2 > t) {
    console.log("El numero que mas se repite es " + c3 + " por " + c2 + " veces");
  }
  else {
    console.log("No existe una mayoria en esta secuencia")
  }

}
console.timeEnd()
 console.log("Los pasos fueron:"+contador)

elOptimizado(x = 5);