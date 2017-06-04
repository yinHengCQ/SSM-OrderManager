package com.web.service.impl;

import java.util.List;

import com.web.criterion.CriteriaBuilder;
import com.web.mapper.CommonMapper;
import com.web.service.CommonService;
import com.web.util.PageUtil;

public class CommonServiceImpl<T> implements CommonService<T> {

	private CommonMapper<T> commonMapper;
	
	public void setCommonMapper(CommonMapper<T> commonMapper) {
		this.commonMapper = commonMapper;
	}

	@Override
	public int insert(T obj) {
		return this.commonMapper.insert(obj);
	}

	@Override
	public int delete(int id) {
		return this.commonMapper.delete(id);
	}

	@Override
	public int update(T obj) {
		return this.commonMapper.update(obj);
	}

	@Override
	public T selectById(int id) {
		return this.commonMapper.selectById(id);
	}

	@Override
	public List<T> selectAll(CriteriaBuilder criteria) {
		return this.commonMapper.selectAll(criteria);
	}

	@Override
	public void selectPaging(CriteriaBuilder criteria, PageUtil<T> paging) {
		criteria.setOffset(paging.getBegin());//排除前几笔数据
		criteria.setLimit(paging.getEnd());//取几笔数据
		paging.setTotalRecords(this.commonMapper.selectPagingCount(criteria));
		paging.setData(this.commonMapper.selectPaging(criteria));
	}

}
