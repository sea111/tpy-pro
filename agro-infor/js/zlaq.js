$(function(){
	//全省农资销售
	//封装的折线图
	function zlaqLine(id,text,ydata,data1,data2,legend){
		var zlaqLine=echarts.init(document.getElementById(id))		
		var optionzlaqLine={
			tooltip : {
		        trigger: 'axis', //item' | 'axis鼠标移上去呈线还是不呈现线
		    },
		    legend: {
		        data:legend,
		        x:'12%',
		        
		    },
			title : {
		        text:text,
				textStyle:{    //图例文字的样式
			        color:'#66676c',
			        fontSize:12,
			    }, 
			    x:'5%',
			    y:'13%',
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
		            min:0,//最小值
		            max:400//最大值
				}
			],
			series : [
		        {
		            name: '全省农资销售',
		            type: 'line',
		            barGap:'30',
		            symbol: 'circle',
		            symbolSize:'8',
		            itemStyle:{//修改折线图的颜色
		            	normal:{
		            		color:'#18a3fc',////修改折线图点的颜色
		            		lineStyle:{
		            			color:'#18a3fc'
		            		},
		            	}
		            },
		            data: data1,
		            areaStyle: {
	                    normal: {
	                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                            offset: 0,
	                            color: 'rgba(24,163,252,0.522)'                          
	                        }, {
	                                offset: 0.8,
	                                color: 'rgba(24,144,255, 0)'
	                                
	                            }], false),
	                        shadowColor: 'rgba(0, 0, 0, 0.1)', 
	                        shadowBlur: 10
						}
	                }
		        },
		        {
		            name: '全省农资销售',
		            type: 'line',
		            barGap:'30',
		            symbol: 'circle',
		            symbolSize:'8',
		            itemStyle:{//修改折线图的颜色
		            	normal:{
		            		color:'#4dbdeb',////修改折线图点的颜色
		            		lineStyle:{
		            			color:'#4dbdeb'
		            		},
		            	}
		            },
		            data: data2,
		            areaStyle: {
	                    normal: {
	                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                            offset: 0,
	                            color: 'rgba(24,163,252,0.522)'                          
	                        }, {
	                                offset: 0.8,
	                                color: 'rgba(24,144,255, 0)'
	                                
	                            }], false),
	                        shadowColor: 'rgba(0, 0, 0, 0.1)', 
	                        shadowBlur: 10
						}
	                }
		        }
		    ]
		}
		zlaqLine.setOption(optionzlaqLine)
	}
	//全省农资销售情况
	zlaqLine("zlaqLine",'单位',['2010','2011','2012','2013','2014','2015','2016','2017','2018'],[240, 300,225,230,240,375,150,360,90],'',['年销售统计'])
	//可追溯分析
	zlaqLine("zlaqLine2",'单位',['2010','2011','2012','2013','2014','2015','2016','2017','2018'],[240, 300,225,230,240,375,150,360,90],[180, 220,185,190,180,305,90,280,70],'')
	
	//封装的柱状图
	function zlaqBar(id,title,ydata,data){
		var zlaqBar=echarts.init(document.getElementById(id))		
		var optionzlaqBar={
			tooltip : {
		        trigger: 'axis'
		   	},
			title : {
		        text:title,
				textStyle:{    //图例文字的样式
			        color:'#66676c',
			        fontSize:12,
			    }, 
			    x:'5%',
			    y:'10%'
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
		                    color: '#8f8f93',
		                    type: 'solid',
		                    width: 1
		                }
		            },
					axisLabel : {
		                show:true,
		                textStyle: {//水平轴字体颜色
		                    color: '#8f8f93',
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
		                    color: '#8f8f93',
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
		                    color: '#8f8f93',
		                    fontSize: 12,
		                }
		           	},
		            min:0,//最小值
		            max:500//最大值
				}
			],
			series : [
		        {
		            type: 'bar',
		           	barWidth : 20,//柱图宽度
		            itemStyle:{//修改折线图的颜色
		            	normal:{	            		
		            		color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ //修改柱状图渐变的颜色
		                        offset: 0,
		                        color: '#0879de'
		                    }, {
		                        offset: 1,
		                        color: '#3636d4'
		                    }]),	                 		
		            		lineStyle:{
		            			color:'#8f8f93'
		            		},
		            	}
		            },
		            data: data
		        }
		    ]          
		}
		zlaqBar.setOption(optionzlaqBar)	
	}
	//全省农资销售情况柱状图
	zlaqBar("zlaqBar","单位",['种子','农药','肥料','兽药','饲料'],[240, 220,460,250,300])
	
	//环形图
	function zlaqPie(id,color,data){
		var zlaqPie = echarts.init(document.getElementById(id));
		var optionzlaqPie = {
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
	                radius: ['30%', '40%'],
	                avoidLabelOverlap: false,
	                label: {
	                    normal: {
	                        show: false,
	                        position: 'center',
	                       	formatter: "\n{b}\n\n {d}%"
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
	                data:data
	            }
	        ]
	    }
	    zlaqPie.setOption(optionzlaqPie);
	    
	    var i = 0,j = 0,p = 0,q=0;
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
			if( j >=4){
				j = 0;
			}
			if(p >=4){
				p = 0;
			}
			if(q >=2){
				q = 0;
			}
			circle(zlaqPie,optionzlaqPie,i)	
			circle(zlaqPie,optionzlaqPie,j)
			circle(zlaqPie,optionzlaqPie,p)
			circle(zlaqPie,optionzlaqPie,q)
			i++;
			j++;
			p++;
			q++;
			
		},1000);
	}
	//农资企业主体分析
	zlaqPie(
		"zlaqPie1",
		['#975fe4','#2e7cc9','#37cbcb','#4dcb73'],
		[
            {value:5272,name:'批发'},//value 占的数据
            {value:19999,name:'生产'},
            {value:29200,name:'零售'},
            {value:15265,name:'批零兼营'}
        ]
	)
	//农产品主体分析
	zlaqPie(
		"zlaqPie2",
		['#975fe4','#2e7cc9','#37cbcb','#4dcb73'],
		[
            {value:5272,name:'合作社'},//value 占的数据
            {value:19999,name:'龙头企业'},
            {value:29200,name:'家庭农场'},
            {value:15265,name:'其他'}
        ]
	)
	//三品一标认证
	zlaqPie(
		"zlaqPie3",
		['#975fe4','#2e7cc9','#37cbcb','#4dcb73'],
		[
            {value:5272,name:'无公害农产品'},//value 占的数据
            {value:19999,name:'绿色产品'},
            {value:29200,name:'有机食品'},
            {value:15265,name:'农产品地理标识'}
        ]
	)
	//农产品检测批次
	zlaqPie(
		"zlaqPie4",
		['#975fe4','#2e7cc9','#37cbcb'],
		[
			{value:5272,name:'合格数'},//value 占的数据
            {value:19999,name:'不合格数'}
        ]
	)	
	
	
})
