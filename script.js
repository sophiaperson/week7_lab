// script.js

const animalArray = [new Lion(), new Tiger, new Cheetah()]
const animalNameArray = ["naruto", "sasuke", "sakura", "goku", "vegeta", "ash"]

function Lion(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = “A description of my animal”;
  this.image = “anImageOfMyAnimal.jpg”;
}

function Tiger(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = “A description of my animal”;
  this.image = “anImageOfMyAnimal.jpg”;
}

function Cheetah(name, age) {
  this.name = name;
  this.age = age;
  this.image_alt = “A description of my animal”;
  this.image = “anImageOfMyAnimal.jpg”;
}

function generateRandomIndex(maxIndex) {
  let index = Math.floor(Math.random() * maxIndex)
  return index
}

function generateRandomName() {
  let randomIndex = generateRandomIndex(animalNameArray.length)
  return animalNameArray[randomIndex]
}

function generateRandomAge() {
  let randomAge = generateRandomIndex(10)
  return randomAge
}

function generateRandomAnimal() {
  let randomIdx = generateRandomIndex(animalArray.length)
  let curAnimal = animalArray[randomIdx]
  let randomName = generateRandomAge()
  let randomAge = generateRandomAge()
  if (curAnimal instanceof Lion) {
    return new Lion(randomName, randomAge)
  } else if (curAnimal instanceof Tiger) {
    return new Tiger(randomName, randomAge)
  } else if (curAnimal instanceof Cheetah) {
    return new Cheetah(randomName, randomAge)
  }
}

function saveAnimal(animal) {
  animalString = JSON.stringify(animal)
  localStorage.setItem("savedAnimal", animalString)
}

function onLoad() {
  // load saved animal if one exists
  var animal = JSON.parse(localStorage.getItem("savedAnimal"))
  let hasSavedAnimal = false
  if (animal === null) {
    document.getElementById("button-storage").textContent = "Save Animal"
    // generate a random animal when the document opens
    let animal = generateRandomAnimal();
    
  } else {
    document.getElementById("button-storage").textContent = "Clear Animal"
    hasSavedAnimal = true
  }
  console.log(animal)
  // update the page based on the animal properties
  document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + "years old";
  let imageTag = document.getElementById("animal-img");
  imageTag.setAttribute("src", animal.image);
  imageTag.setAttribute("alt", animal.image_alt);
  
  document.getElementById("button-storage").addEventListener("click", function() {
    if (hasSavedAnimal) {
      localStorage.removeItem("savedAnimal")
      document.getElementById("button-storage").style.display = "none"
      document.getElementById("feedback-message").textContent = "Cleared!"
      document.getElementById("feedback-message").style.display = "block"
    } else {
      animalString = JSON.stringify(animal)
      localStorage.setItem("savedAnimal", animalString)
      document.getElementById("button-storage").style.display = "none"
      document.getElementById("feedback-message").textContent = "Saved!"
      document.getElementById("feedback-message").style.display = "block"
    }
  })
}