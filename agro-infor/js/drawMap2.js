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

                set5a(convertobj(obj_freshMushroom_yeild),0,'zlaqmap','全省农资销售情况');	
            	
				//点击地图图标展示切换地图数据
				function mapData(eleClick,id,text,obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,obj10,obj11,text1,text2,text3,text4,text5,text6,text7,text8,text9,text10,text11,color1,color2,color3,color4,color5,color6,color7){				
					$(eleClick).click(function(){
						$(obj1).text(text1);
						$(obj2).text(text2);
						$(obj3).text(text3);
						$(obj4).text(text4);
						$(obj5).text(text5);
						$(obj6).text(text6);
						$(obj7).text(text7);
						$(obj8).text(text8);
						$(obj9).text(text9);
						$(obj10).text(text10);
						$(obj11).text(text11);
						$(this).css({'background':'url(./images/zlaq-blue-map.png) no-repeat'});
						$(color1).css({'background':'url(./images/zlaq-yellow-map.png) no-repeat'});
						$(color2).css({'background':'url(./images/zlaq-yellow-map.png) no-repeat'});
						$(color3).css({'background':'url(./images/zlaq-yellow-map.png) no-repeat'});
						$(color4).css({'background':'url(./images/zlaq-yellow-map.png) no-repeat'});
						$(color5).css({'background':'url(./images/zlaq-yellow-map.png) no-repeat'});
						$(color6).css({'background':'url(./images/zlaq-yellow-map.png) no-repeat'});
						$(color7).css({'background':'url(./images/zlaq-yellow-map.png) no-repeat'});
						set5a(convertobj(obj_freshMushroom_yeild),0,id,text);	
					})
				}
            	mapData('.qsnzxs','zlaqmap','全省农资销售情况','.hz','.nb','.wz','.ls','.qz','.zs','.huz','.jx','.sx','.jh','456210','456210','456210','456210','456210','456210','456210','456210','456210','456210','456210','.qsnzxs','.ncpztfx','.kzszt','.kzsm','.nzqyztfx','.spybrz','.ncpjcpc');
            	mapData('.ncpztfx','zlaqmap','农产品主体分析','.hz','.nb','.wz','.ls','.qz','.zs','.huz','.jx','.sx','.jh','456210','456210','456210','456210','456210','456210','456210','456210','456210','456210','456210','.ncpztfx','.qsnzxs','.kzszt','.kzsm','.nzqyztfx','.spybrz','.ncpjcpc');
            	mapData('.kzszt','zlaqmap','可追溯分析','.hz','.nb','.wz','.ls','.qz','.zs','.huz','.jx','.sx','.jh','3211','3211','3211','3211','3211','3211','3211','3211','3211','3211','3211','.kzszt','.qsnzxs','.ncpztfx','.kzsm','.nzqyztfx','.spybrz','.ncpjcpc');
            	mapData('.kzsm','zlaqmap','可追溯分析','.hz','.nb','.wz','.ls','.qz','.zs','.huz','.jx','.sx','.jh','456210','456210','456210','456210','456210','456210','456210','456210','456210','456210','456210','.kzsm','.qsnzxs','.ncpztfx','.kzszt','.nzqyztfx','.spybrz','.ncpjcpc');
            	mapData('.nzqyztfx','zlaqmap','农资企业主体分析','.hz','.nb','.wz','.ls','.qz','.zs','.huz','.jx','.sx','.jh','3211','3211','3211','3211','3211','3211','3211','3211','3211','3211','3211','.nzqyztfx','.qsnzxs','.ncpztfx','.kzszt','.kzsm','.spybrz','.ncpjcpc');
            	mapData('.spybrz','zlaqmap','三品一标认证','.hz','.nb','.wz','.ls','.qz','.zs','.huz','.jx','.sx','.jh','456210','456210','456210','456210','456210','456210','456210','456210','456210','456210','456210','.spybrz','.qsnzxs','.ncpztfx','.kzszt','.kzsm','.nzqyztfx','.ncpjcpc');
            	mapData('.ncpjcpc','zlaqmap','农产品检测批次','.hz','.nb','.wz','.ls','.qz','.zs','.huz','.jx','.sx','.jh','3211','3211','3211','3211','3211','3211','3211','3211','3211','3211','3211','.ncpjcpc','.qsnzxs','.ncpztfx','.kzszt','.kzsm','.nzqyztfx','.spybrz');           
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

function set5a(obj,index,id,text){
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
            title:{
                text:text,
                x:'center',
                textStyle: {
                    color: '#fff',
                    fontSize:'20'
                },
                top:'25'
            },
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
                    color: ['#ebc443','#d3c940','#16da39','#1d4cc7'],
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
                        borderColor: '#f4f4f5',//修改的区域沿线颜色
                    },
                    emphasis: {
                        areaColor: '#2B91B7',//鼠标移上去的颜色
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
                                    return '#1d4cc7';
                                } else if (tmp < 1000) {
                                    return '#16da39'
                                } else if(tmp < 2000){
                                    return '#d3c940'

                                } else{
                                    return '#ebc443';
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
				$('#title .title h2').html('杭州农资销售情况')								
            }else if(city == '宁波市'){
				$('#title .title h2').html('宁波农资销售情况')				
            }else if(city == '温州市'){
				$('#title .title h2').html('温州农资销售情况')				
            }else if(city == '台州市'){
				$('#title .title h2').html('台州农资销售情况')					
            }else if(city == '丽水市'){
				$('#title .title h2').html('丽水农资销售情况')				
            }else if(city == '衢州市'){
				$('#title .title h2').html('衢州农资销售情况')				
            }else if(city == '金华市'){
				$('#title .title h2').html('金华农资销售情况')				
            }else if(city == '绍兴市'){
				$('#title .title h2').html('绍兴农资销售情况')				
            }else if(city == '嘉兴市'){
				$('#title .title h2').html('嘉兴农资销售情况')				
            }else if(city == '湖州市'){
				$('#title .title h2').html('湖州农资销售情况')				
            }else if(city == '舟山市'){
				$('#title .title h2').html('舟山农资销售情况')				
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



