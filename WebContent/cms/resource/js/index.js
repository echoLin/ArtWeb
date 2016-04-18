function loadContent(e){
	switch(e.id){
	case 'artistAuditer':
		changeMenu(e.id);
		toArtistAuditer(0);
		break;
	}
}

function toArtistAuditer(status){
	if(status == null)
		status = 0;
	$('#right').load("/Art/cms/artistAuditer?status="+status);
}

function showModifyPasswordDiv(){
document.getElementById("right").style.zindex="-1";
document.getElementById("modify_password").style.display="";
}

function hideModifyPasswordDiv(){
document.getElementById("right").style.zindex="1";
document.getElementById("modify_password").style.display="none";
}

function validator_password(current_password,new_password,new_password_sed){
if(current_password == null || current_password == ''){
alert("请输入现在的密码");
return false;
}
if(new_password == null || new_password == ''){
alert("请输入新的密码");
return false;
}
if(current_password == new_password){
alert("旧密码与新密码不能相同");
return false;
}
if(new_password != new_password_sed){
alert("两次输入的新密码不同");
return false;
}
return true;
}

function cmsModifyPassword(){
var current_password = $('#current_password').val();
var new_password = $('#new_password').val();
var new_password_sed = $('#new_password_sed').val();
if(validator_password(current_password,new_password,new_password_sed)){
$.post(
		"/Art/cmsModifyPwd.json",
		{
			'current_password':current_password,
			'new_password':new_password
		},
		function(data){
			if(checkData(data)){
				alert('修改密码成功');
				hideModifyPasswordDiv();
			}
		});
}
}

function checkData(data){
if(data.Errno == 2){
	window.location.href = data.Data;
}else if(data.Errno == 1){
	alert(data.Data);
	return false;
}else{
	return true;
}
}

function changeMenu(menu){
	var ol = document.getElementById("dock");
	var list = ol.getElementsByTagName("*");
	for( var i =0; i<list.length; i++){
		if(list[i].className == "active launcher"){
			list[i].setAttribute('class', 'launcher');
			break;
		}
	}
	alert($('#artistAuditer').parent().parent());
	//var parent = $(menu).parent().parent().class('active launcher');
	//alert(parent);
	//parent.setAttribute('class','active launcher');
}