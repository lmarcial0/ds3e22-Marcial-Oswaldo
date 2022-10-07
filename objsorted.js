//agregar 10e3 pares (llave:valor) a on objeto; extrear y ordenar llaves; crear nuevo objeto de pares


    let obj= []
    let obj2= []

    console.time()
    for (let i=1;i<= 10e3;i++){

      let a = (1+Math.floor(Math.random()*10e3))
      obj[a]=a
        contador = contador + 1

    }

    Objetos= Object.keys(obj)
    for(x=0;x<Objetos.length;x++){

      name="name:"
      obj2[name+ Objetos[x]]=name + Objetos

    }
    console.timeEnd()
    console.log(obj2)

