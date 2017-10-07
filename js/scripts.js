// scripts.js

var a = prompt('Dane a');
var b = prompt('Dane b');
var value = (a * a) - (2 * a * b) + (b * b);

if (value > 0) {
alert('Wynik dodatni');
} 
else if (value < 0) {
alert('Wynik ujemny');
} 
else {
alert('Wynik jest równy zero '+value);
}
alert('Wynik  '+value);


