package xmu.edu.cn.Entity;

public final class JSON {
	public Integer errno;//0:error 1:ok
	public String errmsg;//错误信息
	public Object data;//数据
	
	public JSON(Integer errno, String errmsg){
		this.errno = errno;
		this.errmsg = errmsg;
	}
	
	public JSON(Object data){
		this.errno = 1;
		this.data = data;
	}
	
	public Integer getErrno() {
		return errno;
	}
	public void setErrno(Integer errno) {
		this.errno = errno;
	}
	public String getErrmsg() {
		return errmsg;
	}
	public void setErrmsg(String errmsg) {
		this.errmsg = errmsg;
	}
	public Object getData() {
		return data;
	}
	public void setData(Object data) {
		this.data = data;
	}
	
	
}
