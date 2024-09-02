const expandButton = document.querySelector('header button') // nieuwe variabele 'expandButton' zoek naar 'header button'
expandButton.addEventListener('click', expand) // bij een klik (van de gebruiker) roep functie expand

function expand() {
  document.body.classList.toggle('expand') // wanneer functie geroepen wordt, zet 'expand' aan/uit > dit verwijst naar de CSS code en vergroot het visitiekaartje
}
