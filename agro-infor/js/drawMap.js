/**
 * Created by Administrator on 2017/12/21.
 */
//    //地图map图表
var convertobj = function (data) {
    var res = [];
    for (var i=0;i<obj_areacode.length;i++) {
        res.push({
            name: obj_areaname[i],
            value:data[i]
        });
    }
    return res;
};

function trim(str)
{
    return str.replace(/(^\s*)|(\s*$)/g, '');
}

$.ajax({
    url: 'json/getSyjBYLbArea.jsp',
    dataType: 'text',
    success: function(data){
        var r = trim(data);
        var areacode;
        var areaname;
        var freshMushroom_yeild;
        var PMushroom_yeild;
        var XMushroom_yeild;
        var Bfungus_yeild;
        var JMushroom_yeild;
        var ZMushroom_yeild;
        if(r.indexOf(";")>-1){
            var obj = r.split(";");
            areacode = obj[0];
            areaname = obj[1];
            freshMushroom_yeild = obj[2];
            PMushroom_yeild = obj[3];
            XMushroom_yeild = obj[4];
            Bfungus_yeild = obj[5];
            JMushroom_yeild = obj[6];
            ZMushroom_yeild = obj[7];

            if(areacode.indexOf(",")>-1){
                obj_areacode = areacode.split(",");
                obj_areaname = areaname.split(",");
                obj_freshMushroom_yeild = freshMushroom_yeild.split(",");
                obj_PMushroom_yeild = PMushroom_yeild.split(",");
                obj_XMushroom_yeild = XMushroom_yeild.split(",");
                obj_Bfungus_yeild = Bfungus_yeild.split(",");
                obj_JMushroom_yeild = JMushroom_yeild.split(",");
                obj_ZMushroom_yeild = ZMushroom_yeild.split(",");

                set5a(convertobj(obj_freshMushroom_yeild),0,'image://images/1.png');
				
            }
        }
    }
});

var geoCoordMap = {
    '杭州市':[120.1617445782,30.2799186759],
    '宁波市':[121.5566711543,29.8802067266],
    '温州市':[120.7058617854,28.0011792279],
    '嘉兴市':[120.7620906437,30.7507790550],
    '湖州市':[120.0945421259,30.8991516650],
    '绍兴市':[120.5866519669,30.0365765554],
    '金华市':[119.6540443421,29.0843844893],
    '衢州市':[118.8807607480,28.9416669736],
    '舟山市':[122.2143554021,29.9910417000],
    '台州市':[121.4269892324,28.6623650056],
    '丽水市':[119.9295021732,28.4729569543]
};
//地图以及地图上的图片
function set5a(obj,index,imageUrl){
    var max=0;
    var min=0;
    var maxSize4Pin=0;
    var minSize4Pin=0;
    var backsize=0;
    var imgstr="";
    if(index==0){
        max = 480;
        min = 7;
        maxSize4Pin = 20.5;
        minSize4Pin = 20;
        backsize = 700;
        imgstr="mg";
    }else if(index==1){
	     max = 480;
	     min = 7;
	     maxSize4Pin = 20.5;
        minSize4Pin = 20;
        backsize = 700;
	     imgstr="pg";
     }else if(index==2){
	     max = 480;
	     min = 7;
	     maxSize4Pin = 20.5;
        minSize4Pin = 20;
        backsize = 700;
	     imgstr="xg";
     }else if(index==3){
	     max = 480;
	     min = 7;
	     maxSize4Pin = 20.5;
        minSize4Pin = 20;
        backsize = 700;
	     imgstr="me";
     }else if(index==4){
	     max = 480;
	     min = 7;
	     maxSize4Pin = 20.5;
        minSize4Pin = 20;
        backsize = 700;
	     imgstr="jzg";
     }else if(index==5){
        max = 480;
        min = 7;
        maxSize4Pin = 20.5;
        minSize4Pin = 20;
        backsize = 700;
        imgstr="xzg";
    }else if(index==6){
        max = 480;
        min = 7;
        maxSize4Pin = 20.5;
        minSize4Pin = 20;
        backsize = 700;
        imgstr="xzg";
    }else if(index==7){
        max = 480;
        min = 7;
        maxSize4Pin = 20.5;
        minSize4Pin = 20;
        backsize = 700;
        imgstr="xzg";
    }else if(index==8){
        max = 480;
        min = 7;
        maxSize4Pin = 20.5;
        minSize4Pin = 20;
        backsize = 700;
        imgstr="xzg";
    }

    var myChart5a = echarts.init(document.getElementById('main5a'));
	var myChart6a = echarts.init(document.getElementById('main6a'));
    var myChart7a = echarts.init(document.getElementById('main7a'));
    var myChart8a = echarts.init(document.getElementById('main8a'));
    var myChart9a = echarts.init(document.getElementById('main9a'));
    var myChart10a = echarts.init(document.getElementById('main10a'));
    var myChart11a = echarts.init(document.getElementById('main11a'));
    var myChart12a = echarts.init(document.getElementById('main12a'));
    var myChart13a = echarts.init(document.getElementById('main13a'));
    var uploadedDataURL = "json/zhejiang.json";
    //myChart5a.showLoading();
    $.getJSON(uploadedDataURL, function(geoJson) {
        echarts.registerMap('zhejiang', geoJson);
        myChart5a.hideLoading();
        var data = obj;

        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
               // console.log(data[i].name);
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
//                    else {
//                        res.push({
//                            name:'嘉兴市',
//                            value: geoCoord.concat([120.7620906437,30.7507790550])
//                        })
//                    }

            }
            return res;
        };
	
        option5a = {
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    if(typeof(params.value)[2] == "undefined"){
                        return params.name + ' : ' + params.value;
                    }else{
                        return params.name + ' : ' + params.value[2];
                    }
                }
            },

            visualMap: {
                show: false,
                min: 0,
                max: 500,
                left: 'left',
                top: 'bottom',
                text: ['高', '低'], // 文本，默认为数值文本
                calculable: false,
                seriesIndex: [1],
                inRange: {
                    color: ['#0f7294',  '#0f7294','#10284a',] // 黑紫黑
                }
            },
            geo: {
                show: true,
                map: 'zhejiang',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false
                    }
                },
                roam:false,//禁止缩放，拖移
                itemStyle: {
                    normal: {
                        areaColor: '#1a3e5f',//修改的整体颜色
                        borderColor: '#f4f4f5',//修改的区域沿线颜色
                    },
                    emphasis: {
                        areaColor: '#2B91B7',//鼠标移上去的颜色
                        color:'black'
                    }
                }
            },
            series : [
                {
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData(data),
                    roam:false,
                    symbolSize: function (val) {
                        return val[2] / backsize;
                    },
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#fff'
                        },
                        emphasis: {
                            show: false
                        }
                    }
                },
                {
                    type: 'map',
                    map: 'zhejiang',
                    geoIndex: 0,
                    aspectScale: 0.75, //长宽比
                    showLegendSymbol: false, // 存在legend时显示
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    roam: false,
                    itemStyle: {
                        normal: {
                            areaColor: '#031525',
                            borderColor: '#3B5077'
                        },
                        emphasis: {
                            areaColor: '#2B91B7'
                        }
                    },
                    animation: false,
                    data: data
                },
                {
                    name: '点',
                    type: 'scatter',//散点图，气泡图
                    coordinateSystem: 'geo',
                    //symbol: 'image://images/1.png',
                   	symbol:imageUrl,
                    symbolSize: function (val) {
                        var a = (maxSize4Pin - minSize4Pin) / (max - min);
                        var b = minSize4Pin - a*min;
                        b = maxSize4Pin - a*max;
                        return a*val[2]+b;
                    },
                    label: {
                        normal: {
                            show: false,
                            textStyle: {
                                color: '#fff',
                                fontSize: backsize
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            //color: 'black', //标志颜色//修改的颜色
                        }
                    },
                    zlevel: 6,
                    data: convertData(data),
                },
                {
                    name: 'Top 5',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(data.sort(function (a, b) {
                        return b.value - a.value;
                    }).slice(0, 5)),
                    symbolSize: function (val) {
                        return val[2] / backsize;
                    },
                    // showEffectOn: 'render',
                    rippleEffect: {     //显示的放射线
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,                   
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'white',
                            shadowBlur: 10,
                            shadowColor: 'white'
                        }
                    },
                    zlevel: 0
                },
            ]
        };
        myChart5a.setOption(option5a);
        myChart6a.setOption(option5a);
        myChart7a.setOption(option5a);
        myChart8a.setOption(option5a);
        myChart9a.setOption(option5a);
        myChart10a.setOption(option5a);
        myChart11a.setOption(option5a);
        myChart12a.setOption(option5a);
        myChart13a.setOption(option5a);
    });
}
$(' .zl li').click(function(){
    var index=$(this).index();
    /* $('.map .ect').hide();
     $('.map .ect').eq(index).show(); */
    settopsj(index);
    if(index==0){
        set5a(convertobj(obj_freshMushroom_yeild),index);
    }else if(index==1){
        set5a(convertobj(obj_PMushroom_yeild),index);
    }else if(index==2){
        set5a(convertobj(obj_XMushroom_yeild),index);
    }else if(index==3){
        set5a(convertobj(obj_Bfungus_yeild),index);
    }else if(index==4){
        set5a(convertobj(obj_JMushroom_yeild),index);
    }else if(index==5){
        set5a(convertobj(obj_ZMushroom_yeild),index);
    }
});
function settopsj(index){
    var ordstr = "";
    if(index==0){
        ordstr="freshMushroom_conver desc";
    }else if(index==1){
        ordstr="PMushroom_conver desc";
    }else if(index==2){
        ordstr="XMushroom_conver desc";
    }else if(index==3){
        ordstr="Bfungus_conver desc";
    }else if(index==4){
        ordstr="JMushroom_conver desc";
    }else if(index==5){
        ordstr="ZMushroom_conver desc";
    }
    $.ajax({
        url: 'json/getSyjBYLbArea.jsp',
        //data : "&year=" + year+"&areabh=33&topnum=3&ordstr="+ordstr+"&arealen==4&a="+Math.random(),
        dataType: 'text',
        success: function(data){
            var r = trim(data);
            var areacode;
            var areaname;
            var freshMushroom_conver;
            var PMushroom_conver;
            var XMushroom_conver;
            var Bfungus_conver;
            var JMushroom_conver;
            var ZMushroom_conver;
            if(r.indexOf(";")>-1){
                var obj = r.split(";");
                areacode = obj[0];
                areaname = obj[1];
                freshMushroom_conver = obj[2];
                PMushroom_conver = obj[3];
                XMushroom_conver = obj[4];
                Bfungus_conver = obj[5];
                JMushroom_conver = obj[6];
                ZMushroom_conver = obj[7];

                if(areacode.indexOf(",")>-1){
                    var obj_areacode1 = areacode.split(",");
                    var obj_areaname1 = areaname.split(",");
                    var obj_freshMushroom_conver1 = freshMushroom_conver.split(",");
                    var obj_PMushroom_conver1 = PMushroom_conver.split(",");
                    var obj_XMushroom_conver1 = XMushroom_conver.split(",");
                    var obj_Bfungus_conver1 = Bfungus_conver.split(",");
                    var obj_JMushroom_conver1 = JMushroom_conver.split(",");
                    var obj_ZMushroom_conver1 = ZMushroom_conver.split(",");

//                        document.getElementById("topdq1").innerHTML=obj_areaname1[0];
//                        document.getElementById("topdq2").innerHTML=obj_areaname1[1];
//                        document.getElementById("topdq3").innerHTML=obj_areaname1[2];
//                        if(index==0){
//                            document.getElementById("topcl1").innerHTML=obj_freshMushroom_conver1[0];
//                            document.getElementById("topcl2").innerHTML=obj_freshMushroom_conver1[1];
//                            document.getElementById("topcl3").innerHTML=obj_freshMushroom_conver1[2];
//                        }else if(index==1){
//                            document.getElementById("topcl1").innerHTML=obj_PMushroom_conver1[0];
//                            document.getElementById("topcl2").innerHTML=obj_PMushroom_conver1[1];
//                            document.getElementById("topcl3").innerHTML=obj_PMushroom_conver1[2];
//                        }else if(index==2){
//                            document.getElementById("topcl1").innerHTML=obj_XMushroom_conver1[0];
//                            document.getElementById("topcl2").innerHTML=obj_XMushroom_conver1[1];
//                            document.getElementById("topcl3").innerHTML=obj_XMushroom_conver1[2];
//                        }else if(index==3){
//                            document.getElementById("topcl1").innerHTML=obj_Bfungus_conver1[0];
//                            document.getElementById("topcl2").innerHTML=obj_Bfungus_conver1[1];
//                            document.getElementById("topcl3").innerHTML=obj_Bfungus_conver1[2];
//                        }else if(index==4){
//                            document.getElementById("topcl1").innerHTML=obj_JMushroom_conver1[0];
//                            document.getElementById("topcl2").innerHTML=obj_JMushroom_conver1[1];
//                            document.getElementById("topcl3").innerHTML=obj_JMushroom_conver1[2];
//                        }else if(index==5){
//                            document.getElementById("topcl1").innerHTML=obj_ZMushroom_conver1[0];
//                            document.getElementById("topcl2").innerHTML=obj_ZMushroom_conver1[1];
//                            document.getElementById("topcl3").innerHTML=obj_ZMushroom_conver1[2];
//                        }
//                        /* $("#topcl1div").css("width", (Number($("#topcl1").html()) / 500 * 215));
//                         $("#topcl2div").css("width", (Number($("#topcl2").html()) / 500 * 215));
//                         $("#topcl3div").css("width", (Number($("#topcl3").html()) / 500 * 215)); */
//                        $("#topcl1div").css("width", 200);
//                        $("#topcl2div").css("width", 120);
//                        $("#topcl3div").css("width", 70);
                }
            }
        }
    });
}
var drawPie = {
    draw:function (id1,id2,id3,id4,id5,id6,id7,id8,id9,id10,id11,data1,data2,data3,data4,data5,data6,data7,data8,data9,data10,data11) {
       this.wenzhou = function (id1,data1) {
           drawPie.common(id1,data1);
           return this;
       };
       this.hangzhou = function (id2,data2) {
           drawPie.common(id2,data2);
           return this;
       };
        this.ningbo = function (id3,data3) {
            drawPie.common(id3,data3);
            return this;
        };
        this.taizhou = function (id4,data4) {
            drawPie.common(id4,data4);
            return this;
        };
        this.lishui = function (id5,data5) {
            drawPie.common(id5,data5);
            return this;
        };
        this.quzhou = function (id6,data6) {
            drawPie.common(id6,data6);
            return this;
        };
        this.jinhua = function (id7,data7) {
            drawPie.common(id7,data7);
            return this;
        };
        this.shaoxing = function (id8,data8) {
            drawPie.common(id8,data8);
            return this;
        };
        this.huzhou = function (id9,data9) {
            drawPie.common(id9,data9);
            return this;
        };
        this.jiaxing = function (id10,data10) {
            drawPie.common(id10,data10);
            return this;
        };
        this.zhoushan = function (id11,data11) {
            drawPie.common(id11,data11);
            return this;
        };
       this.wenzhou(id1,data1).hangzhou(id2,data2).ningbo(id3,data3).taizhou(id4,data4).lishui(id5,data5).quzhou(id6,data6).jinhua(id7,data7).shaoxing(id8,data8).huzhou(id9,data9).jiaxing(id10,data10).zhoushan(id11,data11);
    },
    common:function (id,data) {
        var echartsPie = echarts.init(document.getElementById(id));
        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{b}: {c} ({d}%)",
            },
            color:['#b9df84','#9dc5d3'],
            series: [
                {
                    name:'产量',
                    type:'pie',
                    radius: ['85%', '100%'],
                    avoidLabelOverlap: false,
                    hoverAnimation:false,
                    label: {
                        normal: {
                            show: true,// 显示环形图文字
                            position: 'center',
                            textStyle: {
                                fontSize: '12',
                                color:'white'
                            },
                            formatter: "{c}%" // 可以让饼图中央的数据换行
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:data
                }
            ]
        };
        echartsPie.setOption(option);
    }
};
drawPie.draw('wz1','hz1','nb1','tz1','ls1','qz1','jh1','sx1','huz1','jx1','zs1',[{value:22, name:'粮食'},{value:78, name:'剩余产量'}],[{value:22, name:'粮食'},{value:78, name:'剩余产量'}],[{value:22, name:'粮食'},{value:78, name:'剩余产量'}],[{value:22, name:'粮食'},{value:78, name:'剩余产量'}],[{value:22, name:'粮食'},{value:78, name:'剩余产量'}],[{value:22, name:'粮食'},{value:78, name:'剩余产量'}],[{value:22, name:'粮食'},{value:78, name:'剩余产量'}],[{value:22, name:'粮食'},{value:78, name:'剩余产量'}],[{value:22, name:'粮食'}, {value:78, name:'剩余产量'}],[{value:22, name:'粮食'},{value:78, name:'剩余产量'}],[{value:22, name:'粮食'},{value:78, name:'剩余产量'}]);
function tabs1(){
	$("#tabsTitle li").eq(4).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});$("#tabsTitle li").eq(5).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});$("#tabsTitle li").eq(6).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});$("#tabsTitle li").eq(7).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});$("#tabsTitle li").eq(8).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		})
}
function tabs2(){
	$("#tabsTitle li").eq(0).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62;"
		});$("#tabsTitle li").eq(1).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});$("#tabsTitle li").eq(2).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});$("#tabsTitle li").eq(3).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});
}
$("#mapBtn>li").on("click",function(){
	$index=$(this).index()	
	$(this).css({
		"background": 'url("./images/circle.png") no-repeat',
		'background-position':' 0 11px',
		'color': '#00d3ff'
	}).siblings().css({
		"background": '#1a1948',
		'background-position':' 0 11px',
		'color': '#fff'
	})	
	if($index==0){	
		
		$.ajax({
			type:'get',
			url:'json/index.json',
			dataType:'json',
			success:function(data){
				drawPie.draw('wz1','hz1','nb1','tz1','ls1','qz1','jh1','sx1','huz1','jx1','zs1',data.rows[0].value,data.rows[1].value,data.rows[2].value,data.rows[3].value,data.rows[4].value,data.rows[5].value,data.rows[6].value,data.rows[7].value,data.rows[8].value,data.rows[9].value,data.rows[10].value,)		
			}
		})		
		set5a(convertobj(obj_freshMushroom_yeild),0,'image://images/1.png');
		$("#liangsh").show().next().hide()
		$("#tabsCy #lsh").show().next().hide()
		//地图下面的tab菜单
		$("#lsh").show();
		$("#chaye").hide();$("#shiyjun").hide();$("#huahui").hide();$("#shucai").hide();$("#zhongycai").hide();$("#shuiguo").hide();$("#sangc").hide();$("#xumu").hide();
		
		$("#tabsTitle li").eq(0).css({
			"background": "#0d8aa7",
			"cursor": "default",
			"border": "solid 1px #0d8aa7"
		});$("#tabsTitle li").eq(1).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});$("#tabsTitle li").eq(2).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});$("#tabsTitle li").eq(3).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});
		tabs1();
	}else if($index==1){
		set5a(convertobj(obj_freshMushroom_yeild),1,'image://images/2.png');
		$.ajax({
			type:'get',
			url:'json/index.json',
			dataType:'json',
			success:function(data){
				drawPie.draw('wz2','hz2','nb2','tz2','ls2','qz2','jh2','sx2','huz2','jx2','zs2',data.rows2[0].value,data.rows2[1].value,data.rows2[2].value,data.rows2[3].value,data.rows2[4].value,data.rows2[5].value,data.rows2[6].value,data.rows2[7].value,data.rows2[8].value,data.rows2[9].value,data.rows2[10].value,)				
			}
		})
		
		$("#chay").show().next().hide();
		$("#liangsh").hide();
		//地图下面的tab菜单
		$("#chaye").show();
		$("#lsh").hide();$("#huahui").hide();$("#shiyjun").hide();$("#shucai").hide();$("#zhongycai").hide();$("#shuiguo").hide();$("#sangc").hide();$("#xumu").hide();
		$("#tabsTitle li").eq(1).css({
			"background": "#0d8aa7",
			"cursor": "default",
			"border": "solid 1px #0d8aa7"
		});$("#tabsTitle li").eq(0).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});$("#tabsTitle li").eq(2).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});$("#tabsTitle li").eq(3).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});
		tabs1();
	}else if($index==2){
		$.ajax({
			type:'get',
			url:'json/index.json',
			dataType:'json',
			success:function(data){
				drawPie.draw('wz3','hz3','nb3','tz3','ls3','qz3','jh3','sx3','huz3','jx3','zs3',data.rows3[0].value,data.rows3[1].value,data.rows3[2].value,data.rows3[3].value,data.rows3[4].value,data.rows3[5].value,data.rows3[6].value,data.rows3[7].value,data.rows3[8].value,data.rows3[9].value,data.rows3[10].value,)				
			}
		})
		set5a(convertobj(obj_freshMushroom_yeild),2,'image://images/3.png');
		$("#syjun").show().next().hide();		
		$("#liangsh").hide();
		$("#chay").hide();		
		//地图下面的tab菜单
		$("#shiyjun").show();
		$("#lsh").hide();$("#chaye").hide();$("#huahui").hide();$("#shucai").hide();$("#zhongycai").hide();$("#shuiguo").hide();$("#sangc").hide();$("#xumu").hide();
		$("#tabsTitle li").eq(2).css({
			"background": "#0d8aa7",
			"cursor": "default",
			"border": "solid 1px #0d8aa7"
		});$("#tabsTitle li").eq(0).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});$("#tabsTitle li").eq(1).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});$("#tabsTitle li").eq(3).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});
		tabs1();
	}else if($index==3){
		$.ajax({
			type:'get',
			url:'json/index.json',
			dataType:'json',
			success:function(data){
				drawPie.draw('wz4','hz4','nb4','tz4','ls4','qz4','jh4','sx4','huz4','jx4','zs4',data.rows4[0].value,data.rows4[1].value,data.rows4[2].value,data.rows4[3].value,data.rows4[4].value,data.rows4[5].value,data.rows4[6].value,data.rows4[7].value,data.rows4[8].value,data.rows4[9].value,data.rows4[10].value,)				
			}
		})
		set5a(convertobj(obj_freshMushroom_yeild),3,'image://images/4.png');
		$("#huah").show().next().hide();		
		$("#liangsh").hide();$("#chay").hide();$("#syjun").hide();
		//地图下面的tab菜单
		$("#huahui").show();	
		$("#lsh").hide();$("#chaye").hide();$("#shiyjun").hide();$("#shucai").hide();$("#zhongycai").hide();$("#shuiguo").hide();$("#sangc").hide();$("#xumu").hide();		
		$("#tabsTitle li").eq(3).css({
			"background": "#0d8aa7",
			"cursor": "default",
			"border": "solid 1px #0d8aa7"
		});$("#tabsTitle li").eq(0).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});$("#tabsTitle li").eq(1).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});$("#tabsTitle li").eq(2).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});tabs1();
	}else if($index==4){
		$.ajax({
			type:'get',
			url:'json/index.json',
			dataType:'json',
			success:function(data){
				drawPie.draw('wz5','hz5','nb5','tz5','ls5','qz5','jh5','sx5','huz5','jx5','zs5',data.rows5[0].value,data.rows5[1].value,data.rows5[2].value,data.rows5[3].value,data.rows5[4].value,data.rows5[5].value,data.rows5[6].value,data.rows5[7].value,data.rows5[8].value,data.rows5[9].value,data.rows5[10].value,)				
			}
		})
		set5a(convertobj(obj_freshMushroom_yeild),4,'image://images/5.png');
		$("#shuc").show().next().hide();		
		$("#liangsh").hide();$("#chay").hide();$("#syjun").hide();$("#huah").hide();
		//地图下面的tab菜单
		$("#shucai").show();
		$("#lsh").hide();$("#chaye").hide();$("#shiyjun").hide();$("#huahui").hide();$("#zhongycai").hide();$("#shuiguo").hide();$("#sangc").hide();$("#xumu").hide();		
		$("#tabsTitle li").eq(4).css({
			"background": "#0d8aa7",
			"cursor": "default",
			"border": "solid 1px #0d8aa7"
		});
		tabs2();
		$("#tabsTitle li").eq(5).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});$("#tabsTitle li").eq(6).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});$("#tabsTitle li").eq(7).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});$("#tabsTitle li").eq(8).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		})
	}else if($index==5){
		set5a(convertobj(obj_freshMushroom_yeild),5,'image://images/6.png');
		$.ajax({
			type:'get',
			url:'json/index.json',
			dataType:'json',
			success:function(data){
				drawPie.draw('wz6','hz6','nb6','tz6','ls6','qz6','jh6','sx6','huz6','jx6','zs6',data.rows6[0].value,data.rows6[1].value,data.rows6[2].value,data.rows6[3].value,data.rows6[4].value,data.rows6[5].value,data.rows6[6].value,data.rows6[7].value,data.rows6[8].value,data.rows6[9].value,data.rows6[10].value,)				
			}
		})
		
		$("#zhongyc").show().next().hide();		
		$("#liangsh").hide();$("#chay").hide();$("#syjun").hide();$("#shuc").hide();$("#huah").hide();
		//地图下面的tab菜单
		$("#zhongycai").show();
		$("#lsh").hide();$("#chaye").hide();$("#shiyjun").hide();$("#huahui").hide();$("#shucai").hide();$("#shuiguo").hide();$("#sangc").hide();$("#xumu").hide();		
		$("#tabsTitle li").eq(5).css({
			"background": "#0d8aa7",
			"cursor": "default",
			"border": "solid 1px #0d8aa7"
		});
		tabs2();
		$("#tabsTitle li").eq(4).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});$("#tabsTitle li").eq(6).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});$("#tabsTitle li").eq(7).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});$("#tabsTitle li").eq(8).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		})
	}else if($index==6){
		$.ajax({
			type:'get',
			url:'json/index.json',
			dataType:'json',
			success:function(data){
				drawPie.draw('wz7','hz7','nb7','tz7','ls7','qz7','jh7','sx7','huz7','jx7','zs7',data.rows7[0].value,data.rows7[1].value,data.rows7[2].value,data.rows7[3].value,data.rows7[4].value,data.rows7[5].value,data.rows7[6].value,data.rows7[7].value,data.rows7[8].value,data.rows7[9].value,data.rows7[10].value,)				
			}
		})
		set5a(convertobj(obj_freshMushroom_yeild),6,'image://images/7.png');
		$("#shuig").show().next().hide();	;		
		$("#liangsh").hide();$("#chay").hide();$("#syjun").hide();$("#shuc").hide();$("#huah").hide();$("#zhongyc").hide();$("#cans").hide();$("#xum").hide();
		//地图下面的tab菜单
		$("#shuiguo").show();
		$("#lsh").hide();$("#chaye").hide();$("#shiyjun").hide();$("#huahui").hide();$("#shucai").hide();$("#zhongycai").hide();$("#sangc").hide();$("#xumu").hide();		
		$("#tabsTitle li").eq(6).css({
			"background": "#0d8aa7",
			"cursor": "default",
			"border": "solid 1px #0d8aa7"
		});
		tabs2()
		;$("#tabsTitle li").eq(4).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});$("#tabsTitle li").eq(5).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});$("#tabsTitle li").eq(7).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});$("#tabsTitle li").eq(8).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		})
	}else if($index==7){
		$.ajax({
			type:'get',
			url:'json/index.json',
			dataType:'json',
			success:function(data){
				drawPie.draw('wz8','hz8','nb8','tz8','ls8','qz8','jh8','sx8','huz8','jx8','zs8',data.rows8[0].value,data.rows8[1].value,data.rows8[2].value,data.rows8[3].value,data.rows8[4].value,data.rows8[5].value,data.rows8[6].value,data.rows8[7].value,data.rows8[8].value,data.rows8[9].value,data.rows8[10].value,)				
			}
		})
		set5a(convertobj(obj_freshMushroom_yeild),7,'image://images/8.png');
		$("#cans").show().next().hide();		
		$("#liangsh").hide();$("#chay").hide();$("#syjun").hide();$("#shuc").hide();$("#huah").hide();$("#zhongyc").hide();$("#shuig").hide();//$("#xum").hide();
		//地图下面的tab菜单
		$("#sangc").show();
		$("#lsh").hide();$("#chaye").hide();$("#shiyjun").hide();$("#huahui").hide();$("#shucai").hide();$("#zhongycai").hide();$("#shuiguo").hide();$("#xumu").hide();		
		$("#tabsTitle li").eq(7).css({
			"background": "#0d8aa7",
			"cursor": "default",
			"border": "solid 1px #0d8aa7"
		});
		tabs2()
		;$("#tabsTitle li").eq(4).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});$("#tabsTitle li").eq(5).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});$("#tabsTitle li").eq(6).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});$("#tabsTitle li").eq(8).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		})	
	}else if($index==8){
		$.ajax({
			type:'get',
			url:'json/index.json',
			dataType:'json',
			success:function(data){
				drawPie.draw('wz9','hz9','nb9','tz9','ls9','qz9','jh9','sx9','huz9','jx9','zs9',data.rows9[0].value,data.rows9[1].value,data.rows9[2].value,data.rows9[3].value,data.rows9[4].value,data.rows9[5].value,data.rows9[6].value,data.rows9[7].value,data.rows9[8].value,data.rows9[9].value,data.rows9[10].value,)				
			}
		})
		set5a(convertobj(obj_freshMushroom_yeild),8,'image://images/9.png');
		$("#xum").show();		
		$("#liangsh").hide();$("#chay").hide();$("#syjun").hide();$("#shuc").hide();$("#huah").hide();$("#zhongyc").hide();$("#shuig").hide();$("#cans").hide();
		//地图下面的tab菜单
		$("#xumu").show();
		$("#lsh").hide();$("#chaye").hide();$("#shiyjun").hide();$("#huahui").hide();$("#shucai").hide();$("#zhongycai").hide();$("#shuiguo").hide();$("#sangc").hide();		
		$("#tabsTitle li").eq(8).css({
			"background": "#0d8aa7",
			"cursor": "default",
			"border": "solid 1px #0d8aa7"
		});
		tabs2();
		$("#tabsTitle li").eq(4).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});$("#tabsTitle li").eq(5).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});$("#tabsTitle li").eq(6).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		});$("#tabsTitle li").eq(7).css({
			"background": '#171546',
			"cursor": "pointer",
			"border": "solid 1px #1f1c62"
		})
	}
})

//点击地图下面的关联地图

function tabs3(){
	$("#mapBtn li").eq(4).css({
		"background": '#1a1948',
		'background-position':' 0 11px',
		'color': '#fff'
	});$("#mapBtn li").eq(5).css({
		"background": '#1a1948',
		'background-position':' 0 11px',
		'color': '#fff'
	});$("#mapBtn li").eq(6).css({
		"background": '#1a1948',
		'background-position':' 0 11px',
		'color': '#fff'
	});$("#mapBtn li").eq(7).css({
		"background": '#1a1948',
		'background-position':' 0 11px',
		'color': '#fff'
	});$("#mapBtn li").eq(8).css({
		"background": '#1a1948',
		'background-position':' 0 11px',
		'color': '#fff'
	})
}
function tab4(){
	$("#mapBtn li").eq(0).css({
		"background": '#1a1948',
		'background-position':' 0 11px',
		'color': '#fff'
	});$("#mapBtn li").eq(1).css({
		"background": '#1a1948',
		'background-position':' 0 11px',
		'color': '#fff'
	});$("#mapBtn li").eq(2).css({
		"background": '#1a1948',
		'background-position':' 0 11px',
		'color': '#fff'
	});$("#mapBtn li").eq(3).css({
		"background": '#1a1948',
		'background-position':' 0 11px',
		'color': '#fff'
	});
}
$("#tabsTitle>li").on("click",function(){
	index=$(this).index();
	$(this).css({
		"border": "solid 1px #0d8aa7",
	    "background-color": "#0d8aa7",
	    "cursor": "default"
	}).siblings().css({
		"border": "solid 1px #1f1c62",
	    "background-color": "#171546",
	    "cursor": "pointer"
	})
	if(index==0){
		$("#lsh").show();
		$("#xumu").hide();$("#chaye").hide();$("#shiyjun").hide();$("#huahui").hide();$("#shucai").hide();$("#zhongycai").hide();$("#shuiguo").hide();$("#sangc").hide();		
		
		$.ajax({
			type:'get',
			url:'json/index.json',
			dataType:'json',
			success:function(data){
				drawPie.draw('wz1','hz1','nb1','tz1','ls1','qz1','jh1','sx1','huz1','jx1','zs1',data.rows[0].value,data.rows[1].value,data.rows[2].value,data.rows[3].value,data.rows[4].value,data.rows[5].value,data.rows[6].value,data.rows[7].value,data.rows[8].value,data.rows[9].value,data.rows[10].value,)		
				
			}
		})	
		set5a(convertobj(obj_freshMushroom_yeild),0,'image://images/1.png');
		$("#liangsh").show();
		$("#syjun").hide();$("#chay").hide();$("#huah").hide();$("#shuc").hide();$("#zhongyc").hide();$("#shuig").hide();$("#cans").hide();$("#xum").hide();		
		$("#mapBtn li").eq(0).css({
			"background": 'url("./images/circle.png") no-repeat',
			'background-position':' 0 11px',
			'color': '#00d3ff'
		})
		$("#mapBtn li").eq(1).css({
			"background": '#1a1948',
			'background-position':' 0 11px',
			'color': '#fff'
		});$("#mapBtn li").eq(2).css({
			"background": '#1a1948',
			'background-position':' 0 11px',
			'color': '#fff'
		});$("#mapBtn li").eq(3).css({
			"background": '#1a1948',
			'background-position':' 0 11px',
			'color': '#fff'
		});
		tabs3()
	}else if(index==1){
		$("#chaye").show().next().hide();
		$("#lsh").hide();$("#shiyjun").hide();$("#huahui").hide();$("#shucai").hide();$("#zhongycai").hide();$("#shuiguo").hide();$("#sangc").hide();$("#xumu").hide();
		
		$.ajax({
			type:'get',
			url:'json/index.json',
			dataType:'json',
			success:function(data){
				drawPie.draw('wz2','hz2','nb2','tz2','ls2','qz2','jh2','sx2','huz2','jx2','zs2',data.rows2[0].value,data.rows2[1].value,data.rows2[2].value,data.rows2[3].value,data.rows2[4].value,data.rows2[5].value,data.rows2[6].value,data.rows2[7].value,data.rows2[8].value,data.rows2[9].value,data.rows2[10].value,)				
			}
		})
		set5a(convertobj(obj_freshMushroom_yeild),1,'image://images/2.png');
		$("#chay").show();
		$("#liangsh").hide();$("#syjun").hide();$("#huah").hide();$("#shuc").hide();$("#zhongyc").hide();$("#shuig").hide();$("#cans").hide();$("#xum").hide();
		$("#mapBtn li").eq(1).css({
			"background": 'url("./images/circle.png") no-repeat',
			'background-position':' 0 11px',
			'color': '#00d3ff'
		})
		$("#mapBtn li").eq(0).css({
			"background": '#1a1948',
			'background-position':' 0 11px',
			'color': '#fff'
		});$("#mapBtn li").eq(2).css({
			"background": '#1a1948',
			'background-position':' 0 11px',
			'color': '#fff'
		});$("#mapBtn li").eq(3).css({
			"background": '#1a1948',
			'background-position':' 0 11px',
			'color': '#fff'
		});
		tabs3()
	}else if(index==2){
		$("#shiyjun").show().next().hide();
		$("#lsh").hide();$("#chaye").hide();$("#huahui").hide();$("#shucai").hide();$("#zhongycai").hide();$("#shuiguo").hide();$("#sangc").hide();$("#xumu").hide();
		//地图
		$.ajax({
			type:'get',
			url:'json/index.json',
			dataType:'json',
			success:function(data){
				drawPie.draw('wz3','hz3','nb3','tz3','ls3','qz3','jh3','sx3','huz3','jx3','zs3',data.rows3[0].value,data.rows3[1].value,data.rows3[2].value,data.rows3[3].value,data.rows3[4].value,data.rows3[5].value,data.rows3[6].value,data.rows3[7].value,data.rows3[8].value,data.rows3[9].value,data.rows3[10].value,)				
			}
		})
		set5a(convertobj(obj_freshMushroom_yeild),2,'image://images/3.png');
		$("#syjun").show();
		$("#liangsh").hide();$("#chay").hide();$("#huah").hide();$("#shuc").hide();$("#zhongyc").hide();$("#shuig").hide();$("#cans").hide();$("#xum").hide();
		$("#mapBtn li").eq(2).css({
			"background": 'url("./images/circle.png") no-repeat',
			'background-position':' 0 11px',
			'color': '#00d3ff'
		});$("#mapBtn li").eq(0).css({
			"background": '#1a1948',
			'background-position':' 0 11px',
			'color': '#fff'
		});$("#mapBtn li").eq(1).css({
			"background": '#1a1948',
			'background-position':' 0 11px',
			'color': '#fff'
		});$("#mapBtn li").eq(3).css({
			"background": '#1a1948',
			'background-position':' 0 11px',
			'color': '#fff'
		});
		tabs3()
	}else if(index==3){
		$("#huahui").show().next().hide();
		$("#lsh").hide();$("#chaye").hide();$("#shiyjun").hide();$("#shucai").hide();$("#zhongycai").hide();$("#shuiguo").hide();$("#sangc").hide();$("#xumu").hide();
		
		$.ajax({
			type:'get',
			url:'json/index.json',
			dataType:'json',
			success:function(data){
				drawPie.draw('wz4','hz4','nb4','tz4','ls4','qz4','jh4','sx4','huz4','jx4','zs4',data.rows4[0].value,data.rows4[1].value,data.rows4[2].value,data.rows4[3].value,data.rows4[4].value,data.rows4[5].value,data.rows4[6].value,data.rows4[7].value,data.rows4[8].value,data.rows4[9].value,data.rows4[10].value,)				
			}
		})
		set5a(convertobj(obj_freshMushroom_yeild),3,'image://images/4.png');
		$("#huah").show();
		$("#liangsh").hide();$("#chay").hide();$("#syjun").hide();$("#shuc").hide();$("#zhongyc").hide();$("#shuig").hide();$("#cans").hide();$("#xum").hide();
		$("#mapBtn li").eq(3).css({
			"background": 'url("./images/circle.png") no-repeat',
			'background-position':' 0 11px',
			'color': '#00d3ff'
		});$("#mapBtn li").eq(0).css({
			"background": '#1a1948',
			'background-position':' 0 11px',
			'color': '#fff'
		});$("#mapBtn li").eq(1).css({
			"background": '#1a1948',
			'background-position':' 0 11px',
			'color': '#fff'
		});$("#mapBtn li").eq(2).css({
			"background": '#1a1948',
			'background-position':' 0 11px',
			'color': '#fff'
		});
		tabs3()
	}else if(index==4){
		$("#shucai").show().next().hide();
		$("#lsh").hide();$("#chaye").hide();$("#shiyjun").hide();$("#huahui").hide();$("#zhongycai").hide();$("#shuiguo").hide();$("#sangc").hide();$("#xumu").hide();
		
		$.ajax({
			type:'get',
			url:'json/index.json',
			dataType:'json',
			success:function(data){
				drawPie.draw('wz5','hz5','nb5','tz5','ls5','qz5','jh5','sx5','huz5','jx5','zs5',data.rows5[0].value,data.rows5[1].value,data.rows5[2].value,data.rows5[3].value,data.rows5[4].value,data.rows5[5].value,data.rows5[6].value,data.rows5[7].value,data.rows5[8].value,data.rows5[9].value,data.rows5[10].value,)				
			}
		})
		set5a(convertobj(obj_freshMushroom_yeild),4,'image://images/5.png');
		$("#shuc").show();
		$("#liangsh").hide();$("#chay").hide();$("#syjun").hide();$("#huah").hide();$("#zhongyc").hide();$("#shuig").hide();$("#cans").hide();$("#xum").hide();
		$("#mapBtn li").eq(4).css({
			"background": 'url("./images/circle.png") no-repeat',
			'background-position':' 0 11px',
			'color': '#00d3ff'
		});
		tab4();
		$("#mapBtn li").eq(5).css({
			"background": '#1a1948',
			'background-position':' 0 11px',
			'color': '#fff'
		});$("#mapBtn li").eq(6).css({
			"background": '#1a1948',
			'background-position':' 0 11px',
			'color': '#fff'
		});$("#mapBtn li").eq(7).css({
			"background": '#1a1948',
			'background-position':' 0 11px',
			'color': '#fff'
		});$("#mapBtn li").eq(8).css({
			"background": '#1a1948',
			'background-position':' 0 11px',
			'color': '#fff'
		})
	}else if(index==5){
		$("#zhongycai").show().next().hide();
		$("#lsh").hide();$("#chaye").hide();$("#shiyjun").hide();$("#huahui").hide();$("#shucai").hide();$("#shuiguo").hide();$("#sangc").hide();$("#xumu").hide();
		
		$.ajax({
			type:'get',
			url:'json/index.json',
			dataType:'json',
			success:function(data){
				drawPie.draw('wz6','hz6','nb6','tz6','ls6','qz6','jh6','sx6','huz6','jx6','zs6',data.rows6[0].value,data.rows6[1].value,data.rows6[2].value,data.rows6[3].value,data.rows6[4].value,data.rows6[5].value,data.rows6[6].value,data.rows6[7].value,data.rows6[8].value,data.rows6[9].value,data.rows6[10].value,)				
			}
		})
		set5a(convertobj(obj_freshMushroom_yeild),5,'image://images/6.png');
		$("#zhongyc").show();
		$("#liangsh").hide();$("#chay").hide();$("#syjun").hide();$("#huah").hide();$("#shuc").hide();$("#shuig").hide();$("#cans").hide();$("#xum").hide();
		$("#mapBtn li").eq(5).css({
			"background": 'url("./images/circle.png") no-repeat',
			'background-position':' 0 11px',
			'color': '#00d3ff'
		});
		tab4();
		$("#mapBtn li").eq(4).css({
			"background": '#1a1948',
			'background-position':' 0 11px',
			'color': '#fff'
		});$("#mapBtn li").eq(6).css({
			"background": '#1a1948',
			'background-position':' 0 11px',
			'color': '#fff'
		});$("#mapBtn li").eq(7).css({
			"background": '#1a1948',
			'background-position':' 0 11px',
			'color': '#fff'
		});$("#mapBtn li").eq(8).css({
			"background": '#1a1948',
			'background-position':' 0 11px',
			'color': '#fff'
		})	
	}else if(index==6){
		$("#shuiguo").show().next().hide();
		$("#lsh").hide();$("#chaye").hide();$("#shiyjun").hide();$("#huahui").hide();$("#shucai").hide();$("#zhongycai").hide();$("#sangc").hide();$("#xumu").hide();
		
		$.ajax({
			type:'get',
			url:'json/index.json',
			dataType:'json',
			success:function(data){
				drawPie.draw('wz7','hz7','nb7','tz7','ls7','qz7','jh7','sx7','huz7','jx7','zs7',data.rows7[0].value,data.rows7[1].value,data.rows7[2].value,data.rows7[3].value,data.rows7[4].value,data.rows7[5].value,data.rows7[6].value,data.rows7[7].value,data.rows7[8].value,data.rows7[9].value,data.rows7[10].value,)				
			}
		})
		set5a(convertobj(obj_freshMushroom_yeild),6,'image://images/7.png');
		$("#shuig").show();
		$("#liangsh").hide();$("#chay").hide();$("#syjun").hide();$("#huah").hide();$("#shuc").hide();$("#zhongyc").hide();$("#cans").hide();$("#xum").hide();
		$("#mapBtn li").eq(6).css({
			"background": 'url("./images/circle.png") no-repeat',
			'background-position':' 0 11px',
			'color': '#00d3ff'
		});
		tab4();
		$("#mapBtn li").eq(4).css({
			"background": '#1a1948',
			'background-position':' 0 11px',
			'color': '#fff'
		});$("#mapBtn li").eq(5).css({
			"background": '#1a1948',
			'background-position':' 0 11px',
			'color': '#fff'
		});$("#mapBtn li").eq(7).css({
			"background": '#1a1948',
			'background-position':' 0 11px',
			'color': '#fff'
		});$("#mapBtn li").eq(8).css({
			"background": '#1a1948',
			'background-position':' 0 11px',
			'color': '#fff'
		})	
	}else if(index==7){
		$("#sangc").show().next().hide();
		$("#lsh").hide();$("#chaye").hide();$("#shiyjun").hide();$("#huahui").hide();$("#shucai").hide();$("#zhongycai").hide();$("#shuiguo").hide();$("#xumu").hide();
			
		$.ajax({
			type:'get',
			url:'json/index.json',
			dataType:'json',
			success:function(data){
				drawPie.draw('wz8','hz8','nb8','tz8','ls8','qz8','jh8','sx8','huz8','jx8','zs8',data.rows8[0].value,data.rows8[1].value,data.rows8[2].value,data.rows8[3].value,data.rows8[4].value,data.rows8[5].value,data.rows8[6].value,data.rows8[7].value,data.rows8[8].value,data.rows8[9].value,data.rows8[10].value,)				
			}
		})
		set5a(convertobj(obj_freshMushroom_yeild),7,'image://images/8.png');
		$("#cans").show();
		$("#liangsh").hide();$("#chay").hide();$("#syjun").hide();$("#huah").hide();$("#shuc").hide();$("#zhongyc").hide();$("#shuig").hide();$("#xum").hide()	
		$("#mapBtn li").eq(7).css({
			"background": 'url("./images/circle.png") no-repeat',
			'background-position':' 0 11px',
			'color': '#00d3ff'
		});
		tab4();
		$("#mapBtn li").eq(4).css({
			"background": '#1a1948',
			'background-position':' 0 11px',
			'color': '#fff'
		});$("#mapBtn li").eq(5).css({
			"background": '#1a1948',
			'background-position':' 0 11px',
			'color': '#fff'
		});$("#mapBtn li").eq(6).css({
			"background": '#1a1948',
			'background-position':' 0 11px',
			'color': '#fff'
		});$("#mapBtn li").eq(8).css({
			"background": '#1a1948',
			'background-position':' 0 11px',
			'color': '#fff'
		})		
	}else if(index==8){
		$("#xumu").show();
		$("#lsh").hide();$("#chaye").hide();$("#shiyjun").hide();$("#huahui").hide();$("#shucai").hide();$("#zhongycai").hide();$("#shuiguo").hide();$("#sangc").hide();
		
		$.ajax({
			type:'get',
			url:'json/index.json',
			dataType:'json',
			success:function(data){
				drawPie.draw('wz9','hz9','nb9','tz9','ls9','qz9','jh9','sx9','huz9','jx9','zs9',data.rows9[0].value,data.rows9[1].value,data.rows9[2].value,data.rows9[3].value,data.rows9[4].value,data.rows9[5].value,data.rows9[6].value,data.rows9[7].value,data.rows9[8].value,data.rows9[9].value,data.rows9[10].value,)				
			}
		})
		set5a(convertobj(obj_freshMushroom_yeild),8,'image://images/9.png');
		$("#xum").show();
		$("#liangsh").hide();$("#chay").hide();$("#syjun").hide();$("#huah").hide();$("#shuc").hide();$("#zhongyc").hide();$("#shuig").hide();$("#cans").hide()
		$("#mapBtn li").eq(8).css({
			"background": 'url("./images/circle.png") no-repeat',
			'background-position':' 0 11px',
			'color': '#00d3ff'
		});
		tab4();
		$("#mapBtn li").eq(4).css({
			"background": '#1a1948',
			'background-position':' 0 11px',
			'color': '#fff'
		});$("#mapBtn li").eq(5).css({
			"background": '#1a1948',
			'background-position':' 0 11px',
			'color': '#fff'
		});$("#mapBtn li").eq(6).css({
			"background": '#1a1948',
			'background-position':' 0 11px',
			'color': '#fff'
		});$("#mapBtn li").eq(7).css({
			"background": '#1a1948',
			'background-position':' 0 11px',
			'color': '#fff'
		})		
	}
})

