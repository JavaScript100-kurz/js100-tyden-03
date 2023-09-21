console.log('%c Metody objektů ', 'background:black;color:yellow;');

// Metoda je funkce uvnitř objektu.

// Metody, které už známe a používáme
// console.log()
// Math.round()
// apod.


const pes = {
	jmeno: 'Alík',
	barva: 'hnědá',

	// metoda pomocí slova function
	stekej: function() {
		console.log('stek stek stek');
	},

	// metoda pomocí arrow function
	hafej: () => {
		console.log('haf haf haf');
	},

	// metoda s parametrem
	vrtOcasem: (pocet) => {
		console.log(`Vrtím ${pocet}x ocasem`);
	},
};

console.log(pes.jmeno);
pes.stekej();
pes.hafej();
pes.vrtOcasem(3);


// Jak uvnitř metod přistupovat
// k vlasnostem  objektu
const velkyPes = {
	jmeno: 'Alík',
	barva: 'hnědá',
	stekej: function() {
		// ve function this funguje
		// a ukazuje na objekt,
		// do kterého se metoda patří
		console.log(`Haf haf haf, jsem ${this.jmeno}`);
	},
	hafej: () => {
		// v arrow function this nefunguje
		// resp. neukazuje na náš objekt
		console.log(`Haf haf haf, jsem ${this.jmeno}`);
	}
};

velkyPes.stekej();

velkyPes.hafej();
// chyba, this neukazuje na náš objekt,
// takže nemá ani vlastnost jmeno
