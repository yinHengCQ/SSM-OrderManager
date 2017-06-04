KindEditor.ready(function(K) {
	K.create('#content1', {
		themeType : 'default'
	});
	var editor = K.editor({
		allowFileManager : true
	});
	K('#image').click(function() {
		editor.loadPlugin('image', function() {
			editor.plugin.imageDialog({
				imageUrl : K('#url').val(),
				clickFn : function(url, title, width, height, border, align) {
					K('#url').val(url);
					editor.hideDialog();
					K('#new_image').attr("src",url);
				}
			});
		});
	});

});

//点击取消后，图片value和src都清空
$(function(){
	$("#cancle").click(function(){
		$("#url").attr("value","");
		$("#new_image").attr("src","");
	})
})