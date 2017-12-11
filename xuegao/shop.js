var str='';
var obox = document.getElementById('box');
if(getCookie('cold')){
	var val = getCookie('cold');
	var obj1 = JSON.parse(val);
	var str = '';
	ajax('get','cold.json','',function(cold){


		for(var i in obj1){
			for(var j in cold){
				if(i==cold[j].id){
					str+='<li data-id='+cold[j].id+'><div class="left"><img src='+cold[j].image+' alt=""></div><div class="right"><span>'+cold[j].price+'</span><input type="button" class="sub" value="-"><input type="text" value='+obj1[i]+'><input type="button" class="add" value="+"><span>'+cold[j].price*obj1[i]+'</span><i>删除</i></div>	<div class="bottom"><p>依到我的关注</p><p>加到我的关注</p></div></li>'
				}
			}
		}
		obox.innerHTML = str;
	
	obox.onclick = function(e){
	var e = e||event;
	var target = e.target||e.srcElement;
	if(target.className=='add'){
		var num = Number(target.previousElementSibling.value);
		num++;
		target.previousElementSibling.value = num;
		var price = Number(target.parentNode.firstElementChild.innerHTML);
		target.nextElementSibling.innerHTML = num*price;
		for(var i in obj1){
			if(i==target.parentNode.parentNode.getAttribute('data-id')){
				obj1[i] = target.previousElementSibling.value;
				var str2 = JSON.stringify(obj1);
				setCookie('cold',str2,7);
			}
		}

	}
	if(target.className=='sub'){
		var num = Number(target.nextElementSibling.value);
		if(num>1){
			num--;
		target.nextElementSibling.value = num;
		var price = Number(target.parentNode.firstElementChild.innerHTML);
		target.parentNode.lastElementChild.previousElementSibling.innerHTML = num*price;
		for(var i in obj1){
			if(i==target.parentNode.parentNode.getAttribute('data-id')){
				obj1[i] = target.nextElementSibling.value;
				var str2 = JSON.stringify(obj1);
				setCookie('cold',str2,7);
			}
		}
		}else{
		alert('请添加物品');
		}
	}
	
	if(target.tagName =='I'){
		target.parentNode.parentNode.remove();
		for(var i in obj1){
			if(i==target.parentNode.parentNode.getAttribute('data-id')){
				delete obj1[i];
				var str2 = JSON.stringify(obj1);
				setCookie('cold',str2,7);
			}
		}
	}
}
});
}
