package xmu.edu.cn.Entity;

import java.io.Serializable;
import java.util.Set;
import java.util.regex.Pattern;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.JoinColumn;
import javax.persistence.MapKey;

import org.hibernate.annotations.NamedQueries;
import org.hibernate.annotations.NamedQuery;

@SuppressWarnings("serial")
@Entity
@NamedQueries({
	@NamedQuery(name="Admin.getByWorkNumAndPassword", query="from Admin a where a.workNum = :workNum and a.password = :password and a.isUsed=1")
})
public class Admin implements Serializable{
	@Id
	@GeneratedValue
	private Long adminId;
	@Column(unique=true, nullable=false)
	private String workNum;
	@Column(nullable=false)
	private String password = "123456";
	private String realname;
	@ManyToMany
	@JoinTable(
			name="Auth",
			joinColumns={@JoinColumn(name="adminId")},
			inverseJoinColumns={@JoinColumn(name="roleId")}
			)
	private Set<Role> roles;
	private Integer isUsed = 1; // -1 停用 1 启用
	
	public static boolean checkAdmin(Admin admin){
		if(admin.realname == null || admin.workNum == null || admin.password == null)
			return false;
		if(!Pattern.matches("^[a-zA-Z0-9]{4,16}$", admin.workNum))
			return false;
		if(!Pattern.matches("^[a-zA-Z0-9]{6,16}$", admin.password))
			return false;
		return true;
	}
	
	public Long getAdminId() {
		return adminId;
	}
	public void setAdminId(Long adminId) {
		this.adminId = adminId;
	}
	public String getWorkNum() {
		return workNum;
	}
	public void setWorkNum(String workNum) {
		this.workNum = workNum;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRealname() {
		return realname;
	}
	public void setRealname(String realname) {
		this.realname = realname;
	}
	public Set<Role> getRoles() {
		return roles;
	}
	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}
	public Integer getIsUsed() {
		return isUsed;
	}
	public void setIsUsed(Integer isUsed) {
		this.isUsed = isUsed;
	}
	
	
}
