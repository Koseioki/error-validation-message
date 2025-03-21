document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();
  var fullnameError = document.getElementById('fullnameError');
  var requirementsError = document.getElementById('requirementsError');
  var radioError = document.getElementById('radioError');
  var checkboxError = document.getElementById('checkboxError');

    fullnameError.innerHTML  = '<img src="./error.svg" alt="" /> Enter your full name.';
    requirementsError.innerHTML = '<img src="./error.svg" alt="" /> Provide any special dietary requirements or leave the field blank if none.';
    radioError.innerHTML = '<img src="./error.svg" alt="" /> Select your preferred meal plan.';
    checkboxError.innerHTML = '<img src="./error.svg" alt="" /> Select at least one additional preference, or uncheck if none apply.';

    // set focus to #alert
    var alert = document.getElementById('alert');
    // remove attribute hidden	
    alert.removeAttribute('hidden');
    alert.innerHTML = '<h3>There is a problem</h3> <ul> <li> <a href="#fullname">' + fullnameError.textContent + '</a> </li> <li> <a href="#requirements">' + requirementsError.textContent + '</a> </li> <li> <a href="#radio">' + radioError.textContent + '</a> </li> <li> <a href="#checkbox">' + checkboxError.textContent + '</a> </li> </ul>';
    alert.focus();
});
