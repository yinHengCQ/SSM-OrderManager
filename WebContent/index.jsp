<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Insert title here</title>
</head>
<body>
	<a href="${pageContext.request.contextPath }/find.html">查询</a>
	<a href="${pageContext.request.contextPath }/json.html">查询json</a>
	<a href="${pageContext.request.contextPath }/page/test/test1.html">angularjs</a>
	<a href="${pageContext.request.contextPath }/page/itmes/showItmes.html">展示商品列表</a>
	<a href="${pageContext.request.contextPath }/page/test/test2.html">test2</a>
	<table border="1">
		<c:forEach items="${list }" var="u">
			<tr>
				<td>${u.id }</td>
				<td>${u.loginName }</td>
				<td>${u.loginPWD }</td>
				<td>${u.nickname }</td>
				<td>${u.role }</td>
				<td>${u.registTime }</td>
			</tr>
		</c:forEach>
	</table>
</body>
</html>