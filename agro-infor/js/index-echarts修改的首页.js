$(function(){
	//农林牧副渔总产值
	var echartsScatter=echarts.init(document.getElementById('echartsScatter'))
		var optionScatter={
		tooltip : {
	        trigger: 'item'
	    },
		title : {
	        text:'单位：万吨',
			textStyle:{    //图例文字的样式
		        color:'#66676c',
		        fontSize:12,
		   }, 
		    itemGap:3
	    },
		color:['#0fb4d6'],
		xAxis:[
			{
				type:'category',
				data:['2011','2012','2013','2014','2015','2016'],										
				axisTick : {    // 轴标记
	                show:false		               
	            },
	            axisLine : {    // 轴线
	                show: true,
	                lineStyle: {//水平州的颜色
	                    color: '#3a3c4c',
	                    type: 'solid',
	                    width: 1
	                }
	            },
				axisLabel : {
	                show:true,
	                textStyle: {//水平轴字体颜色
	                    color: 'rgba( 255, 255, 255, 0.4 )',
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
	                length:1000,
	            },
	            splitLine : {
	                show: false
	            },
	           	
	            axisLine : {    // 轴线
	                show: true,
	                lineStyle: {//水平州的颜色
	                    color: '#3a3c4c',
	                    type: 'solid',
	                    width: 1
	                }
	            },
	            axisLabel : {
	                show:true,
	                textStyle: {//水平轴字体颜色
	                    color: 'rgba( 255, 255, 255, 0.4 )',
	                    fontSize: 12,
	                }
	           	},
	            min:null,//最小值
	            max:4000//最大值
			}
		],
		series : [
	        {
	            name: '产量',
	            type: 'scatter',
	            barWidth:14,//柱的宽度
	            barGap:'30',
	            symbol: 'circle',//'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
		        symbolSize: function (data) {//气泡显示的大小
		            return Math.pow(data[1] / 550,2);//方法pow(x,y)返回 x 的 y 次幂
		        },
		        label: {
		            emphasis: {
		                show: true,
		                formatter: function (param) {
		                    return param.data[1];
		                }
		            }
		        },
	            data:[
			            ['2011',1600],
			            ['2012',2100],
			            ['2013',3200],
			            ['2014',1800],
			            ['2015',2600],
			            ['2016',1900]
			        ]
	        },
	    ]          
	}
	echartsScatter.setOption(optionScatter)

	//环形图
    var echartsPie = echarts.init(document.getElementById('echartsPie'));
    var option = {
        tooltip: {
            trigger: 'item',
            //formatter: "{b}: {c} ({d}%)"//a（系列名称），b（数据项名称），c（数值）, d（百分比）
            formatter: "{b}: {d}%"
        },
        color:['#975fe4','#2e7cc9','#37cbcb','#4dcb73','#f2637b'],//修改的颜色
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
                //radius: ['30%', '40%'],//饼图的半径大小
                radius:["40%","55%"],//内圈 外圈
                center:['35%','46%'],//饼图的位置 左 下
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center',
                       // formatter: "{b}\n {c}({d}%)" // \n可以让饼图中央的数据换行
                       	formatter: "{b}\n\n {d}%"
                    },
                    emphasis: {
                        show: true,
                        textStyle: {//鼠标移上去显示data字在圆圈中
                            fontSize: '16.2',
                            fontWeight: 'nomal',
                            color:'#fff',//圈内的颜色显示的颜色,不设置是给句修改的颜色,
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:360,name:'农业'},//value 占的数据
                    {value:200,name:'林业'},
                    {value:160,name:'牧业'},
                    {value:100,name:'渔业'},
                    {value:90, name:'农林牧渔服务业'}
                ]
            }
        ]
    }
    echartsPie.setOption(option);
    var i = 0;
    function circle() {
        var dataLen = option.series[0].data.length;
        echartsPie.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: i
        });
        for(var k=0;k<dataLen;k++){
            if(k!= i){
                echartsPie.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 0,
                    dataIndex: k
                })
            }
        }
        i++;
        if(i >= dataLen){
            i = 0
        }
    }
    var time = setInterval(circle,2000);
    echartsPie.on("mouseout",function (params) {
        i++;
        clearInterval(time);
        time = setInterval(circle,2000);
    });
    echartsPie.on("mouseover",function (params) {
        clearInterval(time);
        var $index = params.dataIndex;
        i = $index;
        var dataLen = option.series[0].data.length;
        for(var k=0;k<dataLen;k++){
            if(k!= i){
                echartsPie.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 0,
                    dataIndex: k
                })
            }
        }
    })

	//农作物总播种产量柱状图
	var echartsBar=echarts.init(document.getElementById('echartsBar'))
	var optionBar={
		tooltip : {
	        trigger: 'item'
	    },
		title : {
	        text:'单位：万吨',
			textStyle:{    //图例文字的样式
		        color:'#66676c',
		        fontSize:12,
		    }, 
	    },
		color:['#0fb4d6'],
		xAxis:[
			{
				type:'category',
				data:['2011','','2012','','2013','','2014','','2015','','2016'],										
				axisTick : {    // 轴标记
	                show:false		               
	            },
	            axisLine : {    // 轴线
	                show: true,
	                lineStyle: {//水平州的颜色
	                    color: '#3a3c4c',
	                    type: 'solid',
	                    width: 1
	                }
	            },
				axisLabel : {
	                show:true,
	                textStyle: {//水平轴字体颜色
	                    color: 'rgba( 255, 255, 255, 0.4 )',
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
	            splitLine : {//去掉背景曲线
	                show: false
	            },
	            axisLabel : {
	                show:true,
	                textStyle: {//垂直轴字体颜色
	                    color: 'rgba( 255, 255, 255, 0.4 )',
	                    fontSize: 12,
	                }
	           	},
	            min:500,//最小值
	            max:4000//最大值
			}
		],
		series : [
	        {
	            name: '产量',
	            type: 'bar',
	            barWidth:14,//柱的宽度
	            barGap:'30',
	            data: [800,1400, 1800,3000, 2800,1800, 1500,2450, 2600,2300, 900]
	        },
	    ]          
	}
	echartsBar.setOption(optionBar)	
	
	//农作物总播放面积折线		
	var echartsBar2=echarts.init(document.getElementById('echartsBar2'))
	var optionBar2={
		tooltip : {
	        trigger: 'item'
	    },
		title : {
	        text:'单位：万亩',
			textStyle:{    //图例文字的样式
		        color:'#66676c',
		        fontSize:12,
		    }, 
	    },
		color:['#0fb4d6'],
		xAxis:[
			{
				type:'category',
				data:['2011','','2012','','2013','','2014','','2015','','2016'],										
				axisTick : {    // 轴标记
	                show:false		               
	            },
	            axisLine : {    // 轴线
	                show: true,
	                lineStyle: {//水平州的颜色
	                    color: '#3a3c4c',
	                    type: 'solid',
	                    width: 1
	                }
	            },
				axisLabel : {
	                show:true,
	                textStyle: {//水平轴字体颜色
	                    color: 'rgba( 255, 255, 255, 0.4 )',
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
	            splitLine : {//去掉背景曲线
	                show: false
	            },
	            axisLabel : {
	                show:true,
	                textStyle: {//垂直轴字体颜色
	                    color: 'rgba( 255, 255, 255, 0.4 )',
	                    fontSize: 12,
	                }
	           	},
	            min:500,//最小值
	            max:4000//最大值
			}
		],
		series : [
	        {
	            name: '产量',
	            type: 'line',
	            //barWidth:14,//柱的宽度
	            barGap:'30',
	            data: [800,1400, 1800,3000, 2800,1800, 1500,2450, 2600,2300, 900]
	        },
	    ]          
	}
	echartsBar2.setOption(optionBar2)
	
	//农作物总播种面积
	//总产量环形图		
	function datas(datas,ids){
		var echartsPie1 = echarts.init(document.getElementById(ids));
		var echartsPie2 = echarts.init(document.getElementById(ids));
		var echartsPie3 = echarts.init(document.getElementById(ids));
		var echartsPie4 = echarts.init(document.getElementById(ids));	
		
		
		var optionPie = {	
			tooltip: {
	            trigger: 'item',
	            //formatter: "{b}: {c} ({d}%)"//a（系列名称），b（数据项名称），c（数值）, d（百分比）
	            formatter: "{b}: {d}%"
	        },
			title: {//圆圈中心的数字
		        //text: '36%',
		        x: 'center',
		        y: 'center',
		        textStyle : {
		            color : '#fff',
		            fontFamily : '微软雅黑',
		            fontSize :10,
		        }
		    },
	        tooltip: {
	        	enterable:false,
	        	showContent:false,
	        	show:false,
	        },
	        color:['#4dd3e2','#6b6d76'],//修改的颜色
	        legend: {
	            textStyle:{    //图例文字的样式
			        color:'#fff',
			        fontSize:12,
			    }, 
	        },
	        series: [
	            {
	                name:'访问来源',
	                type:'pie',
	                radius: ['20%', '30%'],
	                avoidLabelOverlap: false,
	                label: {
	                    normal: {
	                        show: false,
	                        position: 'center',
	                        formatter: "{b}\n ({d}%)" // \n可以让饼图中央的数据换行
	                       	//formatter: "{d}%"
	                    },
	                    emphasis: {
	                        show: true,
	                        textStyle: {//鼠标移上去显示data字在圆圈中
	                            fontSize: '16.2',
	                            fontWeight: 'nomal',
	                            color:'#fff',//圈内的颜色显示的颜色,不设置是给句修改的颜色,
	                        }
	                    }
	                },
	                labelLine: {
	                    normal: {
	                        show: false
	                    }
	                },
	                data:datas
	                /*data:[
	                    {value:0,name:''},//value 占的数据,name不写的话鼠标移上去就不显示
	                    {value:0,name:''},
	
	                ]*/
	            }
	        ]
	    };
	    echartsPie1.setOption(optionPie);
	    echartsPie2.setOption(optionPie);
	    echartsPie3.setOption(optionPie);
	    echartsPie4.setOption(optionPie);
	    
	}
	datas([
		{value:20,name:'产粮'},//value 占的数据,name不写的话鼠标移上去就不显示
	    {value:80,name:'剩余'},
	],"echartsPie1")
    datas([
		{value:50,name:'产粮'},//value 占的数据,name不写的话鼠标移上去就不显示
	    {value:50,name:'剩余'},
	],"echartsPie2")
    datas([
		{value:40,name:'产粮'},//value 占的数据,name不写的话鼠标移上去就不显示
	    {value:60,name:'剩余'},
	],"echartsPie3")
    datas([
		{value:70,name:'产粮'},//value 占的数据,name不写的话鼠标移上去就不显示
	    {value:30,name:'剩余'},
	],"echartsPie4")
	//农村居民人均纯收入趋势


	//城镇居民收入分析
	function run(cur,total,id){  
        var bar = document.getElementById(id);         
	    bar.style.width=parseInt(bar.style.width) + 1 + "%";//进度条走的百分数 
	   	var stop = (parseInt(cur)/ parseInt(total)) * 100 +"%";	   		   
	    if(bar.style.width == stop){  
	      	window.clearTimeout(timeout); 
	      	return; 
	    } 
	    var timeout=window.setTimeout(function(){
	    	run(cur,total,id)
	    },5);
  	} 
  
    //粮食产量种类
    run(70,100,'bar3');
	run(70,100,'bar4');
	run(70,100,'bar5');
	run(70,100,'bar6');
	//茶叶
	run(40,100,'bar7');
	run(40,100,'bar8');
	run(40,100,'bar9');
	run(40,100,'bar10');
	run(40,100,'bar11');
	run(40,100,'bar12');
	run(40,100,'bar13');
	run(40,100,'bar14');
	run(40,100,'bar15');
	run(40,100,'bar16');
	run(40,100,'bar17');
	run(40,100,'bar18');
	run(40,100,'bar19');
	run(40,100,'bar20');
	run(40,100,'bar21');
	run(40,100,'bar22');
	run(40,100,'bar23');
	run(40,100,'bar24');
	run(40,100,'bar25');
	run(40,100,'bar26');
	run(40,100,'bar27');
	run(40,100,'bar28');

	
    
    //面积趋势和产量趋势
    var echartsLineArea1 = echarts.init(document.getElementById('echartsLineArea1'));    
    var echartsLineArea2 = echarts.init(document.getElementById('echartsLineArea2'));       
    var echartsLineArea3 = echarts.init(document.getElementById('echartsLineArea3'));    
    var echartsLineArea4 = echarts.init(document.getElementById('echartsLineArea4'));   
    var echartsLineArea5 = echarts.init(document.getElementById('echartsLineArea5'));   
    var echartsLineArea6 = echarts.init(document.getElementById('echartsLineArea6'));   
    var echartsLineArea7 = echarts.init(document.getElementById('echartsLineArea7'));   
    var echartsLineArea8 = echarts.init(document.getElementById('echartsLineArea8'));   
    var echartsLineArea9 = echarts.init(document.getElementById('echartsLineArea9'));   
    var echartsLineArea10 = echarts.init(document.getElementById('echartsLineArea10'));   
    var echartsLineArea11 = echarts.init(document.getElementById('echartsLineArea11'));   
    var echartsLineArea12 = echarts.init(document.getElementById('echartsLineArea12'));   
    var echartsLineArea13 = echarts.init(document.getElementById('echartsLineArea13'));   
    var echartsLineArea14 = echarts.init(document.getElementById('echartsLineArea14'));   
    var echartsLineArea15 = echarts.init(document.getElementById('echartsLineArea15'));   
    var echartsLineArea16 = echarts.init(document.getElementById('echartsLineArea16'));   
    var echartsLineArea17 = echarts.init(document.getElementById('echartsLineArea17'));   
    var echartsLineArea18 = echarts.init(document.getElementById('echartsLineArea18'));   
    
    optionLineArea1 = {
        /*title : {
            text: '面积趋势',
            textStyle:{
                textAlign:'center',
                fontSize:'14px',
                color:'rgba( 255, 255, 255, 0.6 )'
            },
            x:"center"
        },*/
        title:{
			text:'单位:万亩',
			textStyle:{//title颜色
				color:'#8a8a92',
				fontSize:12
			}
		},
        tooltip : {
            trigger: 'axis'
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['','2012','2013','2014','2015','2016','2017'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine:{show: false},//去除网格线
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }

            }
        ],
        series : [
            {
                name:'万亩',
                type:'line',
                symbol:"none",
                smooth:true,
                itemStyle: {normal: {
                    areaStyle: {
                        type: 'default',
                        color:'#0f3455'
                    },
                    lineStyle:{
                        color:'#0d87a4',
                        width:'3'
                    }
                }
                },
                data:[200, 300, 220, 210, 260, 200, 190]
            }
        ]
    };
    optionLineArea2 = {
    	title:{
			text:'单位:万吨',
			textStyle:{//title颜色
				color:'#8a8a92',
				fontSize:12
			}
		},
        
        tooltip : {
            trigger: 'axis'
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['','2012','2013','2014','2015','2016','2017'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine:{show: false},//去除网格线
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }

            }
        ],
        series : [
            {
                name:'万吨',
                type:'line',
                symbol:"none",
                smooth:true,
                itemStyle: {normal: {
                    areaStyle: {
                        type: 'default',
                        color:'#0f3455'
                    },
                    lineStyle:{
                        color:'#0d87a4',
                        width:'3'
                    }
                }
                },
                data:[200, 300, 220, 210, 260, 200, 190]
            }
        ]
    };
    optionLineArea3 = {
        title:{
			text:'单位:万亩',
			textStyle:{//title颜色
				color:'#8a8a92',
				fontSize:12
			}
		},
        tooltip : {
            trigger: 'axis'
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['','2012','2013','2014','2015','2016','2017'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine:{show: false},//去除网格线
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }

            }
        ],
        series : [
            {
                name:'万亩',
                type:'line',
                symbol:"none",
                smooth:true,
                itemStyle: {normal: {
                    areaStyle: {
                        type: 'default',
                        color:'#0f3455'
                    },
                    lineStyle:{
                        color:'#0d87a4',
                        width:'3'
                    }
                }
                },
                data:[200, 300, 220, 210, 260, 200, 190]
            }
        ]
    };
    optionLineArea4 = {
        title:{
			text:'单位:万吨',
			textStyle:{//title颜色
				color:'#8a8a92',
				fontSize:12
			}
		},
        tooltip : {
            trigger: 'axis'
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['','2012','2013','2014','2015','2016','2017'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine:{show: false},//去除网格线
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }

            }
        ],
        series : [
            {
                name:'万吨',
                type:'line',
                symbol:"none",
                smooth:true,
                itemStyle: {normal: {
                    areaStyle: {
                        type: 'default',
                        color:'#0f3455'
                    },
                    lineStyle:{
                        color:'#0d87a4',
                        width:'3'
                    }
                }
                },
                data:[200, 300, 220, 210, 260, 200, 190]
            }
        ]
    };
    optionLineArea5 = {
        title:{
			text:'单位:万亩',
			textStyle:{//title颜色
				color:'#8a8a92',
				fontSize:12
			}
		},
        tooltip : {
            trigger: 'axis'
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['','2012','2013','2014','2015','2016','2017'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine:{show: false},//去除网格线
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }

            }
        ],
        series : [
            {
                name:'万亩',
                type:'line',
                symbol:"none",
                smooth:true,
                itemStyle: {normal: {
                    areaStyle: {
                        type: 'default',
                        color:'#0f3455'
                    },
                    lineStyle:{
                        color:'#0d87a4',
                        width:'3'
                    }
                }
                },
                data:[200, 300, 220, 210, 260, 200, 190]
            }
        ]
    };
    optionLineArea6 = {
        title:{
			text:'单位:万吨',
			textStyle:{//title颜色
				color:'#8a8a92',
				fontSize:12
			}
		},
        tooltip : {
            trigger: 'axis'
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['','2012','2013','2014','2015','2016','2017'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine:{show: false},//去除网格线
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }

            }
        ],
        series : [
            {
                name:'万吨',
                type:'line',
                symbol:"none",
                smooth:true,
                itemStyle: {normal: {
                    areaStyle: {
                        type: 'default',
                        color:'#0f3455'
                    },
                    lineStyle:{
                        color:'#0d87a4',
                        width:'3'
                    }
                }
                },
                data:[200, 300, 220, 210, 260, 200, 190]
            }
        ]
    };
    optionLineArea7 = {
        title:{
			text:'单位:万亩',
			textStyle:{//title颜色
				color:'#8a8a92',
				fontSize:12
			}
		},
        tooltip : {
            trigger: 'axis'
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['','2012','2013','2014','2015','2016','2017'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine:{show: false},//去除网格线
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }

            }
        ],
        series : [
            {
                name:'万亩',
                type:'line',
                symbol:"none",
                smooth:true,
                itemStyle: {normal: {
                    areaStyle: {
                        type: 'default',
                        color:'#0f3455'
                    },
                    lineStyle:{
                        color:'#0d87a4',
                        width:'3'
                    }
                }
                },
                data:[200, 300, 220, 210, 260, 200, 190]
            }
        ]
    };
    optionLineArea8 = {
        title:{
			text:'单位:万吨',
			textStyle:{//title颜色
				color:'#8a8a92',
				fontSize:12
			}
		},
        tooltip : {
            trigger: 'axis'
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['','2012','2013','2014','2015','2016','2017'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine:{show: false},//去除网格线
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }

            }
        ],
        series : [
            {
                name:'万吨',
                type:'line',
                symbol:"none",
                smooth:true,
                itemStyle: {normal: {
                    areaStyle: {
                        type: 'default',
                        color:'#0f3455'
                    },
                    lineStyle:{
                        color:'#0d87a4',
                        width:'3'
                    }
                }
                },
                data:[200, 300, 220, 210, 260, 200, 190]
            }
        ]
    };
    optionLineArea9 = {
        title:{
			text:'单位:万亩',
			textStyle:{//title颜色
				color:'#8a8a92',
				fontSize:12
			}
		},
        tooltip : {
            trigger: 'axis'
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['','2012','2013','2014','2015','2016','2017'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine:{show: false},//去除网格线
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }

            }
        ],
        series : [
            {
                name:'万亩',
                type:'line',
                symbol:"none",
                smooth:true,
                itemStyle: {normal: {
                    areaStyle: {
                        type: 'default',
                        color:'#0f3455'
                    },
                    lineStyle:{
                        color:'#0d87a4',
                        width:'3'
                    }
                }
                },
                data:[200, 300, 220, 210, 260, 200, 190]
            }
        ]
    };
    optionLineArea10 = {
        title:{
			text:'单位:万吨',
			textStyle:{//title颜色
				color:'#8a8a92',
				fontSize:12
			}
		},
        tooltip : {
            trigger: 'axis'
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['','2012','2013','2014','2015','2016','2017'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine:{show: false},//去除网格线
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }

            }
        ],
        series : [
            {
                name:'万吨',
                type:'line',
                symbol:"none",
                smooth:true,
                itemStyle: {normal: {
                    areaStyle: {
                        type: 'default',
                        color:'#0f3455'
                    },
                    lineStyle:{
                        color:'#0d87a4',
                        width:'3'
                    }
                }
                },
                data:[200, 300, 220, 210, 260, 200, 190]
            }
        ]
    };
    optionLineArea11 = {
        title:{
			text:'单位:万亩',
			textStyle:{//title颜色
				color:'#8a8a92',
				fontSize:12
			}
		},
        tooltip : {
            trigger: 'axis'
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['','2012','2013','2014','2015','2016','2017'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine:{show: false},//去除网格线
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }

            }
        ],
        series : [
            {
                name:'万亩',
                type:'line',
                symbol:"none",
                smooth:true,
                itemStyle: {normal: {
                    areaStyle: {
                        type: 'default',
                        color:'#0f3455'
                    },
                    lineStyle:{
                        color:'#0d87a4',
                        width:'3'
                    }
                }
                },
                data:[200, 300, 220, 210, 260, 200, 190]
            }
        ]
    };
    optionLineArea12 = {
        title:{
			text:'单位:万吨',
			textStyle:{//title颜色
				color:'#8a8a92',
				fontSize:12
			}
		},
        tooltip : {
            trigger: 'axis'
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['','2012','2013','2014','2015','2016','2017'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine:{show: false},//去除网格线
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }

            }
        ],
        series : [
            {
                name:'万吨',
                type:'line',
                symbol:"none",
                smooth:true,
                itemStyle: {normal: {
                    areaStyle: {
                        type: 'default',
                        color:'#0f3455'
                    },
                    lineStyle:{
                        color:'#0d87a4',
                        width:'3'
                    }
                }
                },
                data:[200, 300, 220, 210, 260, 200, 190]
            }
        ]
    };
    optionLineArea13 = {
        title:{
			text:'单位:万亩',
			textStyle:{//title颜色
				color:'#8a8a92',
				fontSize:12
			}
		},
        tooltip : {
            trigger: 'axis'
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['','2012','2013','2014','2015','2016','2017'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine:{show: false},//去除网格线
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }

            }
        ],
        series : [
            {
                name:'万亩',
                type:'line',
                symbol:"none",
                smooth:true,
                itemStyle: {normal: {
                    areaStyle: {
                        type: 'default',
                        color:'#0f3455'
                    },
                    lineStyle:{
                        color:'#0d87a4',
                        width:'3'
                    }
                }
                },
                data:[200, 300, 220, 210, 260, 200, 190]
            }
        ]
    };
    optionLineArea14 = {
        title:{
			text:'单位:万吨',
			textStyle:{//title颜色
				color:'#8a8a92',
				fontSize:12
			}
		},
        tooltip : {
            trigger: 'axis'
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['','2012','2013','2014','2015','2016','2017'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine:{show: false},//去除网格线
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }

            }
        ],
        series : [
            {
                name:'万吨',
                type:'line',
                symbol:"none",
                smooth:true,
                itemStyle: {normal: {
                    areaStyle: {
                        type: 'default',
                        color:'#0f3455'
                    },
                    lineStyle:{
                        color:'#0d87a4',
                        width:'3'
                    }
                }
                },
                data:[200, 300, 220, 210, 260, 200, 190]
            }
        ]
    };
        optionLineArea15 = {
        title:{
			text:'单位:万亩',
			textStyle:{//title颜色
				color:'#8a8a92',
				fontSize:12
			}
		},
        tooltip : {
            trigger: 'axis'
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['','2012','2013','2014','2015','2016','2017'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine:{show: false},//去除网格线
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }

            }
        ],
        series : [
            {
                name:'万亩',
                type:'line',
                symbol:"none",
                smooth:true,
                itemStyle: {normal: {
                    areaStyle: {
                        type: 'default',
                        color:'#0f3455'
                    },
                    lineStyle:{
                        color:'#0d87a4',
                        width:'3'
                    }
                }
                },
                data:[200, 300, 220, 210, 260, 200, 190]
            }
        ]
    };
    optionLineArea16 = {
        title:{
			text:'单位:万吨',
			textStyle:{//title颜色
				color:'#8a8a92',
				fontSize:12
			}
		},
        tooltip : {
            trigger: 'axis'
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['','2012','2013','2014','2015','2016','2017'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine:{show: false},//去除网格线
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }

            }
        ],
        series : [
            {
                name:'万吨',
                type:'line',
                symbol:"none",
                smooth:true,
                itemStyle: {normal: {
                    areaStyle: {
                        type: 'default',
                        color:'#0f3455'
                    },
                    lineStyle:{
                        color:'#0d87a4',
                        width:'3'
                    }
                }
                },
                data:[200, 300, 220, 210, 260, 200, 190]
            }
        ]
    };
    optionLineArea17 = {
        title:{
			text:'单位:万头/羽',
			textStyle:{//title颜色
				color:'#8a8a92',
				fontSize:12
			}
		},
        tooltip : {
            trigger: 'axis'
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['2011','2012','2013','2014','2015','2016','2017'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine:{//false去除网格线
                	show: true,
                	lineStyle:{
                		color: ['#ccc'],
					    width: 1,
					    type: 'dashed'
                	}
                },
                axisLine: {show: false},//去掉y轴
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                },
                min:500,
        		max:5000,
            }
        ],
        series : [
            {
                name:'万头/羽',
                type:'line',
                symbol:"none",
                smooth:true,
                itemStyle: {normal: {
                    areaStyle: {
                        type: 'default',
                        color:'#0f3455'
                    },
                    lineStyle:{
                        color:'#0d87a4',
                        width:'3'
                    }
                }
                },
                data:[2000, 1800, 2500, 4000, 3000, 2000,2400,1500,1000]
            }
        ]
    };
    optionLineArea18 = {
        title:{
			text:'单位:万头/羽',
			textStyle:{//title颜色
				color:'#8a8a92',
				fontSize:12
			}
		},
        tooltip : {
            trigger: 'axis'
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['','2012','2013','2014','2015','2016','2017'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                splitLine:{//false去除网格线
                	show: true,
                	lineStyle:{
                		color: ['#ccc'],
					    width: 1,
					    type: 'dashed'
                	}
                },
                axisLine: {show: false},//去掉y轴
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba( 255, 255, 255, 0.4 )'
                    }
                },
                color:'rgba( 255, 255, 255, 0.2 )',
                axisTick:{
                    show:false
                },
                min:500,
        		max:5000,

            }
        ],
        series : [
            {
                name:'万头/羽',
                type:'line',
                symbol:"none",
                smooth:true,
                itemStyle: {normal: {
                    areaStyle: {
                        type: 'default',
                        color:'#0f3455'
                    },
                    lineStyle:{
                        color:'#0d87a4',
                        width:'3'
                    }
                }
                },
                data:[2000, 1800, 2500, 4000, 3000, 2000,2400,1500,1000]
            }
        ]
    };
    echartsLineArea1.setOption(optionLineArea1);
	echartsLineArea2.setOption(optionLineArea2);
    echartsLineArea3.setOption(optionLineArea3);
	echartsLineArea4.setOption(optionLineArea4);
	echartsLineArea5.setOption(optionLineArea5);
	echartsLineArea6.setOption(optionLineArea6);
	echartsLineArea7.setOption(optionLineArea7);
	echartsLineArea8.setOption(optionLineArea8);
	echartsLineArea9.setOption(optionLineArea9);
	echartsLineArea10.setOption(optionLineArea10);
	echartsLineArea11.setOption(optionLineArea11);
	echartsLineArea12.setOption(optionLineArea12);
	echartsLineArea13.setOption(optionLineArea13);
	echartsLineArea14.setOption(optionLineArea14);
	echartsLineArea15.setOption(optionLineArea15);
	echartsLineArea16.setOption(optionLineArea16);
	echartsLineArea17.setOption(optionLineArea17);
	echartsLineArea18.setOption(optionLineArea18);
    
})