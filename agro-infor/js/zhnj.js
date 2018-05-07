$(function(){
	var zhnjBar1=echarts.init(document.getElementById('zhnjBar1'))
	var optionzhnjBar1={
		tooltip : {
	        trigger: 'item'
	   	},
	   	legend: {
	        data:['K','K1','HK','K2','GK'],
	        textStyle:{
	        	color:'#fff',
				fontSize:'12',				
	        }
	    },
	    color:['#f17f50','#87cef9','#da70d6','#32cd32','#6495ed'],//修改的颜色
		title : {
	        text:'单位:人',
			textStyle:{    //图例文字的样式
		        color:'rgb( 143, 143, 147 )',
		        fontSize:12,
		    }, 
	   	},
		xAxis:[
			{
				type:'category',
				data:['杭州市','宁波市','温州市','湖州市','嘉兴市','绍兴市','金华市','衢州市','丽水市','台州市','舟山市'],										
				axisTick : {    // 轴标记
	                show:false		               
	            },
	            axisLine : {    // 轴线
	                show: true,
	                lineStyle: {//水平州的颜色
	                    color: 'rgb( 143, 143, 147 )',
	                    type: 'solid',
	                    width: 1
	                }
	            },
				axisLabel : {
	                show:true,
	                textStyle: {//水平轴字体颜色
	                    color: 'rgb( 143, 143, 147 )',
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
	                show: true,
	                lineStyle:{
	                	type:'dashed',
	                	width:'1',
	                	color:'rgb( 22, 21, 61 )'
	                }
	            },
	            axisLine:{
	            	show:true,
	            	lineStyle:{
	            		color:'rgb( 143, 143, 147 )',
						type: 'solid',
	                    width: 1
	            	}
	            },
	            axisLabel : {
	                show:true,
	                textStyle: {//垂直轴字体颜色
	                    color: 'rgb( 143, 143, 147 )',
	                    fontSize: 12,  
	                }
	           	},
			}
		],
		series : [
	        {
	        	name:'K',
	            type:'bar',	            
	            barGap:'0.5px',//柱间距离
	           	barWidth :5,//柱图宽度	            
	            data: [3600,2300,3400,2600,2300,2600,2200,2000,1600,3000,2400]	            
	        },
	        {
	        	name:'K1',
	            type:'bar',
	            barGap:'0.5px',
	           	barWidth :5,	            
	            data: [4200,3200,3700,2800,3300,3000,2600,2600,3900,2600,2200]	            
	        },
	        {
	        	name:'HK',
	            type:'bar',
	            barGap:'0.5px',
	           	barWidth :5,            
	            data: [3300,3800,2200,3300,2200,3900,3500,2600,3900,2600,2200]	            
	        },
	        {
	        	name:'K2',
	            type:'bar',
	            barGap:'0.5px',
	           	barWidth :5,            
	            data: [3300,3800,2200,3300,2200,3900,3500,3900,2300,2600,2200]	            
	        },
	        {
	        	name:'GK',
	            type:'bar',
	            barGap:'0.5px',
	           	barWidth :5,            
	            data: [3300,3800,2200,3300,2200,3900,3500,2600,2300,2600,3900]	            
	        }
	    ]
	}
	zhnjBar1.setOption(optionzhnjBar1)
	
	//全省拖拉机数据统计
	var zhnjBar2=echarts.init(document.getElementById('zhnjBar2'))
	var optionzhnjBar2={
		title : {
	        text:'单位:辆',
			textStyle:{    //图例文字的样式
		        color:'rgb( 143, 143, 147 )',
		        fontSize:12,
		   	}
	   	},
		tooltip : {
	        trigger: 'item'
	   	},
	   	legend:{
	        data:['小型方向盘式拖拉机','手扶式拖拉机','大中型拖拉机'],
	        textStyle:{
	        	color:'#fff',
				fontSize:'12px',	
	        }
	    },
	    color:['#f17f50','#87cef9','#da70d6'],//修改的颜色
		xAxis:[
			{
				type:'category',
				data:['杭州市','宁波市','温州市','湖州市','嘉兴市','绍兴市','金华市','衢州市','丽水市','台州市','舟山市'],										
				axisTick : {    // 轴标记
	                show:false		               
	            },
	            axisLine : {    // 轴线
	                show: true,
	                lineStyle: {//水平州的颜色
	                    color: 'rgb( 143, 143, 147 )',
	                    type: 'solid',
	                    width: 1
	                }
	            },
				axisLabel : {
	                show:true,
	                textStyle: {//水平轴字体颜色
	                    color: 'rgb( 143, 143, 147 )',
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
	            splitLine : {//背景曲线
	                show: true,
	                lineStyle:{//修改背景曲线的样式
	                	type:'dashed',
	                	width:'1',
	                	color:'rgb( 22, 21, 61 )'
	                }
	            },
	            axisLine:{
	            	show:true,
	            	lineStyle:{
	            		color:'rgb( 143, 143, 147 )',
						type: 'solid',
	                    width: 1
	            	}
	            },
	            axisLabel : {
	                show:true,
	                textStyle: {//垂直轴字体颜色
	                    color: 'rgb( 143, 143, 147 )',
	                    fontSize: 12,  
	                }
	           	},
			}
		],
		series : [
	        {
	        	name:'小型方向盘式拖拉机',
	            type:'bar',	            
	            barGap:'0.5px',//柱间距离
	           	barWidth :5,//柱图宽度	            
	            data: [8200,5100,11100,6200,10800,4500,3800,8600,6500,8200,6200]	            
	        },
	        {
	        	name:'手扶式拖拉机',
	            type:'bar',
	            barGap:'0.5px',
	           	barWidth :5,	            
	            data: [42000,11200,21000,18500,23300,11500,17600,22600,28700,35600,12200]	            
	        },
	        {
	        	name:'大中型拖拉机',
	            type:'bar',
	            barGap:'0.5px',
	           	barWidth :5,            
	            data: [29300,8800,16200,13300,15200,37500,22500,28900,13200,15200,10000]	            
	        }
	    ]
	}
	zhnjBar2.setOption(optionzhnjBar2)
	
	//全省农机总投入情况
	var zhnjBar3=echarts.init(document.getElementById('zhnjBar3'))
	var optionzhnjBar3={
		title : {
	        text:'单位:万元',
			textStyle:{    //图例文字的样式
		        color:'rgb( 143, 143, 147 )',
		        fontSize:12,
		   	}
	   	},
		tooltip : {
	        trigger: 'item'
	   	},
	   	legend:{
	        data:['财政收入','单位和集体收入','农民个人投入','其他投入'],
	        textStyle:{
	        	color:'#fff',
				fontSize:'12px',	
	        }
	    },
	    color:['#f17f50','#87cef9','#da70d6','#32cd32'],//修改的颜色
		xAxis:[
			{
				type:'category',
				data:['杭州市','宁波市','温州市','湖州市','嘉兴市','绍兴市','金华市','衢州市','丽水市','台州市','舟山市'],										
				axisTick : {    // 轴标记
	                show:false		               
	            },
	            axisLine : {    // 轴线
	                show: true,
	                lineStyle: {//水平州的颜色
	                    color: 'rgb( 143, 143, 147 )',
	                    type: 'solid',
	                    width: 1
	                }
	            },
				axisLabel : {
	                show:true,
	                textStyle: {//水平轴字体颜色
	                    color: 'rgb( 143, 143, 147 )',
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
	            splitLine : {//背景曲线
	                show: true,
	                lineStyle:{//修改背景曲线的样式
	                	type:'dashed',
	                	width:'1',
	                	color:'rgb( 22, 21, 61 )'
	                }
	            },
	            axisLine:{
	            	show:true,
	            	lineStyle:{
	            		color:'rgb( 143, 143, 147 )',
						type: 'solid',
	                    width: 1
	            	}
	            },
	            axisLabel : {
	                show:true,
	                textStyle: {//垂直轴字体颜色
	                    color: 'rgb( 143, 143, 147 )',
	                    fontSize: 12,  
	                }
	           	},
			}
		],
		series : [
	        {
	        	name:'财政收入',
	            type:'bar',	            
	            barGap:'0.5px',//柱间距离
	           	barWidth :5,//柱图宽度	            
	            data: [4800,2500,5100,3500,5100,3100,2800,4600,3900,4800,3300]	            
	        },
	        {
	        	name:'单位和集体收入',
	            type:'bar',
	            barGap:'0.5px',
	           	barWidth :5,	            
	            data: [22300,5100,10500,7200,12000,6100,8230,12000,14500,17800,7100]	            
	        },
	        {
	        	name:'农民个人投入',
	            type:'bar',
	            barGap:'0.5px',
	           	barWidth :5,            
	            data: [14500,3800,7300,6600,7150,17100,12500,14800,7300,8600,5000]	            
	        },
	        {
	        	name:'其他投入',
	            type:'bar',
	            barGap:'0.5px',
	           	barWidth :5,	            
	            data: [17200,24500,18200,21500,16300,7200,22300,13400,12500,2100,21500]	            
	        },
	    ]
	}
	zhnjBar3.setOption(optionzhnjBar3)
	
	//购机补贴情况
	var zhnjPie=echarts.init(document.getElementById('zhnjPie'))
	var optionzhnjPie={
		tooltip: {
            trigger: 'item',
            formatter: "{b}: {d}%"
        },
        color:['#975fe4','#2e7cc9','#37cbcb','#4dcb73'],//修改的颜色
        series: [
            {
                name:'中央补贴',
                type:'pie',
                radius: ['30%', '40%'],
                center:['15%','28%'],//饼图的位置
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
                            fontSize: '18',
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
                    {value:5272,name:'中央补贴'},//value 占的数据
                    {value:1999,name:'省补贴'},
                    {value:29200,name:'市补贴'},
                    {value:15265,name:'县补贴'}
                ]
            }
    	]
	}
	zhnjPie.setOption(optionzhnjPie)
	var i = 0;
    function circle() {
        var dataLen = optionzhnjPie.series[0].data.length;
        zhnjPie.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: i
        });
        for(var k=0;k<dataLen;k++){
            if(k!= i){
                zhnjPie.dispatchAction({
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
    zhnjPie.on("mouseout",function (params) {
        i++;
        clearInterval(time);
        time = setInterval(circle,2000);
    });
    zhnjPie.on("mouseover",function (params) {
        clearInterval(time);
        var $index = params.dataIndex;
        i = $index;
        var dataLen = optionzhnjPie.series[0].data.length;
        for(var k=0;k<dataLen;k++){
            if(k!= i){
                zhnjPie.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 0,
                    dataIndex: k
                })
            }
        }
    })
	




})
