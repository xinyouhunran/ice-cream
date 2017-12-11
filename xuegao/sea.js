
var url = location.href;
var arr = url.split('?');
var s = decodeURI(arr[1]);
/*console.log(s);*/
var oimg1 = document.getElementById('img1');
var oimg2 = document.getElementById('img2');
var oprice = document.getElementById('price');
ajax('get','cold.json','',function(cold){
	var str = '';
	var olist = document.getElementById('list');
	var reg = new RegExp(""+s+"","gi");	
	for(var i in cold){	
		if(reg.test(cold[i].title)){
			str+='<li><a href=detial.html?'+cold[i].id+'><img src='+cold[i].image+' alt=""></a><p>'+cold[i].title+'</p><span>会员特价：<b>￥'+cold[i].price+'</b></span></li>';
		}
	}
	olist.innerHTML = str;
})