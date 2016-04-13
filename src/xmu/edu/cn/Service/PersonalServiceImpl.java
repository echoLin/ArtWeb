package xmu.edu.cn.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import xmu.edu.cn.Dao.AddressDao;
import xmu.edu.cn.Dao.ArtistDao;
import xmu.edu.cn.Dao.UserDao;

@Service("personalService")
public class PersonalServiceImpl implements PersonalService {
	@Autowired
	private UserDao userDao;
	@Autowired
	private ArtistDao artistDao;
	@Autowired
	private AddressDao addressDao;
}
