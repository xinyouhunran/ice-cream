var obtndel = document.getElementById('btndel');
var oadver = document.getElementById('adver');

obtndel.onclick = function(){
	oadver.style.display = 'none';
	setTimeout(function(){
		oadver.style.display = 'block';
	},60000);
}

var omy = document.querySelector('.my');
var omessage = document.querySelector('.message');
omy.onmouseover = function(){
	this.firstElementChild.style.background = 'yellow';
	omessage.style.display = 'block';
}
omy.onmouseout = function(){
	this.firstElementChild.style.background = 'rgba(255,255,255,0)';
	omessage.style.display = 'none';
}

var oscroll = document.getElementById('scroll');
var li = oscroll.children[0].cloneNode(true);
var ali = oscroll.getElementsByTagName('li');
oscroll.appendChild(li);
oscroll.style.width = ali.length*ali[0].offsetWidth+'px';
var timer = null;
var now = 0;
var osco = document.getElementById('sco');
sco.style.width = ali[0].offsetWidth+'px';
autoPlay();
function autoPlay(){
	clearInterval(timer);
	var speed = 0;
	timer = setInterval(function(){
		speed++;
		if(speed>=oscroll.offsetWidth-ali[0].offsetWidth){
			speed =0;
			oscroll.style.left = 0+'px';
		}else{
			oscroll.style.left = -speed+'px';
		}
	},50)
}
var ologin = document.getElementById('login');
	if(getCookie('user')){
		ologin.innerHTML = getCookie('user');
	}

