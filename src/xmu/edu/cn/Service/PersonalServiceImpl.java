package xmu.edu.cn.Service;

import java.util.Date;

import javax.annotation.Resource;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import xmu.edu.cn.Dao.AddressDao;
import xmu.edu.cn.Dao.ArtistDao;
import xmu.edu.cn.Dao.UserDao;
import xmu.edu.cn.Entity.JSON;
import xmu.edu.cn.Entity.User;

@Service("personalService")
public class PersonalServiceImpl implements PersonalService {
	@Autowired
	private UserDao userDao;
	@Autowired
	private ArtistDao artistDao;
	@Autowired
	private AddressDao addressDao;

	@Transactional
	@Override
	public JSON addUser(User user) {
		//验证User
		if(!User.checkUser(user)){
			return new JSON(0,"参数有误");
		}
		//保存User
		user.setRegisterTime(new Date());
		try {
			userDao.saveUser(user);
		} catch (Exception e) {
			return new JSON(0,"注册失败，手机号码被占用");
		}
		return new JSON(user);
	}
	
	@Override
	public JSON getUser(String telephone, String password) {
		if(telephone == null || password == null)
			return new JSON(0, "用户名密码不能为空");
		try {
			return new JSON(userDao.getUser(telephone, password));
		} catch (Exception e) {
			return new JSON(0,"登录失败");
		}
	}
}
