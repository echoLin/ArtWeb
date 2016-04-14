var page = 1;
var loadType = 1;
$(document).ready(function(){
	loadArtworkList(1);
});

function artworkInfo(id){
	window.location.href = '/Art/mall/jsp/artMall/artworkInfo?id='+id;
}

function lotInfo(id){
	window.location.href = '/Art/mall/jsp/artMall/lotInfo?id='+id;
}

function loadArtworkList(type){
	loadType = type;
	page = 1;
	var id = null;
	while(id == null){
		id = $('input#shop_id').val();
	}
	var url = '/Art/mall/jsp/artMall/shop/artworkList?id='+id+'&page='+page+"&type="+loadType;
	var html = '';
	switch(type){
	case 1:
		html = '<ul class="ui-tab-nav"><li class="current"><a onClick="loadArtworkList(1)">非卖品</a></li><li><a onClick="loadArtworkList(2)">成品</a></li><li><a onClick="loadArtworkList(4)">拍卖品</a></li></ul>';
		break;
	case 2:
		html = '<ul class="ui-tab-nav"><li><a onClick="loadArtworkList(1)">非卖品</a></li><li class="current"><a onClick="loadArtworkList(2)">成品</a></li><li><a onClick="loadArtworkList(4)">拍卖品</a></li></ul>';
		break;
	case 4:
		html = '<ul class="ui-tab-nav"><li><a onClick="loadArtworkList(1)">非卖品</a></li><li><a onClick="loadArtworkList(2)">成品</a></li><li class="current"><a onClick="loadArtworkList(4)">拍卖品</a></li></ul>';
		break;
	}
	document.getElementById('ulbox').innerHTML=html;
	$('#content').load(url);
}

function loadMore(){
	page++;
	var id = null;
	while(id == null){
		id = $('input#shop_id').val();
	}
	var url = '/Art/mallGetMoreShopArtwork.json?id='+id+'&page='+page+"&type="+loadType;
	$.ajax({
		async:true,//同步异步的关键参数
		url:url,
		type:"POST",
		data:{},
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
	
	if(loadType != 4){
		for(var i = 0; i<data.length; i++){
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
			html +="</span>";
			html +="<span class='bl_type' style='background-color:#53bf1e;'>"+artwork.category.name+"</span>"+ artwork.name+"</div><div class='bl_tag'>";
			if(artwork.type == 2){
				html +="<div class='bl_price'>价格：</div><div class='bl_price'>￥"+artwork.price+"</div>";
			}
			html +="<div class='bl_time'>创作年份："+artwork.create_year+"</div><div class='bl_mall'>艺术家："+artwork.shop.artist.real_name+"</div></div> </div></div> </a>";
		}
	}else{
		for(var i=0; i<data.length; i++){
			var lot = data[i];
			html += "<a onClick=lotInfo("+lot.id+")>";
			html += "<div class='baoliao_content'>";
			html += "<div class='bl_img'><img src='"+lot.artwork.head_url+"' /></div>";
			html += "<div class='bl_right'>";
			html += "<div class='bl_title'>";
			html += "<span class='bl_type'>";
			var nowTime = new Date().getTime();
			if(nowTime - new Date(lot.start_time) >=0 && nowTime - new Date(lot.end_time) <=0)
				html+="正在进行";
			else
				html +="即将开始";
			html += "</span>";
			html += '<span class="bl_type" style="background-color:#53bf1e;">'+lot.artwork.category.name+'</span>'+lot.artwork.name+'</div>';
			html += '<div class="bl_tag">';
			html += '<div class="bl_price">起拍价：</div>';
			html += ' <div class="bl_price">￥'+lot.price+'</div>';
			html += ' <div class="bl_time">创作年份：'+lot.artwork.create_year+'</div>';
			html += '<div class="bl_mall">艺术家：'+lot.artwork.shop.artist.real_name+'</div>';
			html += '</div></div></div></a>';
		}
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