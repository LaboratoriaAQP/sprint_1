// Ejercicio 1
function matriz1(n){
  var m = [];
  for(var i =0; i < n; i++){
    m[i]=[];
    for(var j= 0; j < n; j++){
      m[i][j]= 0;}
    for(var j=0; j<n ; j++){
      m[i][n-i+j-1]=j+1;
    }
    console.log(m[i]);
  }
 }
matriz1(5);


// Ejercicio 2  
function matriz2(n){
  var m = [];
  for(var i =0; i < n; i++){
    m[i]=[];
    for(var j= 0; j < n; j++){
      m[i][j]= 0;}
    for(var j=0; j< n ; j++)
    m[i][j-i]=n-j;
      console.log(m[i]);
  }
 }
matriz2(4);

// Ejercicio 3  
function matriz3(n){
  var m = [];
  for(var i =0; i < n; i++){
    m[i]=[];
    for(var j= 0; j < n; j++){
      m[i][j]= 0;}
    for(var j=0; j< n ; j++)
    m[i][i-j]=j+1;
      console.log(m[i]);
  }
 }
matriz3(5);

// Ejercicio 4 
function matriz4(n){
  var m = [];
  for(var i =0; i < n; i++){
    m[i]=[];
    for(var j= 0; j < n; j++){
      m[i][j]= 0;}
    m[i][n-i-1]=n-i;
    m[i][i]=i+1;
      console.log(m[i]);
  }
 }
matriz4(4);

// Ejercicio 5
function matriz5(n){
  var m = [];
  for(var i =0; i < n; i++){
    m[i]=[];
    for(var j= 0; j < n; j++){
      m[i][j]= n-j-i+4;}
    for(var j=0; j< n ; j++)
    m[i][j-i]=j+1;
      console.log(m[i]);
  }
 }
matriz5(5);