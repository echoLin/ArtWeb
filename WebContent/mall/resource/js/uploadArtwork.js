var id;
var category_id;
var type;
var head_url;
var content;
var create_time;
var name;
var price;
var summernote;

function getArtwork(){
	id = $('input#artwork_id').val() == 0 ? null :$('input#artwork_id').val();
	shop_id = $('input#shop_id').val();
	category_id = $('select#categoryList option:selected').val();
	type = $('select#typeList option:selected').val();
	head_url = $('input#artwork_head_url').val() == 0 ? null :$('input#artwork_head_url').val();
	content = getCode();
	create_time = new Date($('input#create_time').val());
	name = $('input#name').val();
	if(type == 2){
		price = $('input#price').val();
	}else{
		price = null;
	}
}

function checkArtwork(){
	if(shop_id == null || shop_id == 0){
		alert('当前店铺不存在');
		window.location.href = '/Art/mall/index';
	}
	if(category_id == null || category_id == 0){
		alert('作品类别不能为空');
		return false;
	}
	if(type == null || type == 0){
		alert('作品类型不能为空');
		return false;
	}
	if(head_url == null || head_url == 0){
		alert('请上传作品头像');
		return false;
	}
	if(content == null){
		alert('作品介绍不能为空');
		return false;
	}
	if(create_time == null){
		alert('创作时间不能为空');
		return false;
	}
	if(name == null){
		alert('作品名称不能为空');
		return false;
	}
	if(type == 2 && price == null){
		alert('价格不能为空');
		return false;
	}
	return true;
}

function saveArtwork(){
	getArtwork();
	if(checkArtwork()){
		$.ajax({
			async:false,//同步异步的关键参数
			url:"/Art/mall/saveArtwork.json",
			type:"POST",
			data:{
				'id':id,
				'name':name,
				'head_url':head_url,
				'price':price,
				'type':type,
				'create_time':create_time,
				'content':content,
				'category_id':category_id,
				'shop_id':shop_id
			},
			success:function(data){
				if(checkData(data)){
					alert(data.data);
				}
			}
		});
	}
}

$(document).ready(function(){
	//初始化initFileinput
	initFileinput();
	//读取Category
	initCategory();
	//初始化summernote
	initSummernote();
	//初始化作品内容
	if($('input#artwork_id').val()!=0){
		initArtwork();
	}
});

function initFileinput(){
	$(window).load(function() {
		$("#status").fadeOut();
		$("#preloader").delay(350).fadeOut("slow");
	});
	var btnCust = '<button type="button" class="btn btn-default" title="Add picture tags" ' + 
	    'onclick="alert(\'Call your custom code here.\')">' +
	    '<i class="glyphicon glyphicon-tag"></i>' +
	    '</button>'; 
	$("#avatar").fileinput({
		uploadUrl:'/Art/mall/uploadArtworkImg.json',
	    overwriteInitial: true,
	    maxFileSize: 3000,
	    showClose: false,
	    showCaption: false,
	    browseLabel: '',
	    removeLabel: '',
	    browseIcon: '<i class="glyphicon glyphicon-folder-open"></i>',
	    removeIcon: '<i class="glyphicon glyphicon-remove"></i>',
	    removeTitle: 'Cancel or reset changes',
	    elErrorContainer: '#kv-avatar-errors',
	    msgErrorClass: 'alert alert-block alert-danger',
	    defaultPreviewContent: '<img src="/Art/mall/resource/images/avatar/default_avatar_male.jpg" alt="Your Avatar" style="width:160px">',
	    layoutTemplates: {main2: '{preview} ' +  btnCust + ' {remove} {upload} {browse}'},
	    allowedFileExtensions: ["jpg", "png", "gif"]
	});
}

function initCategory(){
	$.ajax({
		async:false,//同步异步的关键参数
		url:"/Art/getCategoryList.json",
		type:"POST",
		data:{},
		success:function(data){
			if(checkData(data)){
				var html = "<option value='0'>作品类别</option>";
				for(var i = 0; i<data.data.length; i++){
					html+="<option value='"+data.data[i].id+"'>"+data.data[i].name+"</option>";
				}
				document.getElementById("categoryList").innerHTML = html;
			}
		}
	});
}

function initArtwork(){
	if($('input#artwork_id').val()!=null && $('input#artwork_id').val() !=0){
    	$.ajax({
			async:true,//同步异步的关键参数
			url:"/Art/cmsGetArticle.json",
			type:"POST",
			data:{
				'id':$('input#article_id').val()
			},
			success:function(data){
			}
    	});
	}
}

function initSummernote(){
	summernote =  $('#summernote').summernote({
        height: 400,
        lang:'zh-CN',
        focus:false,
        dialogsInBody:true,
        toolbar:[
                 ['color',['color']],
                 ['style',['bold','italic','underline','clear']],
                 ['fontsize',['fontsize']],
                 ['insert',['link','picture']]
                 ]
      });
}

function getCode(){
	var text = summernote.summernote('code');
	return text;
}

function setCode(html){
	summernote.summernote('code', html);
	return true;
}

function checkData(data){
	if(data.errno == 2){
		alert(data.data);
		window.location.href = data.data;
	}else if(data.errno == 1){
		alert(data.data);
		return false;
	}else{
		return true;
	}
}