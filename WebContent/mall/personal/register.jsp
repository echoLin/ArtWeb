<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="author" content="Echo" />
<meta name="applicable-device" content="mobile" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
<title>注册</title>

<link href="/Art/mall/resource/css/public.css" rel="stylesheet" type="text/css" />
<link href="/Art/mall/resource/css/login.css" rel="stylesheet" type="text/css">
<script src="/Art/mall/resource/js/jquery-1.8.3.min.js"></script>

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
      <h2>艺术品网站·注册</h2>
      </div>
  </header>
  <!--header 结束-->
  
  <div class="w main">
  	<form id="frm_register">
        <div class="item item-username">
          <input id="username" class="txt-input txt-username" type="text" placeholder="请输入用户名" value="" name="username" onfocus="validateUsername()" onblur="validateUsername()">
          <b class="input-close" style="display: none;"></b> 
          <p id="validateUsername">用户名只能包含字母和中文，且在5-17位之间</p></div>
        <div class="item item-telephone">
          <input id="telephone" class="txt-input txt-telephone" type="text" placeholder="请输入手机号" value="" name="telephone" onfocus="validateTelephone()" onblur="validateTelephone()">
          <b class="input-close" style="display: none;"></b> 
          <p id="validateTelephone">手机号码格式错误</p></div>
        <div class="item item-password">
          <input id="password" class="txt-input txt-password ciphertext" type="password" placeholder="请输入密码" name="password" style="display: inline;" onfocus="validatePassword()" onblur="validatePassword()">
          <input id="ptext" class="txt-input txt-password plaintext" type="text" placeholder="请输入密码" style="display: none;" name="ptext" onfocus="validatePassword()" onblur="validatePassword()">
          <b class="tp-btn btn-off"></b> 
          <p id="validatePassword">密码只能在6-19位之间,不能包含特殊字符</p></div>
        <div class="item item-password">
          <input id="password_PwdTwo" class="txt-input txt-password_PwdTwo ciphertext_PwdTwo" type="password" placeholder="确认密码" name="password_PwdTwo" style="display: inline;" onfocus="validatePassword_PwdTwo()" onblur="validatePassword_PwdTwo()">
          <input id="ptext_PwdTwo" class="txt-input txt-password_PwdTwo plaintext_PwdTwo" type="text" placeholder="确认密码" style="display: none;" name="ptext_PwdTwo" onfocus="validatePassword_PwdTwo()" onblur="validatePassword_PwdTwo()">
          <b class="tp-btn_PwdTwo btn-off_PwdTwo"></b> 
          <p id="validatePassword_PwdTwo">输入密码不一致</p></div>
        <div class="ui-btn-wrap"><a class="ui-btn-lg ui-btn-primary" onclick="register()">用户注册</a> </div>
        <div class="ui-btn-wrap"> <a class="ui-btn-lg ui-btn-danger" href="/Art/mall/personal/login">已有账号？立即登录</a> </div>
      </form>
  </div>
  <!-- footer 开始 -->
	<div class="copyright">Copyright ©2016 Echo 版权所有</div>
	<!-- footer 结束 -->
</div>
</body>

</html>
<script type="text/javascript" >
    $(function() {
		$(".input-close").hide();
		displayPwd();
		displayPwd_PwdTwo();
		displayClearBtn();
		setTimeout(displayClearBtn, 200 ); //延迟显示,应对浏览器记住密码
	});	

	//是否显示清除按钮
	function displayClearBtn(){
		if(document.getElementById("username").value != ''){
			$("#username").siblings(".input-close").show();
		}
		if(document.getElementById("password").value != ''){
			$(".ciphertext").siblings(".input-close").show();
		}
		if(document.getElementById("password_PwdTwo").value != ''){
			$(".ciphertext_PwdTwo").siblings(".input-close").show();
		}
	}

	//清除input内容
    $('.input-close').click(function(e){  
		$(e.target).parent().find(":input").val("");
		$(e.target).hide();
		$($(e.target).parent().find(":input")).each(function(i){
			if(this.id=="ptext" || this.id=="password"){
				$("#password").val('');
				$("#ptext").val('');
			}
			if(this.id=="ptext_PwdTwo" || this.id=="password_PwdTwo"){
				$("#password_PwdTwo").val('');
				$("#ptext_PwdTwo").val('');
			}
         });
    });  
	
	//设置password字段的值	
	$('.txt-password').bind('input',function(){
		$('#password').val($(this).val());
	});
	$('.txt-password_PwdTwo').bind('input',function(){
		$('#password_PwdTwo').val($(this).val());
	});
	
	//显隐密码切换
	function displayPwd(){
    	$(".tp-btn").toggle(
          function(){
            $(this).addClass("btn-on");
			var textInput = $(this).siblings(".plaintext");
    		var pwdInput = $(this).siblings(".ciphertext");
			pwdInput.hide();
			textInput.val(pwdInput.val()).show().focusEnd();
          },
          function(){
		  	$(this).removeClass("btn-on");
		  	var textInput = $(this).siblings(".plaintext");
    		var pwdInput = $(this).siblings(".ciphertext");
            textInput.hide();
			pwdInput.val(textInput.val()).show().focusEnd();
          }
    	);
	}
	//显隐密码切换
	function displayPwd_PwdTwo(){
    	$(".tp-btn_PwdTwo").toggle(
          function(){
            $(this).addClass("btn-on_PwdTwo");
			var textInput = $(this).siblings(".plaintext_PwdTwo");
    		var pwdInput = $(this).siblings(".ciphertext_PwdTwo");
			pwdInput.hide();
			textInput.val(pwdInput.val()).show().focusEnd();
          },
          function(){
		  	$(this).removeClass("btn-on_PwdTwo");
		  	var textInput = $(this).siblings(".plaintext_PwdTwo");
    		var pwdInput = $(this).siblings(".ciphertext_PwdTwo");
            textInput.hide();
			pwdInput.val(textInput.val()).show().focusEnd();
          }
    	);
	}
	
	//监控用户输入
	$(":input").bind('input propertychange', function() {
		if($(this).val()!=""){
			$(this).siblings(".input-close").show();
		}else{
			$(this).siblings(".input-close").hide();
		}
    });
	
	function register(){
		var flag=true;
		$("#frm_register div.item").each(function(){
			var warning=$(this).find("input").val()==""?"注册信息填写不完整":$(this).find("p").text();
			if($(this).find("input").val()==""||$(this).find("p").css("display")!="none"){
				alert(warning);
				flag=false;
				return false;
			}
		});
		if(flag){
			var username=$("input[name='username']").val();
			var telephone=$("input[name='telephone']").val();
			var password=$("input[name='password']").val();
			
			$.post(
					"/Art/mall/personal/doRegister",
					{
						username:username,
						telephone:telephone,
						password:password
					},
					function(data){
						if(data.errno==1)
							window.location.href="/Art/mall/personal";
						else
							alert(data.errmsg);
					});
		}
		
	}
	function validateUsername(){
		var username=$("input[name='username']").val();
		/* var usernameReg=!!username.match(/^[a-zA-Z]\\w{4,17}$/); */
		if(username.length<4||username.length>17){
			$("p#validateUsername").show();
		}
		else
			$("p#validateUsername").hide();
	}
	function validateTelephone(){
		var telephone=$("input[name='telephone']").val();
		var telReg = !!telephone.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
		if(telReg==false)
			$("p#validateTelephone").show();
		else
			$("p#validateTelephone").hide();
	}
	function validatePassword(){
		var password=$("input[name='password']").val();
		if(password.length<6||password.length>29)
			$("p#validatePassword").show();
		else
			$("p#validatePassword").hide();
	}
	function validatePassword_PwdTwo(){
		var password=$("input[name='password']").val();
		var password_PwdTwo=$("input[name='password_PwdTwo']").val();
		if(password!=password_PwdTwo)
			$("p#validatePassword_PwdTwo").show();
		else
			$("p#validatePassword_PwdTwo").hide();
	}
</script> 