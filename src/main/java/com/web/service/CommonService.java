package com.web.service;

import java.util.List;

import com.web.criterion.CriteriaBuilder;
import com.web.util.PageUtil;

public interface CommonService<T> {
	public int insert(T obj);
	
	public int delete(int id);
	
	public int update(T obj);
	
	//通过id查询
	public T selectById(int id);
	
	//条件查询所有
	public List<T> selectAll(CriteriaBuilder criteria);
	
	//条件分页查询
	public void selectPaging(CriteriaBuilder criteria,PageUtil<T> paging);

}
