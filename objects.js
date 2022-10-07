// agregar 10e3 pares (llave:valor) a un objeto

let obj = {};

console.time()
for (let i = 1; i <= 1e3; i++) {
  let name = 'Name:' + Math.floor(Math.random() * 1e4);
  obj[name] = name;
  contador = contador + 1
}
console.timeEnd()
 console.log("Los pasos fueron:"+contador)

console.log(obj)
console.log(Object.values(obj).length)