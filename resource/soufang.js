var _API = "index.php";
$(function() {
	
});
function start(url,start,max){
	var start = 1, max = 840; // 这里少了一页，得补回
	for (var id = start; id < max; id++) {
		var url = "http://newhouse.gz.soufun.com/house/%B9%E3%D6%DD_________________" + id + "___.htm";
		step1(url);
	}
}

function step1(url) {
	ajax_html(url, step1_callback);
}

function step1_callback(ret) {
	// $("body").html(ret);
	// 这里对返回的html进行分析
	var html = "";
	// 遍历所有的楼盘节点
	var dom_loupans = $(ret).find(".sslalone");
	$.each(dom_loupans, function() {
		var _this = $(this);
		var id_origin = _this.attr("id");
		// 楼盘唯一ID
		var id = id_origin.replace("loupan_", "");
		var dom_name = _this.find("a.snblue")[0];
		var name = dom_name.innerText;
		var href_origin = $(dom_name).attr("href");
		var href = href_origin + "/house/" + id + "/housedetail.htm";
		// 请求详细楼盘的页面
		step2(id, href);
	});
}

function step2(id, href) {
	ajax_html(href, function callback(ret) {
		step2_callback(id, ret);
	});
}

function step2_callback(id, ret) {
	var html = "";
	var dom_name = $(ret).find("div.title_navi>a")[0];
	if (dom_name) {
		var loupan_name = dom_name.innerText;

		var dom_info = $(ret).find("#xq_xmjs_anchor+div")[0];
		var loupan_info = $.trim(dom_info.innerText);
		if (loupan_info != "") {
			html += "<p>ID：" + id + "</p>";
			html += "<p>楼盘名称：" + loupan_name + "</p>";
			html += "<p>楼盘信息：" + loupan_info + "</p>";
			$("#success").append(html);
			var data = {
				eid : id,
				name : loupan_name,
				info : loupan_info
			};
			// 这里应该先写入文件，再用事务批量提交
			// ajax(_API, "get", data, callback);
		}else{
			$("#error").append("<p>信息为空:"+id+"</p>");
		}
	}else{
		$("#error").append("<p>error:"+id+"</p>");
	}

}

// 提交服务器的callback
function callback(ret) {

}

// 先请求列表页面，获得所有楼盘的名称和ID
function ajax_html(url, callback) {
	$.ajax({
		url : url,
		dataType : "html",
		success : callback
	});
}
