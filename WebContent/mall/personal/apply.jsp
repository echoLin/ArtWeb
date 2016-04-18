<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="author" content="Echo" />
<meta name="applicable-device" content="mobile" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
<title>艺术家申请</title>
<link href="/Art/mall/resource/css/public.css" rel="stylesheet" type="text/css" />
<link href="/Art/mall/resource/css/login.css" rel="stylesheet" type="text/css">
<script src="/Art/mall/resource/js/jquery-1.8.3.min.js"></script>
<script src="/Art/mall/resource/layer/layer.js"></script>
<script>
$(window).load(function() {
	$("#status").fadeOut();
	$("#preloader").delay(350).fadeOut("slow");
})
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
      <h2>艺术家申请</h2>
      </div>
  </header>
  <!--header 结束-->
  
  <div class="w main">
  	<c:choose>
  	<c:when test="${artist == null }">
  	<form id="frm_login" method="post" action="">
        <div class="item item-username">
          <input id="real_name" class="txt-input txt-username" type="text" placeholder="请输入真实姓名" value="">
          <b class="input-close" style="display: none;"></b>
          <p id="validateRealName">真实姓名不能为空</p> </div>
        <div class="item item-username">
          <input id="art_direction" class="txt-input txt-username" type="text" placeholder="请输入艺术领域" value="">
          <b class="input-close" style="display:none;"></b>
          <p id="validateArtDirection">艺术领域不能为空</p> </div>
        <div class="item item-username">
          <select id="education" class="txt-input txt-username" type="text" style="width:100%">
            <option value="0" selected="selected" class="option-title" type="text" style="color:#666">请选择教育程度</option>
            <option value="小学">小学</option>
            <option value="初中">初中</option>
            <option value="高中">高中</option>
            <option value="中专">中专</option>
            <option value="小专">大专</option>
            <option value="本科">本科</option>
            <option value="硕士">硕士</option>
            <option value="博士">博士</option>
          </select> 
          <p id="validateEducation">教育程度不能为空</p> </div>
          <div class="item item-username">
          <textarea id="introduction" class="txt-textarea txt-username" placeholder="请输入个人简介" rows="100"></textarea>
          <p id="validateIntroduction">个人简介不能为空</p> </div>
        <div class="ui-btn-wrap" id="submit" onclick="commit()"> <a class="ui-btn-lg ui-btn-primary" href="#">提交申请</a> </div>
      </form>
      </c:when>
      <c:otherwise>
      	<form id="frm_login" method="post" action="">
        <div class="item item-username">
          <input id="real_name" class="txt-input txt-username" type="text" placeholder="请输入真实姓名" value="${artist.realname }">
          <b class="input-close" style="display: none;"></b>
          <p id="validateRealName">真实姓名不能为空</p> </div>
        <div class="item item-username">
          <input id="art_direction" class="txt-input txt-username" type="text" placeholder="请输入艺术领域" value="${artist.artDirection }">
          <b class="input-close" style="display:none;"></b>
          <p id="validateArtDirection">艺术领域不能为空</p> </div>
        <div class="item item-username">
          <select id="education" class="txt-input txt-username" type="text" style="width:100%">
            <option value="0" selected="selected" class="option-title" type="text" style="color:#666">请选择教育程度</option>
            <option value="小学">小学</option>
            <option value="初中">初中</option>
            <option value="高中">高中</option>
            <option value="中专">中专</option>
            <option value="小专">大专</option>
            <option value="本科">本科</option>
            <option value="硕士">硕士</option>
            <option value="博士">博士</option>
          </select> 
          <p id="validateEducation">教育程度不能为空</p> </div>
          <div class="item item-username">
          <textarea id="introduction" class="txt-textarea txt-username" placeholder="请输入个人简介" rows="100">${artist.introduction }</textarea>
          <p id="validateIntroduction">个人简介不能为空</p> </div>
        <div class="ui-btn-wrap" id="submit" onclick="commit()"> <a class="ui-btn-lg ui-btn-primary" href="#">提交申请</a> </div>
      </form>
      </c:otherwise>
      </c:choose>
  </div>
	

  <div class="copyright">Copyright ©2016 Echo 版权所有</div>
</div>
</body>
</html>
<script type="text/javascript" >
    $(function() {
		$(".input-close").hide();
		$("p").hide()
		displayClearBtn();
		setTimeout(displayClearBtn, 200 ); 
		//延迟显示,应对浏览器记住密码
	});	

//是否显示清除按钮
  function displayClearBtn(){
    // if(document.getElementById("username").value != ''){
    //   $("#username").siblings(".input-close").show();
    // }
    if(document.getElementById("real_name").value != ''){
      $("#real_name").siblings(".input-close").show();
    }
  }

    //清除input内容
    $('.input-close').click(function(e){  
    $(e.target).parent().find(":input").val("");
    $(e.target).hide();
    });

    //监控用户输入
  $(":input").bind('input propertychange', function() {
    if($(this).val()!=""){
      $(this).siblings(".input-close").show();
    }else{
      $(this).siblings(".input-close").hide();
    }
    });
    
function check(art_direction,education,introduction,real_name){
		if(real_name==''){
			$("#validateRealName").show();
			return false;
		}
		if(art_direction==''){
			$("#validateArtDirection").show();
			return false;
		}
		if(education=='0'){
			$("#validateEducation").show();
			return false;
		}
		if(introduction==''){
			$("#validateIntroduction").show();
			return false;
		}
		return true;
	}
    
function commit(){
	$(".p").hide();
	var real_name = $("#real_name").val();
	var art_direction = $("#art_direction").val();
	var education = $("#education").val();
	var introduction = $("#introduction").val();
	
	if(check(art_direction,education,introduction,real_name)){
		$.post(
			"/Art/mall/personal/doApply",
			{
				realname:real_name,
				arDirection:art_direction,
				education:education,
				introduction:introduction
			},
			function(data){
				if(data.errno == 0)	{
					alert(data.errmsg)
				}else{
					window.location.href="/Art/mall/personal/index";
				}
			});
		}
}
</script>