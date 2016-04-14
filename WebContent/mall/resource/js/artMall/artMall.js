var category = 0;
var page = 1;
var loadType = 1;
var isHot = true;
var isCus = 0;
var time = 0;
$(document).ready(function(){
	loadArtist();
	$(".shaixuan").click(function(event){
		event.stopPropagation(); 
		$(".shaixuan_box").show();
		$(".shaixuan_box").animate({right:'100%'});
		$("body,html").css("overflow","hidden");
		$(".shaixuan_box").css("overflow","auto");
		$('body').bind("touchmove",function(e){    
                    e.preventDefault();    
            });
	});
	$(".shaixuan_mall a").click(function(event){
		 $("body,html").css("overflow","auto");
		$(".shaixuan_box").animate({right:'-100%'});
		$(".shaixuan_box").hide(5);	
		$("body").unbind("touchmove");  
	});
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

function lotInfo(id){
	window.location.href = '/Art/mall/jsp/artMall/lotInfo?id='+id;
}

function loadArtist(){
	page = 1;
	loadType = 1;
	var url = '/Art/mall/jsp/artMall/artistList?page='+page+'&isHot='+isHot;
	var html = '<ul class="ui-tab-nav"><li class="current"><a onClick="loadArtist()">热门艺术家</a></li><li><a onClick="loadArtwork()">艺术成品</a></li><li><a onClick="loadShop()">艺术商铺</a></li><li><a onClick="loadBid()">艺术竞价品</a></li></ul>';
	document.getElementById('ulbox').innerHTML=html;
	$('#content').load(url);
}

function loadMoreArtist(){
	page++;
	$.ajax({
		url:'/Art/mall/jsp/artMall/getMoreArtist.json',
		type:'POST',
		data:{
			page:page,
			isHot:isHot,
		},
		success:function(data){
			if(check(data)){
				var list = data.data;
				if(list == null || list.length == 0){
					document.getElementById("moreBtn").innerHTML = "<a style='color:#ff8200;'>没有更多了</a>";
				}else{
					var html = document.getElementById("itemList").innerHTML;
					for(var i=0; i<list.length; i++){
						var artist = list[i];
						html += "<a onClick=artistInfo("+artist.id+")><div class='baoliao_content'><div class='bl_img'><img src='"+artist.user.avatar+"' /></div><div class='bl_right'><div class='bl_title'><span class='bl_type' style='background-color:#00bb9c;'>"+artist.user.username +"</span>"+artist.real_name +"</div><div class='bl_note'>"+artist.introduction+"</div></div></div></a>";
					}
					document.getElementById("itemList").innerHTML = html;
				}
			}
		}
	});
}

function loadArtwork(){
	page = 1;
	loadType =2;
	var url = '/Art/mall/jsp/artMall/artworkList?page='+page+'&category_id='+category+'&isHot='+isHot;
	var html = '<ul class="ui-tab-nav"><li><a onClick="loadArtist()">热门艺术家</a></li><li class="current"><a onClick="loadArtwork()">艺术成品</a></li><li><a onClick="loadShop()">艺术商铺</a></li><li><a onClick="loadBid()">艺术竞价品</a></li></ul>';
	document.getElementById('ulbox').innerHTML=html;
	$('#content').load(url);
}

function loadMoreArtwork(){
	page++;
	$.ajax({
		url:'/Art/mall/jsp/artMall/getMoreArtwork.json',
		type:'POST',
		data:{
			page:page,
			category_id:category,
			isHot:isHot
		},
		success:function(data){
			var list = data.data;
			if(list == null || list.length == 0){
				document.getElementById("moreBtn").innerHTML = "<a style='color:#ff8200;'>没有更多了</a>";
			}else{
				var html = document.getElementById("itemList").innerHTML;
				for(var i=0; i<list.length; i++){
					var artwork = list[i];
					html += "<a onClick=artworkInfo("+artwork.id+")><div class='baoliao_content'><div class='bl_img'><img src='"+artwork.head_url+"' /></div><div class='bl_right'><div class='bl_title'><span class='bl_type' style='background-color:#53bf1e;'>"+artwork.category.name+"</span>"+ artwork.name+"</div> <div class='bl_tag'> <div class='bl_price'>价格：￥</div><div class='bl_price'>"+artwork.price+"</div><div class='bl_time'>创作年份："+artwork.create_year+"</div><div class='bl_mall'>艺术家："+ artwork.shop.artist.real_name +"</div></div></div></div></a>";
				}
				document.getElementById("itemList").innerHTML = html;
			}
		}
	});
}

function loadShop(){
	loadType = 3;
	page = 1;
	var url = '/Art/mall/jsp/artMall/shopList?category_id='+category+'&page='+page+'&isHot='+isHot+'&isCus='+isCus;
	var html = '<ul class="ui-tab-nav"><li><a onClick="loadArtist()">热门艺术家</a></li><li><a onClick="loadArtwork()">艺术成品</a></li><li class="current"><a onClick="loadShop()">艺术商铺</a></li><li><a onClick="loadBid()">艺术竞价品</a></li></ul>';
	document.getElementById('ulbox').innerHTML=html;
	$('#content').load(url);
}

function loadMoreShop(){
	page++;
	$.ajax({
		url:'/Art/mall/jsp/artMall/getMoreShop.json',
		type:'POST',
		data:{
			page:page,
			category_id:category,
			isCus:isCus,
			isHot:isHot
		},
		success:function(data){
			var list = data.data;
			if(list == null || list.length == 0){
				document.getElementById("moreBtn").innerHTML = "<a style='color:#ff8200;'>没有更多了</a>";
			}else{
				var html = document.getElementById("itemList").innerHTML;
				for(var i=0; i<list.length; i++){
					var shop = list[i];
					html += "<a onClick=shopInfo("+shop.id+")>";
					html += "<div class='baoliao_content'>";
				    html += "<div class='bl_img'><img src='"+shop.head_url+"'/></div>";
				    html += "<div class='bl_right'>";
				    html += "<div class='bl_title'>";
				    if(shop.is_customized == 1)
				    	html += "<span class='bl_type'>定制</span>";
				    html += shop.name;
				    html += "</div>";
				    html += "<div class='bl_note'>" + shop.introduction+"</div>";
				    html += "<div class='bl_tag'>";
				    html += "<div class='bl_price'>艺术家:</div>";
				    html += "<div class='bl_price'>"+shop.artist.real_name +"</div>";
				    html += "<div class='bl_time'>"+shop.time +"</div>";
				    html += "<div class='bl_mall'>"+shop.category.name+"</div>";
				    html += "</div></div></div></a>";
				}
				document.getElementById("itemList").innerHTML = html;
			}
		}
	});
}

function loadBid(){
	loadType = 4;
	page = 1;
	var url = '/Art/mall/jsp/artMall/lotList?category_id='+category+'&page='+page+'&time='+time;
	var html = '<ul class="ui-tab-nav"><li><a onClick="loadArtist()">热门艺术家</a></li><li><a onClick="loadArtwork()">艺术成品</a></li><li><a onClick="loadShop()">艺术商铺</a></li><li class="current"><a onClick="loadBid()">艺术竞价品</a></li></ul>';
	document.getElementById('ulbox').innerHTML=html;
	$('#content').load(url);
}

function loadMoreLot(){
	page++;
	$.ajax({
		url:'/Art/mall/jsp/artMall/getMoreLot.json',
		type:'POST',
		data:{
			page:page,
			category_id:category,
			time:time,
		},
		success:function(data){
			var list = data.data;
			if(list == null || list.length == 0){
				document.getElementById("moreBtn").innerHTML = "<a style='color:#ff8200;'>没有更多了</a>";
			}else{
				var html = document.getElementById("itemList").innerHTML;
				for(var i=0; i<list.length; i++){
					var lot = list[i];
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
				document.getElementById("itemList").innerHTML = html;
			}
		}
	});
}

function addCategory(e,id){
	document.getElementById(e.id).setAttribute('class', 'current');
	document.getElementById('a_'+category).setAttribute('class', 'else');
	if(id == 0){
		category = 0;
	}else{
		category = id;
	}
	reload();
}

function sort(hot){
	if(hot){
		document.getElementById('sort_hot').setAttribute('class', 'current');
		document.getElementById('sort_time').setAttribute('class', 'else');
	}else{
		document.getElementById('sort_time').setAttribute('class', 'current');
		document.getElementById('sort_hot').setAttribute('class', 'else');
	}
	isHot = hot;
	reload();
}

function custom(cus){
	if(cus == 1){
		document.getElementById('cus_true').setAttribute('class', 'current');
		document.getElementById('cus_false').setAttribute('class', 'else');
		document.getElementById('cus_no').setAttribute('class', 'else');
	}else if(cus == -1){
		document.getElementById('cus_false').setAttribute('class', 'current');
		document.getElementById('cus_true').setAttribute('class', 'else');
		document.getElementById('cus_no').setAttribute('class', 'else');
	}else if(cus == 0){
		document.getElementById('cus_false').setAttribute('class', 'else');
		document.getElementById('cus_true').setAttribute('class', 'else');
		document.getElementById('cus_no').setAttribute('class', 'current');
	}
	isCus = cus;
	if(loadType == 3)
		reload();
}

function bidTime(t){
	if(t == 1){
		document.getElementById('time_no').setAttribute('class', 'else');
		document.getElementById('time_now').setAttribute('class', 'current');
		document.getElementById('time_future').setAttribute('class', 'else');
	}else if(t == 2){
		document.getElementById('time_no').setAttribute('class', 'else');
		document.getElementById('time_future').setAttribute('class', 'current');
		document.getElementById('time_now').setAttribute('class', 'else');
	}else if(t == 0){
		document.getElementById('time_no').setAttribute('class', 'current');
		document.getElementById('time_future').setAttribute('class', 'else');
		document.getElementById('time_now').setAttribute('class', 'else');
	}
	time = t;
	if(loadType == 4)
		reload();
}

function reload(){
	switch(loadType){
	case 1:
		loadArtist();
		break;
	case 2:
		loadArtwork();
		break;
	case 3:
		loadShop();
		break;
	case 4:
		loadBid();
		break;
	}
}

function check(data){
	if(data.errno == 2){
		window.location.href = data.data;
	}else if(data.errno == 1){
		alert(data.data);
		return false;
	}else{
		return true;
	}
}