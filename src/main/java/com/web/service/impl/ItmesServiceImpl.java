package com.web.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.web.entity.Itmes;
import com.web.mapper.ItmesMapper;
import com.web.service.ItmesService;

@Service
public class ItmesServiceImpl extends CommonServiceImpl<Itmes> implements
		ItmesService {

	private ItmesMapper itmesMapper;

	@Resource(name="itmesMapper")
	public void setItmesMapper(ItmesMapper itmesMapper) {
		this.itmesMapper = itmesMapper;
		super.setCommonMapper(itmesMapper);
	}
}
