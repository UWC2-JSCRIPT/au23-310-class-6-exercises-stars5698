// Donna Quach, JavaScript 310B, Autumn 2023
// Class 6 Exercises 

$(document).ready(function() {
  /**
   * Toggles "done" class on <li> element
   */

  // Code Source: Event Listeners Slide from JSCRIPT 200 Slide Deck 7 
  // Code below only works on EXISTING elements (i.e. elements hardcoded in HTML page)
  // $('li').on('click', function(e) {
  //   let $this = $(this);
  //   $(this).toggleClass('done'); 
  // }); 

  // Toggles "done" class on <li> element INCLUDING dynamically generated ones (i.e. adding items to list via user input)
  $('.today-list').on('click', 'li', function(e) {
    $(this).toggleClass('done');
  }); 


  /**
   * Delete element when delete link clicked
   */

  // If <a> element(s) with delete class is clicked, remove <li> element(s) (To-Do item)
  // Code below only works on EXISTING elements (i.e. elements hardcoded in HTML page)
  // $('a.delete').on('click', function(e) {
  //   // Code Source: https://stackoverflow.com/questions/71913331/delete-a-list-item-element-with-jquery (Ryan Wilson)
  //   $(this).closest('li').remove(); // Remove <li> element associated (and not all <li> elements) with Delete button that was just clicked 
  // });

  // If <a> element(s) with delete class is clicked, remove <li> element(s) (To-Do item) INCLUDING dynamically generated ones (i.e. items that were added to list via user input)
  // Explanation on syntax: https://stackoverflow.com/questions/33081985/jquery-unable-to-delete-dynamically-created-elements (Ionica Bizau)
  // Remove <li> element associated (and not all <li> elements) with Delete button that was just clicked
  $('.today-list').on('click', 'a.delete', function(e) {
    // $(this).closest('li').remove(); // Original line (remove element only)
    // Line below is for extra credit portion of assignment (fade out then remove)
    $(this).closest('li').fadeOut(1000, function() {
      $(this).remove();
    })
  });


  /**
   * Adds new list item to <ul>
   */
  const addListItem = function(e) {
    e.preventDefault(); // To prevent us from being taken to a new document upon clicking an <a> element (i.e. We want to add an item to a list instead upon clicking the Add button.)
    const text = $('input').val(); // Obtain user's input for new to-do item 

    // rest here...
    // Set up <li> (i.e. new to-do item)
    let $newliElement = $('<li>'); // Create <li> element 

    // Children of new <li> element (i.e. Each <li> element contains a <span> and an <a> element)
    let $newspanElement = $('<span>'); // Create <span> element which will represent the to-do item added 
    $newspanElement.text(text); // Display user's entry for to-do item 

    let $aElement = $('<a>'); // Create <a> element which will represent its Delete button
    $aElement.attr('class', 'delete'); // Set class attribute to "delete" to match the other delete buttons 
    $aElement.text('Delete'); // Set text of delete button to "Delete" to match the other delete buttons

    // Add children to <li> element 
    $($newliElement).prepend($newspanElement); // Make <span> first child of <li>
    $($newliElement).append($aElement); // Make <a> last child of <li> 

    // Finally add <li> element to <ul> 
    $('.today-list').append($newliElement); // Add <li> to end of list items of <ul>

  };

  // add listener for add
  $('a.add-item').on('click', function(e) {
    addListItem(e); 
  }); 

}); 