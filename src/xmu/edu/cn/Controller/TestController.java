package xmu.edu.cn.Controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
//注意不要import错了，是servlet不是portlet
import org.springframework.web.servlet.ModelAndView;

import xmu.edu.cn.Entity.User;
import xmu.edu.cn.Service.PersonalService;
//@RunWith(SpringJUnit4ClassRunner.class)
//@ContextConfiguration("file:WebContent/WEB-INF/web.xml")
//ERROR 
@Controller
public class TestController {
	@Resource(name="personalService")
	private PersonalService personalService;
	
	public void test(){
		System.out.println("test success");
	}
	
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
