

// Create array. The indexes: 0= skull.png. 1= flower.png, 2= heart.png
const slotImages = [ 
    "imgs/skull.png",
    "imgs/flower.png",
    "imgs/heart.png",
]


// create a function that allows you to spin images randomly 
function getRandomImages(){ 
    const randomSpin = Math.floor(Math.random() *3) // this will generate one of three numbers: 0, 1, or 2 
    return slotImages[randomSpin] // returns the image/index in slotImages that matches the randomSpin number.
}



 /*----- event listeners -----*/
//add an event listener to run the playSlotMachine within function when clicked 
const button = document.getElementById('betting');//asigning new variable 
button.addEventListener('click', playSlotMachine); //--> this here initiates the playSlotMachine so that we can 


let slots = { // we created an object here to identify the image that gets shuffled randomly 
    a: "",
    b: "",
    c: ""
}

 
/*----- functions -----*/

function playSlotMachine() {
// we are selecting the photos id and assigning it to the picture element
// const picture = document.querySelector('#photos') 
// picture.innerHTML = "" // empty string to clear out the main tag of all the image tags so that evey time you click the images reset 

document.getElementById('photos').innerHTML = "" // <-- this is the same! why are we assining a new value photos?

// document.querySelector('#photos') we are selecting the element with the id photos 


//what is this called 

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


 




