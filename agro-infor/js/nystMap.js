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

function trim(str){
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
				
				set5a(convertobj(obj_freshMushroom_yeild),0,'nystMap1');
			
				//点击tab下面的切换地图
				function objClick(clickObj,obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,maps1,maps2,maps3,maps4,maps5,maps6,maps7,maps8){
					$(clickObj).on("click",function(){
						var index=$(this).index();
						if(index==0){
							$(obj1).css("display","block");$(obj2).css("display","none");$(obj3).css("display","none");$(obj4).css("display","none");$(obj5).css("display","none");$(obj6).css("display","none");$(obj7).css("display","none");$(obj8).css("display","none");
							set5a(convertobj(obj_freshMushroom_yeild),0,maps1);
						}else if(index==1){
							$(obj2).css("display","block");$(obj1).css("display","none");$(obj3).css("display","none");$(obj4).css("display","none");$(obj5).css("display","none");$(obj6).css("display","none");$(obj7).css("display","none");$(obj8).css("display","none");								
							set5a(convertobj(obj_freshMushroom_yeild),0,maps2);
						}else if(index==2){
							$(obj3).css("display","block");$(obj1).css("display","none");$(obj2).css("display","none");$(obj4).css("display","none");$(obj5).css("display","none");$(obj6).css("display","none");$(obj7).css("display","none");$(obj8).css("display","none");
							set5a(convertobj(obj_freshMushroom_yeild),0,maps3);
						}else if(index==3){
							$(obj4).css("display","block");$(obj2).css("display","none");$(obj3).css("display","none");$(obj1).css("display","none");$(obj5).css("display","none");$(obj6).css("display","none");$(obj7).css("display","none");$(obj8).css("display","none");
							set5a(convertobj(obj_freshMushroom_yeild),0,maps4);
						}else if(index==4){
							$(obj5).css("display","block");$(obj2).css("display","none");$(obj3).css("display","none");$(obj1).css("display","none");$(obj4).css("display","none");$(obj6).css("display","none");$(obj7).css("display","none");$(obj8).css("display","none");
							set5a(convertobj(obj_freshMushroom_yeild),0,maps5);						
						}else if(index==5){
							$(obj6).css("display","block");$(obj2).css("display","none");$(obj3).css("display","none");$(obj1).css("display","none");$(obj4).css("display","none");$(obj5).css("display","none");$(obj7).css("display","none");$(obj8).css("display","none");
							set5a(convertobj(obj_freshMushroom_yeild),0,maps6);
						}else if(index==6){
							$(obj7).css("display","block");$(obj1).css("display","none");$(obj2).css("display","none");$(obj3).css("display","none");$(obj4).css("display","none");$(obj5).css("display","none");$(obj6).css("display","none");$(obj8).css("display","none");
							set5a(convertobj(obj_freshMushroom_yeild),0,maps7);
						}else if(index==7){
							$(obj8).css("display","block");$(obj2).css("display","none");$(obj3).css("display","none");$(obj1).css("display","none");$(obj5).css("display","none");$(obj6).css("display","none");$(obj7).css("display","none");$(obj4).css("display","none");
							set5a(convertobj(obj_freshMushroom_yeild),0,maps8);
						}
					})
				}
				objClick("#tabsBtn01>li","#gjbt","#gjbt2","#gjbt3","#gjbt4","#gjbt5","#gjbt6","#gjbt7","#gjbt8","zhnjmap1","zhnjmap2","zhnjmap3","zhnjmap4","zhnjmap5","zhnjmap6","zhnjmap7","zhnjmap8")
				objClick("#tabsBtn02>li","#njjg","#njjg2","#njjg3","#njjg4","#njjg5","#njjg6","#njjg7","#njjg8","zhnjmap9","zhnjmap10","zhnjmap11","zhnjmap12","zhnjmap13","zhnjmap14","zhnjmap15","zhnjmap16")
				objClick("#tabsBtn03>li","#fzsp","#fzsp2","#fzsp3","#fzsp4","#fzsp5","#fzsp6","#fzsp7","#fzsp8","zhnjmap17","zhnjmap18","zhnjmap19","zhnjmap20","zhnjmap21","zhnjmap22","zhnjmap23","zhnjmap24")
				objClick("#tabsBtn04>li","#fwzt","#fwzt2","#fwzt3","#fwzt4","zhnjmap25","zhnjmap26","zhnjmap27","zhnjmap28")//,"#fwzt5","#fwzt6","#fwzt7","#fwzt8",,"zhnjmap29","zhnjmap30","zhnjmap31","zhnjmap32"
						
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
var myChart5a;
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

     myChart5a = echarts.init(document.getElementById(id));
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
                        value: geoCoord.concat(data[i].value)//市
                    });
                }
            }
            return res;
        };

        //var color = 'white';
        option5a = {
            tooltip: {
                trigger: 'item',
                show:false,//隐藏鼠标移入显示的数据
                formatter: function (params) {
                    if(typeof(params.value)[2] == "undefined"){
                        return params.name + ' : ' + params.value;
                    }else{
                        return params.name + ' : ' + params.value[2];
                    }
                }
            },
            visualMap: {
                show: false,//是否显示范围
                min: 0,
                max: 2000,
                right: '92',
                bottom: '80',
                calculable: true,
                seriesIndex: [1],
                inRange: {
                	//color: ['#ff5b1f','#ffe000','#00ff3e','#00ffe5'],
                	//color: ['#f2637b','#fc7f32','#bcbd2a','#2c59ac'],
                	color:['#2c59ac'],//修改的地图上的颜色
                },
                textStyle:{
                    color:'white'
                }
            },
            geo: {
                show: true,//地图轮廓
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
                        areaColor: ['#0c2641'],//修改的整体颜色
                        borderColor: '#bbc6cf',//修改的区域沿线颜色
                    },
                    emphasis: {
                        //areaColor: '#0f7294',//鼠标移上去的颜色
                        areaColor:'#0c2641',
                        color:'white'
                    }
                }
            },
            series : [
                {
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData(data),//显示市
                    symbolSize: 5,
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
                {//地图上的颜色
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
                    symbolSize: 5,
                    label: {
                        normal: {
                            show: false,
                            textStyle:{
                                fontSize:'16px',                               
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
                        return 5;
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
                                    return '#000';
                                } else if (tmp < 1000) {
                                    return '#000'
                                } else if(tmp < 2000){
                                    return '#000'

                                } else{
                                    return '#000';
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
		myChart5a = echarts.init(document.getElementById("nystMap1"));
		
        myChart5a.on('mouseout', function (params) {
        	$('.title1 h2').text('全省近一年虫情K线分析')
			$('.title2 h2').text('全省近1季度虫情统计')
			$('.title3 h2').text('全省下一季度虫情预警')
			$('.chongqing').show();
			$('.pie-article-right').show();
			$('.yjxs').show();
			$('.yjdj').show();
			$('.pie-con').show();
			
			//nystLine2('nystLine2','单位：头',['大螟','二化螟 ','稻纵卷叶螟','白背飞虱','褐飞虱'],['#4dcb73','#37cbcb','#f2637b','#975fe4','#2e7cc9'],['2017-09-25','2017-10-2','2017-10-9','2017-10-16','2017-10-23','2017-10-30'],[15,42,60,40,16,40],[40,10,38,60,38,42],[40,16,42,30,58,53],[40,9,8,42,30,53],[38,60,40,55,42,65],'#393c4b','#393c4b')
			nystLine2('nystLine2','单位：头',legendData,['#4dcb73','#37cbcb','#f2637b','#975fe4','#2e7cc9'],jgdate,data1,data2,data3,data4,data5,'#393c4b','#393c4b')	
        	
        	nystPie('nystPie2',['#2c59ac','#2f3042'],['58%','34%'],'#fff','26',[
                {value:80, name:'蓝色预警'},
                {value:20, name:''}],'12%'
			)
			nystPie('nystPie3',['#f2637b','#2f3042'],['58%','31%'],'#fff','26',[
		                    {value:80, name:'红色预警'},
		                    {value:20, name:''}],'85%'
			)
			nystPie('nystPie4',['#fc7f32','#2f3042'],['58%','31%'],'#fff','26',[
		                    {value:80, name:'橙色预警'},
		                    {value:20, name:''}],'65%'
			)
			nystPie('nystPie5',['#bcbd2a','#2f3042'],['58%','31%'],'#fff','26',[
		                    {value:80, name:'黄色预警'},
		                    {value:20, name:''}],'35%'
			)
			nystPie('nystPie6',['#2c59ac','#2f3042'],['58%','31%'],'#fff','26',[
		                    {value:80, name:'蓝色预警'},
		                    {value:20, name:''}],'15%'
			)
        })

  		
    });
    myChart5a.on('mouseover', function (params) {
		if(params.name == "舟山市"){
			$('.title1 h2').text('舟山市近一年虫情K线分析')
			$('.title2 h2').text('舟山市近1季度虫情统计')
			$('.title3 h2').text('舟山市下一季度虫情预警')
			$('.chongqing').hide();
			$('.pie-article-right').hide();
			$('.yjxs').hide();
			$('.yjdj').hide();
			$('.pie-con').hide();
						
			//nystLine2('nystLine2','',['',' ','','',''],['','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],'','')
      		$("#nystLine2").empty().removeAttr("_echarts_instance_");//_echarts_instance_重新加载一下echarts
      		nystPie('nystPie2',['',''],['',''],'','',[
              {value:'', name:''},
              {value:'', name:''}],''
			)
			nystPie('nystPie3',['',''],['',''],'','',[
		                    {value:'', name:''},
		                    {value:'', name:''}],''
			)
			nystPie('nystPie4',['',''],['',''],'','',[
		                    {value:'', name:''},
		                    {value:'', name:''}],''
			)
			nystPie('nystPie5',['',''],['',''],'','',[
		                    {value:'', name:''},
		                    {value:'', name:''}],''
			)
			nystPie('nystPie6',['',''],['',''],'','',[
		                    {value:'', name:''},
		                    {value:'', name:''}],''
			)
		}
	})
}
var attrIds;
var attrNumObj = {1:0,2:0,3:0,4:0,5:0,6:0,7:0}
function drawLeftCol() {
	
	//显示图上点
	$.ajax({
        type:'get',
        dataType:'jsonp',
        url:'http://api.zjtpyun.com/rest?app_key=zjst_plant&method=top.aiot.plant.station.list&format=json&sign=26E9D5674C0F2A05BAD5EE4F2D13F5AE&area_id=330000&version=v1.0&timestamp=20180223095320&callback=?',
        async:false,
        cache:true,
        success:function (data) {      	
        	var mes=data.result;
			var str='';
			for(var i in mes){
				attrIds=mes[i].attr_ids
				for (var j in attrNumObj) {
					if($.inArray(parseInt(j),attrIds)!=-1){
				       attrNumObj[j]+=1;
					}
				}
				var areaId=mes[i].area_id;		
				var isInsect=mes[i].is_insect;
				if(areaId>=330100&&areaId<330200){//有设备显示紫色，没有显示绿色					
					if(isInsect==1){			
						str+='<i class="hz purple"></i>';					
					}else if(isInsect==0){		
						str+='<i class="hz"><i class="green"></i></i>';
					}else{
						str+='<i class="hz"></i>';						
					}
					if(isInsect == 1 || isInsect == 0){
						myChart5a = echarts.init(document.getElementById("nystMap1"));
						myChart5a.on('mouseover', function (params) {
			        		if(params.name == "杭州市"){
			        			$('.title1 h2').text('杭州市近一年虫情K线分析')
								$('.title2 h2').text('杭州市近1季度虫情统计')
								$('.title3 h2').text('杭州市下一季度虫情预警')
								
								//nystLine2('nystLine2','单位：头',['大螟','二化螟 ','稻纵卷叶螟','白背飞虱','褐飞虱'],['#4dcb73','#37cbcb','#f2637b','#975fe4','#2e7cc9'],['2017-09-25','2017-10-2','2017-10-9','2017-10-16','2017-10-23','2017-10-30'],[15,42,60,40,16,40],[40,10,38,60,38,42],[40,16,42,30,58,53],[40,9,8,42,30,53],[38,60,40,55,42,65],'#393c4b','#393c4b')
				          		//nystLine2('nystLine2','单位：头',legendData,['#4dcb73','#37cbcb','#f2637b','#975fe4','#2e7cc9'],jgdate,data1,data2,data3,data4,data5,'#393c4b','#393c4b')	
				          		nystPie('nystPie2',['#2c59ac','#2f3042'],['58%','34%'],'#fff','26',[
				                  {value:80, name:'蓝色预警'},
				                  {value:20, name:''}],'12%'
								)
								nystPie('nystPie3',['#f2637b','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'红色预警'},
							                    {value:20, name:''}],'85%'
								)
								nystPie('nystPie4',['#fc7f32','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'橙色预警'},
							                    {value:20, name:''}],'65%'
								)
								nystPie('nystPie5',['#bcbd2a','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'黄色预警'},
							                    {value:20, name:''}],'35%'
								)
								nystPie('nystPie6',['#2c59ac','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'蓝色预警'},
							                    {value:20, name:''}],'15%'
								)
			        		}
        				});
					}else{
						myChart5a = echarts.init(document.getElementById("nystMap1"));
						myChart5a.on('mouseover', function (params) {
							if(params.name == "杭州市"){
								$('.title1 h2').text('杭州市近一年虫情K线分析')
								$('.title2 h2').text('杭州市近1季度虫情统计')
								$('.title3 h2').text('杭州市下一季度虫情预警')
								$('.chongqing').hide();
								$('.pie-article-right').hide();
								$('.yjxs').hide();
								$('.yjdj').hide();
								$('.pie-con').hide();		
								//nystLine2('nystLine2','',['',' ','','',''],['','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],'','')
				            	//$("#nystLine2").empty().removeAttr("_echarts_instance_");//_echarts_instance_重新加载一下echarts
				            	nystPie('nystPie2',['',''],['',''],'','',[
				                    {value:'', name:''},
				                    {value:'', name:''}],''
								)
								nystPie('nystPie3',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
								nystPie('nystPie4',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
								nystPie('nystPie5',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
								nystPie('nystPie6',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
							}
						})
					}
					
				}else if(areaId>=330200&&areaId<330300){
					if(isInsect==1){			
						str+='<i class="nb purple"></i>';					
					}else if(isInsect==0){		
						str+='<i class="nb"><i class="green"></i></i>';
					}else{
						str+='<i class="nb"></i>';	
						
					}
					if(isInsect == 1 || isInsect == 0){
						myChart5a = echarts.init(document.getElementById("nystMap1"));
						myChart5a.on('mouseover', function (params) {
			        		if(params.name == "宁波市"){
			        			$('.title1 h2').text('宁波市近一年虫情K线分析')
								$('.title2 h2').text('宁波市近1季度虫情统计')
								$('.title3 h2').text('宁波市下一季度虫情预警')
				          	    //nystLine2('nystLine2','单位：头',legendData,['#4dcb73','#37cbcb','#f2637b','#975fe4','#2e7cc9'],jgdate,data1,data2,data3,data4,data5,'#393c4b','#393c4b')	       	
				          		nystPie('nystPie2',['#2c59ac','#2f3042'],['58%','34%'],'#fff','26',[
				                  {value:80, name:'蓝色预警'},
				                  {value:20, name:''}],'12%'
								)
								nystPie('nystPie3',['#f2637b','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'红色预警'},
							                    {value:20, name:''}],'85%'
								)
								nystPie('nystPie4',['#fc7f32','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'橙色预警'},
							                    {value:20, name:''}],'65%'
								)
								nystPie('nystPie5',['#bcbd2a','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'黄色预警'},
							                    {value:20, name:''}],'35%'
								)
								nystPie('nystPie6',['#2c59ac','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'蓝色预警'},
							                    {value:20, name:''}],'15%'
								)
			        		}
        				});
					}else if(isInsect==[]||isInsect==null){
						myChart5a = echarts.init(document.getElementById("nystMap1"));
						myChart5a.on('mouseover', function (params) {
							if(params.name == "宁波市"){
								$('.title1 h2').text('宁波市近一年虫情K线分析')
								$('.title2 h2').text('宁波市近1季度虫情统计')
								$('.title3 h2').text('宁波市下一季度虫情预警')
								$('.chongqing').hide();
								$('.pie-article-right').hide();
								$('.yjxs').hide();
								$('.yjdj').hide();
								$('.pie-con').hide();
									
								//nystLine2('nystLine2','',['',' ','','',''],['','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],'','')
				            	//$("#nystLine2").empty().removeAttr("_echarts_instance_");//_echarts_instance_重新加载一下echarts
				            	nystPie('nystPie2',['',''],['',''],'','',[
				                    {value:'', name:''},
				                    {value:'', name:''}],''
								)
								nystPie('nystPie3',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
								nystPie('nystPie4',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
								nystPie('nystPie5',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
								nystPie('nystPie6',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
							}
						})
					}					
				}else if(areaId>=330300&&areaId<330400){
					if(isInsect==1){			
						str+='<i class="wz purple"></i>';				
					}else if(isInsect==0){		
						str+='<i class="wz"><i class="green"></i></i>';
					}else{
						str+='<i class="wz"></i>';
					}
					if(isInsect == 1 || isInsect == 0){
						myChart5a = echarts.init(document.getElementById("nystMap1"));
						myChart5a.on('mouseover', function (params) {
			        		if(params.name == "温州市"){
			        			$('.title1 h2').text('温州市近一年虫情K线分析')
								$('.title2 h2').text('温州市近1季度虫情统计')
								$('.title3 h2').text('温州市下一季度虫情预警')
										
				          		//nystLine2('nystLine2','单位：头',legendData,['#4dcb73','#37cbcb','#f2637b','#975fe4','#2e7cc9'],jgdate,data1,data2,data3,data4,data5,'#393c4b','#393c4b')	
				          		nystPie('nystPie2',['#2c59ac','#2f3042'],['58%','34%'],'#fff','26',[
				                  {value:80, name:'蓝色预警'},
				                  {value:20, name:''}],'12%'
								)
								nystPie('nystPie3',['#f2637b','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'红色预警'},
							                    {value:20, name:''}],'85%'
								)
								nystPie('nystPie4',['#fc7f32','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'橙色预警'},
							                    {value:20, name:''}],'65%'
								)
								nystPie('nystPie5',['#bcbd2a','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'黄色预警'},
							                    {value:20, name:''}],'35%'
								)
								nystPie('nystPie6',['#2c59ac','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'蓝色预警'},
							                    {value:20, name:''}],'15%'
								)
			        		}
        				});
					}else if(isInsect != 1 || isInsect != 0){
						myChart5a = echarts.init(document.getElementById("nystMap1"));
						myChart5a.on('mouseover', function (params) {
							if(params.name == "温州市"){
								$('.title1 h2').text('温州市近一年虫情K线分析')
								$('.title2 h2').text('温州市近1季度虫情统计')
								$('.title3 h2').text('温州市下一季度虫情预警')
								$('.chongqing').hide();
								$('.pie-article-right').hide();
								$('.yjxs').hide();
								$('.yjdj').hide();
								$('.pie-con').hide();
									
								//nystLine2('nystLine2','',['',' ','','',''],['','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],'','')
				          		$("#nystLine2").empty().removeAttr("_echarts_instance_");//_echarts_instance_重新加载一下echarts
				          		nystPie('nystPie2',['',''],['',''],'','',[
				                  {value:'', name:''},
				                  {value:'', name:''}],''
								)
								nystPie('nystPie3',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
								nystPie('nystPie4',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
								nystPie('nystPie5',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
								nystPie('nystPie6',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
							}
						})
					}
					
				}else if(areaId>=330400&&areaId<330500){
					if(isInsect==1){			
						str+='<i class="jx purple"></i>';				
					}else if(isInsect==0){		
						str+='<i class="jx"><i class="green"></i></i>';
					}else{
						str+='<i class="jx"></i>';	
					}
					if(isInsect == 1 || isInsect == 0){
						myChart5a = echarts.init(document.getElementById("nystMap1"));
						myChart5a.on('mouseover', function (params) {
			        		if(params.name == "嘉兴市"){
			        			$('.title1 h2').text('嘉兴市近一年虫情K线分析')
								$('.title2 h2').text('嘉兴市近1季度虫情统计')
								$('.title3 h2').text('嘉兴市下一季度虫情预警')
								
				            	//nystLine2('nystLine2','单位：头',legendData,['#4dcb73','#37cbcb','#f2637b','#975fe4','#2e7cc9'],jgdate,data1,data2,data3,data4,data5,'#393c4b','#393c4b')	
				            	nystPie('nystPie2',['#2c59ac','#2f3042'],['58%','34%'],'#fff','26',[
				                    {value:80, name:'蓝色预警'},
				                    {value:20, name:''}],'12%'
								)
								nystPie('nystPie3',['#f2637b','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'红色预警'},
							                    {value:20, name:''}],'85%'
								)
								nystPie('nystPie4',['#fc7f32','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'橙色预警'},
							                    {value:20, name:''}],'65%'
								)
								nystPie('nystPie5',['#bcbd2a','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'黄色预警'},
							                    {value:20, name:''}],'35%'
								)
								nystPie('nystPie6',['#2c59ac','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'蓝色预警'},
							                    {value:20, name:''}],'15%'
								)
			        		}
        				});
					}else{
						myChart5a = echarts.init(document.getElementById("nystMap1"));
						myChart5a.on('mouseover', function (params) {
							if(params.name == "嘉兴市"){
								$('.title1 h2').text('嘉兴市近一年虫情K线分析')
								$('.title2 h2').text('嘉兴市近1季度虫情统计')
								$('.title3 h2').text('嘉兴市下一季度虫情预警')
								$('.chongqing').hide();
								$('.pie-article-right').hide();
								$('.yjxs').hide();
								$('.yjdj').hide();
								$('.pie-con').hide();
											
								//nystLine2('nystLine2','',['',' ','','',''],['','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],'','')
				          		$("#nystLine2").empty().removeAttr("_echarts_instance_");//_echarts_instance_重新加载一下echarts
				          		nystPie('nystPie2',['',''],['',''],'','',[
				                  {value:'', name:''},
				                  {value:'', name:''}],''
								)
								nystPie('nystPie3',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
								nystPie('nystPie4',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
								nystPie('nystPie5',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
								nystPie('nystPie6',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
							}
						})
					}
					
				}else if(areaId>=330500&&areaId<330600){
					if(isInsect==1){			
						str+='<i class="huz purple"></i>';	
					}else if(isInsect==0){		
						str+='<i class="huz"><i class="green"></i></i>';
					}else{
						str+='<i class="huz"></i>';	
					}
					if(isInsect == 1 || isInsect == 0){
						myChart5a = echarts.init(document.getElementById("nystMap1"));
						myChart5a.on('mouseover', function (params) {
			        		if(params.name == "湖州市"){
			        			$('.title1 h2').text('湖州市近一年虫情K线分析')
								$('.title2 h2').text('湖州市近1季度虫情统计')
								$('.title3 h2').text('湖州市下一季度虫情预警')									
				            	//nystLine2('nystLine2','单位：头',legendData,['#4dcb73','#37cbcb','#f2637b','#975fe4','#2e7cc9'],jgdate,data1,data2,data3,data4,data5,'#393c4b','#393c4b')	
				            	nystPie('nystPie2',['#2c59ac','#2f3042'],['58%','34%'],'#fff','26',[
				                    {value:80, name:'蓝色预警'},
				                    {value:20, name:''}],'12%'
								)
								nystPie('nystPie3',['#f2637b','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'红色预警'},
							                    {value:20, name:''}],'85%'
								)
								nystPie('nystPie4',['#fc7f32','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'橙色预警'},
							                    {value:20, name:''}],'65%'
								)
								nystPie('nystPie5',['#bcbd2a','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'黄色预警'},
							                    {value:20, name:''}],'35%'
								)
								nystPie('nystPie6',['#2c59ac','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'蓝色预警'},
							                    {value:20, name:''}],'15%'
								)
			        		}
        				});
					}else{
						myChart5a = echarts.init(document.getElementById("nystMap1"));
						myChart5a.on('mouseover', function (params) {
							if(params.name == "湖州市"){
								$('.title1 h2').text('湖州市近一年虫情K线分析')
								$('.title2 h2').text('湖州市近1季度虫情统计')
								$('.title3 h2').text('湖州市下一季度虫情预警')
								$('.chongqing').hide();
								$('.pie-article-right').hide();
								$('.yjxs').hide();
								$('.yjdj').hide();
								$('.pie-con').hide();
											
								//nystLine2('nystLine2','',['',' ','','',''],['','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],'','')
				            	//$("#nystLine2").empty().removeAttr("_echarts_instance_");//_echarts_instance_重新加载一下echarts
				            	nystPie('nystPie2',['',''],['',''],'','',[
				                    {value:'', name:''},
				                    {value:'', name:''}],''
								)
								nystPie('nystPie3',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
								nystPie('nystPie4',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
								nystPie('nystPie5',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
								nystPie('nystPie6',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
							}
						})
					}
					
				}else if(areaId>=330600&&areaId<330700){
					if(isInsect==1){			
						str+='<i class="sx purple"></i>';						
					}else if(isInsect==0){		
						str+='<i class="sx"><i class="green"></i></i>';
					}else{
						str+='<i class="sx"></i>';
					}
					if(isInsect == 1 || isInsect == 0){
						myChart5a = echarts.init(document.getElementById("nystMap1"));
						myChart5a.on('mouseover', function (params) {
			        		if(params.name == "绍兴市"){
			        			$('.title1 h2').text('绍兴市近一年虫情K线分析')
								$('.title2 h2').text('绍兴市近1季度虫情统计')
								$('.title3 h2').text('绍兴市下一季度虫情预警')	
				            	//nystLine2('nystLine2','单位：头',legendData,['#4dcb73','#37cbcb','#f2637b','#975fe4','#2e7cc9'],jgdate,data1,data2,data3,data4,data5,'#393c4b','#393c4b')	
				            	nystPie('nystPie2',['#2c59ac','#2f3042'],['58%','34%'],'#fff','26',[
				                    {value:80, name:'蓝色预警'},
				                    {value:20, name:''}],'12%'
								)
								nystPie('nystPie3',['#f2637b','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'红色预警'},
							                    {value:20, name:''}],'85%'
								)
								nystPie('nystPie4',['#fc7f32','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'橙色预警'},
							                    {value:20, name:''}],'65%'
								)
								nystPie('nystPie5',['#bcbd2a','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'黄色预警'},
							                    {value:20, name:''}],'35%'
								)
								nystPie('nystPie6',['#2c59ac','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'蓝色预警'},
							                    {value:20, name:''}],'15%'
								)
			        		}
        				});
					}else{
						myChart5a = echarts.init(document.getElementById("nystMap1"));
						myChart5a.on('mouseover', function (params) {
							if(params.name == "绍兴市"){
								$('.title1 h2').text('绍兴市近一年虫情K线分析')
								$('.title2 h2').text('绍兴市近1季度虫情统计')
								$('.title3 h2').text('绍兴市下一季度虫情预警')
								$('.chongqing').hide();
								$('.pie-article-right').hide();
								$('.yjxs').hide();
								$('.yjdj').hide();
								$('.pie-con').hide();
											
								//nystLine2('nystLine2','',['',' ','','',''],['','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],'','')
				            	$("#nystLine2").empty().removeAttr("_echarts_instance_");//_echarts_instance_重新加载一下echarts
				            	nystPie('nystPie2',['',''],['',''],'','',[
				                    {value:'', name:''},
				                    {value:'', name:''}],''
								)
								nystPie('nystPie3',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
								nystPie('nystPie4',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
								nystPie('nystPie5',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
								nystPie('nystPie6',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
							}
						})
					}
				}else if(areaId>=330700&&areaId<330800){
					if(isInsect==1){			
						str+='<i class="jh purple"></i>';					
					}else if(isInsect==0){		
						str+='<i class="jh"><i class="green"></i></i>';
					}else{
						str+='<i class="jh"></i>';	
					}
					if(isInsect == 1 || isInsect == 0){
						myChart5a = echarts.init(document.getElementById("nystMap1"));
						myChart5a.on('mouseover', function (params) {
			        		if(params.name == "金华市"){
			        			$('.title1 h2').text('金华市近一年虫情K线分析')
								$('.title2 h2').text('金华市近1季度虫情统计')
								$('.title3 h2').text('金华市下一季度虫情预警')																			
				            	//nystLine2('nystLine2','单位：头',legendData,['#4dcb73','#37cbcb','#f2637b','#975fe4','#2e7cc9'],jgdate,data1,data2,data3,data4,data5,'#393c4b','#393c4b')	
				            	nystPie('nystPie2',['#2c59ac','#2f3042'],['58%','34%'],'#fff','26',[
				                    {value:80, name:'蓝色预警'},
				                    {value:20, name:''}],'12%'
								)
								nystPie('nystPie3',['#f2637b','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'红色预警'},
							                    {value:20, name:''}],'85%'
								)
								nystPie('nystPie4',['#fc7f32','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'橙色预警'},
							                    {value:20, name:''}],'65%'
								)
								nystPie('nystPie5',['#bcbd2a','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'黄色预警'},
							                    {value:20, name:''}],'35%'
								)
								nystPie('nystPie6',['#2c59ac','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'蓝色预警'},
							                    {value:20, name:''}],'15%'
								
				     			)
			        		}
        				});
					}else{
						myChart5a = echarts.init(document.getElementById("nystMap1"));
						myChart5a.on('mouseover', function (params) {
							if(params.name == "金华市"){
								$('.title1 h2').text('金华市近一年虫情K线分析')
								$('.title2 h2').text('金华市近1季度虫情统计')
								$('.title3 h2').text('金华市下一季度虫情预警')
								$('.chongqing').hide();
								$('.pie-article-right').hide();
								$('.yjxs').hide();
								$('.yjdj').hide();
								$('.pie-con').hide();
											
								//nystLine2('nystLine2','',['',' ','','',''],['','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],'','')
				            	$("#nystLine2").empty().removeAttr("_echarts_instance_");//_echarts_instance_重新加载一下echarts
				            	nystPie('nystPie2',['',''],['',''],'','',[
				                    {value:'', name:''},
				                    {value:'', name:''}],''
								)
								nystPie('nystPie3',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
								nystPie('nystPie4',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
								nystPie('nystPie5',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
								nystPie('nystPie6',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
							}
						})
					}
				}else if(areaId>=330800&&areaId<330900){
					if(isInsect==1){			
						str+='<i class="qz purple"></i>';						
					}else if(isInsect==0){		
						str+='<i class="qz"><i class="green"></i></i>';
					}else{
						str+='<i class="qz"></i>';	
					}
					if(isInsect == 1 || isInsect == 0){
						myChart5a = echarts.init(document.getElementById("nystMap1"));
						myChart5a.on('mouseover', function (params) {
			        		if(params.name == "衢州市"){
			        			$('.title1 h2').text('衢州市近一年虫情K线分析')
								$('.title2 h2').text('衢州市近1季度虫情统计')
								$('.title3 h2').text('衢州市下一季度虫情预警')																
				            	//nystLine2('nystLine2','单位：头',legendData,['#4dcb73','#37cbcb','#f2637b','#975fe4','#2e7cc9'],jgdate,data1,data2,data3,data4,data5,'#393c4b','#393c4b')	
				            	nystPie('nystPie2',['#2c59ac','#2f3042'],['58%','34%'],'#fff','26',[
				                    {value:80, name:'蓝色预警'},
				                    {value:20, name:''}],'12%'
								)
								nystPie('nystPie3',['#f2637b','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'红色预警'},
							                    {value:20, name:''}],'85%'
								)
								nystPie('nystPie4',['#fc7f32','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'橙色预警'},
							                    {value:20, name:''}],'65%'
								)
								nystPie('nystPie5',['#bcbd2a','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'黄色预警'},
							                    {value:20, name:''}],'35%'
								)
								nystPie('nystPie6',['#2c59ac','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'蓝色预警'},
							                    {value:20, name:''}],'15%'
								)
			        		}
        				});
					}else{
						myChart5a = echarts.init(document.getElementById("nystMap1"));
						myChart5a.on('mouseover', function (params) {
							if(params.name == "衢州市"){
								$('.title1 h2').text('衢州市近一年虫情K线分析')
								$('.title2 h2').text('衢州市近1季度虫情统计')
								$('.title3 h2').text('衢州市下一季度虫情预警')
								$('.chongqing').hide();
								$('.pie-article-right').hide();
								$('.yjxs').hide();
								$('.yjdj').hide();
								$('.pie-con').hide();
											
								//nystLine2('nystLine2','',['',' ','','',''],['','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],'','')
				          		$("#nystLine2").empty().removeAttr("_echarts_instance_");//_echarts_instance_重新加载一下echarts
				          		nystPie('nystPie2',['',''],['',''],'','',[
				                  {value:'', name:''},
				                  {value:'', name:''}],''
								)
								nystPie('nystPie3',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
								nystPie('nystPie4',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
								nystPie('nystPie5',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
								nystPie('nystPie6',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
							}
						})
					}
					
				}else if(areaId>=330900&&areaId<331000){
					if(isInsect==1){			
						str+='<i class="zs purple"></i>';				
					}else if(isInsect==0){		
						str+='<i class="zs"><i class="green"></i></i>';
					}else{
						str+='<i class="zs"></i>';	
					}
					if(isInsect == 1 || isInsect == 0){
						myChart5a = echarts.init(document.getElementById("nystMap1"));
						myChart5a.on('mouseover', function (params) {
			        		if(params.name == "舟山市"){
			        			$('.title1 h2').text('舟山市近一年虫情K线分析')
								$('.title2 h2').text('舟山市近1季度虫情统计')
								$('.title3 h2').text('舟山市下一季度虫情预警')								
				            	//nystLine2('nystLine2','单位：头',legendData,['#4dcb73','#37cbcb','#f2637b','#975fe4','#2e7cc9'],jgdate,data1,data2,data3,data4,data5,'#393c4b','#393c4b')	
				            	nystPie('nystPie2',['#2c59ac','#2f3042'],['58%','34%'],'#fff','26',[
				                    {value:80, name:'蓝色预警'},
				                    {value:20, name:''}],'12%'
								)
								nystPie('nystPie3',['#f2637b','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'红色预警'},
							                    {value:20, name:''}],'85%'
								)
								nystPie('nystPie4',['#fc7f32','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'橙色预警'},
							                    {value:20, name:''}],'65%'
								)
								nystPie('nystPie5',['#bcbd2a','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'黄色预警'},
							                    {value:20, name:''}],'35%'
								)
								nystPie('nystPie6',['#2c59ac','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'蓝色预警'},
							                    {value:20, name:''}],'15%'
								)
			        		}
        				});
					}else{
						myChart5a = echarts.init(document.getElementById("nystMap1"));
						myChart5a.on('mouseover', function (params) {
							if(params.name == "舟山市"){
								$('.title1 h2').text('舟山市近一年虫情K线分析')
								$('.title2 h2').text('舟山市近1季度虫情统计')
								$('.title3 h2').text('舟山市下一季度虫情预警')
								$('.chongqing').hide();
								$('.pie-article-right').hide();
								$('.yjxs').hide();
								$('.yjdj').hide();
								$('.pie-con').hide();
											
								//nystLine2('nystLine2','',['',' ','','',''],['','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],'','')
				          		$("#nystLine2").empty().removeAttr("_echarts_instance_");//_echarts_instance_重新加载一下echarts
				          		nystPie('nystPie2',['',''],['',''],'','',[
				                  {value:'', name:''},
				                  {value:'', name:''}],''
								)
								nystPie('nystPie3',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
								nystPie('nystPie4',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
								nystPie('nystPie5',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
								nystPie('nystPie6',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
							}
						})
					}					
				}else if(areaId>=331000&&areaId<331100){
					if(isInsect==1){			
						str+='<i class="tz purple"></i>';					
					}else if(isInsect==0){		
						str+='<i class="tz"><i class="green"></i></i>';
					}else{
						str+='<i class="tz"></i>';
					}
					if(isInsect == 1 || isInsect == 0){
						myChart5a = echarts.init(document.getElementById("nystMap1"));
						myChart5a.on('mouseover', function (params) {
			        		if(params.name == "台州市"){
			        			$('.title1 h2').text('台州市近一年虫情K线分析')
								$('.title2 h2').text('台州市近1季度虫情统计')
								$('.title3 h2').text('台州市下一季度虫情预警')	
				          		//nystLine2('nystLine2','单位：头',legendData,['#4dcb73','#37cbcb','#f2637b','#975fe4','#2e7cc9'],jgdate,data1,data2,data3,data4,data5,'#393c4b','#393c4b')	
				          		nystPie('nystPie2',['#2c59ac','#2f3042'],['58%','34%'],'#fff','26',[
				                  {value:80, name:'蓝色预警'},
				                  {value:20, name:''}],'12%'
								)
								nystPie('nystPie3',['#f2637b','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'红色预警'},
							                    {value:20, name:''}],'85%'
								)
								nystPie('nystPie4',['#fc7f32','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'橙色预警'},
							                    {value:20, name:''}],'65%'
								)
								nystPie('nystPie5',['#bcbd2a','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'黄色预警'},
							                    {value:20, name:''}],'35%'
								)
								nystPie('nystPie6',['#2c59ac','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'蓝色预警'},
							                    {value:20, name:''}],'15%'
								)
			        		}
        				});
					}else{
						myChart5a = echarts.init(document.getElementById("nystMap1"));
						myChart5a.on('mouseover', function (params) {
							if(params.name == "台州市"){
								$('.title1 h2').text('台州市近一年虫情K线分析')
								$('.title2 h2').text('台州市近1季度虫情统计')
								$('.title3 h2').text('台州市下一季度虫情预警')
								$('.chongqing').hide();
								$('.pie-article-right').hide();
								$('.yjxs').hide();
								$('.yjdj').hide();
								$('.pie-con').hide();
										
								//nystLine2('nystLine2','',['',' ','','',''],['','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],'','')
				          		$("#nystLine2").empty().removeAttr("_echarts_instance_");//_echarts_instance_重新加载一下echarts
				          		nystPie('nystPie2',['',''],['',''],'','',[
				                  {value:'', name:''},
				                  {value:'', name:''}],''
								)
								nystPie('nystPie3',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
								nystPie('nystPie4',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
								nystPie('nystPie5',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
								nystPie('nystPie6',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
							}
						})
					}
					
				}else if(areaId>=331100&&areaId<331200){
					if(isInsect==1){			
						str+='<i class="ls purple"></i>';						
					}else if(isInsect==0){		
						str+='<i class="ls"><i class="green"></i></i>';
					}else{
						str+='<i class="ls"></i>';
					}
					if(isInsect == 1 || isInsect == 0){
						myChart5a = echarts.init(document.getElementById("nystMap1"));
						myChart5a.on('mouseover', function (params) {
			        		if(params.name == "丽水市"){
			        			$('.title1 h2').text('丽水市近一年虫情K线分析')
								$('.title2 h2').text('丽水市近1季度虫情统计')
								$('.title3 h2').text('丽水市下一季度虫情预警')
											
								
				          		//nystLine2('nystLine2','单位：头',legendData,['#4dcb73','#37cbcb','#f2637b','#975fe4','#2e7cc9'],jgdate,data1,data2,data3,data4,data5,'#393c4b','#393c4b')	
				          		nystPie('nystPie2',['#2c59ac','#2f3042'],['58%','34%'],'#fff','26',[
				                  {value:80, name:'蓝色预警'},
				                  {value:20, name:''}],'12%'
								)
								nystPie('nystPie3',['#f2637b','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'红色预警'},
							                    {value:20, name:''}],'85%'
								)
								nystPie('nystPie4',['#fc7f32','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'橙色预警'},
							                    {value:20, name:''}],'65%'
								)
								nystPie('nystPie5',['#bcbd2a','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'黄色预警'},
							                    {value:20, name:''}],'35%'
								)
								nystPie('nystPie6',['#2c59ac','#2f3042'],['58%','31%'],'#fff','26',[
							                    {value:80, name:'蓝色预警'},
							                    {value:20, name:''}],'15%'
								)
			        		}
        				});
					}else if(isInsect==[]||isInsect==null){
						myChart5a = echarts.init(document.getElementById("nystMap1"));
						myChart5a.on('mouseover', function (params) {
							if(params.name == "丽水市"){
								$('.title1 h2').text('丽水市近一年虫情K线分析')
								$('.title2 h2').text('丽水市近1季度虫情统计')
								$('.title3 h2').text('丽水市下一季度虫情预警')
								$('.chongqing').hide();
								$('.pie-article-right').hide();
								$('.yjxs').hide();
								$('.yjdj').hide();
								$('.pie-con').hide();
								//nystLine2('nystLine2','',['',' ','','',''],['','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],['','','','','',''],'','')
				            	$("#nystLine2").empty().removeAttr("_echarts_instance_");//_echarts_instance_重新加载一下echarts
				            	nystPie('nystPie2',['',''],['',''],'','',[
				                    {value:'', name:''},
				                    {value:'', name:''}],''
								)
								nystPie('nystPie3',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
								nystPie('nystPie4',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
								nystPie('nystPie5',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
								nystPie('nystPie6',['',''],['',''],'','',[
							                    {value:'', name:''},
							                    {value:'', name:''}],''
								)
							}
						})
					}
					
				}

			}
			var total = 0 ;
			for (var j in attrNumObj) {
				if(j<5){
					total+=attrNumObj[j];					
				}
				$("#mapBtn li").eq(j).find("span").text(attrNumObj[j]+"个");
			}
			$("#mapBtn li").eq(0).find("span").text(total+"个");
			$('.nyst-li').append(str);			
        }
    })
	
}
drawLeftCol();

//近一年虫情K线分析

	function nystLine(id,text,ydata,data1,data2,danw,xLine,yLine){		
		var nystLine=echarts.init(document.getElementById(id))
		var optionnystLine={
			title : {
		        text: text,
		        textStyle: {//水平轴字体颜色
                    color: '#909097',
                    fontSize: 12,
               },
               x:'3%',
               y:'8%'
		    },
			tooltip : {
		        trigger: 'axis',	        
		   	},
			xAxis:[
				{
					type:'category',
					data:ydata,										
					axisTick : {    // 轴标记
		                show:false		               
		            },
		            axisLine : {    // 轴线
		                show: true,
		                lineStyle: {//水平州的颜色
		                    color:xLine,
		                    type: 'solid',
		                    width: 1
		                }
		            },
					axisLabel : {
		                show:true,
		                textStyle: {//水平轴字体颜色
		                    color: '#8e8e98',
		                    fontSize: 12,
		                }
		           	},
		            splitLine : {//去掉背景曲线
		                show:false,		               
		            }
				}	
			],
			yAxis:[
				{
					type:'value',
					position: 'left',
					axisTick : {    // 轴标记
		                show:false,
		            },
		            axisLine : {    // 轴线
		                show: true,
		                lineStyle: {//水平州的颜色
		                    color: yLine,
		                    type: 'solid',
		                    width: 1
		                }
		            },
		            splitLine : {//去掉背景曲线
		                show: false
		            },
		            axisLabel : {
		                show:true,
		                textStyle: {//垂直轴字体颜色
		                    color: '#8e8e98',
		                    fontSize: 12,
		                }
		           	},
		            axisLabel : {
	                    formatter:danw 
	                }
				}
			],
			series : [
		        {
		            name: '环比',
		            type: 'line',
		            barGap:'30',
		            itemStyle:{//修改折线图的颜色
		            	normal:{
		            		color:'#fff',////修改折线图点的颜色
		            		lineStyle:{
		            			color:'#4ccb70'
		            		},
		            	}
		            },
		            data: data1,
		        },
		        {
		            name: '同比',
		            type: 'line',
		            barGap:'30',
		            itemStyle:{
		            	normal:{
		            		color:'#fff',
		            		lineStyle:{
		            			color:'#00ffff'
		            		}
		            	}
		            },
		            data: data2,	    
		        },
		    ]          
		}
		nystLine.setOption(optionnystLine)		
		
	}
	//nystLine('nystLine1','单位：头',['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],[15,42,60,40,16,10,9,8,7,30,58,53],[40,0,38,60,38,35,40,55,65,53,45,40],'{value}','#393c4b','#393c4b')
	//墒情  
	nystLine('nystLine3','土壤水分(%)',['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],[15,42,60,40,16,10,9,8,7,30,58,53],[40,0,38,60,38,35,40,55,65,53,45,40],'{value}','#393c4b','#393c4b')
	//寒潮
	nystLine('nystLine5','气温(℃)',['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],[15,42,60,40,16,10,9,8,7,30,58,53],[40,0,38,60,38,35,40,55,65,53,45,40],'{value}','#393c4b','#393c4b')
	//降水
	nystLine('nystLine7','降水量(mm)',['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],[15,42,60,40,16,10,9,8,7,30,58,53],[40,0,38,60,38,35,40,55,65,53,45,40],'{value}','#393c4b','#393c4b')
	
	//近1季度的虫情统计
	var data1;//虫情各个数据
	var data2;
	var data3;
	var data4;
	var data5;
	var ydata;//日期
	var legendData;//虫情的展示的名字
	var cqid;//虫情的id
	var cqname;//虫情的名字
	var jgdate = [];//转换后的日期
	var num;
	function nystLine2(id,text,legendData,color,ydata,data1,data2,data3,data4,data5,xline,yline,){	
		//获取token
		$.ajax({
			type:'get',
			dataType:'jsonp',
			url:'http://api.zjtpyun.com/rest?timestamp=20180226092024&user_name=zjst_api_user&method=top.aiot.plant.user.login&app_key=zjst_plant&format=json&password=718EBE33ABA45F3744EDCEC9A6D8878F&version=v1.0&callback=?',
			//url:'js/token.json',
			async:false,
			success:function(data){
				var token=data.result;
				var userToken=token.user_token;
				localStorage.setItem('key',userToken );
				user=localStorage.getItem('key');
			}
		})
		
		var nystLine=echarts.init(document.getElementById(id))
		var optionnystLine={
			title : {
		        text: text,
		        textStyle: {//水平轴字体颜色
                    color: '#909097',
                    fontSize: 12,
               },
               x:'3%',
               y:'10%'
		    },
			tooltip : {
	        	//trigger: 'item'   
		        trigger: 'axis',
		   	},
		   	legend: {
		        data:legendData,
		        x:'center',
		        y:'92%',
		        textStyle:{
		        	color:'#7e7e87'
		        }
		    },
		    color:color,
			xAxis:[
				{
					type:'category',
					data:ydata,										
					axisTick : {    // 轴标记
		                show:false,
		            },
		            axisLine : {    // 轴线
		                show: true,
		                lineStyle: {//水平州的颜色
		                    color: xline,
		                    type: 'solid',
		                    width: 1,
		                }
		            },
					axisLabel : {
		                show:true,
		                interval:0, //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数//X轴刻度配置
		                textStyle: {//水平轴字体颜色
		                    color: '#8e8e98',
		                    fontSize: 12,
		                },
   						interval:10//时间段 
			                
		           	},
		            splitLine : {//去掉背景曲线
		                show:false,		               
		            },
		            boundaryGap:false//去掉两头空白
				}	
			],
			yAxis:[
				{
					type:'value',
					position: 'left',
					axisTick : {    // 轴标记
		                show:false,
		            },
		            axisLine : {    // 轴线
		                show: true,
		                lineStyle: {//水平州的颜色
		                    color: yline,
		                    type: 'solid',
		                    width: 1,
		                },
		            },
		            splitLine : {//去掉背景曲线
		                show: false
		            },
		            axisLabel : {
		                show:true,
		                textStyle: {//垂直轴字体颜色
		                    color: '#8e8e98',
		                    fontSize: 12,
		                }
		           	},
		            axisLabel : {
	                    formatter: '{value}'
	                }
				}
			],
			series : [
		        {
		            name: '大螟',
		            type: 'line',
		            data: data1,
		        },
		        {
		            name: '二化螟',
		            type: 'line',
		            data: data2,	    
		        },
		        {
		            name: '稻纵卷叶螟',
		            type: 'line',
		            data: data3,	    
		        },
		        {
		            name: '白背飞虱',
		            type: 'line',
		            data: data4,	    
		        },
		        {
		            name: '褐飞虱',
		            type: 'line',
		            data: data5,	    
		        },
		    ]          
		}
		nystLine.setOption(optionnystLine)	
	}
	 legendData = [];
		data1=[];
		data2=[];//数据
		data3=[];
		data4=[];
		data5=[];
		ydata=[];
		$.ajax({
	        type:'get',
	        dataType:'jsonp',
	        url:'http://api.zjtpyun.com/rest?end_date=20180331000000&area_id=330000&method=top.aiot.plant.insect.data&app_key=zjst_plant&format=json&start_date=20180101000000&version=v1.0&callback=?&timestamp=20170224120008 ',
	        async:false,
	        cache:true,
	        success:function (data) {	        	
	        	var mess=data.result;
	        	data1=[];
        		data2=[];//数据
        		data3=[];
        		data4=[];
        		data5=[];
        		ydata=[];
	        	for(var j in mess){
	        		var areaId=mess[j].area_id;
	        		var areaName=mess[j].area_name;;
	        		var insectType=mess[j].insect_type;
	        			dates=mess[j].date;
	        			num=mess[j].number;
	        			
	        		var zhdata=new Date(dates);
	        		Date.prototype.format = function(format){ 
			            var o = { 
			            "M+" : this.getMonth()+1, //month 
			            "d+" : this.getDate(), //day 
			            "h+" : this.getHours(), //hour 
			            "m+" : this.getMinutes(), //minute 
			            "s+" : this.getSeconds(), //second 
			            "q+" : Math.floor((this.getMonth()+3)/3), //quarter 
			            "S" : this.getMilliseconds() //millisecond 
			            } 
			            if(/(y+)/.test(format)) { 
			            	format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
			            } 
			            for(var k in o) { 
				            if(new RegExp("("+ k +")").test(format)) { 
				            	format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length)); 
				            } 
			            } 
			            return format; 
			        }
	        		zhdata = zhdata.format("yyyy-MM-dd");
	        		
        			if(insectType==6){        				
        				//data1.push(mess[j].number);
        				data2.push(mess[j].number);
        				data3.push(mess[j].number);
        				data4.push(mess[j].number);
        				data5.push(mess[j].number);
        				if(cqid==6){
        					if(jgdate.indexOf(zhdata) == -1){
        						jgdate.push(zhdata);
        					}
	        				data1.push(mess[j].number);
	        			}
        			}else if(insectType==7){       				
        				data1.push(mess[j].number);
        				//data2.push(mess[j].number);
        				data3.push(mess[j].number);
        				data4.push(mess[j].number);
        				data5.push(mess[j].number);
        				if(cqid==7){
							if(jgdate.indexOf(zhdata) == -1){
        						jgdate.push(zhdata);
        					}		        			
        					data2.push(mess[j].number);
		        		}
        			}else if(insectType==8){       				
        				data1.push(mess[j].number);
        				data2.push(mess[j].number);
        				//data3.push(mess[j].number);
        				data4.push(mess[j].number);
        				data5.push(mess[j].number);
        				if(cqid==8){
							if(jgdate.indexOf(zhdata) == -1){
        						jgdate.push(zhdata);
        					}
							data3.push(mess[j].number);
		        		}
        			}else if(insectType==9){        				
        				data1.push(mess[j].number);
        				data2.push(mess[j].number);
        				data3.push(mess[j].number);
        				data4.push(mess[j].number);
      					data5.push(mess[j].number);
        				if(cqid==9){
							if(jgdate.indexOf(zhdata) == -1){
        						jgdate.push(zhdata);
        					}		        			
        					data4.push(mess[j].number);
		        		}
        			}else if(insectType==10){        				
        				data1.push(mess[j].number);
        				data2.push(mess[j].number);
        				data3.push(mess[j].number);
        				data4.push(mess[j].number);      
        				data5.push(mess[j].number);
        				if(cqid==10){
							if(jgdate.indexOf(zhdata) == -1){
        						jgdate.push(zhdata);
        					}		        			
        					data5.push(mess[j].number);      			
		        		}
        			}
	        	}	      
	        	
	        	nystLine2('nystLine2','单位：头',legendData,['#4dcb73','#37cbcb','#f2637b','#975fe4','#2e7cc9'],jgdate,data1,data2,data3,data4,data5,'#393c4b','#393c4b')	        	
	        }
        })

		//获取虫子
		$.ajax({
	        type:'get',
	        dataType:'jsonp',
	        async:false,
	        url:'http://api.zjtpyun.com/rest?timestamp=ene&user_token='+localStorage.getItem('key')+'&method=top.aiot.plant.insect.insects&app_key=zjst_plant&format=json&version=v1.0&callback=?',
	        success:function (data) {
	        	var mess=data.result;
	        		legendData=[];
	        	for(var k in mess){
	        		cqid=mess[k].id;	        		
	        		cqname=mess[k].name;
	        		legendData.push(cqname);	        		
	        		
	        	}
	        	//nystLine2('nystLine2','单位：头',legendData,['#4dcb73','#37cbcb','#f2637b','#975fe4','#2e7cc9'],jgdate,data1,data2,data3,data4,data5,'#393c4b','#393c4b')	        		       		
	        }
	        
        })
		
	
	//墒情
	function sqLine(id,text,color,ydata,data1,data2,data3,danw){
		var sqLine=echarts.init(document.getElementById(id))
		var optionsqLine={
			title : {
		        text: text,
		        textStyle: {//水平轴字体颜色
                    color: '#909097',
                    fontSize: 12,
               },
               x:'3%',
               y:'6%'
		    },
			tooltip : {
	        	trigger: 'item'        
		   	},
		    color:color,
			xAxis:[
				{
					type:'category',
					data:ydata,										
					axisTick : {    // 轴标记
		                show:false,
		            },
		            axisLine : {    // 轴线
		                show: true,
		                lineStyle: {//水平州的颜色
		                    color: '#393c4b',
		                    type: 'solid',
		                    width: 1
		                }
		            },
					axisLabel : {
		                show:true,
		                interval:0, //0：表示全部显示不间隔；auto:表示自动根据刻度个数和宽度自动设置间隔个数//X轴刻度配置
		                textStyle: {//水平轴字体颜色
		                    color: '#8e8e98',
		                    fontSize: 12,
		                },
		                
		           	},
		            splitLine : {//去掉背景曲线
		                show:false,		               
		            },
		            boundaryGap:false//去掉两头空白
				}	
			],
			yAxis:[
				{
					type:'value',
					position: 'left',
					axisTick : {    // 轴标记
		                show:false,
		            },
		            axisLine : {    // 轴线
		                show: true,
		                lineStyle: {//水平州的颜色
		                    color: '#393c4b',
		                    type: 'solid',
		                    width: 1
		                }
		            },
		            splitLine : {//去掉背景曲线
		                show: false
		            },
		            axisLabel : {
		                show:true,
		                textStyle: {//垂直轴字体颜色
		                    color: '#8e8e98',
		                    fontSize: 12,
		                }
		           	},
		           	axisLabel : {
	                    formatter:danw 
	                }
				}
			],
			series : [
		        {
		            name: '',
		            type: 'line',
		            data: data1,
		        },
		        {
		            name: '',
		            type: 'line',
		            data: data2,	    
		        },
		        {
		            name: '',
		            type: 'line',
		            data: data3,	    
		        }
		    ]          
		}
		sqLine.setOption(optionsqLine)
	}
	sqLine('nystLine4','土壤水分(%)',['#37cbcb','#4dcb73','#f2637b'],['10-23','10-30 ','11-6','11-13','11-20','11-27','12-04','12-11','12-18'],[15,40,16,40,42,60,40,16,40],[40,40,16,40,10,40,16,40,42],[40,16,42,30,40,16,42,58,53],'{value}')
	sqLine('nystLine6','气温(℃)',['#37cbcb','#4dcb73','#f2637b'],['10-23','10-30 ','11-6','11-13','11-20','11-27','12-04','12-11','12-18'],[15,40,16,40,42,60,40,16,40],[40,40,16,40,10,40,16,40,42],[40,16,42,30,40,16,42,58,53],'{value}')
	sqLine('nystLine8','降水量(mm)',['#37cbcb','#4dcb73','#f2637b'],['10-23','10-30 ','11-6','11-13','11-20','11-27','12-04','12-11','12-18'],[15,40,16,40,42,60,40,16,40],[40,40,16,40,10,40,16,40,42],[40,16,42,30,40,16,42,58,53],'{value}')
	//下一季度虫情预警
	function nystPie(id,color,place,styleColor,fontSize,datas,res){
		
		var nyjyPie=echarts.init(document.getElementById(id))
	    var optionnystPie={
	        tooltip : {
	            trigger: 'item',
	            show:false,//去除悬浮框
	            formatter: "{b} :({d}%)"
	        },
	        color:color,//修改的颜色
	        legend: {
	            orient : 'vertical',
	            x : 'left',
	        },
	        calculable : false,  
	        series : [
	            {
	                type:'pie',
	                radius : ['50%', '70%'],
	                center:place,//饼图的位置
	                avoidLabelOverlap:false,//避免圈内的文字重复
	                hoverAnimation:false,//外圈不变大
	                label:{
	                    normal:{
	                        show:true ,//去掉外面的导线和显示在圈内的文字
	                        position : 'center',
	                        formatter:function(){//显示在圈内的文字
	                            return res
	                        },
	                        textStyle:{
	                            color:styleColor,
	                            fontSize:fontSize
	                        }
	                    }
	                },
	                data:datas
	            }
	        ]
	    }
	    nyjyPie.setOption(optionnystPie)
	}
	
	nystPie('nystPie2',['#2c59ac','#2f3042'],['58%','34%'],'#fff','26',[
                    {value:80, name:'蓝色预警'},
                    {value:20, name:''}],'12%'
	)
	nystPie('nystPie3',['#f2637b','#2f3042'],['58%','31%'],'#fff','26',[
                    {value:80, name:'红色预警'},
                    {value:20, name:''}],'85%'
	)
	nystPie('nystPie4',['#fc7f32','#2f3042'],['58%','31%'],'#fff','26',[
                    {value:80, name:'橙色预警'},
                    {value:20, name:''}],'65%'
	)
	nystPie('nystPie5',['#bcbd2a','#2f3042'],['58%','31%'],'#fff','26',[
                    {value:80, name:'黄色预警'},
                    {value:20, name:''}],'35%'
	)
	nystPie('nystPie6',['#2c59ac','#2f3042'],['58%','31%'],'#fff','26',[
                    {value:80, name:'蓝色预警'},
                    {value:20, name:''}],'15%'
	)
	
	function nystpie(id,color,datas){
		var nystpie = echarts.init(document.getElementById(id));
		var optionnystpie = {
	        tooltip: {
	            trigger: 'item',
	            formatter: "{b}: {d}%"
	        },
	        color:color,//修改的颜色
	        legend: {
	            orient: 'horizonal',//数据是水平还是垂直放置 
	            x: 'left',//data放置的位置
	            y:'top',
	            itemGap:14,//数据之间的间距
	            itemWidth:6,  //图例标记的图形宽度
				itemHeight:6, //图例标记的图形高度
	            textStyle:{    //图例文字的样式
			        color:'#fff',
			        fontSize:12,
			    }, 
	        },
	        series: [
	            {
	                name:'访问来源',
	                type:'pie',
	                radius : ['50%', '70%'],
	                avoidLabelOverlap: false,
	                label: {
	                    normal: {
	                        show: false,
	                        position: 'center',
	                       	formatter: "{b}\n\n{d}%"
	                    },
	                    emphasis: {
	                        show: true,
	                        textStyle: {//鼠标移上去显示data字在圆圈中
	                            fontSize: '16.2',
	                            fontWeight: 'bold',
	                            color:'#fff',//圈内的颜色显示的颜色,不设置是给句修改的颜色,
	                        }
	                    }
	                },
	                labelLine: {
	                    normal: {
	                        show: false
	                    }
	                },
	                data:datas//value 占的数据
	            }
	        ]
	    }
	    nystpie.setOption(optionnystpie);
	    var i = 0;
	    function circle(obj,options,h) {
	        var dataLen = options.series[0].data.length;       
	        obj.dispatchAction({
	            type: 'highlight',
	            seriesIndex: 0,
	            dataIndex: h
	        });
	        for(var k=0;k<dataLen;k++){
	            if(k!= h){
	                obj.dispatchAction({
	                    type: 'downplay',
	                    seriesIndex: 0,
	                    dataIndex: k
	                })
	            }
	        }
	        h++;
	        if(h >= dataLen){
	            h = 0
	        }
	    }
		var time = setInterval(function(){
			if(i >= 4 ){
				i = 0
			}
			circle(nystpie,optionnystpie,i)
			i++;
		},1000);
	}
	nystpie('nystPie1',['#2e7cc9','#975fe4','#37cbcb','#4dcb73'],
	[
        {value:24,name:'温室'},//value 占的数据
        {value:34,name:'大田'},
        {value:06,name:'菜园'},
        {value:03,name:'果园'}
    ])

