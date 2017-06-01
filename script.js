var n = 10; //liczba
var s = 'tekst'; //tekst
var a = []; //tablica
var o = {}; //obiekt
//zmienna x nie została zadeklarowana

//console.log(typeof(n));
//console.log(typeof(s));
//console.log(typeof(a));
//console.log(typeof(o));
//console.log(typeof(x));

var myVar = 'Przykładowy tekst';
myVar += 'który nie';
myVar += 'zmieściłby się w jednej linijce';

var x = 10;
x -=5;

var x = 1;
if (x == 1) {
	console.log('Liczba równa się 1');
}

var x = 1;
if (x) {
	console.log('Tak');
} else {
	console.log('Nie');
}

var x = 10;

if (x > 5) {
	console.log('Liczba jest większa od 5');
} else if (x < 5) {
	console.log('Liczba jest mniejsza od 5');
} else {
	console.log('Liczba równa się 5');
}

var i = 1;
var number = '';

if (i > 0) {
	number = 'dodatnia';
} else {
	number = 'ujemna';
}

var number = (i > 0)? 'dodatnia' : 'ujemna';

var x = 3;
console.log((x % 2 == 0)? 'parzysta' : 'nieparzysta');