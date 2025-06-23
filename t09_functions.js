
/**********************************
task 9 introduction to functions
********************************/

console.log( "Running T9-functions.js" );

//varables

/*****************
maincode
**********************************/
getFavcolour();
askUserage();
askUserMoney();
/***********************************
 Functions
 **********************************/
function askUserage () {
askUserage = prompt("what is your name?")
alert("your name is: " + askUserage + "welcome")
}
function getFavcolour() {
userFavColour = prompt("what is your favourite colour?")
alert("your favourite colour is: " + userFavColour)
}
function askUserMoney() {
askUserMoney = prompt("How much money do you have?")
alert("You have: " + askUserMoney )
if(askUserMoney <=5)
alert("you CAN NOT afford a chocolate bar")
else 
alert("you CAN afford a chocolate bar")
}
