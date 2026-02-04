/*
  Reminder to run this script, navigate into the jan-2026-sdi-fundamentals directory and execute the below command
    node sandbox.js
*/

/*
  You can use this as a sandbox to test any js logic you conceive.
  A Sandbox also is a great place to return to when you want to reference some code you previously tested
*/

// Variables retain different data types
// declare → define → assign
let yay = true // boolean
let nay = false // boolean
let words = 'This is a string' // string
let wholeNumber = 30 // number (sometimes referred to as an integer)
let decimalNumber = 22.5 // number (sometimes referred to as a float)
let negativeNumber = -3 // number (sometimes referred to as an integer, just like the positive whole number)
let intentionallyLackingValue = null // null
let lackingValue // undefined (Notice a value is not given to the variable)

// Math

let sum = 5 + 9
let difference = 11 - 5
let product = 11 * 3
let quotient = 333 / 111
let remainder = 25 % 10
// Note: you can use whole numbers as well as decimal point numbers

// Functions and Methods

function fullName(firstName, lastName) {
  // alternate option
  // let name
  // name = firstName + " " + lastName
  let name = firstName + " " + lastName
  return name
  // note the scope of the variables
      // name, firstName, lastName

  // a second option below
  // return firstName + " " + lastName

  // a third option below
  // return `${firstName} ${lastName}`
}

// Different ways to call a function
fullName("John", "Wick")

let fName = "Marky"
let lName = "Mark"
fullName(fName, lName)

let laName = "Ipkiss"
fullName("Stanley", laName)

// →→→→ Reminder: creating a function does not execute the function or its enclosed logic
    // you much call the function if you want it to do its job.

// →→→→ Reminder: invoking a function does not automatically retain what it returns in a variable
    // meaning the above invocations to trigger the logic to execute, as well as return the expected string
    // but that string is not logged to the console or assigned to a global variable that can be used later
        // alter the 3 lines calling the function to:
            // save one returned string to a variable
            // log one to the console
            // save one returned string to a variable and then log that variable to the console.

// && looks for the first falsy
// console.log(0 && true)
// || looks for the first truthy
// console.log(0 || NaN || undefined )

// == vs ===
// == topically checks if they are the same
// === checks if they are the same, and have the same datatype
let userInput = "6"
// console.log(userInput == "name" )

/*
  Located in the comparing.txt file, there is a deeper dive into == vs ===
*/



/* ---------------------------------------
  FUNDAMENTALS 2
--------------------------------------- */

// console.log(typeof [1,2,3])

// console.log(Array.isArray(1))

// let Array = {
//   isArray: function...
// }

// console.log(!true) // true flips to false

// let amI = false
// if (amI == true){
//   console.log("Jordan is Grounded")
// }


/* →→→→
How to quickly comment a line

Windows → ctrl + /
Mac → cmd + /
*/


/* →→→→ Highlight what you want to change, then hit
Windows → ctrl + d
Mac → cmd + d
*/

// let stuff =  2

// stuff = stuff *3
// stuff += 5 // thing = thing + 5

// console.log(stuff)

// let glob = "Matt Rocks!"
// let dude
// let gettinIT

// function whoRocks(){

  // console.log("glog → "+glob)
  // dude = "Ben is gunna get this"

  // function whatThu(){
    // gettinIT = "on the way"
    // glob="Way inside"
    // console.log("dude → "+dude)
    // console.log("glog → "+glob)
  // }
  // glob = "so strings"
  // whatThu()
  // console.log ("gettinIT → "+gettinIT)
  // console.log(glob)
// }
// console.log("outside → "+ gettinIT)
// function benJamin(){
//   console.log(dude)
// }
// whatThu()
// console.log(dude)
// whoRocks()
// benJamin()


// let globa = "This is still global"

// function lessGlobal(){
  // Reminder: NEVER create a function inside a function
    // It is silly

  // globa = "Functionally Scoped"
  // console.log(globa)

  // function internal(){
  //   globa = "Way inside"
  //   console.log(globa)
  // }

    // let internal = () => {
    //   globa = "Way inside"
    //   console.log(globa)
    // }

//   console.log("I am here → " + globa)
//   internal()
//   globa = "End of the function"
// }

// console.log(globa)
// lessGlobal()
// console.log("Final Console → "+globa)


// →→→→ Want to move a whole line, well for 5.99 you can
// hold alt and use the up or down arrow to move it

// let dailyWeather = {
//   conditions: 'Cloudy',
//   temperature: 48,
//   temperatureUnit: 'F',
//   humidity: '22%',
//   wind: {
//     speed: 20,
//     speedUnit: 'mph',
//     direction: 'NW',
//     daysSpeed: {
//       mon:12,
//       weds:25,
//     }
//   },
//   windyDays: ['Mon','Tues','Fri'],
//   getSummary: function() {
//     return 'Conditions: ' + this.conditions + ' ' + 'Temperature: ' + this.temperature + this.temperatureUnit;
//   },
//   totalSpeed: function(){
//     return this.wind.speedUnit
//   }
// }


// console.log(dailyWeather.totalSpeed())

// let summary = dailyWeather.getSummary()

// console.log(summary)

// let wednesdayWindSpeed = dailyWeather.wind.daysSpeed.weds;

// dailyWeather.wind.daysSpeed.weds = 26

// console.log(dailyWeather.wind.daysSpeed.weds)
// console.log(wednesdayWindSpeed)


// let count = 1;
// console.log(`Starting count ${count}`)
// count = count + 1
// count +=  1
// count++

// count = count - 1
// count -=  1
// count--

// count *= 2
// count *= 2
// count *= 2
// count /= 4
// console.log(`Now count ${count}`)


// for (let i = 0; i < 5; i++) {
//   // console.log(i)
//   // I increment i here, at the end of the for loop body
// }

// let kobe = 1
// console.log(kobe)
// kobe++
// console.log(kobe)
// console.log(kobe++)
// console.log(kobe)

// let num = 6

// if(num <5){
//   console.log("under")
// }else{
//   console.log('over')
// }

// num < 5 ? console.log('under') : console.log("not under")

// let dudes = ['KOBE', 'JACOB', 'JARED', 'COREY', 'MATT']

// let matrix = [
//   [
//     [1, 2, 3], [4, 5], [6, 7, 8, 9, 10]
//   ],
//   [
//     [11, 12, 13], [14, 15, 16]
//   ],
//   [
//     ['shoe', 'boot']
//   ]
// ]

//I want to console.log KOBE
// console.log(dudes.length)

// let myGlob
// function letsLoop() {
//   let myOutput;
//   for (let i = 0; i < matrix.length; i++) {
//     // console.log(`current index or i >> ${i}`)
//     // console.log(matrix[i])
//     // console.log(`PARENT == ${i}`)
//     for (let j = 0; j < matrix[i].length; j++) {
//       // console.log(matrix[i])
//       // console.log(matrix[i][j])
//       for (let k = 0; k < matrix[i][j].length; k++) {
//         myOutput = matrix[i][j][k]
//       }
//     }
//   }
//   return myOutput
// }

// myGlob = letsLoop()
// console.log(myGlob)

// console.log(letsLoop())
// console.log(letsLoop())
// console.log(letsLoop())
// console.log(letsLoop())
// console.log(myOutput)

// let sum = (a,b) => {
//   return a+b
// }

// function sum(a, b) {
//   return a + b
// }


// let myMath = {
//   add: function (a, b) {
//     return a + b
//   },
//   sub: function (a, b) {
//     return a - b
//   }
// }
// console.log(myMath)
// console.log(myMath.add(4, 5))
// console.log(myMath.sub(9, 4))



// function ifElseFor(a, b) {
//   if (b === 'number') {
//     let sum = 0
//     for (let i = 0; i < a.lenth; i++) {
//       if (typeof a[i] === 'string') {
//         sum += 1
//       } else {
//         sum += a[i]
//       }
//     }
//     return sum
//   } else {
//     let sentence = ""
//     for (let item of a){
//     for (let i =0; i< a.length; i++){}

//     }
//     return sentence
//   }
// }


// input %2  === 0 ? true : false

// if(input % 2 === 0){
//   return true
// }else{
//   return false
// }


// let myArray = ["Math","Science","Art","Gym","History","Home Ec","Detention","Home Room"]

// let matrix = [
//   [
//     [1, 2, 3], [4, 5], [6, 7, 8, 9, 10]
//   ],
//   [
//     [11, 12, 13], [14, 15, 16]
//   ],
//   [
//     ['shoe', 'boot']
//   ]
// ]
// console.log('length >> '+ matrix.length)
// console.log(matrix[0][1][0])

// for(let counter = 0;counter < matrix.length; counter++){
//   //condition is checked
//   // console.log('My counter currently is >> '+ counter)
//   // console.log(myArray[counter])
//   console.log(matrix[counter])
//   for(let childCounter = 0; childCounter < matrix[counter].length; childCounter++){
//     console.log(matrix[counter][childCounter])
//   }
//   //increment counter
// }

// console.log(myArray[counter])



// Fundamentals III

let shoe = ['low top','laces','non slip']
let boot = [...shoe, 'leather']

let shoeObj = {
  support:'low top',
  securedHow:'velcro',
  safe:'non-slip'
}

let bootObj = {
  ...shoeObj,
  steelToe: 'yup'
}

let {safe, ...bootObjAgain} = bootObj


function printAnimals(singleParameter) {
  console.log(singleParameter);
}

// printAnimals("dog", "cat", "fish");

function printAnimals(...mulipleParameters) {
  // console.log(mulipleParameters);
}

// printAnimals("dog", "cat", "fish",'lizard');


let person = {
  firstName:"Jordan",
  lastName:'Azemopoulos'
}

let otherGuy = {
  name:{
    fName:"Kobe",
    lName:"Griffith"
  }
}

// console.log(person)

function printName({firstName, lastName}) {
  console.log(`Hey there, ${firstName} ${lastName}`)
}

// printName(person)
// printName(otherGuy)


let terribleArry = [1,'Ben',2,3,false,4,5,true,6]

let purdy = terribleArry.filter(numb => typeof numb === 'number' )

let jordan = purdy.map( num => num * 2 )

let jPurdy = terribleArry.filter(numb => typeof numb === 'number' )
  .map( num => num * 2 )
  .filter(numb => numb % 4 == 0 )
  .map( num => num * 2 )

// console.log(purdy)
// console.log(jordan)
console.log(jPurdy)
