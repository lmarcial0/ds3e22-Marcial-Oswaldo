// imprime los 11 primeros numeros triangulares
console.time
function funcionTriangulares( n)
{
    let i, j = 1, k = 1
 
    for (i = 1; i <= n; i++)
    {
        contador = contador + 1

        console.log(k+" ")
        j = j + 1
        k = k + j 
    }
}
 

    let n = 11
console.timeEnd()
 console.log("Los pasos fueron:"+contador)

     funcionTriangulares(n)