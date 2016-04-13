package xmu.edu.cn.Entity;

import java.util.Date;

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
	})
public class User {
	@Id
	@GeneratedValue
	protected long userId;
	@Column(unique=true,nullable=false)
	protected String username;//用户名
	protected String password;//密码
	@Column(unique=true)
	protected String telephone;//手机号
	protected Date register_time;//注册时间
	protected String avatar="/Art/images/avatar/default_avatar_male.jpg";//头像
	@Column(precision=10,scale=2)
	protected Double money = 0.0;//账户余额
	protected Integer version;
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="artistId",unique=true)
	protected Artist artist;
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
	public Date getRegister_time() {
		return register_time;
	}
	public void setRegister_time(Date register_time) {
		this.register_time = register_time;
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
	public Integer getVersion() {
		return version;
	}
	public void setVersion(Integer version) {
		this.version = version;
	}
	public Artist getArtist() {
		return artist;
	}
	public void setArtist(Artist artist) {
		this.artist = artist;
	}
}
