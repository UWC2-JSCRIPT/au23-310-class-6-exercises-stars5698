// Donna Quach, JavaScript 310B, Autumn 2023
// Class 6 Exercises 

// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>

// Access (read) the data-color attribute of the <img>,
// log to the console

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"

$(document).ready(function () {
    // All of your code in here
    // This uses jQuery, but there is a plain JavaScript way to do this as well

    // Create a new <a> element containing the text "Buy Now!" using the jQuery method with an id of "cta" after the last <p>
    let $aElement = $('<a>'); // calls jQuery method to specifically create new <a> element (i.e. $('<tag name>')) 
    $aElement.text('Buy Now!'); // Set element's text using jQuery's text() method 
    $aElement.attr('id', 'cta'); // change id attribute using jQuery's attr() method

    const $pElementsList = jQuery('p'); // jQuery Object with all <p> elements 

    // Insert new <a> element/node after last <p> (add to end of list of <p> elements)
    // Get index of last item in $pElementsList
    const lastpElementIndex = $pElementsList.length - 1; 
    
    // Get last <p> element from $pElementsList
    const $lastpElement = $pElementsList[lastpElementIndex];

    // Insert new <a> element/node after last <p> 
    $aElement.insertAfter($lastpElement); // Had to use insertAfter() because after() caused <p> to complete disappear from the page upon execution 

    // Access (read) the data-color attribute of the <img>
    // log to the console
    const $img = jQuery('img'); // jQuery Object with all <img> elements 
    const datacolorImg = $img.attr('data-color'); // Access data-color attribute of <img> using jQuery's attr() method 
    console.log(`Data-color attribute of <img> is: ${datacolorImg}`);

    // Update the third <li> item ("Turbocharged"), 
    // set the class name to "highlight"
    const $liElementsList = jQuery('li'); // jQuery Object with all <li> elements  
    $liElementsList.attr('class', function(i, val) {
        if(i === 2)
        {
            val = 'highlight';
            return val; 
        } 
    }); // Access third <li> item and set class name using jQuery attr() method 

    // Remove (delete) the last paragraph
    // (starts with "Available for purchase now…") 
    $('p').remove(":contains('Available for purchase')"); // Remove paragraph that contains "Available for purchase" from the DOM 

    // Create a listener on the "Buy Now!" link that responds to a click event.
    // When clicked, the "Buy Now!" link should be removed
    // and replaced with text that says "Added to cart"
    const $buyNowlink = $('#cta'); // jQuery Object with element with id = "cta" aka Buy Now! link 

    $($buyNowlink).click(function(e) {
        this.innerText = 'Added to cart';
    }); 
});