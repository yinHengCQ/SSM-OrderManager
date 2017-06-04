package com.web.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.web.criterion.CriteriaBuilder;
import com.web.entity.Itmes;
import com.web.service.ItmesService;
import com.web.util.PageUtil;

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
	
	@RequestMapping(value="/addItmes")
	@ResponseBody
	public String addItmes(Itmes itmes){		
		return itmesService.insert(itmes)+"";
	}
}
