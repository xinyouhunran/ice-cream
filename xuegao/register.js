var ofo = document.querySelector('.fo');

var apassbtn = ofo.querySelectorAll('.passbtn');
var opass = document.getElementById('pass');
var aspan = ofo.getElementsByTagName('span');
var ouser = document.getElementById('user');
ofo.onclick = function(e){
	var e = e||event;	
	var target = e.target||e.srcElement;
	/*var flag = true;*/
	if(target.id=='user'){
		target.onblur = function(){
			if(/^\w+$/.test(target.value)){
				target.nextElementSibling.innerHTML = '*合格';		
			}else{
				if(target.value==''){
					target.nextElementSibling.innerHTML = '*至少要有一个字符';
				}else{
					target.nextElementSibling.innerHTML = '*含有非法字符';
				}
			}
			
		}
	}
	if(target.id=='ema'){
		target.onblur = function(){
			if(/^\w+@\w+\.(com|cn|net)$/.test(target.value)){
				target.nextElementSibling.innerHTML = '*合格';
			}else{
				if(target.value==''){
					target.nextElementSibling.innerHTML = '*email不能为空';
				}else{
					target.nextElementSibling.innerHTML = '*不符合要求';
				}
			}
		}
	}
	if(target.id=='pass'){
		target.onblur = function(){
			if(/^.{6,}$/.test(target.value)){
				target.nextElementSibling.innerHTML = '*合格';
				if(/^[0-9]{6,}$/.test(target.value)||/^[a-zA-Z]{6,}$/.test(target.value)){
					for(var i=0;i<apassbtn.length;i++){
						apassbtn[i].style.background = '#fff';
					}
					apassbtn[0].style.background = 'orange';
				}
				else if(/^[0-9a-zA-z]{6,}$/.test(target.value)){
					for(var i=0;i<apassbtn.length;i++){
						apassbtn[i].style.background = '#fff';
					}
					apassbtn[1].style.background = 'orange';
				}else{
					for(var i=0;i<apassbtn.length;i++){
						apassbtn[i].style.background = '#fff';
					}
					apassbtn[2].style.background = 'orange';
				}
			}else{
				if(target.value==''){
					target.nextElementSibling.innerHTML = '*密码不能为空';
				}else{
					target.nextElementSibling.innerHTML = '*至少六位';
				}
			}
		}
	}
	if(target.id=='quepass'){
		target.onblur = function(){
			if(target.value==opass.value&&(/^.{6,}$/.test(opass.value))){
				target.nextElementSibling.innerHTML = '*合格';
			}else{
				target.nextElementSibling.innerHTML = '*密码输入不一致';
			}
		}
	}
	if(target.id=='phone'){
		target.onblur = function(){
			if(/^\d{11}$/.test(target.value)){
				target.nextElementSibling.innerHTML = '*合格';		
			}else{
				target.nextElementSibling.innerHTML = '*请输入11位数字';
			}
			
		}
	}
	if(target.id=='qq'){
		target.onblur = function(){
			if(/^\d{5,}$/.test(target.value)){
				target.nextElementSibling.innerHTML = '*合格';		
			}else{
				target.nextElementSibling.innerHTML = '*qq输入错误';
			}
			
		}
	}
	if(target.id=='regis'){
		var flag = true;
		for(var i=0;i<aspan.length;i++){
			if(aspan[i].innerHTML!='*合格'){
				/*console.log(aspan[i].innerHTML);*/
				flag = false;
			}
		}
		if(flag){
			if(getCookie('user')==ouser.value){
				quealert('此用户名已存在');
			}else{
				setCookie('user',ouser.value,7);
				setCookie('pass',opass.value,7);
				quealert("注册成功");
			}		
		}else{
			quealert("请完善信息");
		}
	}
}