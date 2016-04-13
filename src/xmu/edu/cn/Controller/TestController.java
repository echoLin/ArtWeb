package xmu.edu.cn.Controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.portlet.ModelAndView;

import xmu.edu.cn.Entity.User;
import xmu.edu.cn.Service.PersonalService;

@Controller
public class TestController {
	@Resource(name="personalService")
	private PersonalService personalService;
	
	@RequestMapping("/test")
	public ModelAndView viewAll(String name, String pwd){
		ModelAndView mv = new ModelAndView();
		System.out.println("name:" + name + " pwd:"+pwd);
		mv.setViewName("test");
		mv.addObject("hello","hellobaby");
		return mv;
	}
	
	@RequestMapping(value="/user/{userId}")
	 public @ResponseBody User getCourse(@PathVariable Integer userId){
		 User user = new User();
		 user.setUserId(userId);
		 user.setUsername("test");
		 return user;
	 }
}
