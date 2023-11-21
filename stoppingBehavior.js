// Donna Quach, JavaScript 310B, Autumn 2023
// Class 6 Exercises 

// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage

// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"


$(document).ready(function() {
  // When clicked, "More info" link should alert "Here's some info"
  // instead of going to a new webpage
  const $moreInfoLink = $('#more-info'); // jQuery object with element with id="more-info"
  $($moreInfoLink).click(function() {
    alert('Here\'s some info'); 
  }); 


  // When the bark button is clicked, should alert "Bow wow!"
  // Should *not* alert "meow"
  const $dogButton = $('#dog'); // jQuery object with element with id="dog"

  $($dogButton).click(function() {
    alert('Bow wow!');
  });

}); 

  
 






