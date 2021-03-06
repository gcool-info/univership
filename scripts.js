var confirmation = new Confirmation();

document.getElementById('email-input').onkeyup = function(event){
	var email = this.value;
	var emailSubmitBtn = document.getElementById('email-submit');
	if (checkEmail(email)) {
		emailSubmitBtn.innerHTML = '<span class="glyphicon glyphicon-ok" aria-hidden="true"></span>';
	}
	else {
		emailSubmitBtn.innerHTML = '<span class="glyphicon glyphicon-remove" aria-hidden="true"></span>';
		return;
	}

	if (enterKeyPressed(event)) {
		submitEmail(email);
	}
};

document.getElementById('email-submit').onclick = function() {
	var email = document.getElementById('email-input').value;
	if (checkEmail(email)) {
		submitEmail(email);
	}
};

document.getElementById('invite-friend').onclick = function() {
	confirmation.toggleConfirmation();
};


var checkEmail = function(email) {
	var emailRegEx = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i); 
	if (emailRegEx.test(email)) {
		return true;
	}
	else {
		return false;
	}
};

var enterKeyPressed = function (e)
{
	var code = e.keyCode ? e.keyCode : e.which;
	if(code === 13)	{
		return true;
	}
	else {
		return false;
	}
};

var submitEmail = function(email) {
	var request = new XMLHttpRequest();
	var params = 'email=' + encodeURIComponent(email);
	request.open('POST', 'newsubscriber.php', true);
	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	request.onreadystatechange = function () {
	  if (request.readyState != 4 || request.status != 200) return;
	  confirmation.toggleConfirmation();
	};
	request.send(params);
};

function checkLegacyURL() {
	var url = window.location.href;
	var endPattern = /(.*)(#.*)/i;
	var result = url.match(endPattern);
	if ((result) && (result.length === 3)) {
		var baseURL = result[1].charAt(result[1].length - 1) === '/' ? result[1] : result[1] + '/';
		var redirectURL = baseURL + 'george/' + result[2];
		window.location = redirectURL;
	}
};

function Confirmation() {
	this.isVisible = false;
	this.toggleConfirmation = function() {
		var confirmationElement = document.getElementById('confirmation');
		var emailInput = document.getElementById('email-input');
		var emailBox = document.getElementById('email-box');
		if (!this.isVisible) {
			emailInput.setAttribute("disabled", "false");
			confirmationElement.style.animation = 'showConfirmation 1s forwards';
			emailBox.style.animation = 'hideEmailBox 1s forwards';
			this.isVisible = true;
		}
		else {
			emailInput.removeAttribute("disabled");
			confirmationElement.style.animation = 'hideConfirmation 1s forwards';
			emailBox.style.animation = 'showEmailBox 1s forwards';
			this.isVisible = false;
		}
	}
};

checkLegacyURL();