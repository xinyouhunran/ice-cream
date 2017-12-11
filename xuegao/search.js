var otxt = document.getElementById('txt');
var oseabtn = document.getElementById('seabtn');
oseabtn.onclick = function(){
	if(otxt.value!=''){
		location.href = "search.html?"+otxt.value;
	}
	else{
			quealert("请输入关键词");
		}	
}
function quealert(val){
			var div = document.createElement('div');
			div.className = 'alert';	
			var but = document.createElement('button');
			var p = document.createElement('p');
			p.className = 'quep';
			p.innerHTML = val;
			div.appendChild(p);
			but.innerHTML = '确定';
			but.className = 'que';
			div.appendChild(but);	
			var div1 = document.createElement('div');
			div1.className = 'meng';
			div1.appendChild(div);
			document.body.appendChild(div1);
			but.onclick = function(){
				div1.remove();
			}
}