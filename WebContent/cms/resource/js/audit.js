var page = 1;
var model = "";
var status = getStatus(model);
var url = '/Art/cms/jsp/articleListOfChiefEditor?status='+status+'&page='+page;
	
$(document).ready(function(){
	nonAudit();
});

function preBlock(){
	alert('还在还开发中');
}

function nonAudit(){
	if(model != 'nonAudit'){
		model = 'nonAudit';
		changeColor(model);
		page = 1;
	}
	status = getStatus(model);
	url = '/Art/cms/jsp/articleListOfChiefEditor?status='+status+'&page='+page;
	$('#content').load(url);	
}

function needModify(){
	if(model != 'needModify'){
		model = 'needModify';
		changeColor(model);
		page = 1;
	}
	status = getStatus(model);
	url = '/Art/cms/jsp/articleListOfChiefEditor?status='+status+'&page='+page;
	$('#content').load(url);	
}

function auditedPassed(){
	if(model != 'auditedPassed'){
		model = 'auditedPassed';
		changeColor(model);
		page = 1;
	}
	status = getStatus(model);
	url = '/Art/cms/jsp/articleListOfChiefEditor?status='+status+'&page='+page;
	$('#content').load(url);
}

function auditedFailed(){
	if(model != 'auditedFailed'){
		model = 'auditedFailed';
		changeColor(model);
		page = 1;
	}
	status = getStatus(model);
	url = '/Art/cms/jsp/articleListOfChiefEditor?status='+status+'&page='+page;
	$('#content').load(url);
}

function getStatus(model){
	var status = 2;
	switch(model){
	case 'nonAudit':
		status = 2;
		break;
	case 'needModify':
		status = 3;
		break;
	case 'auditedPassed':
		status = 4;
		break;
	case 'auditedFailed':
		status = -1;
		break;
	}
	return status;
}

function changeColor(model){
	document.getElementById("nonAudit").style.color="#869198";
	document.getElementById("needModify").style.color="#869198";
	document.getElementById("auditedPassed").style.color="#869198";
	document.getElementById("auditedFailed").style.color="#869198";
	document.getElementById(model).style.color="#1ABC9C";
}

function needModifyArticle(id){
	ajaxFunc(id, 3);
}

function previewArticle(id){
	window.open('/Art/cms/jsp/previewArticle?id=' + id);
}

function passArticle(id){
	ajaxFunc(id, 4);
}

function failArticle(id){
	ajaxFunc(id, -1);
}

function ajaxFunc(id, setStatus){
	$.ajax({
		url:"/Art/cmsSetArticleStatus.json",
		type:"POST",
		data:{
			'id':id,
			'status':setStatus
		},
		success:function(data){
			ansyData(data);
		}
	});
}


function ansyData(data){
	if(data.errno==0){
		$('#content').load(url);
		return true;
	}else if(data.errno == 1){
		alert(data.data);
		return false;
	}else if(data.errno == 2){
		windows.open(data.data);
	}
}

function nextPage(){
	page++;
	if(page > document.getElementById("pageNum").innerHTML){
		alert('已经是最后一页了');
	}else{
		switch(model){
		case 'nonAudit':
			nonAudit();
			break;
		case 'needModify':
			needModify();
			break;
		case 'auditedPassed':
			auditedPassed();
			break;
		case 'auditedFailed':
			auditedFailed();
			break;
		}
	}
}
function frontPage(){
	page--;
	if(page > document.getElementById("pageNum").innerHTML){
		alert('已经是最后一页了');
	}else if(page <= 0){
		alert('已经是第一页了');
	}else{
		switch(model){
		case 'nonAudit':
			nonAudit();
			break;
		case 'needModify':
			needModify();
			break;
		case 'auditedPassed':
			auditedPassed();
			break;
		case 'auditedFailed':
			auditedFailed();
			break;
		}
	}
}


