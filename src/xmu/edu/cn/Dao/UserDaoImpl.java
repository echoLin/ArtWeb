package xmu.edu.cn.Dao;

import org.hibernate.SessionFactory;

public class UserDaoImpl implements UserDao {
	SessionFactory sessionFactory;

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
}
