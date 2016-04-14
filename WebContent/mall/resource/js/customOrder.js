var category_id;
var content;
var name;
var summernote;
var shop_id;

function getArtwork(){
	shop_id = $('input#shop_id').val();
	category_id = $('select#categoryList option:selected').val();
	content = getCode();
	name = $('input#name').val();
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
	if(content == null){
		alert('作品介绍不能为空');
		return false;
	}
	if(name == null){
		alert('作品名称不能为空');
		return false;
	}
	return true;
}

function saveArtwork(){
	getArtwork();
	if(checkArtwork()){
		$.ajax({
			async:true,//同步异步的关键参数
			url:"/Art/saveCustomOrder.json",
			type:"POST",
			data:{
				'id':null,
				'name':name,
				'content':content,
				'category_id':category_id,
				'shop_id':shop_id
			},
			success:function(data){
				if(checkData(data)){
					alert('定制要求完成，静候艺术家回音');
					window.location.href='/Art/mall/index';
				}
			}
		});
	}
}

$(document).ready(function(){
	//读取Category
	initCategory();
	//初始化summernote
	initSummernote();
});

function initCategory(){
	$.ajax({
		async:true,//同步异步的关键参数
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