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

// Twilio Credentials 
var accountSid = 'ACc8207223279ac5e9cc3e55a9ad620abd'; 
var authToken = '97d0234167d62771f8385138c45fe8b0';
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 

client.messages.create({ 
  to: "7036777745", 
  from: "+12025170790", 
  body: "Thanks for your interest on frnnnfluence! Here is the link to the app: http://invis.io/HJR77HNT",
}, function(err, message) { 
  console.log(message.sid); 
});