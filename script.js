// after submitting the form, add text in #textinputError
// if the input is empty, add text "Please enter your name"

document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();
//   var textInput = document.getElementById('textinput').value;
//   var textInputError = document.getElementById('textinputError');

//     textInputError.textContent = 'Error: I said anything but actually please enter your name';

    // set focus to #alert
    var alert = document.getElementById('alert');
    alert.focus();
});
