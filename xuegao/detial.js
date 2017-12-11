var url = location.href;
var arr = url.split('?');
var oimg1 = document.getElementById('img1');
var oimg2 = document.getElementById('img2');
var oprice = document.getElementById('price');
ajax('get','cold.json','',function(cold){
	for(var i in cold){
		if(arr[1]==cold[i].id){
			oimg1.src = cold[i].image;
			oimg2.src = cold[i].image;
			oprice.innerHTML = '￥'+cold[i].price;
		}
	}
})
var ofilter = document.getElementById('filter');
var section_m_l = document.querySelector('.section-m-l');
var maxpic = document.querySelector('.maxpic');
section_m_l.onmousemove = function(e){
	var e = e||event;
	ofilter.style.display = 'block';
	maxpic.style.display = 'block';
	var l = e.clientX-offset(section_m_l).l-ofilter.offsetWidth/2;
	var t = e.clientY-offset(section_m_l).t-ofilter.offsetHeight/2;

	l = l<0?0:(l>=(section_m_l.offsetWidth-ofilter.offsetWidth)?section_m_l.offsetWidth-ofilter.offsetWidth:l);
	t = t<0?0:(t>=(section_m_l.offsetHeight-ofilter.offsetHeight)?section_m_l.offsetHeight-ofilter.offsetHeight:t);

	ofilter.style.left = l+'px';
	ofilter.style.top = t+'px';
	oimg2.style.left = -2*l+'px';
	oimg2.style.top = -2*t+'px';
}
section_m_l.onmouseout = function(){
	ofilter.style.display = 'none';
	maxpic.style.display = 'none';
	}
var oshopbtn = document.getElementById('shopbtn');
var obj = {};
oshopbtn.onclick = function(){
	var cookie = document.cookie;

	if(!getCookie('cold')){

		obj[arr[1]]=1;
		var str = JSON.stringify(obj);
		setCookie('cold',str,7);
		quealert("添加成功，请前往购物车查看");
	}
	else if(getCookie('cold')){
		var str1 = getCookie('cold');
		var obj1 = JSON.parse(str1);
		if(!obj1[arr[1]]){
			obj1[arr[1]] = 1;
			var str2 = JSON.stringify(obj1);
			setCookie('cold',str2,7);
			quealert("添加成功，请前往购物车查看");
		}else{
			quealert('此商品已添加，请前往购物车查看');
		}		
	}
}

