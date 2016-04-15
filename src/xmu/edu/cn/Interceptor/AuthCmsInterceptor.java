package xmu.edu.cn.Interceptor;

import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import xmu.edu.cn.Entity.Admin;
import xmu.edu.cn.Entity.Role;

public class AuthCmsInterceptor implements HandlerInterceptor{
	@Override
	public void afterCompletion(HttpServletRequest request,
			HttpServletResponse response, Object obj, Exception ex)
			throws Exception {
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response,
			Object obj, ModelAndView mv) throws Exception {
	}

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response,
			Object obj) throws Exception {
		System.out.println("auth check pre");
		HttpSession session = request.getSession();
		Admin admin = (Admin) session.getAttribute("admin");
		if(admin == null){
			response.sendRedirect("/Art/cms/login");
		}else{
			String url = request.getRequestURI();
			String[] arr = url.split("cms/");
			for(int i = 0; i<arr.length; i++){
				System.out.println("i=" + i + " string=" + arr[i]);
			}
		}
		return true;
	}
	
}
