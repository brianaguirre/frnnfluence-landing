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

function sendSMS(){
  var num = $('#phone-input').val();
  num = num.replace(/\D/g, ''); // Remove masks for url
  $.ajax({
    accept: 'application/json',
    contentType: "application/json; charset=utf-8",
    url: ('https://api.tropo.com/1.0/sessions?action=create&token=26bb50dd4e63f04c8f3990c75d79f2b8d2a28bbe847e2028e4448cbe19b6e705cff553baa8738360419fe8fc&to=' + num + '&msg=the+sky+is+falling'),
    dataType: 'jsonp',
    success: function(data) {
        console.log( data ); 
    }
  });
}








