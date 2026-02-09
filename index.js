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

let catchSumPokemans = async () => {
  // Step Uno fetch any pokeperson
  // Step B alter your fetch to fetch the first 9 pokemens
  // Step 2 follow your heart... your pokeheart

  const res = await fetch('https://pokeapi.co/api/v2/pokemon/gengar')
  const data = await res.json()
  const pokeman =  data.moves[8].move.name

  return pokeman
}


//Should console.log => undefined
// console.log(catchSumPokemans())

catchSumPokemans().then(res => console.log(res))