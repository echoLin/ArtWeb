var page = 1;
var type = 0;
$(document).ready(function(){
	loadIntroduction();
});

function artworkInfo(id){
	window.location.href = '/Art/mall/jsp/artMall/artworkInfo?id='+id;
}

function shopInfo(id){
	window.location.href = '/Art/mall/jsp/artMall/shopInfo?id='+id;
}

function lotInfo(id){
	window.location.href = '/Art/mall/jsp/artMall/lotInfo?id='+id;
}

function loadIntroduction(){
	var id = null;
	while(id == null){
		id = $('input#id').val();
	}
	var url = '/Art/mall/jsp/artMall/artist/introduction?id='+id;
	var html = '<ul class="ui-tab-nav"><li class="current"><a onClick="loadIntroduction()">个人介绍</a></li><li><a onClick="loadShop()">店铺</a></li><li><a onClick="loadArtwork()">作品</a></li></ul>';
	document.getElementById('ulbox').innerHTML=html;
	$('#content').load(url);
}

function loadShop(){
	var id = null;
	while(id == null){
		id = $('input#id').val();
	}
	page = 1;
	type = 1;
	var url = '/Art/mall/jsp/artMall/artist/shopList?id='+id;
	var html = '<ul class="ui-tab-nav"><li><a onClick="loadIntroduction()">个人介绍</a></li><li  class="current"><a onClick="loadShop()">店铺</a></li><li><a onClick="loadArtwork()">作品</a></li></ul>';
	document.getElementById('ulbox').innerHTML=html;
	$('#content').load(url);
}

function loadArtwork(){
	var id = null;
	while(id == null){
		id = $('input#id').val();
	}
	page = 1;
	type = 2;
	var url = '/Art/mall/jsp/artMall/artist/artworkList?id='+id;
	var html = '<ul class="ui-tab-nav"><li><a onClick="loadintroduction()">个人介绍</a></li><li><a onClick="loadShop()">店铺</a></li><li class="current"><a onClick="loadArtwork()">作品</a></li></ul>';
	document.getElementById('ulbox').innerHTML=html;
	$('#content').load(url);
}


function loadMore(){
	page++;
	var url = null;
	var id = $('input#id').val();
	if(type == 1){
		url = '/Art/mallGetMoreShopListByArtist.json';
	}else if(type == 2){
		url = '/Art/mallGetMoreArtworkListByArtist.json';
	}
	$.ajax({
		async:true,//同步异步的关键参数
		url:url,
		type:"POST",
		data:{
			page:page,
			id:id
		},
		success:function(data){
			if(checkData(data)){
				if(data.data.length == 0){
					document.getElementById("moreBtn").innerHTML = "<a style='color:#ff8200;'>没有更多了</a>";
				}else{
					innerHTML(data.data);
				}
			}
		}
	});
}

function innerHTML(data){
	var html = document.getElementById("itemList").innerHTML;
	switch(type){
	case 1://shop
		for(var i=0; i<data.length; i++){
			var shop = data[i];
			html += "<a onClick=shopInfo("+shop.id+")><div class='baoliao_content'><div class='bl_img'><img src='"+shop.head_url+"' /></div><div class='bl_right'><div class='bl_title'>"+shop.name+"</div> <div class='bl_note'>"+shop.introduction+"</div> <div class='bl_tag'><div class='bl_time'>"+shop.time+"</div><div class='bl_mall'>"+shop.category.name+"</div></div></div></div></a>";
		}
		break;
	case 2://artwork
		for(var i=0; i<data.length;i++){
			var artwork = data[i];
			html += "<a onClick=artworkInfo("+artwork.id+")><div class='baoliao_content'><div class='bl_img'><img src='"+artwork.head_url+"' /></div><div class='bl_right'><div class='bl_title'>";
			html +="<span class='bl_type'>";
			switch(artwork.type){
			case 1:
				html+='非卖品';
				break;
			case 2:
				html+='成品';
				break;
			case 3:
				html +='订制品';
				break;
			case 4:
				html += '拍卖品';
				break;
			}
			html +="</span>"
			html +="<span class='bl_type' style='background-color:#53bf1e;'>"+artwork.category.name+"</span>"+ artwork.name+"</div><div class='bl_tag'>";
			if(artwork.type == 2){
				html +="<div class='bl_price'>价格：</div><div class='bl_price'>￥"+artwork.price+"</div>";
			}
			html +="<div class='bl_time'>创作年份："+artwork.create_year+"</div><div class='bl_mall'>艺术家："+artwork.shop.artist.real_name+"</div></div> </div></div> </a>";
		}
		break;
	}
	document.getElementById("itemList").innerHTML = html;
}

function checkData(data){
	if(data.errno == 2){
		window.location.href = data.data;
	}else if(data.errno == 1){
		alert(data.data);
		return false;
	}else{
		return true;
	}
}