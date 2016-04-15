var page = 1;
var model = "draft";
var status = getStatus(model);
var url = 'jsp/articleListOfEditor?status='+status+'&page='+page;
	
$(document).ready(function(){
	draft();
});

function add(){
	window.open('./jsp/summernote?id=');
}

function draft(){
	if(model != 'draft'){
		model = 'draft';
		changeColor(model);
		page = 1;
	}
	status = getStatus(model);
	url = 'jsp/articleListOfEditor?status='+status+'&page='+page;
	$('#content').load(url);	
}

function nonAudit(){
	if(model != 'nonAudit'){
		model = 'nonAudit';
		changeColor(model);
		page = 1;
	}
	status = getStatus(model);
	url = 'jsp/articleListOfEditor?status='+status+'&page='+page;
	$('#content').load(url);	
}

function modify(){
	if(model != 'modify'){
		model = 'modify';
		changeColor(model);
		page = 1;
	}
	status = getStatus(model);
	url = 'jsp/articleListOfEditor?status='+status+'&page='+page;
	$('#content').load(url);	
}

function auditedPassed(){
	if(model != 'auditedPassed'){
		model = 'auditedPassed';
		changeColor(model);
		page = 1;
	}
	status = getStatus(model);
	url = 'jsp/articleListOfEditor?status='+status+'&page='+page;
	$('#content').load(url);
}

function auditedFailed(){
	if(model != 'auditedFailed'){
		model = 'auditedFailed';
		changeColor(model);
		page = 1;
	}
	status = getStatus(model);
	url = 'jsp/articleListOfEditor?status='+status+'&page='+page;
	$('#content').load(url);
}

function getStatus(model){
	var status = 1;
	switch(model){
	case 'draft':
		status = 1;
		break;
	case 'nonAudit':
		status = 2;
		break;
	case 'modify':
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
	document.getElementById("draft").style.color="#869198";
	document.getElementById("nonAudit").style.color="#869198";
	document.getElementById("modify").style.color="#869198";
	document.getElementById("auditedPassed").style.color="#869198";
	document.getElementById("auditedFailed").style.color="#869198";
	document.getElementById(model).style.color="#1ABC9C";
}

function editArticle(id){
	window.open('./jsp/summernote?id='+id);
}

function previewArticle(id){
	window.open('/Art/cms/jsp/previewArticle?id=' + id);
}

function submitArticle(id){
	$.ajax({
		url:"/Art/cmsSetArticleStatus.json",
		type:"POST",
		data:{
			'id':id,
			'status':2
		},
		success:function(data){
			ansyData(data);
		}
	});
}

function deleteArticle(id){
	$.ajax({
		url:"/Art/cmsDeleteArticle.json",
		type:"POST",
		data:{
			'id':id
		},
		success:function(data){
			ansyData(data);
		}
	});
}

function ansyData(data){
	if(data.errno == 0){
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
		case 'draft':
			draft();
			break;
		case 'nonAudit':
			nonAudit();
			break;
		case 'modify':
			modify();
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
		case 'draft':
			draft();
			break;
		case 'nonAudit':
			nonAudit();
			break;
		case 'modify':
			modify();
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

