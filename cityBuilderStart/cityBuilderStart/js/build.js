//console log just to test that your JS is linked properly

console.log("SA-LA-LA-LA SICK OF THE SILENCE")
//create a variable for the number of buildings in the city and start it at zero
var buildings = 0;

//send a message to the page to inform the user of how many buildings there are in their city. This will happen right away when the page loads
document.getElementById('city').innerHTML="You have "+buildings+" Buildings in your city!";
//Functions -- 
//Think of this as a group of instructions that will always run together
//Create a function that will run when the first button is clicked
//This gets trigger by the submit button in the form. This trigger is known as an EVENT! (Button click event)
//It will:
    //-- Print a message to teh console
    //--Add one to the variable that is tracking the number of buildings
    //---Print a message with the number of buildings
    //---Place an image graphic into the other div

function buildone () {
    console.log("BECAUSE IM TERRILA-LA-LA-FIED OF WHAT WHATS INSIDE OF ME.");
    // ++ is a shortcut to ass one to a variable
    buildings++;
    document.getElementById('city').innerHTML="You have "+buildings+" Buildings in your city!";
    document.getElementById('cityGraphic').innerHTML+="<img src='images/BuildingBlock1.png'>"
}
//Create a function for the second button that prints a message with the number of buildings and the graphic for the second building
function buildtwo () {
    console.log("AND I GET SO SA-LA-LA-LA-LA-LA-LA SICK OF THE SILENCE");
    // ++ is a shortcut to ass one to a variable
    buildings++;
    document.getElementById('city').innerHTML="You have "+buildings+" Buildings in your city!";
    document.getElementById('cityGraphic').innerHTML+="<img src='images/BuildingBlock2.png'>"
}
//Create a function for the third button that prints a message with the number of buildings and the graphic for the second building

function buildthree () {
    console.log(" THAT I HAVE TO JUST SCREAM");
    // ++ is a shortcut to ass one to a variable
    buildings++;
    document.getElementById('city').innerHTML="You have "+buildings+" Buildings in your city!";
    document.getElementById('cityGraphic').innerHTML+="<img src='images/BuildingBlock3.png'>"
}

function buildfour () {
    console.log("CAW");
    // ++ is a shortcut to ass one to a variable
    buildings++;
    document.getElementById('city').innerHTML="You have "+buildings+" Buildings in your city!";
    document.getElementById('cityGraphic').innerHTML+="<img src='images/crow stock_cropped.jpg'>"
}

function warbler () {
    console.log("tweedle tweet");
    // ++ is a shortcut to ass one to a variable
    buildings++;
    document.getElementById('city').innerHTML="You have "+buildings+" Buildings in your city!";
    document.getElementById('cityGraphic').innerHTML+="<img src='images/Speckeld_warbler.jpg'>"
}