//CHIEDO ALL'UTENTE QUANTI KM DEVE FARE
var km = parseInt(prompt('Quanti km vuoi percorrere?'));
//CHIEDO ALL'UTENTE LA SUA ETA'
var eta = parseInt(prompt('Quanti anni hai?'));

//PREZZO BIGLIETTO PER KM
var prezzoxkm = km * 0.21;

//VERIFICO SE L'UTENTE E' MINORENNE E APPLICO LO SCONTO DEL 20%
// SE L'UTENTE E' OVER 65 APPLICO LO SCONTO DEL 40% ALTRIMENTI UN PREZZO NORMALE
if (isNaN(km) || isNaN(eta)) {
  alert("Devi inserire un numero");
}
else if (eta <= 18) {
  document.getElementById('prezzo').innerHTML = Math.floor(((prezzoxkm - ((prezzoxkm * 20) / 100)))).toFixed(2);
}
else if (eta >= 65) {
  document.getElementById('prezzo').innerHTML = Math.floor(((prezzoxkm - ((prezzoxkm * 40) / 100)))).toFixed(2);
}
else {
  document.getElementById('prezzo').innerHTML = (prezzoxkm ).toFixed(2);
}
