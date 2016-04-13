package xmu.edu.cn.Dao;

import org.hibernate.SessionFactory;

public class AddressDaoImpl implements AddressDao {
	SessionFactory sessionFactory;

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	
}
