// import {login} from 'cordova-plugin-sip'
// var sip = cordova.require("c");

var sipManager = {
	register: function () {
		console.log('reg')
		cordova.plugins.sip.login('720302', '12345678', 'voip.vn3anjo.com.br', function (e) {
			console.log("here")
			if (e == 'RegistrationSuccess') {
				console.log(e);
				sipManager.listen();

			} else {
				alert("Registration Failed!");
			}

		}, function (e) { console.log(e) })
	},
	call: function () {
		console.log(cordova)
		cordova.plugins.sip.call('720301', '12345678','voip.vn3anjo.com.br', sipManager.events, sipManager.events)
		alert("ligou")
	},
	listen: function () {
		cordova.plugins.sip.listenCall(sipManager.events, sipManager.events);
		alert("pronto para receber ligacoes")
	},
	hangup: function () {
		cordova.plugins.sip.hangup(function (e) { console.log(e) }, function (e) { console.log(e) })
	},
	events: function (e) {
		console.log(e);
		if (e == 'Incoming') {
			var r = confirm("Recebendo Chamada");
			if (r == true) {
				cordova.plugins.sip.accept(true, sipManager.events, sipManager.events);
			} else {

			}
		}
		if (e == 'Connected') {
			alert("Connected!");
			sipManager.listen();
		}
		if (e == 'Error') {
			alert("Call Error!");
			sipManager.listen();
		}
		if (e == 'End') {
			alert("Call End!");
			sipManager.listen();
		}


	}
}

const logar = () => {
	login('203', '203', '192.168.1.111:5060', function (e) {

		if (e == 'RegistrationSuccess') {
			console.log(e);
			listen();
		} else {
			alert("Registration Failed!");
		}

	}, function (e) { console.log(e) })

}

const successCallback = () => {
	console.log("listen");
}
const errrooor = () => {
	console.log("listen");
}

function onload() {
	console.log("1")
	document.addEventListener("deviceready", onDeviceReady, false);
}


document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    sipManager.register();
    alert('bbb');
}

document.getElementById("connect").addEventListener("click",()=> {
	alert('as');
	sipManager.register()
	console.log("logis")
	}
);

document.getElementById("endcall").addEventListener("click",()=> {
	alert('as');
	sipManager.hangup()
	console.log("logis")
	}
);

document.getElementById("call").addEventListener("click",()=> {
	alert('as');
	sipManager.call()
	console.log("logis")
	}
);