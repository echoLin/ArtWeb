var category = 0;
var page = 1;
$(document).ready(function(){
	loadArtist();
});

function artworkInfo(id){
	window.location.href = '/Art/mall/jsp/artMall/artworkInfo?id='+id;
}

function artistInfo(id){
	window.location.href = '/Art/mall/jsp/artMall/artistInfo?id='+id;
}

function shopInfo(id){
	window.location.href = '/Art/mall/jsp/artMall/shopInfo?id='+id;
}

function loadArtist(){
	page = 1;
	var url = '/Art/mall/jsp/favorite/artistList';
	var html = '<ul class="ui-tab-nav"><li class="current"><a onClick="loadArtist()">艺术家</a></li><li><a onClick="loadShop()">店铺</a></li><li><a onClick="loadArtwork()">艺术品</a></li></ul>';
	document.getElementById('ulbox').innerHTML=html;
	$('#content').load(url);
	page++;
	loadType = 1;
}

function loadShop(){
	page = 1;
	var url = '/Art/mall/jsp/favorite/shopList';
	var html = '<ul class="ui-tab-nav"><li><a onClick="loadArtist()">艺术家</a></li><li  class="current"><a onClick="loadShop()">店铺</a></li><li><a onClick="loadArtwork()">艺术品</a></li></ul>';
	document.getElementById('ulbox').innerHTML=html;
	$('#content').load(url);
	page++;
	loadType = 2;
}

function loadArtwork(){
	page = 1;
	var url = '/Art/mall/jsp/favorite/artworkList';
	var html = '<ul class="ui-tab-nav"><li><a onClick="loadArtist()">艺术家</a></li><li><a onClick="loadShop()">店铺</a></li><li class="current"><a onClick="loadArtwork()">艺术品</a></li></ul>';
	document.getElementById('ulbox').innerHTML=html;
	$('#content').load(url);
	page++;
	loadType = 3;
}


function loadMore(){
	$.ajax({
		async:true,//同步异步的关键参数
		url:'/Art/mallGetFavoriteList.json',
		type:"POST",
		data:{
			page:page,
			type:loadType
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
	switch(loadType){
	case 1://artist
		for(var i=0; i<data.length; i++){
			var artist = data[i];
			html += "<a onClick=artistInfo("+artist.id+")><div class='baoliao_content'><div class='bl_img'><img src='"+artist.user.avatar+"' /></div><div class='bl_right'><div class='bl_title'>"+artist.real_name+"</div> <div class='bl_note'>"+artist.introduction+"</div></div></div></a>";
		}
		break;
	case 2://shop
		for(var i=0; i<data.length;i++){
			var shop = data[i];
			html += "<a onClick=artworkInfo("+shop.id+")><div class='baoliao_content'><div class='bl_img'><img src='"+shop.head_url+"' /></div><div class='bl_right'><div class='bl_title'><span class='bl_type' style='background-color:#53bf1e;'>"+shop.category.name+"</span>"+shop.name+"</div><div class='bl_tag'><div class='bl_price'>价格：</div><div class='bl_price'>￥"+shop.price+"</div><div class='bl_time'>创作年份："+shop.create_year+"</div><div class='bl_mall'>艺术家："+shop.artist.real_name+"</div></div></div></div></a>";
		}
		break;
	case 3://artwork
		for(var i=0; i<data.length;i++){
			var artwork = data[i];
			html += "<a onClick=artworkInfo("+artwork.id+")><div class='baoliao_content'><div class='bl_img'><img src='"+artwork.head_url+"' /></div><div class='bl_right'><div class='bl_title'><span class='bl_type' style='background-color:#53bf1e;'>"+artwork.category.name+"</span>"+artwork.name+"</div><div class='bl_tag'><div class='bl_price'>价格：</div><div class='bl_price'>￥"+artwork.price+"</div><div class='bl_time'>创作年份："+artwork.create_year+"</div><div class='bl_mall'>艺术家："+artwork.shop.artist.real_name+"</div></div></div></div></a>";
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