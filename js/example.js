    // Name: David Huynh
    // Email: david_huynh@student.uml.edu
    // Major: C.S (Senior year) in course 91.61 GUI Programming I
    // Date Created: 08/03/2020
    // Short Description: In class exercise 5
    // Copyright (c) 2020 by David Huynh. All rights reserved

// ADD NEW ITEM TO END OF LIST
let unOrderList = document.getElementsByTagName("UL");
let initCream = document.createElement("li");
initCream.appendChild(document.createTextNode("cream"));
initCream.setAttribute("id", "five");
unOrderList[0].appendChild(initCream);

// ADD NEW ITEM START OF LIST
let initKale = document.createElement("li");
initKale.appendChild(document.createTextNode("kale"));
initKale.setAttribute("id", "zero");
unOrderList[0].insertBefore(initKale, unOrderList[0].childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
let child = document.getElementsByTagName("LI");
for (let i = 0; i < child.length; i++) {
    child[i].className = "cool";
    //i++
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
let totalList = parseInt(li.length);
let getHeader = document.getElementsByTagName("h2");
let getSpan = document.createElement("span");
getSpan.appendChild(document.createTextNode(totalList));
getHeader2[0].appendChild(span);