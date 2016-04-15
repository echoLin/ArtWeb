package xmu.edu.cn.Dao;

import javax.annotation.Resource;

import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

@Repository("authDao")
public class AuthDaoImpl implements AuthDao {
	@Resource(name="sessionFactory")
	SessionFactory sessionFactory;

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
}
