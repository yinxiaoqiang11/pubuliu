function Ajax(type,url,parm,callback){
	if(type==="GET"){
		var xhr=new XMLHttpRequest();
		xhr.open(type,url);
		xhr.send();
		xhr.onreadystatechange=function(){
			if(xhr.readyState===4&&xhr.status===200){
				var data=xhr.responseText;
				callback(data);
			}
		}
	}else{
		var xhr=new XMLHttpRequest();
		xhr.open(type,url);
		xhr.send(param);
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.onreadystatechange=function(){
			if(xhr.readyState===4&&xhr.status===200){
				var data=xhr.responseText;
				callback(data);
			}
		}

	}
}