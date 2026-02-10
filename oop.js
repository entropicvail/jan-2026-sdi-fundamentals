class Vehicle {
  //private variable using encapsulation
  #color
  //used to create an instance of this class
  constructor(make, year) {
    this.make = make;
    this.year = year;
    this.wheels = 4
    this.#color = "RED"
  }

  //used to display private variable -> color
  showColor(){
    console.log(this.#color)
  }

  //used to set/update privatt variable -> color
  paintVic(color){
    this.#color = color
  }

  //method specific to instance
  showYear(){
    console.log("My year of birth is "+this.year)
  }

}

//creates 2 different instance of Vehicle
let mini = new Vehicle()
let truck = new Vehicle("Dodge", 1725)
//object literal example
let baseObj = {thing:2,stuff:"stuff"}

//update values associated with Vehicle instance named mini
mini.make = 'mini'
mini.year = 2027
//update make value of Vehicle instance named truck
truck.make = "Chevy"

//calls showYear method for each specific Vehicle instance
// truck.showYear()
// mini.showYear()

//uses method to update private color variable
// truck.paintVic("Brunt Orange")
// truck.showColor()

// console.log(baseObj)
// console.log(mini)
// console.log(truck)

//Create Pet class
//  has name, species
//    eventually petId
//  has speak METHOD (future polymorphism implementation)
//    console.log animal sound
//      species determines animal sound to use
//  has STATIC METHOD for petID validation
//    validated if value can be used as a petId
//      must be number, shorter than 6 characters

// Inheritance and Methods/Static Methods and Polymorphism

class Pet{
  constructor(name, species){
    this.name=name
    this.species=species
  }

  speak(){
    console.log('Animal Sound')
  }

  heel(){
    console.log("Here I come")
  }

}

class Dog extends Pet{
  constructor(name,breed ){
    super(name,'dog')
    this.breed = breed
  }

  speak(){
    console.log("Bark Bark")
  }

}

class Chihuahua extends Dog{
  #shakey
  constructor(name, shakey){
    super(name, 'chihuahua')
    this.#shakey = shakey
  }

  heel(){
    console.log("Nah, I'll just shake right here bud.")
  }

  shaking(){
    console.log(this.#shakey)
  }
}

class Cat extends Pet{
  constructor(name,breed ){
    super(name,'cat')
    this.breed = breed
  }

  speak(){
    console.log("Judgy eyes")
  }

  heel(){
    console.log('Not a chance... unless you have food then maybe')
  }
}



let spot = new Dog('spot','kangaroo')
let boots = new Cat('boots', 'tiger')
let shakey = new Chihuahua('shakey', true)
let alsoShakey = new Chihuahua('shakey',true)
let sly = new Chihuahua('sly', false)
let tweety = new Pet('tweety', 'bird')
let milky = new Pet('milky', 'cow')

shakey.shaking()
alsoShakey.shaking()
sly.shaking()

// let spoot = {
//   name:'spoot',
//   species:'dog',
//   breed:'tiger king',
//   speak:function(){
//     console.log('She lost her arm because of her not me.')
//   }
// }

// console.log(spot)
// console.log(boots)
// console.log(shakey)
// console.log(tweety)
// console.log(milky)

// spot.heel()
// boots.heel()
// shakey.heel()
// spot.speak()
// boots.speak()
// tweety.speak()
// milky.speak()










//Now your try some polymorphism


//Create Shape Class
//--no need to use this keyword
//--only has a single method
//----area() → will calculate are of the specific shape
//Crate Circle and Square classes that extend Shape
//--should invoke the super
//--constructor should accept value needed for finding the area
//----example Square needs to know the length of at least one side
//--each child class should have utilize polymorphism when it comes to the area() method
//--create an array that holds at least 3 instances of any combo of Circles and Squares
//--loop through that array and display the area of each shape
//Stretch Goal
//--create more shapes
