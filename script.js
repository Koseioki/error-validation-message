// after submitting the form, add text in #textinputError
// if the input is empty, add text "Please enter your name"

document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();
  var textInput = document.getElementById('textinput').value;
  var textInputError = document.getElementById('textinputError');
  var textareaError = document.getElementById('textareaError');
  var radioError = document.getElementById('radioError');
  var checkboxError = document.getElementById('checkboxError');

    textInputError.innerHTML  = '<img src="./error.svg" alt="" /> Error: I said anything but there is an error';
    textareaError.innerHTML = '<img src="./error.svg" alt="" /> Error: I said anything but there is an error';
    radioError.innerHTML = '<img src="./error.svg" alt="" /> Error: I said any of them but there is an error';
    checkboxError.innerHTML = '<img src="./error.svg" alt="" /> Error: I said any of them but there is an error';

    // set focus to #alert
    var alert = document.getElementById('alert');
    // remove attribute hidden	
    alert.removeAttribute('hidden');
    alert.textContent = 'There are 2 errors in this form';
    alert.focus();
});
