console.log('\'Allo \'Allo!');

$('#phone-input').mask('(999) 999-9999'); // Formats input field properly when peeps type

$('#phone-input').keypress(function() {
  var value = $(this).val();
  if(value.length > 9 && value.isNumeric() == 'true') {
    console.log('wassup');
  }
});