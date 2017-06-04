package com.web.entity;

import java.io.Serializable;

public class Itmes implements Serializable {
	
	private Integer id;
	private String itmesNO;//商品编号
	private String itmesName;//商品名称
	private String itmesSpec;//商品规格
	private Float price;//商品原价
	private Integer count;//库存数量
	private Float discountPrice;//商品打折后价格
	private String discribe;//商品描述
	private String itmesPhoto;//商品图片
	private String itmesURL;//图片链接地址
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getItmesNO() {
		return itmesNO;
	}
	public void setItmesNO(String itmesNO) {
		this.itmesNO = itmesNO;
	}
	public String getItmesName() {
		return itmesName;
	}
	public void setItmesName(String itmesName) {
		this.itmesName = itmesName;
	}
	public String getItmesSpec() {
		return itmesSpec;
	}
	public void setItmesSpec(String itmesSpec) {
		this.itmesSpec = itmesSpec;
	}
	public Float getPrice() {
		return price;
	}
	public void setPrice(Float price) {
		this.price = price;
	}
	public Integer getCount() {
		return count;
	}
	public void setCount(Integer count) {
		this.count = count;
	}
	public Float getDiscountPrice() {
		return discountPrice;
	}
	public void setDiscountPrice(Float discountPrice) {
		this.discountPrice = discountPrice;
	}
	public String getDiscribe() {
		return discribe;
	}
	public void setDiscribe(String discribe) {
		this.discribe = discribe;
	}
	public String getItmesPhoto() {
		return itmesPhoto;
	}
	public void setItmesPhoto(String itmesPhoto) {
		this.itmesPhoto = itmesPhoto;
	}
	public String getItmesURL() {
		return itmesURL;
	}
	public void setItmesURL(String itmesURL) {
		this.itmesURL = itmesURL;
	}
}
