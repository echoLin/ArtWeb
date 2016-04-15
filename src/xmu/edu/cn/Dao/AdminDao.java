package xmu.edu.cn.Dao;

import xmu.edu.cn.Entity.Admin;

public interface AdminDao {
	public Admin getAdmin(String workNum, String password);
	public void saveAdmin(Admin admin) throws Exception;
}
