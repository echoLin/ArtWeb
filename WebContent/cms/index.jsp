<%@page language="java" contentType="text/html; charset=UTF-8" 
pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html class='no-js' lang='en'>
  <head>
    <meta charset='utf-8'>
    <meta content='IE=edge,chrome=1' http-equiv='X-UA-Compatible'>
    <title>艺术品网站后台管理系统</title>
    <meta content='art_cms_dashboard' name='echo'>
    <link href="/Art/cms/resource/css/application-a07755f5.css" rel="stylesheet" type="text/css" />
    <link href="/Art/cms/resource/css/dashboard.css" rel="stylesheet" type="text/css" />
    <link href="/Art/cms/resource/images/favicon.ico" rel="icon" type="image/ico" />
    <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.0/css/font-awesome.css" rel="stylesheet" />
	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js"></script>
  	<script src="/Art/bootstrap/js/bootstrap.js" type="text/javascript" ></script>
  	<script src="/Art/cms/resource/js/index.js" type="text/javascript" ></script>
  </head>
  <body class='main page'>
    <!-- top -->
    <div class='navbar navbar-default' id='navbar'>
      <a class='navbar-brand' href='#'>
        <i class='icon-beer'></i>
        艺术品网站后台管理系统
      </a>
      <ul class='nav navbar-nav pull-right'>
        <li class='dropdown'>
          <a class='dropdown-toggle' data-toggle='dropdown' href='#'>
            <i class='icon-envelope'></i>
            消息
            <span class='badge'>0</span>
            <b class='caret'></b>
          </a>
          <ul class='dropdown-menu'>
            <li>
              <a href='#'>
              	<button id="readMessage" type="button" data-model="test" style="background-color:transparent;border:0">
              	查看消息
              	</button>
              </a>
             </li>
             <li class='divider'></li>
             <li>
              <a href='#'>
              	<button id="sendMessage" type="button" data-model="test" style="background-color:transparent;border:0">
              	发送消息
              	</button>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href='#'>
            <i class='icon-cog'></i>
            <button id="modifyPwd" type="button" data-model="test" style="background-color:transparent;border:0" onClick=showModifyPasswordDiv()>
            修改密码
            </button>
          </a>
        </li>
        <li class='dropdown user'>
          <a class='dropdown-toggle' data-toggle='dropdown' href='#'>
            <i class='icon-user'></i>
            	<strong>
				 	${admin.realname }
            	</strong>
            <b class='caret'></b>
          </a>
          <ul class='dropdown-menu'>
            <li>
              <a href='#'>Edit Profile</a>
            </li>
            <li class='divider'></li>
            <li>
              <a href="/Art/cms/login">注销</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!-- top end -->
    
    <!-- big content -->
    <div id='wrapper'>
      <!-- content left -->
      <section id='sidebar'>
        <i class='icon-align-justify icon-large' id='toggle'></i>
        <ul id='dock'>
        	<li class='active launcher'>
        		<i class='icon-dashboard'></i>
        		<a><button id='dashboard' type='button' data-model='dashboard' style='background-color:transparent;border:0;' onClick=loadContent(this)>首页</button></a>
        	</li>
        	<c:if test="${not empty admin.roles }">
        	<c:forEach var="role" items="${ admin.roles}">
        	<li class='launcher'>
        		<i class="${role.description }"></i>
        		<a><button id="${role.englishName}" type='button' data-model="${role.englishName}" style='background-color:transparent;border:0;' onClick=loadContent(this)>${role.name}</button></a>
        	</li>
        	</c:forEach>
        	</c:if>
        </ul>
        <div data-toggle='tooltip' id='beaker' title='Made by wePluse'></div>
      </section>
      <!-- content left end-->
      
      <!-- content right -->
      <div id='right'>
	     <!-- Tools -->
      <section id='tools'>
        <ul class='breadcrumb' id='breadcrumb'>
          <li class='title'>首页</li>
        </ul>
      </section>
      <!-- Content -->
      <div id='content'>
        <div class='panel panel-default'>
          <div class='panel-heading'>
            <i class='icon-beer icon-large'></i>
            Welcome!
            <div class='panel-tools'>
            </div>
          </div>
          <div class='panel-body'>
            
          </div>
        </div>
      </div>
      </div>
      <!-- content right end -->
      
    </div>
    <!-- big content end -->
    
    <!-- modify password -->
    <div id="modify_password" class='modify' style="display:none">
    	<div class="wrapper">
    		<div class="row">
    			<div class='col-lg-12'>
    				<div class='brand text-center'>
    						<div class='logo-icon'>
    							<i class='icon-beer'></i>
    						</div>
    					<h1>
    						艺术品后台管理系统
    					</h1>
    				</div>
    			</div>
    			<div class='row'>
    				<div class='col-lg-12'>
    					<form id="cmsModifyPassword_form">
    						<fieldset class='text-center'>
    							<legend>修改密码</legend>
    							<div class='form-froup'>
    								<input class='form-control' placeholder="Please enter your current password" type='password' id='current_password' name='current_password'/>
    							</div>
    							<br>
    							<div class='form-froup'>
    								<input class='form-control' placeholder="Please enter your new password" type='password' id='new_password' name='new_password'/>
    							</div>
    							<br>
    							<div class='form-froup'>
    								<input class='form-control' placeholder="Please enter your new password again" type='password' id='new_password_sed' name='new_password_sed'/>
    							</div>
    							<br>
    							<div class='text-center'>
    								<input class="btn btn-default" type="button" value="Sign in" onClick="cmsModifyPassword()"/>
    								
    							</div>
    							<br>
    						</fieldset>
    					</form>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
    <!-- modify password end -->
    
  </body>
</html>
