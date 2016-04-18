package xmu.edu.cn.Controller;

import java.io.IOException;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import xmu.edu.cn.Entity.Artist;
import xmu.edu.cn.Entity.JSON;
import xmu.edu.cn.Entity.User;
import xmu.edu.cn.Service.PersonalService;

@Controller
@RequestMapping("/mall/personal")
public class PersonalController {
	
	@Resource(name="personalService")
	private PersonalService personalService;
	
	@RequestMapping({"/","/index"})
	public ModelAndView toIndex(HttpServletRequest request){
		ModelAndView mv = new ModelAndView();
		mv.addObject("user", request.getSession().getAttribute("user"));
		mv.setViewName("mall/personal/index");
		return mv;
	}
	
	@RequestMapping("/login")
	public ModelAndView toLogin(){
		ModelAndView mv = new ModelAndView();
		mv.setViewName("mall/personal/login");
		return mv;
	}
	
	@RequestMapping("/register")
	public ModelAndView toRegister(){
		ModelAndView mv = new ModelAndView();
		mv.setViewName("mall/personal/register");
		return mv;
	}
	
	@RequestMapping("/doRegister")
	public @ResponseBody JSON doRegister(User user, HttpServletRequest request){
		System.out.println("doRegister");
		JSON json = personalService.addUser(user);
		if(json.errno == 1 && json.data != null){
			request.getSession().setAttribute("user", json.data);
		}else{
			json = new JSON(0, "登录失败");
		}
		return json;
	}
	
	@RequestMapping("/doLogin")
	public @ResponseBody JSON doLogin(String telephone, String password, HttpServletRequest request){
		JSON json = personalService.login(telephone, password);
		if(json.errno == 1){
			request.getSession().setAttribute("user", json.data);
		}
		return json;
	}
	
	@RequestMapping("/doLogout")
	public void toLogout(HttpServletRequest request, HttpServletResponse response){
		request.getSession().setAttribute("user", null);
		try {
			response.sendRedirect("/Art");
		} catch (IOException e) {

		}
	}
	
	@RequestMapping("/apply")
	public ModelAndView toApply(HttpServletRequest request){
		User user = (User) request.getSession().getAttribute("user");
		ModelAndView mv = new ModelAndView();
		if(user.getArtist() != null)
			mv.addObject("artist", user.getArtist());
		return mv;
	}
	
	@RequestMapping("/doApply")
	public @ResponseBody JSON doApply(Artist artist, HttpServletRequest request){
		System.out.println("doApply");
		User user = (User) request.getSession().getAttribute("user");
		JSON json = personalService.addArtist(artist, user);
		if(json.errno == 1){
			request.getSession().setAttribute("user", json.data);
			json.data = "申请提交成功";
		}
		return json;
	}
	
}
