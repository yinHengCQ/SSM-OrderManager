package com.web.entity;

import java.io.Serializable;
import java.util.Date;

public class UserInfo implements Serializable {

	private Integer id;
	private String loginName;//登录名
	private String loginPWD;//登录密码
	private String nickname;//昵称
	private Integer role;//用户角色
	private Date registTime;//注册时间
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getLoginName() {
		return loginName;
	}
	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}
	public String getLoginPWD() {
		return loginPWD;
	}
	public void setLoginPWD(String loginPWD) {
		this.loginPWD = loginPWD;
	}
	public String getNickname() {
		return nickname;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	public Integer getRole() {
		return role;
	}
	public void setRole(Integer role) {
		this.role = role;
	}
	public Date getRegistTime() {
		return registTime;
	}
	public void setRegistTime(Date registTime) {
		this.registTime = registTime;
	}
	
}
