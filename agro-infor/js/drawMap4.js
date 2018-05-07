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
    url: 'json/getSyjBYLbArea.json',
    dataType: 'json',
    success: function(data){
        data = data.rows.value;
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
                
				set5a(convertobj(obj_freshMushroom_yeild),0,'xmjgmap-lt1');
				set5a(convertobj(obj_freshMushroom_yeild),0,'xmjgmap-lt2');
				set5a(convertobj(obj_freshMushroom_yeild),0,'xmjgmap-lt3');
				set5a(convertobj(obj_freshMushroom_yeild),0,'xmjgmap-lt4');
				set5a(convertobj(obj_freshMushroom_yeild),0,'xmjgmap-lt5');
				
				
				set5a(convertobj(obj_freshMushroom_yeild),0,'xmjgmap3');
				set5a(convertobj(obj_freshMushroom_yeild),0,'xmjgmap32');
				set5a(convertobj(obj_freshMushroom_yeild),0,'xmjgmap33');
				set5a(convertobj(obj_freshMushroom_yeild),0,'xmjgmap34');
				set5a(convertobj(obj_freshMushroom_yeild),0,'xmjgmap35');
               // set5a(convertobj(obj_freshMushroom_yeild),0,'xmjgmap4');
				//点击切换地图
				$("#tabsFull>ul>li").on("click",function(){

					var $index = $(this).index();
                   
					if($index==1){
						set5a(convertobj(obj_freshMushroom_yeild),0,'xmjgmap-lt1');
						set5a(convertobj(obj_freshMushroom_yeild),0,'xmjgmap-lt2');
						set5a(convertobj(obj_freshMushroom_yeild),0,'xmjgmap-lt3');
						set5a(convertobj(obj_freshMushroom_yeild),0,'xmjgmap-lt4');
						set5a(convertobj(obj_freshMushroom_yeild),0,'xmjgmap-lt5');
					}else if($index==2){
						set5a(convertobj(obj_freshMushroom_yeild),0,'xmjgmap3');
						set5a(convertobj(obj_freshMushroom_yeild),0,'xmjgmap32');
						set5a(convertobj(obj_freshMushroom_yeild),0,'xmjgmap33');
						set5a(convertobj(obj_freshMushroom_yeild),0,'xmjgmap34');
						set5a(convertobj(obj_freshMushroom_yeild),0,'xmjgmap35');
					}else if($index==3){
						set5a(convertobj(obj_freshMushroom_yeild),0,'xmjgmap4');
						set5a(convertobj(obj_freshMushroom_yeild),0,'xmjgmap42');
						set5a(convertobj(obj_freshMushroom_yeild),0,'xmjgmap43');
						set5a(convertobj(obj_freshMushroom_yeild),0,'xmjgmap44');
						set5a(convertobj(obj_freshMushroom_yeild),0,'xmjgmap45');
					}
					//$("#tabsMap>div").eq($index).show().siblings("div").hide();
					//console.log($("#tabsMap>div").eq($index).find("li").eq(0));
					//var $id = $("#tabsMap>div").eq($index).children("div").find("li").eq(0).find("div").attr("id")
					//set5a(convertobj(obj_freshMushroom_yeild),0,$id);
				})
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

function set5a(obj,index,id){
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
    }/*else if(index==1){
     max = 480;
     min = 7;
     maxSize4Pin = 27;
     minSize4Pin = 20;
     backsize = 60;
     imgstr="pg";
     }else if(index==2){
     max = 480;
     min = 7;
     maxSize4Pin = 20.12;
     minSize4Pin = 20;
     backsize = 4000;
     imgstr="xg";
     }else if(index==3){
     max = 480;
     min = 7;
     maxSize4Pin = 20.18;
     minSize4Pin = 20;
     backsize = 2500;
     imgstr="me";
     }else if(index==4){
     max = 480;
     min = 7;
     maxSize4Pin = 20.5;
     minSize4Pin = 20;
     backsize = 1000;
     imgstr="jzg";
     }*/
    else if(index==5){
        max = 480;
        min = 7;
        maxSize4Pin = 21;
        minSize4Pin = 20;
        backsize = 500;
        imgstr="xzg";
    }

    var myChart5a = echarts.init(document.getElementById(id));
    
    
    
    var uploadedDataURL = "json/zhejiang.json";
    //myChart5a.showLoading();
    $.getJSON(uploadedDataURL, function(geoJson) {
        echarts.registerMap('zhejiang', geoJson);
        myChart5a.hideLoading();
        var data = obj;
        var convertData = function (data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };
        var color = 'white';
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
                show: true,
                min: 0,
                max: 2000,
				left:'-10',//修改图例的位置
				//top:'520',
				top:'505',
                calculable: true,
                seriesIndex: [1],
                //inRange: {
                color: ['#ff5b1f','#ffe000','#00ff3e','#00ffe5'],
                //},
                textStyle:{
                    color:'white'
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
                roam: false,
                itemStyle: {
                    normal: {
                        areaColor: ['#10284a'],//修改的整体颜色
                        borderColor: '#b3b3be',//修改的区域沿线颜色
                    },
                    emphasis: {
                        areaColor: '#0f7294',//鼠标移上去的颜色
                        color:'white'
                    }
                }
            },
            series : [
                {

                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData(data),
                    symbolSize: 25,
                    roam:false,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true,
                            textStyle:{
                                fontSize:'16'
                            }
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
                    name: '点',
                    type: 'scatter',//散点图，气泡图
                    coordinateSystem: 'geo',
                    //symbol: 'image://images/1.png',
                    symbolSize: 25,
                    label: {
                        normal: {
                            show: false,
                            textStyle:{
                                fontSize:'16px'
                            }
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal:{
                            shadowBlur:'100',
                            shadowColor:'rgba(0,0,0,0.35)',
                            opacity:0.8
                        },
                        emphasis: {
                            borderColor: '#fff',
                            borderWidth: 1
                        }
                    },
                    data: convertData(data)
                },
                {
                    //name: 'Top 5',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(data.sort(function (a, b) {
                        return b.value - a.value;
                    }).slice(0, 11)),
                    symbolSize: function (val) {
                        return 25;
                    },
                    showEffectOn: 'render',
                    // rippleEffect: {     //显示的放射线
                    //     brushType: 'stroke'
                    // },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: function(params) {
                                var tmp = params.data.value[2];
                                if (tmp < 100) {
                                    return '#00ffe5';
                                } else if (tmp < 1000) {
                                    return '#00ff3e'
                                } else if(tmp < 2000){
                                    return '#ffe000'

                                } else{
                                    return '#ff5b1f';
                                }
                            },
                            // shadowBlur: 10,
                            shadowColor: 'white'
                        }
                    },
                    zlevel: 8
                }

            ]
        };
        myChart5a.setOption(option5a);

        //给图表绑定上点击事件
        myChart5a.on('click', function (params) {
            var city = params.name;
            if(city == '杭州市'){

            }else if(city == '宁波市'){

            }else if(city == '温州市'){

            }else if(city == '台州市'){

            }else if(city == '丽水市'){

            }else if(city == '衢州市'){

            }else if(city == '金华市'){

            }
            else if(city == '绍兴市'){

            }else if(city == '嘉兴市'){

            }else if(city == '湖州市'){

            }else if(city == '舟山市'){

            }
        });
    });
}
function drawLeftCol(url) {
    $.ajax({
        type:'post',
        url:url,
        async:false,
        success:function () {

        }
    })
}
//下拉关联地图和tab切换
function options(value,data1,data2,data3,data4,data5,id1,id2,id3,id4,id5,map1,map2,map3,map4,map5,objs1){
	var selectedOption=value.options[value.selectedIndex];    
	if(selectedOption.value==data1){
		$(objs1).text("314106");
		$(id1).css("display","block");
		$(id2).css("display","none");
		$(id3).css("display","none");
		$(id4).css("display","none");
		$(id5).css("display","none");
		set5a(convertobj(obj_freshMushroom_yeild),0,map1);
	}else if(selectedOption.value==data2){				
		$(objs1).text("314106");
		$(id2).css("display","block");
		$(id1).css("display","none");
		$(id3).css("display","none");
		$(id4).css("display","none");
		$(id5).css("display","none");
		set5a(convertobj(obj_freshMushroom_yeild),0,map2);
	}else if(selectedOption.value==data3){				
		$(objs1).text("314106");
		$(id3).css("display","block");
		$(id2).css("display","none");
		$(id1).css("display","none");
		$(id4).css("display","none");
		$(id5).css("display","none");
		set5a(convertobj(obj_freshMushroom_yeild),0,map3);
	}else if(selectedOption.value==data4){		
		$(objs1).text("314106");
		$(id4).css("display","block");
		$(id2).css("display","none");
		$(id3).css("display","none");
		$(id1).css("display","none");
		$(id5).css("display","none");
		set5a(convertobj(obj_freshMushroom_yeild),0,map4);
	}else if(selectedOption.value==data5){		
		$(objs1).text("314106");
		$(id5).css("display","block");
		$(id2).css("display","none");
		$(id3).css("display","none");
		$(id4).css("display","none");
		$(id1).css("display","none");
		set5a(convertobj(obj_freshMushroom_yeild),0,map5);
	}
}
function eleClick(ele){
	$(ele).click(function(){
		options(this,"zhus","yangs","nius","jis","yas","#zhu-lt","#yang-lt","#niu-lt","#ji-lt","#ya-lt","xmjgmap-lt1","xmjgmap-lt2","xmjgmap-lt3","xmjgmap-lt4","xmjgmap-lt5",".drlNum")
		options(this,"zhus","yangs","nius","jis","yas","#zhu","#yang","#niu","#ji","#ya","xmjgmap3","xmjgmap32","xmjgmap33","xmjgmap34","xmjgmap35",".drlNum")
		options(this,"zhus","yangs","nius","jis","yas","#zhu2","#yang2","#niu2","#ji2","#ya2","xmjgmap4","xmjgmap42","xmjgmap43","xmjgmap44","xmjgmap45",".drlNum")
	})
}
eleClick(".xm-select");
