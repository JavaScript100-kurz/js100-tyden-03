console.log('%c Pole ', 'background:black;color:yellow;');

// pole
const vyherniCisla = [7, 12, 21, 3, 36, 19, 4];

const jmena = [
	'Petr',
	'Alena',
	'Jana',
	'Emil',
	'Julie',
];

const pristupy = [true, false, true, true, false];

// indexy
jmena[2] = 'Barbora';
console.log( jmena[2] );

// přidání prvku na neexistující index
jmena[7] = 'Kamil';
console.log( jmena[7] ); // Kamil
console.log( jmena[5] ); // undefined
console.log( jmena );

// počet prvků v poli / délka pole
console.log( jmena.length );


// prázdné pole
const ukoly = [];
console.log(ukoly.length);


// míchání datových typů v poli
const ruzne = ['Jana', 17, true, 'Praha', 'učitelka'];
console.log(ruzne[0]);
console.log(ruzne[1]);


// pole objektů
const osoby = [
	{ jmeno: 'Alena', vek: 18 },
	{ jmeno: 'Lenka', vek: 27 },
	{ jmeno: 'Karel', vek: 31 },
	{ jmeno: 'Lucie', vek: 24 },
];

console.log( osoby[2].jmeno );
console.log( osoby[2]['vek'] );


// pole uvnitř objektu
const objednavka = {
	cislo: 'A105-78',
	datum: '2023-09-21',
	jmeno: 'Radek Kolář',
	zbozi: ['A01', 'B57', 'C116', 'D04'],
}
console.log( objednavka.zbozi[2] );


const osoba = {
	jmeno: 'Alena',
	prijmeni: 'Nováková',
	vek: 13,
	kamaradi: [
		{ jmeno: 'Ela', vek: 9 },
		{ jmeno: 'Jitka', vek: 11 },
		{ jmeno: 'Pavel', vek: 13 },
		{ jmeno: 'Bětka', vek: 10 },
	],
};

console.log( osoba.kamaradi[1].jmeno );


// pole uvnitř pole / vícerozměrná pole
const hraciPlocha = [
	['x', ' ', 'o'],
	[' ', 'x', 'o'],
	[' ', ' ', 'x'],
];

console.log( hraciPlocha[0][2] );
