//var jquery = require('../../client/jquery-2.2.3.min');
var gcm = require('node-gcm');

module.exports = {
	sendPushNotification: function(gcmid, message){

	console.log('/sendPushNotification' );
	console.log('gcmid: ' + gcmid);
	console.log('message: ' +message);

	//function sendPushNotification(gcmid, message){

	//var url = 'https://gcm-http.googleapis.com/gcm/send';
	//var api_key = 'AIzaSyBsb3qQ_zcPHaLk4LpzvVR1Lj2_JMZsEk4';		//gcmdemo
	var api_key = 'AIzaSyBfHvbJxc0h7SRslm98A5QNEdIo1LOmTp4';
	var url = 'http://gcm-server-class-yoinergomez.c9users.io:8080/api/GCMUsers';


	var msg = new gcm.Message();
		 
	msg.addData('message', message);
	 
	var regTokens = [gcmid];
	 
	// Set up the sender with you API key 
	var sender = new gcm.Sender(api_key);
	 
	// Now the sender can be used to send messages 
	sender.send(msg, { registrationTokens: regTokens }, function (err, response) {
		if(err) console.error(err);
		else 	console.log(response);
	});



/*	var data = {
	  "name": "string",
	  "email": "string",
	  "gcmid": "string",
	  "created_at": "2016-05-06",
	  "id": 0
	};
*/
	/*$.ajax({
		type: 'POST',
		url: url,
		data: JSON.stringify({name: 'Pedro', email: 'pedro@gmail.com', gcmid: gcmid}),
		contentType: 'application/json',
		/*Authorization:key = api_key
		{
			"to": gcmid,
			"data": {
				"message": "This a GCM message: "+ message,
			}
		}
	}, function(res){
		console.log("response: "+res);
	});*/

	}
};