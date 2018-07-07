// get the id of block button 1
var x = document.getElementById('block1');
// get the id of the container div
var y = document.getElementById('cont');
x.onclick = function(){
  // center the input when the button is clicked. will change this later to radio button events
  y.style.textAlign = 'center';
  // add margin auto to center the block level button when it's clicked. this will also change to radio buttons later
  x.style.margin = "10px auto";
};
