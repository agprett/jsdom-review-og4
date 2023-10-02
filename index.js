let labels = document.querySelectorAll('label')

let form = document.querySelector('form')

const createSentence = (event) => {
  console.log(event)

  event.preventDefault()

  let nameInput = document.querySelector('#name')
  let favColorInput = document.getElementById('favorite-color')
  let favFruitDrop = document.querySelector('#favorite-fruit')

  console.log(nameInput)
  console.log(favColorInput)
  console.log(favFruitDrop)

  let sentenceEle = document.querySelector('#sentence')

  sentenceEle.innerText = `Hello ${nameInput.value}. You're favorite fruit is ${favFruitDrop.value}`
  sentenceEle.style.color = favColorInput.value
  
  nameInput.value = ''
  favColorInput.value = ''
  favFruitDrop.value = 'Choose a fruit'
}

form.addEventListener('submit', createSentence)