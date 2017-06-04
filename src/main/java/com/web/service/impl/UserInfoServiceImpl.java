package com.web.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.web.entity.UserInfo;
import com.web.mapper.UserInfoMapper;
import com.web.service.UserInfoService;

@Service
public class UserInfoServiceImpl extends CommonServiceImpl<UserInfo> implements
		UserInfoService {

	private UserInfoMapper userInfoMapper;

	@Resource(name="userInfoMapper")
	public void setUserInfoMapper(UserInfoMapper userInfoMapper) {
		this.userInfoMapper = userInfoMapper;
		super.setCommonMapper(userInfoMapper);
	}
}
