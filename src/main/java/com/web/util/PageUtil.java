package com.web.util;

import java.util.List;

/**
 * 分页工具类ss
 * 
 * @author Administrator
 *
 * @param <T>
 */
public class PageUtil<T> {

	private int page = 1; // 当前页
	private int size = 5; // 每页5笔数据
	private List<T> data; // 存放分页数据
	private int totalRecords; // 总共有多少笔数据

	public int getPage() {
		return page;
	}

	public void setPage(int page) {
		this.page = page;
	}

	public int getSize() {
		return size;
	}

	public void setSize(int size) {
		this.size = size;
	}

	public List<T> getData() {
		return data;
	}

	public void setData(List<T> data) {
		this.data = data;
	}

	public int getTotalRecords() {
		return totalRecords;
	}

	public void setTotalRecords(int totalRecords) {
		this.totalRecords = totalRecords;
	}

	/**
	 * 共多少页
	 * 
	 * @return
	 */
	public int getTotalPages() {
		return (int) Math.ceil(this.totalRecords * 1.0 / this.size);
	}

	/**
	 * 上一页页码
	 * 
	 * @return
	 */
	public int getPrev() {
		int prev = this.page - 1;
		return prev > 0 ? prev : 1;
	}

	/**
	 * 下一页的页码
	 * @return
	 */
	public int getNext() {
		int next = this.page + 1;
		return next > this.getTotalPages() ? this.getTotalPages() : next;
	}

	/**
	 * 排除前几笔   limit 0, 5
	 * @return
	 */
	public int getBegin(){
		return  (this.page-1)*this.size;
	}
	
	/**
	 * 取几笔
	 * @return
	 */
	public int getEnd(){
		return this.size;
	}
	
	
}