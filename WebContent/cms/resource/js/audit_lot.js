var page = 1;
var model = "nonAudit";
var is_passed = getIsPassed(model);
var url = '/Art/cms/jsp/lotList?is_passed='+is_passed+'&page=' + page;

	
$(document).ready(function(){
	$('#content').load(url);
	changeColor(model);
	
	$(document).find('button#nonAudit').on('click', function(){
		if(model != 'nonAudit'){
			model = 'nonAudit';
			changeColor(model);
			page = 1;
		}
		is_passed = getIsPassed(model);
		url = '/Art/cms/jsp/lotList?is_passed='+is_passed+'&page=' + page;
		$('#content').load(url);		
	});
	
	$(document).find('button#auditedPassed').on('click', function(){
		if(model != 'auditedPassed'){
			model = 'auditedPassed';
			changeColor(model);
			page = 1;
		}
		is_passed = getIsPassed(model);
		url = '/Art/cms/jsp/lotList?is_passed='+is_passed+'&page=' + page;
		$('#content').load(url);
	});
	
	$(document).find('button#auditedFailed').on('click', function(){
		if(model != 'auditedFailed'){
			model = 'auditedFailed';
			changeColor(model);
			page = 1;
		}
		is_passed = getIsPassed(model);
		url = '/Art/cms/jsp/lotList?is_passed='+is_passed+'&page=' + page;
		$('#content').load(url);
	});
});

function changeColor(model){
	document.getElementById("nonAudit").style.color="#869198";
	document.getElementById("auditedPassed").style.color="#869198";
	document.getElementById("auditedFailed").style.color="#869198";
	document.getElementById(model).style.color="#1ABC9C";
}

function getIsPassed(model){
	var is_passed = 0;
	switch(model){
	case 'nonAudit':
		is_passed = 0;
		break;
	case 'auditedPassed':
		is_passed = 1;
		break;
	case 'auditedFailed':
		is_passed = -1;
		break;
	}
	return is_passed;
}

function viewDetailsOfLot(id){
	window.open('/Art/cms/jsp/viewDetailsOfLot?id=' + id);
}

function passLot(id){
	ajaxFunc(id, 1);
}

function failLot(id){
	ajaxFunc(id, -1);
}

function ajaxFunc(id, setIsPassed){
	$.ajax({
		url:"/Art/cmsSetLotIsPassed.json",
		type:"POST",
		data:{
			'id':id,
			'is_passed':setIsPassed
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
		alert(data.data);
		windows.open(data.data);
	}
}

function nonAudit(){
	if(model != 'nonAudit'){
		model = 'nonAudit';
		changeColor(model);
		page = 1;
	}
	is_passed = getIsPassed(model);
	url = '/Art/cms/jsp/artworkList?is_passed='+is_passed+'&page=' + page;
	$('#content').load(url);
}

function needModify(){
	if(model != 'needModify'){
		model = 'needModify';
		changeColor(model);
		page = 1;
	}
	is_passed = getIsPassed(model);
	url = '/Art/cms/jsp/artworkList?is_passed='+is_passed+'&page=' + page;
	$('#content').load(url);
}

function auditedFailed(){
	if(model != 'auditedFailed'){
		model = 'auditedFailed';
		changeColor(model);
		page = 1;
	}
	is_passed = getIsPassed(model);
	url = '/Art/cms/jsp/lotList?is_passed='+is_passed+'&page=' + page;
	$('#content').load(url);
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
		case 'auditedFailed':
			auditedPassed();
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
		case 'auditedFailed':
			auditedPassed();
			break;
		}
	}
}
