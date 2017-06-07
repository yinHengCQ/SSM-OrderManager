package com.web.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.web.criterion.CriteriaBuilder;
import com.web.entity.Itmes;
import com.web.service.ItmesService;
import com.web.util.PageUtil;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

@Controller
public class ItmesController {
	
	@Resource(name="itmesServiceImpl")
	private ItmesService itmesService;
	
	@RequestMapping(value="/showItmes")
	@ResponseBody
	public PageUtil<Itmes> selectItmes(@RequestParam(defaultValue="1") Integer page,
			@RequestParam(defaultValue="5") Integer size){
		PageUtil<Itmes> paging=new PageUtil<>();
		paging.setPage(page);
		paging.setSize(size);
		itmesService.selectPaging(new CriteriaBuilder(), paging);
		return paging;
	}
	
	@RequestMapping(value="/addItmes",produces="text/html;charset=UTF-8")
	@ResponseBody
	public String addItmes(@Validated Itmes itmes,BindingResult bindingResult){
		//获取验证错误信息
		if (bindingResult.hasErrors()) {
			System.out.println(new JSONArray().fromObject(bindingResult.getAllErrors()).toString());
			return new JSONArray().fromObject(bindingResult.getAllErrors()).toString();
		}
		return itmesService.insert(itmes)+"";
	}
	
	@RequestMapping(value="/deleteItmes")
	@ResponseBody
	public String deleteItmes(Integer id){
		return itmesService.delete(id)+"";
	}
	
	@RequestMapping(value="/findItmes")
	@ResponseBody
	public Itmes findItmesById(Integer id){
		return itmesService.selectById(id);
	}
	
	@RequestMapping(value="/updateItmes")
	@ResponseBody
	public String updateItmes(Itmes itmes){
		return itmesService.update(itmes)+"";
	}
}
