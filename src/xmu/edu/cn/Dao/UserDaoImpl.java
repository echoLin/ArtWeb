package xmu.edu.cn.Dao;

import javax.annotation.Resource;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import xmu.edu.cn.Entity.User;

@Repository("userDao")
public class UserDaoImpl implements UserDao{
	@Resource(name="sessionFactory")
	SessionFactory sessionFactory;

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	@Override
	public void saveUser(User user) throws Exception{
		Session session = sessionFactory.getCurrentSession();
		session.save(user);
		user.setPassword(null);
	}

	@Override
	public User getUser(Integer userId) {
		Query query = sessionFactory.getCurrentSession().getNamedQuery("User.getByUserId");
		query.setParameter("userId", userId);
		User user = (User) query.uniqueResult();
		user.setPassword(null);
		return user;
	}

	@Override
	public User getUser(String telephone, String password) {
		Query query = sessionFactory.getCurrentSession().getNamedQuery("User.getByTelephoneAndPassword");
		query.setParameter("telephone", telephone);
		query.setParameter("password", password);
		User user = (User) query.uniqueResult();
		user.setPassword(null);
		return user;
	}
}
