package xmu.edu.cn.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class IndexController {
	@RequestMapping(value={"/","/index","/mall","/mall/index"})
	public ModelAndView index(){
		System.out.println("indexController");
		ModelAndView mv = new ModelAndView("/index");
		return mv;
	}
}
