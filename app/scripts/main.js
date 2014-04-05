console.log('\'Allo \'Allo!');

$('#phone-input').mask('(999) 999-9999'); // Formats input field properly when peeps type

function empty(x){
  var empty = false;
    if (x[x.length-1] == '0' || 
      x[x.length-1] == '1' || 
      x[x.length-1] == '2' ||
      x[x.length-1] == '3' ||
      x[x.length-1] == '4' ||
      x[x.length-1] == '5' ||
      x[x.length-1] == '6' ||
      x[x.length-1] == '7' ||
      x[x.length-1] == '8' ||
      x[x.length-1] == '9'){
      empty = true;
    }
    else{
      empty = false;
    }
  
  return empty;
}

$('#phone-input').keypress(function() {
  var value = $(this).val();
  if(value.length > 9 && empty(value) === true) {
    console.log('Full');
    $('form').addClass('valid');
  }
});