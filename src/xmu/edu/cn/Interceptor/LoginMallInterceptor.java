package xmu.edu.cn.Interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

public class LoginMallInterceptor implements HandlerInterceptor{
	@Override
	public void afterCompletion(HttpServletRequest request,
			HttpServletResponse response, Object obj, Exception ex)
			throws Exception {
		
		System.out.println("mall login after");
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response,
			Object obj, ModelAndView mv) throws Exception {
		//这里会丢失前面传的数据
//		HttpSession session = request.getSession();
//		if(session.getAttribute("user") == null){
//			mv.setViewName("/mall/personal/login");
//		}
		System.out.println("mall login post");
	}

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response,
			Object obj) throws Exception {
		System.out.println("mall login pre");
		HttpSession session = request.getSession();
		if(session.getAttribute("user") == null){
			response.sendRedirect("/Art/mall/personal/login");
		}
		return true;
	}
	
}
