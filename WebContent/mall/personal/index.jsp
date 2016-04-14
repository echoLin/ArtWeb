<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="author" content="Echo" />
<meta name="applicable-device" content="mobile" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
<title>个人中心</title>

<link href="/Art/mall/resource/css/public.css" rel="stylesheet" type="text/css" />
<link href="/Art/mall/resource/css/user.css" rel="stylesheet" type="text/css">
<script src="/Art/mall/resource/js/jquery-1.8.3.min.js"></script>
<script src="/Art/mall/resource/layer/layer.js"></script>

<script>
$(window).load(function() {
	$("#status").fadeOut();
	$("#preloader").delay(350).fadeOut("slow");
});
</script>
<script type="text/javascript">
$(document).ready(function(){
	$(".login_out").click(function(){
		layer.confirm('您确定要退出吗？',  {skin: 'layui-layer-molv',offset: '30%'}, function(index){
			layer.close(index);
			layer.msg('拜拜！欢迎下次光临！', {shift: 6, time: 1500},function(){
				window.location='/Art/mall/personal/doLogout';
			});
		});
	});
});
function toAvatar(){
	window.location.href='/Art/mall/personal/avatar';
}
</script>

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
  <!--header 开始-->
  <header>
    <div class="header"> <a class="new-a-back" href="javascript:history.back();"> <span><img src="/Art/mall/resource/images/iconfont-fanhui.png"></span> </a>
      <h2>个人中心</h2>
      <div class="header_right shaixuan"><a href="/Art/mall/index"><img src="/Art/mall/resource/images/iconfont-shouye.png"></a></div>
    </div>
  </header>
  <!--header 结束-->

	<div class="user_top w" onClick="toAvatar()">
    	<div class="user_logo"><div class="img">
	    	<c:if test="${not empty user.avatar }">
	    		<img src="${user.avatar }">
	    	</c:if>
	    	<c:if test="${empty user.avatar }">
	    		<img src="/Art/mall/resource/images/user_logo.jpg">
	    	</c:if>
    	</div></div>
        <div class="user_info">
        	<div class="user_name">${user.username }</div>
        </div>
    </div>
    <div class="user_nav_list w">
    	<ul>
            <li>
            	<a href="/Art/mall/jsp/user/username">
                    <div class="u_nav_name">用户名</div>
                    <div class="nt_icon"></div>
                    <div class="u_money"><i>${user.username }</i></div>
              </a>
            </li>
            <li>
            	<a href="/Art/mall/jsp/user/telephone">
                    <div class="u_nav_name">手机号</div>
                    <div class="nt_icon"></div>
                    <div class="u_money"><i>${user.telephone }</i></div>
              </a>
            </li>
            <li>
            	<a href="/Art/mall/jsp/user/money">
                    <div class="u_nav_name">账户余额</div>
                    <div class="nt_icon"></div>
                    <div class="u_money"><i>￥${user.money }</i></div>
              </a>
            </li>
            <li>
            	<a href="/Art/mall/jsp/user/password">
                    <div class="u_nav_name">修改密码</div>
                    <div class="nt_icon"></div>
                    <div class="u_money"><i></i></div>
              </a>
            </li>
            <li>
            	<a href="/Art/mall/jsp/user/address">
                    <div class="u_nav_name">收货地址</div>
                    <div class="nt_icon"></div>
              </a>
            </li>
            <li>
            <c:choose>
            <c:when test="${user.artist==null }">
              <a href="/Art/mall/jsp/artist/apply">
                    <div class="u_nav_name">申请艺术家</div>
                    <div class="nt_icon"></div>
              </a>
            </c:when>
            <c:otherwise>
            <c:if test="${user.artist.status==1 }">
              <a href="/Art/mall/jsp/artist/artist">
                    <div class="u_nav_name">艺术家主页</div>
                    <div class="nt_icon"></div>
              </a> 
              </c:if>
              <c:if test="${user.artist.status==0 }">
              <a href="#">
                    <div class="u_nav_name">艺术家申请待审核</div>
                    <div class="nt_icon"></div>
              </a> 
              </c:if>
              </c:otherwise>
              </c:choose>
            </li>
            <li>
            	<a href="#">
                    <div class="u_nav_name">注册时间</div>
                    <div class="nt_icon"></div>
                    <div class="u_money"><i>${user.registerTime }</i></div>
              </a>
            </li>
        </ul>
    </div>
  <div class="login_out w"><a><span><img src="/Art/mall/resource/images/iconfont-tuichu.png"></span><i>安全退出</i></a></div>
  <!-- footer 开始 -->
	<div class="copyright">Copyright ©2016 Echo 版权所有</div>
	<!-- footer 结束 -->
</div>
</body>
</html>