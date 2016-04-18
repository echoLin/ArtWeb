package xmu.edu.cn.Service;

import java.util.List;

import xmu.edu.cn.Entity.Admin;
import xmu.edu.cn.Entity.Artist;
import xmu.edu.cn.Entity.JSON;

public interface AdminService {
	public JSON login(String workNum, String password);
	public boolean hasAuth(Admin admin, String url);
	public List<Artist> getArtistList(Integer status);
}
