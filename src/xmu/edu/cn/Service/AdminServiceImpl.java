package xmu.edu.cn.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import xmu.edu.cn.Dao.AdminDao;
import xmu.edu.cn.Dao.AuthDao;
import xmu.edu.cn.Dao.RoleDao;
import xmu.edu.cn.Entity.Admin;
import xmu.edu.cn.Entity.JSON;
import xmu.edu.cn.Entity.Role;

@Service("adminService")
public class AdminServiceImpl implements AdminService {
	@Autowired
	private AdminDao adminDao;
	@Autowired
	private AuthDao authDao;
	@Autowired
	private RoleDao roleDao;
	
	@Transactional
	@Override
	public JSON login(String workNum, String password){
		if(workNum == null || password == null)
			return new JSON(0, "用户名或密码不能为空");
		Admin admin = null;
		try {
			admin = adminDao.getAdmin(workNum, password);
		} catch (Exception e) {}
		
		if(admin == null)
			return new JSON(0, "登录失败");
		return new JSON(admin);
	}
	
	public boolean hasAuth(Admin admin, String url){
		String[] arr = url.split("cms/");
		arr = arr[1].split("/");
		String auth = arr[0];
		boolean hasAuth = false;
		for(Role role : admin.getRoles()){
			if(role.getEnglishName().equals(auth))
				hasAuth = true;
		}
		return hasAuth;
	}
}
