KindEditor.ready(function(K) {
	K.create('#content1', {
		themeType : 'default'
	});
	var editor = K.editor({
		allowFileManager : true
	});
	K('#image_add').click(function() {
		editor.loadPlugin('image', function() {
			editor.plugin.imageDialog({
				imageUrl : K('#url_add').val(),
				clickFn : function(url, title, width, height, border, align) {
					K('#url_add').val(url);
					editor.hideDialog();
					K('#new_image_add').attr("src",url);
				}
			});
		});
	});
	
	K('#image_update').click(function() {
		editor.loadPlugin('image', function() {
			editor.plugin.imageDialog({
				imageUrl : K('#url_update').val(),
				clickFn : function(url, title, width, height, border, align) {
					K('#url_update').val(url);
					editor.hideDialog();
					K('#new_image_update').attr("src",url);
					K('#url_update').val(url);
				}
			});
		});
	});	

});

//点击取消后，图片value和src都清空
$(function(){
	$("#cancle_add").click(function(){
		$("#url_add").attr("value","");
		$("#new_image_add").attr("src","");
	})
})

$(function(){
	$("#cancle_update").click(function(){
		$("#url_update").attr("value","");
		$("#new_image_update").attr("src","");
	})
})