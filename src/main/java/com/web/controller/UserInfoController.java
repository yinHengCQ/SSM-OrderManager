package com.web.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.web.criterion.CriteriaBuilder;
import com.web.entity.UserInfo;
import com.web.service.UserInfoService;

@Controller
public class UserInfoController {

	@Resource(name="userInfoServiceImpl")
	private UserInfoService userInfoService;
	
	@RequestMapping(value="/find")
	public String find(Model model){
		model.addAttribute("list", userInfoService.selectAll(null));
		return "index";
	}
	
	@RequestMapping(value="/json")
	@ResponseBody
	public List<UserInfo> json(){
		return userInfoService.selectAll(null);
	}
	
	@RequestMapping(value="/findById")
	@ResponseBody
	public UserInfo findById(){
		return userInfoService.selectAll(null).get(0);
	}
}
