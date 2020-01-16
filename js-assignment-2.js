/* Js Application */

//Initialize Array
var chores = ['Grenier', 'Bob'];
var keyStroke = '';

//Defining commands:

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function create(chores) {
  var add = prompt("What would you like to add?");
  var type = prompt("Where do you want to add it ? (Start, End)");
  if (type === "End") {
    chores.push(add);  //Add to End
  } else if (type === "Start") {
    chores.unshift(add);  //Add to Start
  } else {
    var tryAgain = prompt("Type dosen't exist. Would you like to try again (Y/N)");
    if (tryAgain === "Y") { create(chores); } //Run loop again
  }
}

function display(chores) {
  console.log("Chores: [" + chores + "] |" + " Length: " + chores.length);
}

function edit(chores) {
  display(chores);
  var oldElement = prompt("What do you want to edit? (Name)"); //get element to replace
  var newElement = prompt("What do you want to replace it with?"); //Get new value 
  if (chores.includes(oldElement)) { //See if oldElement is in array
    var i = chores.indexOf(oldElement); //Get index of oldElement
    chores.splice(i, 1, newElement); //Replace element at index i with newElement 
  } else {
    var tryAgain = prompt("Element dosen't exist. Would you like to try again (Y/N)");
    if (tryAgain === "Y") { edit(chores); } //Run loop again
  }
}

function remove(chores) {
  display(chores);
  var name = prompt("What do you want to remove? (Name)");
  if (chores.includes(name)) { //See if name is in array
    var i = chores.indexOf(name); //Get index of name
    chores.splice(i, 1); //Remove element at index i
  } else {
    var tryAgain = prompt("Element dosen't exist. Would you like to try again (Y/N)");
    if (tryAgain === "Y") { remove(chores); } //Run loop again
  }
}

//Application loop




async function go() {
  while (true) {
    //Recieve usr command
    await sleep(10);
    keyStroke = prompt("What would you like to do? \n(C)reate,\n(D)isplay,\n(E)dit,\n(R)emove,\n(Q)uit.")
    if (keyStroke === "C") {
      create(chores);
    } else if (keyStroke === "D") {
      display(chores);
    } else if (keyStroke === "E") {
      edit(chores);
    } else if (keyStroke === "R") {
      remove(chores);
    } else if (keyStroke === "Q") {
      break;
      console.log("quit");
    } else {
      console.log("That keystroke dosen't exist.");
    }
  }
}
go()
/*
function input(keyStroke){
  keyStroke = prompt("What would you like to do? \n(C)reate,\n(D)isplay,\n(E)dit,\n(R)emove,\n(Q)uit.");
  return keyStroke;
}
*/


