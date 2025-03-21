document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();
  var fullnameError = document.getElementById('fullnameError');
  var requirementsError = document.getElementById('requirementsError');
  var radioError = document.getElementById('radioError');
  var checkboxError = document.getElementById('checkboxError');

    fullnameError.innerHTML  = '<img src="./error.svg" alt="" /> Error: Enter your full name.';
    requirementsError.innerHTML = '<img src="./error.svg" alt="" /> Error: Provide any special dietary requirements or leave the field blank if none.';
    radioError.innerHTML = '<img src="./error.svg" alt="" /> Error: Select your preferred meal plan.';
    checkboxError.innerHTML = '<img src="./error.svg" alt="" /> Error: Select at least one additional preference, or uncheck if none apply.';

    // set focus to #alert
    var alert = document.getElementById('alert');
    // remove attribute hidden	
    alert.removeAttribute('hidden');
    alert.textContent = 'There are 4 errors in this form';
    alert.focus();
});
