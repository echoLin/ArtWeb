package xmu.edu.cn.Entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Transient;

import org.hibernate.annotations.NamedQueries;
import org.hibernate.annotations.NamedQuery;

@Entity
@NamedQueries({
	})
public class Artist{
	@Id
	@GeneratedValue
	private Long artistId;
	@Column(nullable=false)
	private String realname;//艺术家真实姓名
	private String artDirection;//艺术创作方向
	private String education;//学历
	@Column(length = 16777216)
	private String introduction;//个人经历
	private Integer status;//0代表待审核，1代表通过，2代表未通过
	@Column(updatable=false)
	private Date applyTime;//申请时间
	@OneToOne(mappedBy="artist")
	private User user; 
	
	@Transient
	private boolean favorite = false;
	@Transient 
	private Integer favoriteNum = 0;
	public Long getArtistId() {
		return artistId;
	}
	public void setArtistId(Long artistId) {
		this.artistId = artistId;
	}
	public String getRealname() {
		return realname;
	}
	public void setRealname(String realname) {
		this.realname = realname;
	}
	public String getArtDirection() {
		return artDirection;
	}
	public void setArtDirection(String artDirection) {
		this.artDirection = artDirection;
	}
	public String getEducation() {
		return education;
	}
	public void setEducation(String education) {
		this.education = education;
	}
	public String getIntroduction() {
		return introduction;
	}
	public void setIntroduction(String introduction) {
		this.introduction = introduction;
	}
	public Integer getStatus() {
		return status;
	}
	public void setStatus(Integer status) {
		this.status = status;
	}
	public Date getApplyTime() {
		return applyTime;
	}
	public void setApplyTime(Date applyTime) {
		this.applyTime = applyTime;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public boolean isFavorite() {
		return favorite;
	}
	public void setFavorite(boolean favorite) {
		this.favorite = favorite;
	}
	public Integer getFavoriteNum() {
		return favoriteNum;
	}
	public void setFavoriteNum(Integer favoriteNum) {
		this.favoriteNum = favoriteNum;
	}
	
}

