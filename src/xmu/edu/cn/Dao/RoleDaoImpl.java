package xmu.edu.cn.Dao;

import javax.annotation.Resource;

import org.hibernate.SessionFactory;
import org.springframework.stereotype.Repository;

@Repository("roleDao")
public class RoleDaoImpl implements RoleDao {
	@Resource(name="sessionFactory")
	SessionFactory sessionFactory;

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
}
