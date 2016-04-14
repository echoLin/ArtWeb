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

function favorite(type, id){
	var to = null;
	if(id == null || id == 0 || id == ''){
		alert('aha，ID怎么能为空呢？');
	}
	switch(type){
	case 1://artist
		to = '/Art/mall/setFavoriteArtist.json';
		break;
	case 2://shop
		to = '/Art/mall/setFavoriteShop.json';
		break;
	case 3://artwork
		to = '/Art/mall/setFavoriteArtwork.json';
		break;
	default:
		alert('啊哈，type不能为空哦');
	}
	$.ajax({
		async:true,//同步异步的关键参数
		url:to,
		type:"POST",
		data:{
			'id':id,
			},
		success:function(data){
			if(checkData(data)){
				document.getElementById("favorite").innerHTML="<a onClick='unfavorite("+type+","+id+")' style='background-color:#FF6063; width:50%; border-radius:10px;'>取消收藏</a>";
			}
		}
	});
}

function unfavorite(type, id){
	var to = null;
	if(id == null || id == 0 || id == ''){
		alert('aha，ID怎么能为空呢？');
	}
	switch(type){
	case 1://artist
		to = '/Art/mall/unFavoriteArtist.json';
		break;
	case 2://shop
		to = '/Art/mall/unFavoriteShop.json';
		break;
	case 3://artwork
		to = '/Art/mall/unFavoriteArtwork.json';
		break;
	default:
		alert('啊哈，type不能为空哦');
	}
	$.ajax({
		async:true,//同步异步的关键参数
		url:to,
		type:"POST",
		data:{
			'id':id,
			},
		success:function(data){
			if(checkData(data)){
				document.getElementById("favorite").innerHTML="<a onClick='favorite("+type+","+id+")' style='background-color:#FF6063; width:50%; border-radius:10px;'>加收藏</a>";
			}
		}
	});
}

function artistInfo(id){
	window.location.href = '/Art/mall/jsp/artMall/artistInfo?id='+id;
}

function shopList(id){
	window.location.href = '/Art/mall/jsp/artMall/artist/shopList?id='+id;
}

function artworkList(id){
	window.location.href = '/Art/mall/jsp/artMall/artist/shopList?id='+id;
}

function goBuy(id){
	window.location.href='/Art/mall/jsp/buy/createOrder?artwork_id='+id;
}

function goBid(id){
	window.location.href='/Art/mall/jsp/buy/bid?lot_id='+id;
}