
// Wait for all the HTML to load
$(document).ready(function () {

  // Add listener to all buttons
  $('button').click(function () {

    // Append HTML to all elements with id "container"
    $('#container').append('<p>Yet another paragraph</p>');

  });

});
