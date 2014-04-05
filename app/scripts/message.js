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

client.messages('SMb9acb2db2f2208bcacc03aaf46f2a0ac').get({

});