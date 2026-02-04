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