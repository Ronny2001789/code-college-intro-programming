var house = document.getElementById("passion");
var item1;
var item2;
var item3;

house.innerHTML="selection";

document.getElementById("my-bttn").onclick = newList;

function newList() {
    item1 = prompt("Enter a new first thing: ");
    item2 = prompt("Enter a new second thing: ");
    item3 = prompt("Enter a new third thing: ");
    updateList();
   };

   function updateList() {
    document.getElementById("firstThing").innerHTML = item1;
    document.getElementById("secondThing").innerHTML = item2;
    document.getElementById("thirdThing").innerHTML = item3;
   };
   