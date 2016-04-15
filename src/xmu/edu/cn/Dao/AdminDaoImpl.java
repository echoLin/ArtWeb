package xmu.edu.cn.Dao;

import javax.annotation.Resource;

import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

import xmu.edu.cn.Entity.Admin;

@Repository("adminDao")
public class AdminDaoImpl implements AdminDao {
	@Resource(name="sessionFactory")
	SessionFactory sessionFactory;

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	@Override
	public Admin getAdmin(String workNum, String password) {
		Query query = sessionFactory.getCurrentSession().getNamedQuery("Admin.getByWorkNumAndPassword");
		query.setParameter("workNum", workNum);
		query.setParameter("password", password);
		System.out.println(query.getQueryString());
		return (Admin) query.uniqueResult();
	}

	@Override
	public void saveAdmin(Admin admin) throws Exception {
		sessionFactory.getCurrentSession().save(admin);
	}
}
