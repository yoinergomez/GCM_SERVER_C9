var push = require('../../server/push');
//var example = require('../../server/example');

//var request = require('request');
var gcm = require('node-gcm');

module.exports = function(GcmUser) {

	GcmUser.sendPush = function(args, cb){
		console.log("sendPush username:"+args.username);
		GcmUser.find({where: {GCMUser: args.username.trim()}, limit: 1}, function(err, user){

			if (err) throw err;
			
			//console.log('User:' + user[0]);
			console.log('Username:' + user[0].GCMUser);
			//console.log('gcmid:' +user[0].gcmid);
			push.sendPushNotification(user[0].gcmid, args.message);

			//console.log('sayHelloInEnglish:' +example.sayHelloInEnglish());
			//console.log('sayHelloInSpanish:' +example.sayHelloInSpanish());
			
			return cb(err, user);
		});
	};

	GcmUser.remoteMethod('sendPush',{
		http: {path: '/push', verb: 'POST'},
		accepts: [{arg: 'args', type: 'Object', required: 'true', http:{source: 'body'}}],
		returns:{arg: 'result', type: 'Object', root: true}
	});

};