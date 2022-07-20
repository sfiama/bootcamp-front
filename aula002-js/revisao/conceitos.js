console.log("Teste");

// var 
var nome = "Sophia Fiama"
console.log(nome);

var idade = 30;
console.log(idade);
var aniversario = idade + 1;
console.log(aniversario);
aniversario = 40;
console.log(aniversario);

// string
var nomeCompleto = "Sophia Fiama";

console.log(nomeCompleto.length); // tamanho da variavel string
console.log("Teste".length); // tamanho da string
console.log(nomeCompleto.toLowerCase()); // minusculas
console.log(nomeCompleto.toUpperCase()); // maiusculas

console.log(nomeCompleto.indexOf("Fi")); // retorna a primeira posição em que foi localizada
console.log(nomeCompleto.replace('Fiama', 'Godoy'));
console.log(nomeCompleto.slice(0,8));

var curso = "   Curso Full-Stack   "
console.log(curso);
console.log(curso.trim());

// number
var a = 50;
var b = 20;
var c = 10;

console.log(a+b+c)
console.log(a*c)
console.log(a/b*c)
console.log(a%b)
console.log(a%c)

console.log(a++)
console.log(a)
console.log(++a)

//Boolean

console.log(3>5);
console.log(3<5);
console.log(10!=10)
console.log(10!=11)
console.log(10==10)
console.log(4=='4')
console.log(4==='4')

//Operadores Logicos

var d = true;
var e = false;
var f = 4
var g = ''
var h = "Sophia"
var i = 0

console.log(!d)
console.log(!!d)
console.log(!f)
console.log(!!f)
console.log(null)
console.log(!null)
console.log(!!null)
console.log(!!g)
console.log(!!0)

console.log(f && h && d)
console.log(4 && h && d)
console.log("Texto" && "novo texto" && "Ultimo texto")

console.log(null && 0 && 'Teste')
console.log("testando" && 0 && 'Teste')
console.log(10 > 5 && 10 < 11 && 50 > 10)
console.log(10 > 5 && 10 < 11 && 50 > 100)
console.log(null || "Texto")
console.log(null || "Teste" || 25)
console.log(null || "" || 25)
console.log("Sophia" || "Texto")
console.log(10 > 5 || 10 < 11 || 50 > 10)
console.log(10 > 5 || 10 < 11 || 50 > 100)
console.log(10 < 5 || 10 > 11 || 50 > 100)








