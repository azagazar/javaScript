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

var x = 1;

while (x <= 100) {
	console.log('Twoja stara to gitara.');
	x++;
}

var x = 1;

do {
	console.log('Twoja stara to alfons.');
	x++;
} while (x <= 100);

var table = document.getElementById('tabelka');
var tableHTML = '';
for (var y=1; y<=10; y++) {
	var tr = '<tr>';

	for (var x=1; x<=10; x++) {
		var text = x*y;

		if (y==1 || x==1) {
			var td = '<th>'+text+'</th>';
		} else {
			var td = '<td>'+text+'</td>';
		}
		tr += td;
	}
	tr += '</tr>;'
	tableHTML += tr;
}

table.innerHTML = tableHTML;

var arr = ["a", "b", "c"];
arr.forEach(function(el) {
	console.log(el);
});

[2, 5, 9].forEach(function(element, index, array) {
	console.log("index [" + index + "] w tablicy [" +array+ "] to " + element);
});

function writeSomething() {
	console.log("To jest tekst zawarty w funkcji.");
}

writeSomething();

function calculate(number1, number2) {
	console.log(number1 + '+' + number2 + '=' + (number1 + number2))
}

calculate(3, 4);
calculate(7, 7);
calculate(100, 100);

function calculate(number1, number2) {
	var result = number1 + number2;
	return result;
}

console.log( calculate(10,4));

function isEven(number) {
	if (number % 2 == 0) {
		return true;
	} else {
		return false;
	}
}

var x = 3;
if ( isEven(x)) {
	console.log("Liczba " + x + " jest parzysta");
} else {
	console.log("Liczba " + x + " nie jest parzysta");
}

function checkText(tekst) {
	return tekst;
}

if (checkText("testujemy")) {
	console.log("Funkcja zwróciła true");
}
if (checkText("")) {
	console.log("Funkcja zwróciła false");
}

// TABLICE

var ourTable = ['Marcin', 'Ania', 'Agnieszka'];

// var ourTable = new Array(6); - tworzy pustą tablicę o długości 6

console.log( ourTable[1]);

ourTable[3] = "Piotrek";
ourTable[4] + "Grzegorz";

ourTable.push('Michał'); 
console.log(ourTable[5]); // nie wypisało Michał, nie wiem dlaczego

console.log(ourTable.length);
console.log(ourTable[ourTable.length-1]);

/*for (var i=0; i<ourTable.length; i++) {
	console.log('Imię numer' +i+ ': ' +ourTable[i]);
}*/

ourTable.forEach(function(el, i) {
	console.log('Imię numer' +i+ ': ' +el);
});

var ourTable = [];
ourTable[0] = ['Marcin', '183'];
ourTable[1] = ['Ania', '173'];
ourTable[2] = ['Agnieszka', '170'];

console.log('imię: ' + ourTable[0][0] + ', wzrost: ' + ourTable[0][1]);