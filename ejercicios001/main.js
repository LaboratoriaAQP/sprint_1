// EJERCICIO 1
//Dado 3 números(N1,N2,N3) calcular el Máximo y Mínimo. Sin usar for​.​ 
 
// 	Entrada	 : N1 = 10, N2 = 30, N3 = 5 
// 	Salida	 : Máximo = 30, Mínimo = 5 

var n1 = 10;
var n2 = 30;
var n3 = 5;
var maximo = 0;
var minimo = 0;
if(n1 > n2)
{
    if(n1 > n3)
    {
        maximo = n1;
        if(n2 > n3){
            minimo = n3;
        }
        else{
            minimo = n2;
        }
    }
    else
    {
        maximo = n3;
        minimo = n2;
    }
}
else
{
    if(n2 > n3)
    {
        maximo = n2;
        if(num1 > n3){
            minimo = n3;
        }
        else{
            minimo = n1;
        }
    }
    else
    {
        maximo = n3;
        minimo = n1;
    }
    
}
console.log("Máximo = " + maximo + ", Mínimo = " + minimo);

// EJERCICIO 2
// Dado un arreglo A de números, imprimir los elementos con índice par e impar por separado. Hint : usar el operador​   ​ módulo(%).​   
 

// Entrada: A = [15,  29, 78, 29, 40, 20, 18, 100, 78, 68] 
// Salida: Elementos de posición par : 15 78 40 18 78 
//         Elementos de posición impar : 29 29 20 100 68 

var a = [15,  29, 78, 29, 40, 20, 18, 100, 78, 68];
var pares;
var impares;
for(var i = 0; i < arregloD.length; i++){
    if(i % 2 == 0){
      pares+=a[i];
    }
    else{
      impares+=a[i];
    }
  }
  console.log("Elementos de posición par: " + arrPares) 
  console.log("Elementos de posición Impar: " + arrImpares);
  
  // EJERCICIO 3
  //   Dado un arreglo A, cómo invertiría su orden?. 
  //   Entrada : A = [1 2 3 4 5 6 7 8 9 0] 
  //   Salida  : 0 9 8 7  6 5 4 3 2 1 


var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var arrInvertido=[];
for( var i=arr.length-1;i>=0;i--){
  arrInvertido+=arr[i];
}
console.log(arrInvertido);


// Una  función  Dibuja,  que  teniendo  como  parámetro  un  entero  positivo  (N)  nos imprima en la consola un rombo, tal como se aprecia en el ejemplo adjunto.

// Ejemplo:
// Si el número fuese 5 se imprime:
      //     1
      //    123
      //   12345
      //  1234567
      // 123456789
      //  1234567
      //   12345
      //    123
      //     1


function Dibujar(n) {
  function espacios (n)
{
  var s = "";
  for (var i = 0; i < n; i++)
   s += " ";
  return s;
}
for (var k = 0; k < 2 * n - 1; k++) {
  var i = k < n ? k :  2*n - 2 - k;
  var content = "";
  for (j = 1; j <= 2*i+1; j++){
    content +=  j;
  var sp = espacios (n - (i+1));
  }
  console.log(sp + content);
}
}

Dibujar(5);