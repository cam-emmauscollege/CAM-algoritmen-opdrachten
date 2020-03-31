/** Algoritmiek opgave #1
  * Opdracht: pas de functie zo aan,
  * dat de functie true geeft als 'getal'
  * 0 of positief is en false als 'getal'
  * negatief is.
  *
  * @param getal {number} een getal
  * @returns {boolean} true als getal positief is
  */
function isPositief(getal) {
  var teruggeefWaarde = false;

  if (getal >= 0) {
      teruggeefWaarde = true;
  }
  

  return teruggeefWaarde;
}

exports.isPositief = isPositief;