function newsList(){
	var url = '/Art/mall/jsp/newsList';
	window.location.href = url;
}

function artMall(){
	var url = '/Art/mall/jsp/artMall';
	window.location.href = url;
}

function shop(){
	var url = '/Art/mall/jsp/artist/shopList';
	window.location.href = url;
}

function news(id){
	var url = '/Art/mall/jsp/news?id='+id;
	window.location.href = url;
}

function newsHref(url){
	window.open(url);
}

function person(){
	window.location.href = "/Art/mall/jsp/user/user";
}

function favorite(){
	window.location.href = "/Art/mall/jsp/favorite";
}

function order(){
	window.location.href="/Art/mall/jsp/order";
}
