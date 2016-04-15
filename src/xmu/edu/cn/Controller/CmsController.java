package xmu.edu.cn.Controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.portlet.ModelAndView;

import xmu.edu.cn.Entity.Admin;
import xmu.edu.cn.Entity.JSON;
import xmu.edu.cn.Service.AdminService;

@Controller
@RequestMapping("/cms")
public class CmsController {
	@Resource(name="adminService")
	private AdminService adminService;
	
	@RequestMapping("/login")
	public ModelAndView toLogin(){
		ModelAndView mv = new ModelAndView();
		mv.setViewName("cms/login");
		return mv;
	}
	
	@RequestMapping({"/","/index"})
	public ModelAndView toIndex(HttpServletRequest request){
		ModelAndView mv = new ModelAndView();
		mv.addObject("admin",request.getAttribute("admin"));
		mv.setViewName("cms/index");
		return mv;
	}
	
	@RequestMapping("/doLogin")
	public @ResponseBody JSON doLogin(String workNum, String password, HttpServletRequest request){
		JSON json = adminService.login(workNum, password);
		if(json.errno == 1){
			request.getSession().setAttribute("admin", json.data);
		}
		return json;
	}
	
	@RequestMapping({"/admin", "/admin/index"})
	public ModelAndView toAdmin(HttpServletRequest request){
		ModelAndView mv = new ModelAndView();
		if(adminService.hasAuth((Admin) request.getSession().getAttribute("admin"), request.getRequestURI())){
			mv.setViewName("/cms/error");
			mv.addObject("msg", "对不起，您没有权限访问");
			return mv;
		}
		mv.setViewName("cms/admin/index");
		return mv;
	}
	
}
