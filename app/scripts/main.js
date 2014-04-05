console.log('\'Allo \'Allo!');

$('#phone-input').mask('(999) 999-9999'); // Formats input field properly when peeps type

function empty(x){
  for (i=0; i>=x.length(); i++){
    if (x.val())
  }
}

$('#phone-input').keypress(function() {
  var value = $(this).val();
  if(value.length > 9 && value != ' ') {
    console.log('wassup');
  }
});