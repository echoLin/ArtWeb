<%@ page language="java" contentType="text/html; charset=UTF-8" 
pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html class='no-js' lang='en'>
  <head>
    <meta charset='utf-8'>
    <meta content='IE=edge,chrome=1' http-equiv='X-UA-Compatible'>
    <title>Sign in</title>
    <meta content='art_cms' name='echo'>
    <meta content='' name='description'>
    <meta content='' name='keywords'>
	<link href="/Art/cms/resource/css/application-a07755f5.css" rel="stylesheet" type="text/css" />
	<link href="//netdna.bootstrapcdn.com/font-awesome/3.2.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
	<link href="/Art/cms/resource/img/favicon.ico" rel="icon" type="image/ico" />
    
  </head>
  <body class='login'>
    <div class='wrapper'>
      <div class='row'>
        <div class='col-lg-12'>
          <div class='brand text-center'>
          		<div class='logo-icon'>
                	<i class='icon-beer'></i>
                </div>
            <h1>
              艺术品管理系统
            </h1>
          </div>
        </div>
      </div>
      <div class='row'>
        <div class='col-lg-12'>
          <form id="cmsLogin_form">
            <fieldset class='text-center'>
              <legend>Login to your account</legend>
              <div class='form-group'>
                <input class='form-control' placeholder='Work Number' type='text' id="work_num" name="work_num">
              </div>
              <div class='form-group'>
                <input class='form-control' placeholder='Password' type='password' id="password" name="password">
              </div>
              <div class='text-center'>
                <div class='checkbox'>
                  <label>
                    <input type='checkbox'>
                    Remember me on this computer
                  </label>
                </div>
                <input class="btn btn-default" type="button" value="Sign in" onClick="cmsLogin()"/>
                <br>
                <a href="jsp/forgot_password.html">Forgot password?</a>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </body>
  <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js"></script> 
  <script type="text/javascript"> 
	    function validator(work_num, password){
		    if(work_num == null || work_num ==''){
			    alert("请输入后台账户");
		    	return false;
	    	}
		    if(password == null || password == ''){
		    	alert("请输入密码");
		    	return false;
		    }
	    	return true;
	    }
	    function cmsLogin(){ 
		    //添加验证信息
		    var work_num = $('#work_num').val();
		    var password = $('#password').val();
		    if(!validator(work_num, password)){
			    return false;
		    }
		    $.post(
					"/Art/cms/doLogin",
					{
						'workNum':work_num,
						'password':password
					},
					function(data){
						if(data.errno==0){
							alert(data.errmsg);
						}else{
							window.location.href="/Art/cms/index";
						}
					});
	    } 
	
	    function goBack(){
	    	history.go(-1);
	    }
    </script>
</html>
