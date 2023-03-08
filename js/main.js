
//Created an array of images with index 0-2

const slotImages = [ 
    "imgs/star.png",
    "imgs/flower.png",
    "imgs/heart.png",
]

// create a function that allows you to spin images randomly 

function getRandomImages(){ //generating a random number between 0 and 2 // also the index 0-2 (math random includes decimals & we cannot have decimals in an array)
    const randomSpin = Math.floor(Math.random() *3) // math floor rounds the number to the lowest whole number (ceiling rounds to the highest whole number )
    return slotImages[randomSpin]
}
//  console.log(getRandomImages()); //<not necessary but helps you check your work


// //add an event listener for when the bet button is clicked 

const button = document.getElementById('betting');
button.addEventListener('click', playSlotMachine); //--> this here initiates the playSlotMachine so that we can 

//
let slots = { 
    a: "",
    b: "",
    c: ""
}

function playSlotMachine() {
// we are selecting the photos id and assigning it to the picture element
const picture = document.querySelector('#photos') 
picture.innerHTML = "" // empty string to clear out the main tag of all the image tags so that evey time you click the images reset 
const star = document.createElement('img')
star.id = 'star'
slots.a = getRandomImages(); //<-we are calling the get random images function - use () when calling a functio
star.src = slots.a
document.getElementById('photos').appendChild(star)


const flower =  document.createElement('img')
flower.id = 'flower'
slots.b = getRandomImages(); //We are assigning the flower value // <-calling the funciton
flower.src = slots.b
document.getElementById('photos').appendChild(flower)


const heart = document.createElement('img') //-> creating an img element that will go inside the <main> tag
//give the element an id
heart.id = 'heart' // these can have the same class name so you can group them together later 
slots.c = getRandomImages(); // assign image- call the function for random img 
heart.src = slots.c
document.getElementById('photos').appendChild(heart)// now select main tag by id name and assign the heart element to it 

displayMessage() //--> this is calling on the next function to run 

}



// slotImages=[] above is array-like but not an actual array. You cannot use regualar array methods

// star, flower, and heart are all id's that hold the array-like slotImages 

// perhaps we are looking at a prototype?

function displayMessage() {
    // sellect all of the elements by class name using queryselectorall 
    //we want to see if each of the elements source property are equal to eachother

  if (slots.a === slots.b && slots.b === slots.c) { 
    document.getElementById('message').innerHTML = ('Win Win Win'); //we are targetting the message id within the header tag to then display Win Win Win inside HTML
} else  { 
    document.getElementById('message').innerHTML = ('Sorry! Try Again');
 } 

 }

    // console.log(slots) // <-- we use this to check the work that we did. this should show the different pictures with the keys a, b, and c 
    // 




// if (star.slotImages === flower.slotImages && flower.slotImages === heart.slotImages ) { 

//maybe look into indexOf or for each?????



// if (star === flower && flower === heart) { 
//     document.getElementById('message').innerHTML = ('Win Win Win'); //we are targetting the message id within the header tag to then display Win Win Win inside HTML
// } else { 
//     document.getElementByID('message').innerHTML = ('Sorry, Try Again');
//   }


//add display function to the event listener? Internet is ok but im not sure about logic 

//img flower was assigned the id of 'flower 
//img star was assined the id of 'star'
//img heart was assigned the id of 'heart"

// we need a function that when each element land on the same index of the array, we will display a message 





/*----- constants -----*/


  /*----- state variables -----*/


  /*----- cached elements  -----*/


  /*----- event listeners -----*/

  /*----- functions -----*/
//each bet will be $5 dollars - write a function that deducts
// $5 with each bet <--perhaps

//write a function that if the player matches three items they win
// &&&& add a certain ammount to the balance 
// &&& play the money sound in our files 




