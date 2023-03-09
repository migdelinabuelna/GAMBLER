# GAMBLER RULES
Gambler is a slot machine game that you initiate by clicking the "BET" button. 
Once the button is clicked the screen will randomly display three images. 
If three of the same images appear on the screen, you win the game! Otherwise, you loose, but you get to try again for as many rounds as you'd like. 


# Creating the code 
## HTML
Set up started by populating the HTML boilerplate using "!" + TAB within out HTML folder.

<head>
In the HTML tag we added a title, linked CSS & JavaScript to work with them in separate folders, and ensured to add defer before the script link, so that 



* TO BE CONTINUED *



## JAVASCRIPT 


### function slotImages 
Create a slotImages array. It includes three images: skull.png which was the index of 0
flower.png which has the index of 1,
and heart.png with an index of 2.

### function getRandomImages
First function in JavaScript. Within the function, we are using the Math.random() method which is set to generate a random number from 0 through <1. We are adjusting the method by adding three (Math.random() *3) which then will generate random numbers from 0 through <3. This method gives us decimals, and to eliminate that, we added Math.floor to the method, which will round the random numbers to the lowest whole number being 0 through <3. 
The function is then asked to return slotImages and display the index that matches with the randomSpin number. 


For example: 
If you get random number 0, it'll match to the index 0 of the array which is skull.png and it will return that imaege.

If you randomly get 1 from randomSpin, it will return the index 1 image which is flower.png. 

randomSpin 2 = heart.png index2

you can console.log the function as follows for more visual details. 

console.log(getRandomImages()); 




