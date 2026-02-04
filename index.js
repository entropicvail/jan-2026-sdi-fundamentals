let counter = 0

function setLS(){
  localStorage.setItem('brian', counter)
  counter++
  getLS('brian')
}

function getLS(lsKey){
  console.log(lsKey)

  let lsCount = localStorage.getItem(lsKey)
  let countDisplay = document.querySelector('#count')
  countDisplay.innerText = lsCount
}

document.addEventListener('load', getLS())

let setButton = document.querySelector('#setBtn')

setButton.addEventListener('click', setLS)

let catchSumPokemans = () => {
  // Step Uno fetch any pokeperson
  // Step B alter your fetch to fetch the first 9 pokemens
  // Step 2 follow your heart... your pokeheart

  let pokeman = "placeHolder"

  fetch('https://pokeapi.co/api/v2/pokemon/gengar')
    .then(res => res.json())
    .then(data => pokeman = data.moves[8].move.name)

  return pokeman

}

catchSumPokemans()