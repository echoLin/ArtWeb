package xmu.edu.cn.Entity;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.regex.Pattern;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.NamedQueries;
import org.hibernate.annotations.NamedQuery;

@Entity
@Table(name="User")
@NamedQueries({
	@NamedQuery(name="User.getByUserId",query="from User u where u.userId = :userId"),
	@NamedQuery(name="User.getByTelephoneAndPassword", query="from User u where u.telephone = :telephone and u.password = :password")
	})
public class User {
	@Id
	@GeneratedValue
	protected long userId;
	protected String username;//用户名
	protected String password;//密码
	@Column(unique=true)
	protected String telephone;//手机号
	protected Date registerTime;//注册时间
	protected String avatar="/Art/images/avatar/person.png";//头像
	@Column(precision=10,scale=2)
	protected Double money = 0.0;//账户余额
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="artistId",unique=true)
	protected Artist artist = null;
	public static boolean checkUser(User user){
		//检查user各个属性是否合法
		if(user.username == null || user.telephone == null || user.password == null)
			return false;
		if(!Pattern.matches("^[a-zA-Z0-9]{4,17}$", user.username)){
			return false;
		}
		if(!Pattern.matches("^((13[0-9])|(15[^4,\\D])|(18[0,5-9]))\\d{8}$", user.telephone))
			return false;
		if(!Pattern.matches("^[a-zA-Z0-9]{6,16}$", user.password))
			return false;
		return true;
	}
	public long getUserId() {
		return userId;
	}
	public void setUserId(long userId) {
		this.userId = userId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getTelephone() {
		return telephone;
	}
	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}
	public String getAvatar() {
		return avatar;
	}
	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}
	public Double getMoney() {
		return money;
	}
	public void setMoney(Double money) {
		this.money = money;
	}
	public Artist getArtist() {
		return artist;
	}
	public void setArtist(Artist artist) {
		this.artist = artist;
	}
	public String getRegisterTime() {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		return sdf.format(registerTime);
	}
	public void setRegisterTime(Date registerTime) {
		this.registerTime = registerTime;
	}
	
}
