$(function() {

});

var root = "http://www.du114.com/";
var debug = false;
var min = 0,
	max = 0,
	cnt = 0;
// 保存图片的地址	
var image_list = {};
// 递增 继续
function goon() {
	min = max + 1;
	max = min + 2;
	du114();
}

function set() {
	min = $("#min").val();
	max = $("#max").val();
	du114();
}

/**
 * 来自套图超市的图
 * 感谢：http://www.du114.com/
 * 打个广告，这个网站挺好的，找了n个地方的美女图，这一家超市集合了几家大网站的图，省了大力气呀
 */
function du114() {
	var root = "http://www.du114.com/";
	// 这种是简单的可以找到区间的，地址像 http://www.du114.com/a/TGOD/5373.html
	var array1 = {
		// Mygirl美媛馆
		"Mygirl": {
			"min": 3999,
			"max": 5329
		},
		// TGOD推女神
		"TGOD": {
			"min": 4380,
			"max": 5373
		}
	};
	start();

	// 这种地址有月份，需要遍历链接
	var array2 = {
		// 3Agirl
		"3Agirl": {
			"min": 1,
			"max": 12,
			"cat": 16
		},
		// 秀人网
		"xiuren": {
			"min": 1,
			"max": 20,
			"cat": 15
		},
		// Ugirls尤果网
		"youguowang": {
			"min": 1,
			"max": 5,
			"cat": 24
		},
		// 风俗娘 
		"fengsuniang": {
			"min": 1,
			"max": 8,
			"cat": 23
		}
	}
	start2(array2);
}

function start2(url_array) {
	for (var item in url_array) {
		var base_url = root + "/a/" + item + "/";
		if (min == 0) {
			min = url_array[item].min;
			//			max = url_array[item].max;
		}
		if (max > url_array[item].max) {
			max = url_array[item].max;
		}
		var cat = url_array[item].cat;

		$("#min").val(min);
		$("#max").val(max);

		for (var i = min; i <= max; i++) {
			var url = base_url + "list_" + cat + "_" + i + ".html";
			// 获取里面的图片链接
			get_links(url, ".btbg a", "href", function(link_array) {
				// 进入图册
				for (var item in link_array) {
					get_links(item, ".bbox img", "src", function(images_array) {
						handle_images(images_array);
					});
				}
			});
		}
	}
}

// 处理图片
function handle_images(images) {
	var html = "";
	var length = images.length;
	var html = "";
	for (var src in images) {
		save(src);
		if (debug) {
			html += "<a target='_blank' href='" + src + "' ><img src='" + src + "' />" + "</a>";
		} else {
			html += "<a target='_blank' href='" + src + "' >" + cnt + " - " + src + "</a><br />";
		}
		cnt++;
	}
	//$("#success").prepend(html);
}

// 获取每个图册的链接
function get_links(url, selector, attr, callback) {
	ajax_html(url, function(ret) {
		var page_obj = $(ret).find(selector);
		var page_array = {};
		page_obj.each(function(i, item) {
			if (item.hasAttribute(attr)) {
				var href = root + item.getAttribute(attr);
				// 使用数组可能会出现相同的url，这里使用hash表键值的方式
				page_array[href] = 1;
			}
		});
		callback(page_array);
	});
}

function get_pages(url) {
	get_links(url, ".pageart a", "href", function(ret) {
		// 分别下载每一页的图片
		for (var item in ret) {
			ajax_html(item, get_images);
		}
	})
}



// 模拟保存图片
function save(src) {
	$("#cnt").html(cnt);
	//console.log(src);
	image_list[src] = 1;
}

function print_list() {
	if (image_list) {
		var html = "";
		for (var item in image_list) {
			html = html + item + "<br />";
		}
		$("#list").html(html);
	}
}


function mm131() {
	var start = 561,
		max = 1000; // 图册数
	var i_start = 1,
		i_max = 23;
	var base_url = "http://www.mm131.com/";
	for (var id = start; id <= max; id++) {
		for (var id_i = i_start; id_i <= i_max; id_i++) {
			var url = base_url + "xinggan/" + id + "_" + id_i + ".html";
			if (id_i == 1) {
				var url = base_url + "xinggan/" + id + ".html";
			}
			step1(url);
		}
	}
}


function step1(url) {
	ajax_html(url, step1_callback);
}

function step1_callback(ret) {
	// 这里对返回的html进行分析
	var html = "";
	var image = $(ret).find(".content-pic img");
	if (image.length > 0) {
		var src = image.attr("src");
		var node = "<a target='_blank' href='" + src + "' ><img src='" + src + "' />" + "</a>";
		$("#success").append(node);
	}

}

// 提交服务器的callback
function callback(ret) {

}

function ajax_html(url, callback) {
	$.ajax({
		url: url,
		dataType: "html",
		success: callback,
		error: function() {
			$("#error").append("url:" + url + "没有找到");
		}
	});
}

// 同步的请求
function ajax_sync(url, callback) {
	$.ajax({
		url: url,
		dataType: "html",
		aysnc: false,
		success: callback,
		error: function() {
			$("#error").append("url:" + url + "没有找到");
		}
	});
}