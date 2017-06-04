package com.web.mapper;

import java.util.List;

import com.web.criterion.CriteriaBuilder;

public interface CommonMapper<T> {
	public int insert(T obj);
	
	public int delete(int id);
	
	public int update(T obj);
	
	//通过id查询
	public T selectById(int id);
	
	//条件查询所有
	public List<T> selectAll(CriteriaBuilder criteria);
	
	//条件分页查询数据
	public List<T> selectPaging(CriteriaBuilder criteria);
	
	//条件分页查询总记录数
	public int selectPagingCount(CriteriaBuilder criteria);
}
