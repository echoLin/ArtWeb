package xmu.edu.cn.Controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import xmu.edu.cn.Entity.Admin;
import xmu.edu.cn.Entity.JSON;
import xmu.edu.cn.Service.AdminService;

@Controller
@RequestMapping("/cms")
public class AdminController {
	
	@Resource(name="adminService")
	private AdminService adminService;
	
	@RequestMapping("/login")
	public ModelAndView toLogin(HttpServletRequest request){
		request.getSession().setAttribute("admin", null);
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
	
	@RequestMapping("/artistAuditer")
	public ModelAndView toAuditArtist(Integer status, HttpServletRequest request){
		ModelAndView mv = new ModelAndView();
		if(!adminService.hasAuth((Admin) request.getSession().getAttribute("admin"), request.getRequestURI())){
			mv.setViewName("cms/error");
			mv.addObject("title", "艺术家审核");
			mv.addObject("msg", "您没有权限访问");
			return mv;
		}
		mv.addObject("list", adminService.getArtistList(status));
		mv.addObject("status", status);
		mv.setViewName("cms/artistAuditer");
		return mv;
	}
}
