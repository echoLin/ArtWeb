package xmu.edu.cn.Dao;

import org.hibernate.SessionFactory;

public class ArtistDaoImpl implements ArtistDao {
	SessionFactory sessionFactory;

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
}
