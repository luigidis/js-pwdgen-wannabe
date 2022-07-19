// JAVA DEBUG //

console.log ("ciao")

// CHIEDO IL NOME //
const nome = prompt('Scrivi il tuo nome')

console.log (nome)

// CHIEDO IL COGNOME //
const cognome = prompt('Scrivi il tuo cognome')

console.log (cognome)

// CHIEDERE IL COLORE PREFERITO
const preferedColor = prompt('Scrivi il tuo colore preferito')

console.log (preferedColor)

// GENERO NUMERO RANDOMICO 1 - 100 //

var num = Math.floor(Math.random()*100);

console.log (num)

// PRENDO L'ELEMENTO HTML DOVE DOVRO' RESTITUIRE LA PASS //
const randomPass = document.getElementById('random_pass')

console.dir(randomPass)

// RESTITUISCO LA PASSWORD RANDOMICA GENERATA //

randomPass.innerHTML = (nome + cognome + preferedColor + num)

console.log(nome + cognome + preferedColor + num)






