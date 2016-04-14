package xmu.edu.cn.Dao;

import xmu.edu.cn.Entity.User;

public interface UserDao {
	public void saveUser(User user) throws Exception;
	public User getUser(Integer userId) throws Exception;
	public User getUser(String telephone, String password) throws Exception;
	
}
