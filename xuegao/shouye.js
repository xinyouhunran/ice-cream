ajax('get','cold.json','',function(cold){
	var str = '';
	var olist = document.getElementById('list');
	for(var i in cold){
		str+='<li><a href=detial.html?'+cold[i].id+'><img src='+cold[i].image+' alt=""></a><p>'+cold[i].title+'</p><span>会员特价：<b>￥'+cold[i].price+'</b></span></li>';
	}
	olist.innerHTML = str;
})
