function ajax(url, method, options, callback) {
	$.ajax({
		url : url,
		type : method,
		data : options,
		dataType : "json",
		success : callback,
		error : function(xhr, status) {
			//$("body").append("status :" + status + " <br />return:<br />" + xhr.responseText);
		}
	});
}
