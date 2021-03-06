package xmu.edu.cn.Service;

import xmu.edu.cn.Entity.Artist;
import xmu.edu.cn.Entity.JSON;
import xmu.edu.cn.Entity.User;

public interface PersonalService {
	public JSON addUser(User user);
	public JSON addArtist(Artist artist, User user);
	public JSON login(String telephone, String password);
}
