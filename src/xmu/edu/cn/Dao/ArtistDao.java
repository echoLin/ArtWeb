package xmu.edu.cn.Dao;

import java.util.List;

import xmu.edu.cn.Entity.Artist;

/**
 * 艺术家表操作接口
 * @author echo
 * */
public interface ArtistDao {
	public void saveArtist(Artist artist) throws Exception;
	public List<Artist> getArtistList(Integer status);
}
