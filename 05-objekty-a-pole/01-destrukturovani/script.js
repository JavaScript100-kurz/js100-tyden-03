console.log('%c Destrukturování ', 'background:black;color:yellow;');

// destrukturování pole
const cisla = [4, 9];

// const a = cisla[0];
// const b = cisla[1];

// hodnoty pole destrukturujeme
// do proměnných a, b
const [a, b] = cisla;

console.log( a + b );


// přeskakování hodnot
// pole destrukturujeme do proměnných x, y, z,
// ale přeskočíme třetí hodnotu
const jinaCisla = [4, 9, 13, 6, 27, 1];

const [x, y, , z] = jinaCisla;
console.log(x, y, z)


// zbytek destrukturovaného pole
// pomocí rest operátoru ...
// si můžeme do proměnné `zbytek` uložit
// zbytek hodnot pole, které se nedestrukturovaly
// do proměnných m, n
const dalsiCisla = [4, 9, 13, 6, 27, 1];
const [m, n, ...zbytek] = dalsiCisla;

console.log(m, n)
console.log(zbytek)


// destrukturování objektu
const osoba = {
  jmeno: 'Alena',
  prijmeni: 'Nováková',
  vek: 27,
}

// destrukturujeme osobu do proměnných
// stejných jmen, jako mají vlastnosti objektu
const {jmeno, prijmeni, vek} = osoba;

console.log(`Jmenuji se ${jmeno} ${prijmeni} a je mi ${vek} let.`)


// destrukturování v parametrech funkce
const eva = {
	jmeno: 'Eva',
	prijmeni: 'Krátká',
	vek: 27,
}

// objekt, který do funkce vstupuje jako parametr
// při jejích volání, můžeme už v hlavičce funkce
// destrukturovat na samostatné proměnné
const pozdrav = ( {jmeno, prijmeni, vek} ) => {
	console.log(
		`Jmenuji se ${jmeno} ${prijmeni} a je mi ${vek} let.`
	);
}

pozdrav(eva);
