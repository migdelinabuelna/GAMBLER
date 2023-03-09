
//Created an array of images with index 0-2

const slotImages = [ 
    "imgs/skull.png",
    "imgs/flower.png",
    "imgs/heart.png",
]

// create a function that allows you to spin images randomly 

function getRandomImages(){ //generating a random number between 0 and 2 // also the index 0-2 (math random includes decimals & we cannot have decimals in an array)
    const randomSpin = Math.floor(Math.random() *3) // math floor rounds the number to the lowest whole number (ceiling rounds to the highest whole number )
    console.log(randomSpin);
    console.log(slotImages);
    console.log(slotImages[0]);
    console.log(slotImages[1]);
    console.log(slotImages[2]);
    return slotImages[randomSpin]
}
//  console.log(getRandomImages()); //<not necessary but helps you check your work


// //add an event listener for when the bet button is clicked 

const button = document.getElementById('betting');
button.addEventListener('click', playSlotMachine); //--> this here initiates the playSlotMachine so that we can 

//
let slots = { // we created an object here to identify the image that gets shuffled randomly 
    a: "",
    b: "",
    c: ""
}

function playSlotMachine() {
// we are selecting the photos id and assigning it to the picture element
// const picture = document.querySelector('#photos') 
// picture.innerHTML = "" // empty string to clear out the main tag of all the image tags so that evey time you click the images reset 

document.getElementById('photos').innerHTML = "" // <-- this is the same! why are we assining a new value photos?

// document.querySelector('#photos') we are selecting the element  photos 


const skull = document.createElement('img')
skull.id = 'skull'
slots.a = getRandomImages(); //<-we are calling the get random images function - use () when calling a functio
skull.src = slots.a
document.getElementById('photos').appendChild(skull)


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



function displayMessage() {
    // sellect all of the elements by class name using queryselectorall 
    //we want to see if each of the elements source property are equal to eachother

  if (slots.a === slots.b && slots.b === slots.c) { 
    document.getElementById('message').innerHTML = ('$$$ Win Win Win $$$'); //we are targetting the message id within the header tag to then display Win Win Win inside HTML
    document.getElementById('beat').play(); //<this is identifying your audio tag in HTML with the beat id and is is instructing to play the audio if condition it met
} else  { 
    document.getElementById('message').innerHTML = ('Sorry! Try Again');
    document.getElementById('lost').play();
 } 

 }

    // console.log(slots) // <--this should show the different pictures with the keys a, b, and c as asigned above
    


/*----- constants -----*/


  /*----- state variables -----*/


  /*----- cached elements  -----*/


  /*----- event listeners -----*/

  /*----- functions -----*/




