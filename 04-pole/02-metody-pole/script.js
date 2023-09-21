console.log('%c Metody pole ', 'background:black;color:yellow;');

// Přidávání prvků do pole
// push, unshift
// jmena.push('Klára');
// jmena.unshift('Jitka');


// Odebírání prvků z pole
// pop, shift
// const zKonce = jmena.pop();
// const zeZacatku = jmena.shift();

// console.log('z konce jsme odebrali:', zKonce);
// console.log('ze zacatku jsme odebrali:', zeZacatku);


// hodnota odebraného prvku


// Vyjmout z pole nebo nahradit
// slice - nové pole vytvořené z části původního


// const novaJmena1 = jmena.slice(1, 3);
// const novaJmena2 = jmena.slice(2);
// const novaJmena3 = jmena.slice(-2);
// const novaJmena4 = jmena.slice(1, -2);

// console.log(novaJmena1);
// console.log(novaJmena2);
// console.log(novaJmena3);
// console.log(novaJmena4);


// splice - nahrazení/smazání prvku uvnitř pole

// jmena.splice(1, 2);
// jmena.splice(1, 2, 'Karel', 'Gábina', 'Denisa');
// jmena.splice(1, 0, 'Karel', 'Gábina', 'Denisa');



const jmena = ['Petr', 'Alena', 'Jana', 'Emil', 'Julie'];
console.log(jmena);

// Hledání v poli
// includes
// console.log( jmena.includes('Lenka') );

// indexOf
// console.log( jmena.indexOf('Lenka') );


const pozice = jmena.indexOf('Lenka');

if (pozice === -1) {
	console.log('prvek nenalezen');
} else {
	jmena.splice(pozice, 1);
	console.log('prvek smazan')
}

console.log(jmena)

