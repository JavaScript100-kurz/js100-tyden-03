console.log('%c Spread operátor ', 'background:black;color:yellow;');

// spread operátor

const max = Math.max(12, 7, 39, 16, 5);
console.log(max);

// použijeme spread operator, abychom hodnoty
// z pole rozprostřeli jako argumenty do volání
// funkce Math.max
const cisla = [12, 7, 39, 16, 5];
const maxPole = Math.max(...cisla);
console.log(maxPole);


// ukážeme si i na vlastní funkci
const vypisCisel = (a, b, c, d, e) => {
	console.log(a);
	console.log(b);
	console.log(c);
	console.log(d);
	console.log(e);
}

const jinaCisla = [10, 20, 30];

// rozprostřené hodnoty můžeme doplnit
// i o další hodnoty na obou stranách
vypisCisel(1, ...jinaCisla, 999);




// kopie pole pomocí spread operátoru

const pole = [1, 2, 3];

// kopie pole pomocí metody slice
const novePole = pole.slice(0);

// kopie pole pomocí spread operátoru
const jinePole = [...pole];

// vídíme, že obě pole jsou nezávislá
// tj. skutečně jsme vytvořilii kopii,
// ne jen dokaz na původní pole
pole[1] = 99;
console.log(pole);
console.log(jinePole);



// kopie objektu pomocí spread operátoru

const osoba = { jmeno: 'Alena', vek: 23 };
const novaOsoba = {
	...osoba,
	// a můžeme doplnit i o další vlastnosti
	vek: 27,
	mesto: 'Praha',
	maRidicak: true,
};

// vídíme, že oba objekty jsou nezávislé
// tj. vytvořili jsme kopii
osoba.jmeno = 'Petr';
console.log(osoba);
console.log(novaOsoba);
