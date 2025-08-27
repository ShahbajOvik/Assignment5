# What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
1) document.getElementById("id") ->Selects the element with that id.
2) document.getElementsByClassName("class")-> Select all elements with that class name.
3) document.querySelector("CSS selector")->Select The first element that matches a CSS selector
4) document.querySelectorAll("CSS selector")-> Select all elements that match a CSS selector

# How do you create and insert a new element into the DOM?

first Creates a new HTML element then text or content then adding into page
create: let p = document.createElement("p");
addtext: p.textContent = "This is a paragraph";
inpageShow:  document.body.appendChild(p)

# What is Event Bubbling and how does it work?
when an event occur child element automatically extend to its parent element.
suppose, 
<div id="bap">
  <button id="beta">Click Me</button>
</div>
document.getElementById('beta').addEventListener('click', () => 
  alert('beta clicked');)
document.getElementById('bap').addEventListener('click', () => {
  alert('bap clicked');})
if you click beta then it automatically show up bap clicked.

# What is Event Delegation in JavaScript? Why is it useful?
