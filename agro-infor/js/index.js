// 按钮切换轮播
function sliderTabs(silderId,btnId,relationId) { //relationId为关联的轮播ID
	var silderId = $(silderId);	
	var btnId = $(btnId);
	var relationId = $(relationId);
	var slider = silderId.data('sliderPro');
	var newSlider = relationId.data('sliderPro');
	silderId.on("gotoSlide", function(event) {
		btnId.find("li:eq("+event.index+")")
		.addClass("active")
		.siblings()
		.removeClass("active");		
	})
	btnId.find("li").each(function(i){
		$(this).mouseover(function(){			
			slidePause(silderId);
			slider.gotoSlide(i);
			newSlider.gotoSlide(i);	
		}).mouseout(function(){
			slidePlay(silderId);
			nextSlide(silderId);
			nextSlide(relationId);			
		});
	})
}
//初始化幻灯片自动播放
function slidePlay(id) {
	var id = $(id);
	id.sliderPro({
		autoplay: true
	});
}
//初始化幻灯片暂停自动播放
function slidePause(id) {
	var id = $(id);
	id.sliderPro({
		autoplay: false
	});
}
//初始化幻灯片播放下一个
function nextSlide(id) {
	var id = $(id);
	var slider = id.data('sliderPro');
	slider.nextSlide();
}
// Tabs标签页
(function($) {
	$.fn.tabs = function() {
		var opts = {
			switchingMode: "click"  // or "moveover"---通过鼠标事件切换tabs
		};
		var obj = $(this);
		var clickIndex = 0;
		obj.addClass("tabsDiv");
		$("ul:eq(0) li:first", obj).addClass("tabsSeletedLi");
		$("ul:eq(0) li", obj).not(":first").addClass("tabsUnSeletedLi");
		obj.children("div").not(":first").hide();
		$("ul:eq(0) li", obj).bind(opts.switchingMode,
			function() {
				if (clickIndex != $("ul:eq(0) li", obj).index($(this))) {
					clickIndex = $("ul:eq(0) li", obj).index($(this));
					$(".tabsSeletedLi", obj).removeClass("tabsSeletedLi").addClass("tabsUnSeletedLi");
					$(this).removeClass("tabsUnSeletedLi").addClass("tabsSeletedLi");
					var divid = $("a", $(this)).attr("href").substr(1);
					obj.children("div").hide();
					$("#" + divid, obj).show();
				};
			});
	};
})(jQuery);
//显示日期时间
function showLeftTime() {
	var date = new Date();
	document.all.show.innerHTML = date.Format("yyyy-MM-dd hh:mm");
	//一秒刷新一次显示时间
	var timeID = setTimeout(showLeftTime,1000);
}
// 日期时间格式化
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

//向上滚动
function topRun(id1,id2,id3){
	var area =document.getElementById(id1);
	var con1 = document.getElementById(id2);
	var con2 = document.getElementById(id3);
	con2.innerHTML=con1.innerHTML;
	if(area.scrollTop>=con1.offsetHeight){
		area.scrollTop=0;
	}else{
		area.scrollTop++;
	}
	var time = 50;
	var mytimer=setInterval(function(){
		if(area.scrollTop>=con1.offsetHeight){
			area.scrollTop=0;
		}else{
			area.scrollTop++;
		}
	},time);
	area.onmouseover=function(){
		clearInterval(mytimer);
	}
	area.onmouseout=function(){
		mytimer=setInterval(function(){
			if(area.scrollTop>=con1.offsetHeight){
				area.scrollTop=0;
			}else{
				area.scrollTop++
			}
		},time);
	}
}