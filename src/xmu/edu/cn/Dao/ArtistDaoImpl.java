package xmu.edu.cn.Dao;

import java.util.List;

import javax.annotation.Resource;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import xmu.edu.cn.Entity.Artist;

@Repository("artistDao")
public class ArtistDaoImpl implements ArtistDao {
	@Resource(name="sessionFactory")
	SessionFactory sessionFactory;

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	@Override
	public void saveArtist(Artist artist) throws Exception {
		sessionFactory.getCurrentSession().saveOrUpdate(artist);
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<Artist> getArtistList(Integer status) {
		Query query = sessionFactory.getCurrentSession().getNamedQuery("Artist.getArtistListByStatus");
		query.setParameter("status", status);
		return query.list();
	}
}
