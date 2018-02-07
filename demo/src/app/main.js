var os = require('os');
var message = document.getElementById("message");
message.innerHTML = "You are running on " + os.platform();