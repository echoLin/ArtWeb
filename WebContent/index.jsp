<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="author" content="Echo" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
<link href="/Art/mall/resource/css/public.css" rel="stylesheet" type="text/css" />
<link href="/Art/mall/resource/css/index.css" rel="stylesheet" type="text/css" />
<link href="/Art/mall/resource/css/owl.carousel.css" rel="stylesheet">
<script src="/Art/mall/resource/js/jquery-2.1.4.js"></script>
<script src="/Art/mall/resource/js/owl.carousel.min.js"></script>
<script src="/Art/mall/resource/js/public.js"></script>
<script src="/Art/mall/resource/js/index.js"></script>
<title>艺术品交易网站</title>
</head>
<body>
<div class="mobile">
	<!--页面加载 开始-->
	  <div id="preloader">
	    <div id="status">
	      <p class="center-text"><span>拼命加载中···</span></p>
	    </div>
	  </div>
	<!--页面加载 结束-->
	<div class="header" id="header">
		<div style="text-align:center; padding-top:10px; color:#FFFFFF; font-size:20px;">Art Plus</div>
		<!-- <div class="m_logo"><a href="#"><img src=""></a></div>
        <div class="m_search"><a href="#"><img src="images/m-index_05.png" width="40"></a></div> -->
	</div>
	<div id="content">
		<div class="top w">
			<c:if test="${not empty carouselList }">
	   	    <div class="m_banner" id="owl">
	   	    	<c:forEach var="carousel" items="${ carouselList}">
	   	    	<c:if test="${carousel.type == 1 }">
	            <a onClick="news(${carousel.id})" class="item"><img src="${carousel.head_url }"></a>
	            </c:if>
	            <c:if test="${carousel.type == 2 }">
	            <c:set var="url" value="'${carousel.content }'"/>
	            	<a onClick="newsHref(${url})" class="item"><img src="${carousel.head_url }"></a>
	            </c:if>
	            </c:forEach>
	        </div>
	        </c:if>
	        <div class="m_nav">
	        	<a onClick="newsList()"><img src="/Art/mall/resource/images/news.png"><span>艺术资讯</span></a>
	            <a onClick="artMall()"><img src="/Art/mall/resource/images/mall.png"><span>艺术商城</span></a>
	            <a href="javascript:void(0);" id="msg_artshop"><img src="/Art/mall/resource/images/message.png"><span>我的消息</span></a>
	            <a onClick="shop()"><img src="/Art/mall/resource/images/shop.png"><span>我的店铺</span></a>
	            <a onClick="favorite()"><img src="/Art/mall/resource/images/favorite.png"><span>我的收藏</span></a>
	            <a href="javascript:void(0);" id="msg_artmsg"><img src="/Art/mall/resource/images/cart.png"><span>购物车</span></a>
	            <a onClick="order()"><img src="/Art/mall/resource/images/order.png"><span>我的订单</span></a>
	            <a href="/Art/mall/personal"><img src="/Art/mall/resource/images/person.png"><span>个人中心</span></a>
	        </div>
	        <c:if test="${not empty hotList }">
	        <div class="m_baoliao w">
	  			<div class="baoliao_title"><span>热门资讯</span><em></em></div>
	    		<div class="baoliao_list">
	    			<c:forEach var="hot" items="${hotList }">
	    			<c:if test="${hot.type == 1 }">
	    			<a onClick="news(${hot.id})">
	        			<div class="baoliao_content">
	           				<div class="bl_img"><img src="${hot.head_url}" /></div>
	            			<div class="bl_right">
	                			<div class="bl_title">${ hot.title}</div>
	                			<div class="bl_note">${ hot.summary}</div>
	            			</div>
	        			</div> 
	       			 </a>
	       			 </c:if>
	       			 <c:if test="${hot.type == 2 }">
	       			 <c:set var="url" value="'${hot.content }'"/>
	    			 <a onClick="newsHref(${url})">
	        			<div class="baoliao_content">
	           				<div class="bl_img"><img src="${hot.head_url}" /></div>
	            			<div class="bl_right">
	                			<div class="bl_title">${ hot.title}</div>
	                			<div class="bl_note">${ hot.summary}</div>
	            			</div>
	        			</div> 
	       			 </a>
	       			 </c:if>
	       			 </c:forEach>
	    		</div>
	   			<div class="bl_more"><a onClick="newsList()">查看更多</a></div>
	  		</div>
	  		</c:if>
		</div>
	</div>
	<div class="gotop backtop" style="display:none;"></div>
	<!-- footer 开始 -->
	<div class="copyright">Copyright ©2016 Echo 版权所有</div>
	<!-- footer 结束 -->
</div>
</body>

</html>