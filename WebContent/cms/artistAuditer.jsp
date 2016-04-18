<%@page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<title>艺术家审核</title>
<link href="//netdna.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet"/>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.js"></script>
</head>
<body>
<!-- content top -->
	<section id='tools'>
		<ul class='breadcrumb' id='breadcrumb'>
			<li class='title'>艺术家审核</li>
			<c:choose>
			<c:when test="${status == 0 }">
				<li><a ><button type="button"
							style="background-color: transparent; border: 0; color:#1ABC9C;" onClick=toArtistAuditer(0);>待审核</button></a></li>
				<li><a ><button type="button"
							style="background-color: transparent; border: 0" onClick=toArtistAuditer(1);>审核通过</button></a></li>
				<li><a ><button type="button"
							style="background-color: transparent; border: 0" onClick=toArtistAuditer(-1);>审核未通过</button></a></li>
			</c:when>
			<c:when test="${status == 1 }">
				<li><a ><button type="button"
							style="background-color: transparent; border: 0" onClick=toArtistAuditer(0);>待审核</button></a></li>
				<li><a ><button type="button"
							style="background-color: transparent; border: 0; color:#1ABC9C;" onClick=toArtistAuditer(1);>审核通过</button></a></li>
				<li><a ><button type="button"
							style="background-color: transparent; border: 0" onClick=toArtistAuditer(-1);>审核未通过</button></a></li>
			</c:when>
			<c:otherwise>
				<li><a ><button type="button"
							style="background-color: transparent; border: 0" onClick=toArtistAuditer(0);>待审核</button></a></li>
				<li><a ><button type="button"
							style="background-color: transparent; border: 0" onClick=toArtistAuditer(1);>审核通过</button></a></li>
				<li><a ><button type="button"
							style="background-color: transparent; border: 0; color:#1ABC9C;" onClick=toArtistAuditer(-1);>审核未通过</button></a></li>
			</c:otherwise>
			</c:choose>
		</ul>
	</section>
	<!-- content top end-->

	<!-- content  -->
	<div id='content'>
		
	</div>
	<!-- content end-->
</body>
</html>