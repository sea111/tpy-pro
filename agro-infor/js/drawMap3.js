/**
 * Created by Administrator on 2017/12/26.
 */
/**
 * Created by Administrator on 2017/12/22.
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
				
				set5a(convertobj(obj_freshMushroom_yeild),0,'zhnjmap1');
			
				//点击tab下面的切换地图
				function objClick(clickObj,obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,maps1,maps2,maps3,maps4,maps5,maps6,maps7,maps8){
					$(clickObj).on("click",function(){
						var index=$(this).index();
						if(index==0){
							$(obj1).css({"display":"block","background-color":":#141638"});$(obj2).css("display","none");$(obj3).css("display","none");$(obj4).css("display","none");$(obj5).css("display","none");$(obj6).css("display","none");$(obj7).css("display","none");$(obj8).css("display","none");				
							$(this).css({'background':'#141638'}).siblings().css({'background':''})
							set5a(convertobj(obj_freshMushroom_yeild),0,maps1);
						}else if(index==1){
							$(obj2).css({"display":"block","background":"#141638"});$(obj1).css("display","none");$(obj3).css("display","none");$(obj4).css("display","none");$(obj5).css("display","none");$(obj6).css("display","none");$(obj7).css("display","none");$(obj8).css("display","none");								
							$(this).css({'background':'#141638'}).siblings().css({'background':''})
							set5a(convertobj(obj_freshMushroom_yeild),0,maps2);
						}else if(index==2){
							$(obj3).css({"display":"block","background":"#141638"});$(obj1).css("display","none");$(obj2).css("display","none");$(obj4).css("display","none");$(obj5).css("display","none");$(obj6).css("display","none");$(obj7).css("display","none");$(obj8).css("display","none");
							$(this).css({'background':'#141638'}).siblings().css({'background':''})
							set5a(convertobj(obj_freshMushroom_yeild),0,maps3);
						}else if(index==3){
							$(obj4).css({"display":"block","background":"#141638"});$(obj2).css("display","none");$(obj3).css("display","none");$(obj1).css("display","none");$(obj5).css("display","none");$(obj6).css("display","none");$(obj7).css("display","none");$(obj8).css("display","none");
							$(this).css({'background':'#141638'}).siblings().css({'background':''})
							set5a(convertobj(obj_freshMushroom_yeild),0,maps4);
						}else if(index==4){
							$(obj5).css({"display":"block","background":"#141638"});$(obj2).css("display","none");$(obj3).css("display","none");$(obj1).css("display","none");$(obj4).css("display","none");$(obj6).css("display","none");$(obj7).css("display","none");$(obj8).css("display","none");
							$(this).css({'background':'#141638'}).siblings().css({'background':''})
							set5a(convertobj(obj_freshMushroom_yeild),0,maps5);
						}else if(index==5){
							$(obj6).css({"display":"block","background":"#141638"});$(obj2).css("display","none");$(obj3).css("display","none");$(obj1).css("display","none");$(obj4).css("display","none");$(obj5).css("display","none");$(obj7).css("display","none");$(obj8).css("display","none");
							$(this).css({'background':'#141638'}).siblings().css({'background':''})
							set5a(convertobj(obj_freshMushroom_yeild),0,maps6);
						}else if(index==6){
							$(obj7).css({"display":"block","background":"#141638"});$(obj1).css("display","none");$(obj2).css("display","none");$(obj3).css("display","none");$(obj4).css("display","none");$(obj5).css("display","none");$(obj6).css("display","none");$(obj8).css("display","none");
							$(this).css({'background':'#141638'}).siblings().css({'background':''})
							set5a(convertobj(obj_freshMushroom_yeild),0,maps7);
						}else if(index==7){
							$(obj8).css({"display":"block","background":"#141638"});$(obj2).css("display","none");$(obj3).css("display","none");$(obj1).css("display","none");$(obj5).css("display","none");$(obj6).css("display","none");$(obj7).css("display","none");$(obj4).css("display","none");
							$(this).css({'background':'#141638'}).siblings().css({'background':''})
							set5a(convertobj(obj_freshMushroom_yeild),0,maps8);
						}
					})
				}
				objClick("#tabsBtn01>li","#gjbt","#gjbt2","#gjbt3","#gjbt4","#gjbt5","#gjbt6","#gjbt7","#gjbt8","zhnjmap1","zhnjmap2","zhnjmap3","zhnjmap4","zhnjmap5","zhnjmap6","zhnjmap7","zhnjmap8")
				objClick("#tabsBtn02>li","#njjg","#njjg2","#njjg3","#njjg4","#njjg5","#njjg6","#njjg7","#njjg8","zhnjmap9","zhnjmap10","zhnjmap11","zhnjmap12","zhnjmap13","zhnjmap14","zhnjmap15","zhnjmap16")
				objClick("#tabsBtn03>li","#fzsp","#fzsp2","#fzsp3","#fzsp4","#fzsp5","#fzsp6","#fzsp7","#fzsp8","zhnjmap17","zhnjmap18","zhnjmap19","zhnjmap20","zhnjmap21","zhnjmap22","zhnjmap23","zhnjmap24")
				objClick("#tabsBtn04>li","#fwzt","#fwzt2","#fwzt3","#fwzt4","zhnjmap25","zhnjmap26","zhnjmap27","zhnjmap28")//,"#fwzt5","#fwzt6","#fwzt7","#fwzt8",,"zhnjmap29","zhnjmap30","zhnjmap31","zhnjmap32"
					
					
				function eleTab(objClick,obj1,obj2,obj3,obj4,color1,color2,color3,color4){
		          	$(objClick).click(function(){
		          		var index=$(this).index();
		          		if(index==0){
							$(obj1).css({"display":"block"});$(obj2).css({"display":"none"});$(obj3).css({"display":"none"});$(obj4).css({"display":"none"})			
							$(color1).css({"border-bottom":"solid 1px #04aeff"})
							$(color2).css({"border-bottom":"solid 1px #100f31"})
							$(color3).css({"border-bottom":"solid 1px #100f31"})
							$(color4).css({"border-bottom":"solid 1px #100f31"})
						}else if(index==1){
							$(obj2).css({"display":"block"});$(obj1).css({"display":"none"});$(obj3).css({"display":"none"});$(obj4).css({"display":"none"})
							$(color1).css({"border-bottom":"solid 1px #100f31"})
							$(color2).css({"border-bottom":"solid 1px #04aeff"})
							$(color3).css({"border-bottom":"solid 1px #100f31"})
							$(color4).css({"border-bottom":"solid 1px #100f31"})
						}else if(index==2){
							$(obj3).css({"display":"block"});$(obj1).css({"display":"none"});$(obj2).css({"display":"none"});$(obj4).css({"display":"none"})
							$(color1).css({"border-bottom":"solid 1px #100f31"})
							$(color2).css({"border-bottom":"solid 1px #100f31"})
							$(color3).css({"border-bottom":"solid 1px #04aeff"})
							$(color4).css({"border-bottom":"solid 1px #100f31"})
						}else if(index==3){
							$(obj4).css({"display":"block"});$(obj1).css({"display":"none"});$(obj2).css({"display":"none"});$(obj3).css({"display":"none"})
							$(color1).css({"border-bottom":"solid 1px #100f31"})
							$(color2).css({"border-bottom":"solid 1px #100f31"})
							$(color3).css({"border-bottom":"solid 1px #100f31"})
							$(color4).css({"border-bottom":"solid 1px #04aeff"})
						}
		          		
		          	})
		        }
				eleTab('.tabsUl>li','#tabs1','#tabs2','#tabs3','#tabs4','#gjbtT','#njjgT','#fzspT','#fwztT')
				eleTab('.tabsUl>li','#tabs2',"#tabs1",'#tabs3','#tabs4','#gjbtT','#njjgT','#fzspT','#fwztT')
				eleTab('.tabsUl>li','#tabs3',"#tabs2",'#tabs1','#tabs4','#gjbtT','#njjgT','#fzspT','#fwztT')
				eleTab('.tabsUl>li','#tabs4',"#tabs2",'#tabs3','#tabs1','#gjbtT','#njjgT','#fzspT','#fwztT')	
					
					
					
				//点击切换地图
				$("#tabsMap>ul>li").on("click",function(){
					var $index = $(this).index();
						$("#tabsMap>div").eq($index).show().siblings("div").hide();
						//console.log($("#tabsMap>div").eq($index).find("li").eq(0));
						var $id = $("#tabsMap>div").eq($index).children("div").find("li").eq(0).find("div").attr("id")
						//set5a(convertobj(obj_freshMushroom_yeild),0,$id);
					if($index == 1){
						set5a(convertobj(obj_freshMushroom_yeild),0,'zhnjmap9');
						set5a(convertobj(obj_freshMushroom_yeild),0,'zhnjmap10');
						set5a(convertobj(obj_freshMushroom_yeild),0,'zhnjmap11');
						set5a(convertobj(obj_freshMushroom_yeild),0,'zhnjmap12');
						set5a(convertobj(obj_freshMushroom_yeild),0,'zhnjmap13');
						set5a(convertobj(obj_freshMushroom_yeild),0,'zhnjmap14');
						set5a(convertobj(obj_freshMushroom_yeild),0,'zhnjmap15');
						set5a(convertobj(obj_freshMushroom_yeild),0,'zhnjmap16');
					}else if($index == 2){
						set5a(convertobj(obj_freshMushroom_yeild),0,'zhnjmap17');
						set5a(convertobj(obj_freshMushroom_yeild),0,'zhnjmap18');
						set5a(convertobj(obj_freshMushroom_yeild),0,'zhnjmap19');
						set5a(convertobj(obj_freshMushroom_yeild),0,'zhnjmap20');
						set5a(convertobj(obj_freshMushroom_yeild),0,'zhnjmap21');
						set5a(convertobj(obj_freshMushroom_yeild),0,'zhnjmap22');
						set5a(convertobj(obj_freshMushroom_yeild),0,'zhnjmap23');
						set5a(convertobj(obj_freshMushroom_yeild),0,'zhnjmap24');
					}else if($index == 3){
						set5a(convertobj(obj_freshMushroom_yeild),0,'zhnjmap25');
						set5a(convertobj(obj_freshMushroom_yeild),0,'zhnjmap26');
						set5a(convertobj(obj_freshMushroom_yeild),0,'zhnjmap27');
						set5a(convertobj(obj_freshMushroom_yeild),0,'zhnjmap28');
						/*set5a(convertobj(obj_freshMushroom_yeild),0,'zhnjmap29');
						set5a(convertobj(obj_freshMushroom_yeild),0,'zhnjmap30');
						set5a(convertobj(obj_freshMushroom_yeild),0,'zhnjmap31');
						set5a(convertobj(obj_freshMushroom_yeild),0,'zhnjmap32');*/
					}else{
						set5a(convertobj(obj_freshMushroom_yeild),0,'zhnjmap1');
						set5a(convertobj(obj_freshMushroom_yeild),0,'zhnjmap2');
						set5a(convertobj(obj_freshMushroom_yeild),0,'zhnjmap3');
						set5a(convertobj(obj_freshMushroom_yeild),0,'zhnjmap4');
						set5a(convertobj(obj_freshMushroom_yeild),0,'zhnjmap5');
						set5a(convertobj(obj_freshMushroom_yeild),0,'zhnjmap6');
						set5a(convertobj(obj_freshMushroom_yeild),0,'zhnjmap7');
						set5a(convertobj(obj_freshMushroom_yeild),0,'zhnjmap8');
					}
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
//          title:{
//              text: '农资销售分布',
//              x:'center',
//              textStyle: {
//                  color: '#fff',
//                  fontSize:'20'
//              },
//              top:'25'
//          },
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
                right: '92',
                bottom: '80',
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
                roam:false,//禁止缩放，拖移
                itemStyle: {
                    normal: {
                        areaColor: ['#010d3d'],//修改的整体颜色
                        borderColor: '#1278bd',//修改的区域沿线颜色
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



