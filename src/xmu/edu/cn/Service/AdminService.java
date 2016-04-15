package xmu.edu.cn.Service;

import xmu.edu.cn.Entity.Admin;
import xmu.edu.cn.Entity.JSON;

public interface AdminService {
	public JSON login(String workNum, String password);
	public boolean hasAuth(Admin admin, String url);
}
