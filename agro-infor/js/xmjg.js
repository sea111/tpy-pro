$(function(){
	/*今日调入量 */	
	//地图
	function getEcharts(id){
	    // Step:3 conifg ECharts's path, link to echarts.js from current page.
	    // Step:3 为模块加载器配置echarts的路径，从当前页面链接到echarts.js，定义所需图表路径
	    require.config({
	        paths: {
	            echarts: './js'
	        }
	    });	    
	    // Step:4 require echarts and use it in the callback.
	    // Step:4 动态加载echarts然后在回调函数中开始使用，注意保持按需加载结构定义图表路径
	    require(
	        [
	            'echarts',
	            'echarts/chart/map'
	        ],
	        function (ec) {
	            // --- 地图 ---
	            var xmjgMap1 = ec.init(document.getElementById(id));
	            xmjgMap1.setOption({
					dataRange: {//左边的值域选择
						min : 0,
						max : 100,
						x:'left',
						y:'58%',//改变值域位置
						calculable : true,
						color: ['#ff3333', 'orange', 'yellow','lime','aqua'],
						textStyle:{
							color:'#fff'
						}
					},
					tooltip : {
				        trigger: 'item',
				        formatter: '{b}'
				   },
					series : [
						{
							name: '全国',
							type: 'map',
							roam: true,
							hoverable: false,
							mapType: 'china',
							itemStyle:{
								normal:{//边线和区域线
									borderColor:'rgba(100,149,237,1)',
									borderWidth:0.5,
									areaStyle:{
										color: '#10284a'
									}
								}
							},
							data:[],
							markLine : {
								smooth:true,
								symbol: ['none', 'circle'],  
								symbolSize : 1,
								itemStyle : {
									normal: {
										color:'#fff',
										borderWidth:1,
										borderColor:'rgba(30,144,255,0.5)'
									}
								},
								data : [//这个数据是虚线到达的地方
									 [{name:'北京'},{name:'包头'}],
				                    [{name:'北京'},{name:'北海'}],
				                    [{name:'北京'},{name:'广州'}],
				                    [{name:'北京'},{name:'郑州'}],
				                    [{name:'北京'},{name:'长春'}],
				                    [{name:'北京'},{name:'长治'}],
				                    [{name:'北京'},{name:'重庆'}],
				                    [{name:'北京'},{name:'长沙'}],
				                    [{name:'北京'},{name:'成都'}],
				                    [{name:'北京'},{name:'常州'}],
				                    [{name:'北京'},{name:'丹东'}],
				                    [{name:'北京'},{name:'大连'}],
				                    [{name:'北京'},{name:'东营'}],
				                    [{name:'北京'},{name:'延安'}],
				                    [{name:'北京'},{name:'福州'}],
				                    [{name:'北京'},{name:'海口'}],
				                    [{name:'北京'},{name:'呼和浩特'}],
				                    [{name:'北京'},{name:'合肥'}],
				                    [{name:'北京'},{name:'杭州'}],
				                    [{name:'北京'},{name:'哈尔滨'}],
				                    [{name:'北京'},{name:'舟山'}],
				                    [{name:'北京'},{name:'银川'}],
				                    [{name:'北京'},{name:'衢州'}],
				                    [{name:'北京'},{name:'南昌'}],
				                    [{name:'北京'},{name:'昆明'}],
				                    [{name:'北京'},{name:'贵阳'}],
				                    [{name:'北京'},{name:'兰州'}],
				                    [{name:'北京'},{name:'拉萨'}],
				                    [{name:'北京'},{name:'连云港'}],
				                    [{name:'北京'},{name:'临沂'}],
				                    [{name:'北京'},{name:'柳州'}],
				                    [{name:'北京'},{name:'宁波'}],
				                    [{name:'北京'},{name:'南京'}],
				                    [{name:'北京'},{name:'南宁'}],
				                    [{name:'北京'},{name:'南通'}],
				                    [{name:'北京'},{name:'上海'}],
				                    [{name:'北京'},{name:'沈阳'}],
				                    [{name:'北京'},{name:'西安'}],
				                    [{name:'北京'},{name:'汕头'}],
				                    [{name:'北京'},{name:'深圳'}],
				                    [{name:'北京'},{name:'青岛'}],
				                    [{name:'北京'},{name:'济南'}],
				                    [{name:'北京'},{name:'太原'}],
				                    [{name:'北京'},{name:'乌鲁木齐'}],
				                    [{name:'北京'},{name:'潍坊'}],
				                    [{name:'北京'},{name:'威海'}],
				                    [{name:'北京'},{name:'温州'}],
				                    [{name:'北京'},{name:'武汉'}],
				                    [{name:'北京'},{name:'无锡'}],
				                    [{name:'北京'},{name:'厦门'}],
				                    [{name:'北京'},{name:'西宁'}],
				                    [{name:'北京'},{name:'徐州'}],
				                    [{name:'北京'},{name:'烟台'}],
				                    [{name:'北京'},{name:'盐城'}],
				                    [{name:'北京'},{name:'珠海'}],
				                    [{name:'上海'},{name:'包头'}],
				                    [{name:'上海'},{name:'北海'}],
				                    [{name:'上海'},{name:'广州'}],
				                    [{name:'上海'},{name:'郑州'}],
				                    [{name:'上海'},{name:'长春'}],
				                    [{name:'上海'},{name:'重庆'}],
				                    [{name:'上海'},{name:'长沙'}],
				                    [{name:'上海'},{name:'成都'}],
				                    [{name:'上海'},{name:'丹东'}],
				                    [{name:'上海'},{name:'大连'}],
				                    [{name:'上海'},{name:'福州'}],
				                    [{name:'上海'},{name:'海口'}],
				                    [{name:'上海'},{name:'呼和浩特'}],
				                    [{name:'上海'},{name:'合肥'}],
				                    [{name:'上海'},{name:'哈尔滨'}],
				                    [{name:'上海'},{name:'舟山'}],
				                    [{name:'上海'},{name:'银川'}],
				                    [{name:'上海'},{name:'南昌'}],
				                    [{name:'上海'},{name:'昆明'}],
				                    [{name:'上海'},{name:'贵阳'}],
				                    [{name:'上海'},{name:'兰州'}],
				                    [{name:'上海'},{name:'拉萨'}],
				                    [{name:'上海'},{name:'连云港'}],
				                    [{name:'上海'},{name:'临沂'}],
				                    [{name:'上海'},{name:'柳州'}],
				                    [{name:'上海'},{name:'宁波'}],
				                    [{name:'上海'},{name:'南宁'}],
				                    [{name:'上海'},{name:'北京'}],
				                    [{name:'上海'},{name:'沈阳'}],
				                    [{name:'上海'},{name:'秦皇岛'}],
				                    [{name:'上海'},{name:'西安'}],
				                    [{name:'上海'},{name:'石家庄'}],
				                    [{name:'上海'},{name:'汕头'}],
				                    [{name:'上海'},{name:'深圳'}],
				                    [{name:'上海'},{name:'青岛'}],
				                    [{name:'上海'},{name:'济南'}],
				                    [{name:'上海'},{name:'天津'}],
				                    [{name:'上海'},{name:'太原'}],
				                    [{name:'上海'},{name:'乌鲁木齐'}],
				                    [{name:'上海'},{name:'潍坊'}],
				                    [{name:'上海'},{name:'威海'}],
				                    [{name:'上海'},{name:'温州'}],
				                    [{name:'上海'},{name:'武汉'}],
				                    [{name:'上海'},{name:'厦门'}],
				                    [{name:'上海'},{name:'西宁'}],
				                    [{name:'上海'},{name:'徐州'}],
				                    [{name:'上海'},{name:'烟台'}],
				                    [{name:'上海'},{name:'珠海'}],
				                    [{name:'广州'},{name:'北海'}],
				                    [{name:'广州'},{name:'郑州'}],
				                    [{name:'广州'},{name:'长春'}],
				                    [{name:'广州'},{name:'重庆'}],
				                    [{name:'广州'},{name:'长沙'}],
				                    [{name:'广州'},{name:'成都'}],
				                    [{name:'广州'},{name:'常州'}],
				                    [{name:'广州'},{name:'大连'}],
				                    [{name:'广州'},{name:'福州'}],
				                    [{name:'广州'},{name:'海口'}],
				                    [{name:'广州'},{name:'呼和浩特'}],
				                    [{name:'广州'},{name:'合肥'}],
				                    [{name:'广州'},{name:'杭州'}],
				                    [{name:'广州'},{name:'哈尔滨'}],
				                    [{name:'广州'},{name:'舟山'}],
				                    [{name:'广州'},{name:'银川'}],
				                    [{name:'广州'},{name:'南昌'}],
				                    [{name:'广州'},{name:'昆明'}],
				                    [{name:'广州'},{name:'贵阳'}],
				                    [{name:'广州'},{name:'兰州'}],
				                    [{name:'广州'},{name:'拉萨'}],
				                    [{name:'广州'},{name:'连云港'}],
				                    [{name:'广州'},{name:'临沂'}],
				                    [{name:'广州'},{name:'柳州'}],
				                    [{name:'广州'},{name:'宁波'}],
				                    [{name:'广州'},{name:'南京'}],
				                    [{name:'广州'},{name:'南宁'}],
				                    [{name:'广州'},{name:'南通'}],
				                    [{name:'广州'},{name:'北京'}],
				                    [{name:'广州'},{name:'上海'}],
				                    [{name:'广州'},{name:'沈阳'}],
				                    [{name:'广州'},{name:'西安'}],
				                    [{name:'广州'},{name:'石家庄'}],
				                    [{name:'广州'},{name:'汕头'}],
				                    [{name:'广州'},{name:'青岛'}],
				                    [{name:'广州'},{name:'济南'}],
				                    [{name:'广州'},{name:'天津'}],
				                    [{name:'广州'},{name:'太原'}],
				                    [{name:'广州'},{name:'乌鲁木齐'}],
				                    [{name:'广州'},{name:'温州'}],
				                    [{name:'广州'},{name:'武汉'}],
				                    [{name:'广州'},{name:'无锡'}],
				                    [{name:'广州'},{name:'厦门'}],
				                    [{name:'广州'},{name:'西宁'}],
				                    [{name:'广州'},{name:'徐州'}],
				                    [{name:'广州'},{name:'烟台'}],
				                    [{name:'广州'},{name:'盐城'}]
								],
							},
							geoCoord: {
								'上海': [121.4648,31.2891],
								'东莞': [113.8953,22.901],
								'东营': [118.7073,37.5513],
								'中山': [113.4229,22.478],
								'临汾': [111.4783,36.1615],
								'临沂': [118.3118,35.2936],
								'丹东': [124.541,40.4242],
								'丽水': [119.5642,28.1854],
								'乌鲁木齐': [87.9236,43.5883],
								'佛山': [112.8955,23.1097],
								'保定': [115.0488,39.0948],
								'兰州': [103.5901,36.3043],
								'包头': [110.3467,41.4899],
								'北京': [116.4551,40.2539],
								'北海': [109.314,21.6211],
								'南京': [118.8062,31.9208],
								'南宁': [108.479,23.1152],
								'南昌': [116.0046,28.6633],
								'南通': [121.1023,32.1625],
								'厦门': [118.1689,24.6478],
								'台州': [121.1353,28.6688],
								'合肥': [117.29,32.0581],
								'呼和浩特': [111.4124,40.4901],
								'咸阳': [108.4131,34.8706],
								'哈尔滨': [127.9688,45.368],
								'唐山': [118.4766,39.6826],
								'嘉兴': [120.9155,30.6354],
								'大同': [113.7854,39.8035],
								'大连': [122.2229,39.4409],
								'天津': [117.4219,39.4189],
								'太原': [112.3352,37.9413],
								'威海': [121.9482,37.1393],
								'宁波': [121.5967,29.6466],
								'宝鸡': [107.1826,34.3433],
								'宿迁': [118.5535,33.7775],
								'常州': [119.4543,31.5582],
								'广州': [113.5107,23.2196],
								'廊坊': [116.521,39.0509],
								'延安': [109.1052,36.4252],
								'张家口': [115.1477,40.8527],
								'徐州': [117.5208,34.3268],
								'德州': [116.6858,37.2107],
								'惠州': [114.6204,23.1647],
								'成都': [103.9526,30.7617],
								'扬州': [119.4653,32.8162],
								'承德': [117.5757,41.4075],
								'拉萨': [91.1865,30.1465],
								'无锡': [120.3442,31.5527],
								'日照': [119.2786,35.5023],
								'昆明': [102.9199,25.4663],
								'杭州': [119.5313,29.8773],
								'枣庄': [117.323,34.8926],
								'柳州': [109.3799,24.9774],
								'株洲': [113.5327,27.0319],
								'武汉': [114.3896,30.6628],
								'汕头': [117.1692,23.3405],
								'江门': [112.6318,22.1484],
								'沈阳': [123.1238,42.1216],
								'沧州': [116.8286,38.2104],
								'河源': [114.917,23.9722],
								'泉州': [118.3228,25.1147],
								'泰安': [117.0264,36.0516],
								'泰州': [120.0586,32.5525],
								'济南': [117.1582,36.8701],
								'济宁': [116.8286,35.3375],
								'海口': [110.3893,19.8516],
								'淄博': [118.0371,36.6064],
								'淮安': [118.927,33.4039],
								'深圳': [114.5435,22.5439],
								'清远': [112.9175,24.3292],
								'温州': [120.498,27.8119],
								'渭南': [109.7864,35.0299],
								'湖州': [119.8608,30.7782],
								'湘潭': [112.5439,27.7075],
								'滨州': [117.8174,37.4963],
								'潍坊': [119.0918,36.524],
								'烟台': [120.7397,37.5128],
								'玉溪': [101.9312,23.8898],
								'珠海': [113.7305,22.1155],
								'盐城': [120.2234,33.5577],
								'盘锦': [121.9482,41.0449],
								'石家庄': [114.4995,38.1006],
								'福州': [119.4543,25.9222],
								'秦皇岛': [119.2126,40.0232],
								'绍兴': [120.564,29.7565],
								'聊城': [115.9167,36.4032],
								'肇庆': [112.1265,23.5822],
								'舟山': [122.2559,30.2234],
								'苏州': [120.6519,31.3989],
								'莱芜': [117.6526,36.2714],
								'菏泽': [115.6201,35.2057],
								'营口': [122.4316,40.4297],
								'葫芦岛': [120.1575,40.578],
								'衡水': [115.8838,37.7161],
								'衢州': [118.6853,28.8666],
								'西宁': [101.4038,36.8207],
								'西安': [109.1162,34.2004],
								'贵阳': [106.6992,26.7682],
								'连云港': [119.1248,34.552],
								'邢台': [114.8071,37.2821],
								'邯郸': [114.4775,36.535],
								'郑州': [113.4668,34.6234],
								'鄂尔多斯': [108.9734,39.2487],
								'重庆': [107.7539,30.1904],
								'金华': [120.0037,29.1028],
								'铜川': [109.0393,35.1947],
								'银川': [106.3586,38.1775],
								'镇江': [119.4763,31.9702],
								'长春': [125.8154,44.2584],
								'长沙': [113.0823,28.2568],
								'长治': [112.8625,36.4746],
								'阳泉': [113.4778,38.0951],
								'青岛': [120.4651,36.3373],
								'韶关': [113.7964,24.7028]
							},
							markPoint : {
								symbol:'emptyCircle',
								symbolSize : function (v){
									return 10 + v/10
								},
								effect : {
									show: true,
									shadowBlur : 0
								},
								itemStyle:{
									normal:{
										label:{show:false}
									},
									emphasis: {
										label:{position:'top'}
									}
								},
								data : [
									{name:'上海',value:95},
									{name:'广州',value:90},
									{name:'大连',value:80},
									{name:'南宁',value:70},
									{name:'南昌',value:60},
									{name:'拉萨',value:50},
									{name:'长春',value:40},
									{name:'包头',value:30},
									{name:'重庆',value:20},
									{name:'常州',value:10}
								]
							}
						},
						{
							name: '北京 Top10',
							type: 'map',
							mapType: 'china',
							data:[],
							markLine : {
								smooth:true,
								effect : {
									show: true,
									scaleSize: 1,
									period: 30,
									color: '#fff',
									shadowBlur: 10
								},
								itemStyle : {
									normal: {
										label:{show:false},
										borderWidth:1,
										lineStyle: {
											type: 'solid',
											shadowBlur: 10
										}
									}
								},
								data : [
									[{name:'上海'}, {name:'北京',value:95}],
									[{name:'广州'}, {name:'北京',value:90}],
									[{name:'大连'}, {name:'北京',value:80}],
									[{name:'南宁'}, {name:'北京',value:70}],
									[{name:'南昌'}, {name:'北京',value:60}],
									[{name:'拉萨'}, {name:'北京',value:50}],
									[{name:'长春'}, {name:'北京',value:40}],
									[{name:'包头'}, {name:'北京',value:30}],
									[{name:'重庆'}, {name:'北京',value:20}],
									[{name:'常州'}, {name:'北京',value:10}]
								]
							},
							markPoint : {
								symbol:'emptyCircle',
								symbolSize : function (v){
									return 0.1
								},
								effect : {
									show: false,
									shadowBlur : 0
								},
								itemStyle:{
									normal:{
										label:{show:true,
											  position:'top',
											  textStyle: {
														fontSize: 14
													}
											  }
									},
									emphasis: {
										label:{show:false}
									}
								},
								data : [
									{name:'上海',value:95},
									{name:'广州',value:90},
									{name:'大连',value:80},
									{name:'南宁',value:70},
									{name:'南昌',value:60},
									{name:'拉萨',value:50},
									{name:'长春',value:40},
									{name:'包头',value:30},
									{name:'重庆',value:20},
									{name:'常州',value:10}
								]
							}
						}
					]
	        });
	    });
	}
	getEcharts('xmjgMap1')		
	//省外调入同比/环比
	function xmjgLine(id,ydata,data1,data2){
		var xmjgLine1=echarts.init(document.getElementById(id))
		var optionxmjgLine1={
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
		                    color: '#393c4b',
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
	                    formatter: '{value} %'
	                }
				}
			],
			series : [
		        {
		            name: '环比',
		            type: 'line',
		            barGap:'30',
		            //symbol: 'circle',
		            //symbolSize:'8',
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
		            //symbol: 'circle',
		            //symbolSize:'8',
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
		xmjgLine1.setOption(optionxmjgLine1)	
	}
	xmjgLine('xmjgLine1',['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],[15,42,60,40,16,10,9,8,7,30,58,53],[40,0,38,60,38,35,40,55,65,53,45,40])
	//流通量的同比/环比
	xmjgLine('xmjgLine4',['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],[15,42,60,40,16,10,9,8,7,30,58,53],[40,0,38,60,38,35,40,55,65,53,45,40])
	xmjgLine('xmjgLine41',['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],[15,42,60,40,16,10,9,8,7,30,58,53],[40,0,38,60,38,35,40,55,65,53,45,40])
	xmjgLine('xmjgLine42',['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],[15,42,60,40,16,10,9,8,7,30,58,53],[40,0,38,60,38,35,40,55,65,53,45,40])
	//存栏量的同比/环比
	xmjgLine('xmjgLine5',['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],[15,42,60,40,16,10,9,8,7,30,58,53],[40,0,38,60,38,35,40,55,65,53,45,40])
	//出栏量的同比/环比
	xmjgLine('xmjgLine7',['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],[15,42,60,40,16,10,9,8,7,30,58,53],[40,0,38,60,38,35,40,55,65,53,45,40])
	
	//省外调入趋势
	function xmjgqsLine(qsId,qsYdata,qsData){
		var xmjgLine20=echarts.init(document.getElementById(qsId))	
		var optionxmjgLine20={
			tooltip : {
		        trigger: 'axis'
		   	},
			xAxis:[
				{
					type:'category',
					boundaryGap : false,//清除两端空白
					data:qsYdata,										
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
		           	}
				}
			],
			series : [
		        {
		            type: 'line',
		            symbol: 'none',
		            smooth: true, //这句就是让曲线变平滑的
		            //symbolSize:'8',
		            itemStyle:{//修改折线图的颜色
		            	normal:{
		            		color:'#fff',////修改折线图点的颜色
		            		lineStyle:{
		            			color:'#0e8aa4'
		            		},
		            	}
		            },
		            data: qsData,
		            areaStyle: {
	                    normal: {
	                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                            offset: 0,
	                            color: 'rgba(11,49,72, 0.3)'                          
	                        }, {
	                                offset: 0.8,
	                                color: 'rgba(11,49,70, 0.7)'
	                                
	                            }], false),
	                        shadowColor: 'rgba(0, 0, 0, 0.1)', 
	                        shadowBlur: 10
						}
	                }
		        }
		    ]          
		}	
		xmjgLine20.setOption(optionxmjgLine20)
	}
	xmjgqsLine('xmjgLine20',['10-23周日','10-24周一','10-25周二','10-26周三','10-27周四','10-28周五'],[13, 28,22,30,35,40,]);
	//流通量的趋势
	xmjgqsLine('xmjgLine3',['10-23周日','10-24周一','10-25周二','10-26周三','10-27周四','10-28周五'],[13, 28,22,30,35,40,]);
	xmjgqsLine('xmjgLine31',['10-23周日','10-24周一','10-25周二','10-26周三','10-27周四','10-28周五'],[13, 28,22,30,35,40,]);
	xmjgqsLine('xmjgLine32',['10-23周日','10-24周一','10-25周二','10-26周三','10-27周四','10-28周五'],[13, 28,22,30,35,40,]);
	//存栏量趋势
	xmjgqsLine('xmjgLine61',['10-23周日','10-24周一','10-25周二','10-26周三','10-27周四','10-28周五'],[13, 28,22,30,35,40,]);
	//出栏量趋势
	xmjgqsLine('xmjgLine81',['10-23周日','10-24周一','10-25周二','10-26周三','10-27周四','10-28周五'],[13, 28,22,30,35,40,]);
	
	
	
	//省外调入目的地分析
	function fxBar(fxId){
		var xmjgBar10=echarts.init(document.getElementById(fxId))	
		//var bgImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAF+CAYAAADNzDlVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAilJREFUeNrs1rENwjAURdEfC0pmQAwBDfuwE8wDDSULIGagTGEcFNHQpfPXseT0V0ryzrA/XzcRsWt3HX2fsd1XSRITc8O2JIn5RZVIdsr87mU54xT0TBL1/Sms2uPd7qPXivvp+PfKpfuGBAkStPxMf7muLXe43FiO5ViO5VjOsAoSxHIsx3Isx3Isx3KGVZAglmM5lmM5lmM5liMFQYJYjuVYjuVYjuVYTpAgQSzHcizHcizHcoZVkCCWYzmWYzmWYzmWM6yCBLEcy7Ecy7Ecy7GcIEGCWI7lWI7lWI7lDKsgQYJYjuVYjuVYjuUMqyBBLMdyLMdyLMdyLGdYBQliOZZjOZZjOZZjOUGCBLEcy7Ecy7EcyxlWQYJYjuVYjuVYjuVYzrAKEsRyLMdyLMdyLMdypCBIEMuxHMuxHMuxnGEVJEgQy7Ecy7Ecy7GcYRUkiOVYjuVYjuVYjuUMqyBBLMdyLMdyLMdyLCdIkCCWYzmWYzmWYznDKkgQy7Ecy7Ecy7EcyxlWQYJYjuVYjuVYjuVYjhQECWI5lmM5lmM5ljOsggQJYjmWYzmWYzmWM6yCBLEcy7Ecy7Ecy7GcYRUkiOVYjuVYjuVYjuUECRLEcizHcizHcixnWAUJYjmWYzmWYzmWYznDKkgQy7Ecy7Ecy7Ecy5GCIEEsx3Isx3Isx3IsJ0iQIJZjOZZjOZZjOcMqSBDLsRzLsRzL9Wy5odZqhwQJWn4+AgwApGqd0LftHcgAAAAASUVORK5CYII=';
		var fillImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAF+CAYAAADNzDlVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABFhJREFUeNrs3U+O1DgUgHHblUFzhb7GCCHNtnfMFUasOA9HYEWfAQlpZq6AEOIIdPcFZgMVe5L6Q6pLzQjFLZK2fpZSKbVioQ8n9b68+Dnxz39fXYYYrkIIF+Fxt5the5kagQkHhtepEZhvUCk01tLh3Gul3aZQwovxSwMwn8cfhW74+Lul66jJawgQIEB1QJfDdj1s5ZFvI8NzLsfluByX43KAlmzjKRdyTkYIEJeb6XK5JC7H5bhchculmLmcOASoAqjPGyMEiMtVuFyMhctxOS5X4XKlRC4nDgECBIjLLeVyXSnpqhQux+W43FyXi/Jy4hCgKqC+74wQIC5XkZdLKcvLcTkuV+FyOScuJw4Bmt/MlwPE5WprH4LaBy7H5WpcbvjgcuIQIECAuByXe0iXy4eJtOONXilx2NJh238PIYbpmPP9qvpc7O5YU+r351/KB9hyAl7C3WPO9+vqs3O5hkZocrn9H+PJwdP3Y87h/n9sNX24HKBFgLaesQLiclUul9Q+yMvJy1Xl5bLaB3EIUE3biVzvGSsgLjfb5Yb7ci7H5bhchcvFWLicOAQIECAux+W43P1QXcmpuWuotbyc2gdxCFBF29c+FHk5QFzOfDl5OS63jMsFtQ/iECBAgLgcl+Ny34PqcoMrot+cFkzEWIbtuN9/H0/R/yuyWFGf2zR8vBiLIHa5hTsFE3FGkcWifT4Pey63fqDt9hemsOYWSylGaM2t++P6zWUjS7KNuZGX1pdbO5S83Mqb9eXEIUC1gfV4r2GEAP08IHk5LsfluNzkcsEzVnEIULXLFS4HiMvNdrnh+uFyXI7LVbhcTN7hJQ4BqnU5eTlAXG6+y/XbjstxOS5X4XJ93nA5cQhQrcupYwXE5Wa7XLRWMJfjclUuV6wVLA4BAgSIyy3ncl0p6aoULsfluNxcl4vRM1ZxCBAgQFxuybWC25ov1+Wc2nK543tOj/tpeYxpOz9mzX3GERpd7uI4PWZcGuO8Hf82vSr07n5FfW7TZrPlcuIQoAqgL19+NUKAuFyFyw1xyDPWVbtci9dQY/Pl+o7LiUOA5rdD7cPGCAHicubLcTkut4jLmS8nDgF6CJdT+wCIy3kfK5fjcsu43HA/xOXEIUCVLnffhAYjBIjL/ZjLZevLcTkuV+Vyyfpy4hCgKqCvX58YIUBcbr7Lxd8/vb1u6Gf7hstxuZ/tcp6xikOAAAHicubLPYz2BHk5LsfluJzA+tja7hlrr/YBEJeb63Lx2cd38nJcjstVuFyyvpw4BAgQIC7H5bgcl3u0Lpd77/AShwBVNGuSAOJylS739MNf7blcSv1+uFI+LFmbT5avzbv/gOmY8/2q+lzc+ZWbqvZPK76OS9duvrNfV5/2XG4YMS4nDgECBIjLcbmHdLmGzjh5OS7H5cShxoGsLweIy1W63G/v/+FyXI7LVbic+XLiECBAgLgcl+NyXI7LrcXlYilFHAIEaH77T4ABAKzsRPWz+TQ7AAAAAElFTkSuQmCCgg';
		var chartData = [
		    {
		        name: '杭州',
		        value: 240
		    }, 
		    {
		        name: '金华',
		        value: 500
		    }, 
		    {
		        name: '舟山',
		        value: 750
		    },
		    {
		        name: '台州',
		        value: 1000
		    },
		    {
		        name: '温州',
		        value: 550
		    },
		    {
		        name: '湖州',
		        value: 650
		    },
		    {
		        name: '嘉兴',
		        value: 890
		    },
		    {
		        name: '宁波',
		        value: 790
		    },
		    {
		        name: '绍兴',
		        value: 600
		    },
		    {
		        name: '衢州',
		        value: 600
		    },
		    {
		        name: '丽水',
		        value: 800
		    },
		];	
		var bgData = [];
		var itemData = [];	
		// 取出每一条数据value,作为显示数据
		chartData.forEach(function(items, index) {
		    itemData.push(items.value);
		})	
		// 取出所有数据最大值,作为背景象形柱图数据
		chartData.forEach(function(items, index) {
		    bgData.push({
		        name: items.name,
		        value: Math.max.apply(null, itemData)
		    });
		})	
		// 所有数据最大值
		var maxValue = Math.max.apply(null, itemData);	
		// 字体 distance放大参数
		var scale = 1;
		//富文本配置
		var rich = {
		    white: {
		        color: "#fff",
		        align: 'left',
		        fontSize: 18 * scale,
		        padding: [0, 0]
		    },
		};	
		var optionxmjgBar10 = {
		    tooltip:{
		        formatter:'{b} : {c}',
		    },
		    grid: {
		        left: '3%',
		        right: '6%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis: [{
		        type: 'category',
		        data:(function(data){
		            var arr=[];
		            data.forEach(function(items){
		                arr.push(items.name);   
		            });
		            return arr;
		        })(chartData),
		      	        
		        boundaryGap: ['20%', '20%'],
		        splitLine: {
		            show: false
		        },
		        axisLine: {
		            show: true,
	                lineStyle: {//水平州的颜色
	                    color: '#3a3c4c',
	                    type: 'solid',
	                    width: 1
	                }
		        },
		        axisTick: {
		            show: false
		        },
		        axisLabel: {
		            textStyle: {
		                fontSize: 12 * scale,
		                color: '#838489'
		            }
		        }
		    }],
		    yAxis: [{
		        type: 'value',
		        splitLine: {
		            show: false
		        },
		        axisTick: {
		            show: false,
		            length: 10 * scale,
		            lineStyle: {//水平州的颜色
		                color: '#3a3c4c',
	                    type: 'solid',
	                    width: 1
		            }
		        },
		        axisLabel: {
		            textStyle: {
		                color: '#838489',
		                fontSize: 12 * scale
		            }
		        },
		    }],
		    series: [
		        {
		            name: '数据',
		            type: 'pictorialBar',
		            barWidth: '16px',
		            barGap: '20px',
		            data: chartData,
		            z: 3,
		            symbol: 'image://'+ fillImg,
		            symbolClip:true,
		            symbolBoundingData: maxValue,
		            symbolSize: [16, '100%']
		        },
		    ]
		};	
		xmjgBar10.setOption(optionxmjgBar10)
	}
	fxBar('xmjgBar10')
	//流通量中的柱状图以及切换的柱状图
	function xmjgBar(barId,ydata,data){
		var xmjgBar2=echarts.init(document.getElementById(barId))
		var optionxmjgBar2={
			tooltip : {
		        trigger: 'axis'
		   	},
		   	color:['#10b4d7'],
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
		                    color: '#3c3d51',
		                    type: 'solid',
		                    width: 1
		                }
		            },
					axisLabel : {
		                show:true,
		                textStyle: {//水平轴字体颜色
		                    color: '#838488',
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
		                    color: '#3c3d51',
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
		                    color: '#838488',
		                    fontSize: 12,
		                }
		           	},
				}
			],
			series : [
		        {
		            type: 'bar',
		           	barWidth :14,//柱图宽度
		            data: data
		        }
		    ]          
		}
		xmjgBar2.setOption(optionxmjgBar2)
	}
	xmjgBar("xmjgBar2",['杭州','金华','舟山','台州','温州','湖州','嘉兴','宁波','绍兴','衢州','丽水'],[1000, 2800,4600,3500,4800,3200,1000,2500,4200,3600,1800]);
	xmjgBar("xmjgBar21",['杭州','金华','舟山','台州','温州','湖州','嘉兴','宁波','绍兴','衢州','丽水'],[1000, 2800,4600,3500,4800,3200,1000,2500,4200,3600,1800]);
	xmjgBar("xmjgBar22",['杭州','金华','舟山','台州','温州','湖州','嘉兴','宁波','绍兴','衢州','丽水'],[1000, 2800,4600,3500,4800,3200,1000,2500,4200,3600,1800]);

	//主体分析图表
	function ztfxEcharts(id,data,title){
		var xmjgLinetab=echarts.init(document.getElementById(id));
		var optionlinetab={
			title : {
		        text: title,
		        textStyle:{    //图例文字的样式
			        color:'#b9b9be',
			        fontSize:16,
			    },
		    },
			tooltip : {
		        trigger: 'axis'
		   	},
		   	color:['#10b4d7'],
			xAxis:[
				{
					type:'category',
					data:['杭州','金华','舟山','台州','温州','湖州','嘉兴','宁波','绍兴','衢州','丽水'],										
					axisTick : {    // 轴标记
		                show:false		               
		            },
		            axisLine : {    // 轴线
		                show: true,
		                lineStyle: {//水平州的颜色
		                    color: '#3c3d51',
		                    type: 'solid',
		                    width: 1
		                }
		            },
					axisLabel : {
		                show:true,
		                textStyle: {//水平轴字体颜色
		                    color: '#838488',
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
		                    color: '#3c3d51',
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
		                    color: '#838488',
		                    fontSize: 12,
		                }
		           	},
				}
			],
			series : [
		        {
		            type: 'bar',
		           	barWidth :14,//柱图宽度
		            data: data
		        }
		    ]
		   	
		}
		xmjgLinetab.setOption(optionlinetab)
	}
	ztfxEcharts("xmjgLinetab1",[250, 600,950,800,1000,750,250,600,980,650,450],'主体总数1214135')
	ztfxEcharts("xmjgLinetab2",[250, 300,950,800,1000,750,250,600,980,650,450],)
	ztfxEcharts("xmjgLinetab3",[150, 600,950,800,1000,750,250,600,980,650,150],)
	ztfxEcharts("xmjgLinetab4",[150, 500,550,800,1000,750,250,600,980,650,150],)
	ztfxEcharts("xmjgLinetab5",[250, 600,950,800,1000,750,250,600,980,650,450],)
	ztfxEcharts("xmjgLinetab6",[150, 600,950,800,1000,750,250,600,980,650,150],)
	ztfxEcharts("xmjgLinetab7",[150, 600,950,800,1000,750,250,600,980,650,150],)
	ztfxEcharts("xmjgLinetab8",[150, 600,950,800,1200,750,250,600,980,650,150],)
	ztfxEcharts("xmjgLinetab9",[250, 600,950,800,1000,750,250,600,980,650,450],)
	ztfxEcharts("xmjgLinetab10",[50, 600,950,800,1000,750,250,600,980,650,450],)
	ztfxEcharts("xmjgLinetab11",[150, 550,950,800,1200,750,250,600,980,650,450],)

	//存栏辖区
	var xmjgBar31=echarts.init(document.getElementById('xmjgBar31'));	
	var fillImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAF+CAYAAADNzDlVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABFhJREFUeNrs3U+O1DgUgHHblUFzhb7GCCHNtnfMFUasOA9HYEWfAQlpZq6AEOIIdPcFZgMVe5L6Q6pLzQjFLZK2fpZSKbVioQ8n9b68+Dnxz39fXYYYrkIIF+Fxt5the5kagQkHhtepEZhvUCk01tLh3Gul3aZQwovxSwMwn8cfhW74+Lul66jJawgQIEB1QJfDdj1s5ZFvI8NzLsfluByX43KAlmzjKRdyTkYIEJeb6XK5JC7H5bhchculmLmcOASoAqjPGyMEiMtVuFyMhctxOS5X4XKlRC4nDgECBIjLLeVyXSnpqhQux+W43FyXi/Jy4hCgKqC+74wQIC5XkZdLKcvLcTkuV+FyOScuJw4Bmt/MlwPE5WprH4LaBy7H5WpcbvjgcuIQIECAuByXe0iXy4eJtOONXilx2NJh238PIYbpmPP9qvpc7O5YU+r351/KB9hyAl7C3WPO9+vqs3O5hkZocrn9H+PJwdP3Y87h/n9sNX24HKBFgLaesQLiclUul9Q+yMvJy1Xl5bLaB3EIUE3biVzvGSsgLjfb5Yb7ci7H5bhchcvFWLicOAQIECAux+W43P1QXcmpuWuotbyc2gdxCFBF29c+FHk5QFzOfDl5OS63jMsFtQ/iECBAgLgcl+Ny34PqcoMrot+cFkzEWIbtuN9/H0/R/yuyWFGf2zR8vBiLIHa5hTsFE3FGkcWifT4Pey63fqDt9hemsOYWSylGaM2t++P6zWUjS7KNuZGX1pdbO5S83Mqb9eXEIUC1gfV4r2GEAP08IHk5LsfluNzkcsEzVnEIULXLFS4HiMvNdrnh+uFyXI7LVbhcTN7hJQ4BqnU5eTlAXG6+y/XbjstxOS5X4XJ93nA5cQhQrcupYwXE5Wa7XLRWMJfjclUuV6wVLA4BAgSIyy3ncl0p6aoULsfluNxcl4vRM1ZxCBAgQFxuybWC25ov1+Wc2nK543tOj/tpeYxpOz9mzX3GERpd7uI4PWZcGuO8Hf82vSr07n5FfW7TZrPlcuIQoAqgL19+NUKAuFyFyw1xyDPWVbtci9dQY/Pl+o7LiUOA5rdD7cPGCAHicubLcTkut4jLmS8nDgF6CJdT+wCIy3kfK5fjcsu43HA/xOXEIUCVLnffhAYjBIjL/ZjLZevLcTkuV+Vyyfpy4hCgKqCvX58YIUBcbr7Lxd8/vb1u6Gf7hstxuZ/tcp6xikOAAAHicubLPYz2BHk5LsfluJzA+tja7hlrr/YBEJeb63Lx2cd38nJcjstVuFyyvpw4BAgQIC7H5bgcl3u0Lpd77/AShwBVNGuSAOJylS739MNf7blcSv1+uFI+LFmbT5avzbv/gOmY8/2q+lzc+ZWbqvZPK76OS9duvrNfV5/2XG4YMS4nDgECBIjLcbmHdLmGzjh5OS7H5cShxoGsLweIy1W63G/v/+FyXI7LVbic+XLiECBAgLgcl+NyXI7LrcXlYilFHAIEaH77T4ABAKzsRPWz+TQ7AAAAAElFTkSuQmCCgg';
	var chartData = [
	    {
	        name: '杭州',
	        value: 240
	    }, 
	    {
	        name: '金华',
	        value: 500
	    }, 
	    {
	        name: '舟山',
	        value: 750
	    },
	    {
	        name: '台州',
	        value: 1000
	    },
	    {
	        name: '温州',
	        value: 550
	    },
	    {
	        name: '湖州',
	        value: 650
	    },
	    {
	        name: '嘉兴',
	        value: 890
	    },
	    {
	        name: '宁波',
	        value: 790
	    },
	    {
	        name: '绍兴',
	        value: 600
	    },
	    {
	        name: '衢州',
	        value: 600
	    },
	    {
	        name: '丽水',
	        value: 800
	    },
	];	
	var bgData = [];
	var itemData = [];	
	// 取出每一条数据value,作为显示数据
	chartData.forEach(function(items, index) {
	    itemData.push(items.value);
	})
	
	// 取出所有数据最大值,作为背景象形柱图数据
	chartData.forEach(function(items, index) {
	    bgData.push({
	        name: items.name,
	        value: Math.max.apply(null, itemData)
	    });
	})	
	// 所有数据最大值
	var maxValue = Math.max.apply(null, itemData);	
	// 字体 distance放大参数
	var scale = 1;
	//富文本配置
	var rich = {
	    white: {
	        color: "#fff",
	        align: 'left',
	        fontSize: 18 * scale,
	        padding: [0, 0]
	    },
	};	
	var optionxmjgBar31 = {
	    tooltip:{
	        formatter:'{b} : {c}',
	    },
	    grid: {
	        left: '3%',
	        right: '6%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: [{
	        type: 'category',
	        data:(function(data){
	            var arr=[];
	            data.forEach(function(items){
	                arr.push(items.name);   
	            });
	            return arr;
	        })(chartData),
	      	        
	        boundaryGap: ['20%', '20%'],
	        splitLine: {
	            show: false
	        },
	        axisLine: {
	            show: true,
                lineStyle: {//水平州的颜色
                    color: '#3a3c4c',
                    type: 'solid',
                    width: 1
                }
	        },
	        axisTick: {
	            show: false
	        },
	        axisLabel: {
	            textStyle: {
	                fontSize: 12 * scale,
	                color: '#838489'
	            }
	        }
	    }],
	    yAxis: [{
	        type: 'value',
	        splitLine: {
	            show: false
	        },
	        axisTick: {
	            show: false,
	            length: 10 * scale,
	            lineStyle: {//水平州的颜色
	                color: '#3a3c4c',
                    type: 'solid',
                    width: 1
	            }
	        },
	        axisLabel: {
	            textStyle: {
	                color: '#838489',
	                fontSize: 12 * scale
	            }
	        },
	    }],
	    series: [
	        {
	            name: '数据',
	            type: 'pictorialBar',
	            barWidth: '16px',
	            barGap: '20px',
	            data: chartData,
	            z: 3,
	            symbol: 'image://'+ fillImg,
	            symbolClip:true,
	            symbolBoundingData: maxValue,
	            symbolSize: [16, '100%']
	        },
	    ]
	};		
	xmjgBar31.setOption(optionxmjgBar31)
	/*今日出栏量*/
	
	//出栏辖区
	var xmjgBar41=echarts.init(document.getElementById('xmjgBar41'));	
	//var bgImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAF+CAYAAADNzDlVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAilJREFUeNrs1rENwjAURdEfC0pmQAwBDfuwE8wDDSULIGagTGEcFNHQpfPXseT0V0ryzrA/XzcRsWt3HX2fsd1XSRITc8O2JIn5RZVIdsr87mU54xT0TBL1/Sms2uPd7qPXivvp+PfKpfuGBAkStPxMf7muLXe43FiO5ViO5VjOsAoSxHIsx3Isx3Isx3KGVZAglmM5lmM5lmM5liMFQYJYjuVYjuVYjuVYTpAgQSzHcizHcizHcoZVkCCWYzmWYzmWYzmWM6yCBLEcy7Ecy7Ecy7GcIEGCWI7lWI7lWI7lDKsgQYJYjuVYjuVYjuUMqyBBLMdyLMdyLMdyLGdYBQliOZZjOZZjOZZjOUGCBLEcy7Ecy7EcyxlWQYJYjuVYjuVYjuVYzrAKEsRyLMdyLMdyLMdypCBIEMuxHMuxHMuxnGEVJEgQy7Ecy7Ecy7GcYRUkiOVYjuVYjuVYjuUMqyBBLMdyLMdyLMdyLCdIkCCWYzmWYzmWYznDKkgQy7Ecy7Ecy7EcyxlWQYJYjuVYjuVYjuVYjhQECWI5lmM5lmM5ljOsggQJYjmWYzmWYzmWM6yCBLEcy7Ecy7Ecy7GcYRUkiOVYjuVYjuVYjuUECRLEcizHcizHcixnWAUJYjmWYzmWYzmWYznDKkgQy7Ecy7Ecy7Ecy5GCIEEsx3Isx3Isx3IsJ0iQIJZjOZZjOZZjOcMqSBDLsRzLsRzL9Wy5odZqhwQJWn4+AgwApGqd0LftHcgAAAAASUVORK5CYII=';
	var fillImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAF+CAYAAADNzDlVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABFhJREFUeNrs3U+O1DgUgHHblUFzhb7GCCHNtnfMFUasOA9HYEWfAQlpZq6AEOIIdPcFZgMVe5L6Q6pLzQjFLZK2fpZSKbVioQ8n9b68+Dnxz39fXYYYrkIIF+Fxt5the5kagQkHhtepEZhvUCk01tLh3Gul3aZQwovxSwMwn8cfhW74+Lul66jJawgQIEB1QJfDdj1s5ZFvI8NzLsfluByX43KAlmzjKRdyTkYIEJeb6XK5JC7H5bhchculmLmcOASoAqjPGyMEiMtVuFyMhctxOS5X4XKlRC4nDgECBIjLLeVyXSnpqhQux+W43FyXi/Jy4hCgKqC+74wQIC5XkZdLKcvLcTkuV+FyOScuJw4Bmt/MlwPE5WprH4LaBy7H5WpcbvjgcuIQIECAuByXe0iXy4eJtOONXilx2NJh238PIYbpmPP9qvpc7O5YU+r351/KB9hyAl7C3WPO9+vqs3O5hkZocrn9H+PJwdP3Y87h/n9sNX24HKBFgLaesQLiclUul9Q+yMvJy1Xl5bLaB3EIUE3biVzvGSsgLjfb5Yb7ci7H5bhchcvFWLicOAQIECAux+W43P1QXcmpuWuotbyc2gdxCFBF29c+FHk5QFzOfDl5OS63jMsFtQ/iECBAgLgcl+Ny34PqcoMrot+cFkzEWIbtuN9/H0/R/yuyWFGf2zR8vBiLIHa5hTsFE3FGkcWifT4Pey63fqDt9hemsOYWSylGaM2t++P6zWUjS7KNuZGX1pdbO5S83Mqb9eXEIUC1gfV4r2GEAP08IHk5LsfluNzkcsEzVnEIULXLFS4HiMvNdrnh+uFyXI7LVbhcTN7hJQ4BqnU5eTlAXG6+y/XbjstxOS5X4XJ93nA5cQhQrcupYwXE5Wa7XLRWMJfjclUuV6wVLA4BAgSIyy3ncl0p6aoULsfluNxcl4vRM1ZxCBAgQFxuybWC25ov1+Wc2nK543tOj/tpeYxpOz9mzX3GERpd7uI4PWZcGuO8Hf82vSr07n5FfW7TZrPlcuIQoAqgL19+NUKAuFyFyw1xyDPWVbtci9dQY/Pl+o7LiUOA5rdD7cPGCAHicubLcTkut4jLmS8nDgF6CJdT+wCIy3kfK5fjcsu43HA/xOXEIUCVLnffhAYjBIjL/ZjLZevLcTkuV+Vyyfpy4hCgKqCvX58YIUBcbr7Lxd8/vb1u6Gf7hstxuZ/tcp6xikOAAAHicubLPYz2BHk5LsfluJzA+tja7hlrr/YBEJeb63Lx2cd38nJcjstVuFyyvpw4BAgQIC7H5bgcl3u0Lpd77/AShwBVNGuSAOJylS739MNf7blcSv1+uFI+LFmbT5avzbv/gOmY8/2q+lzc+ZWbqvZPK76OS9duvrNfV5/2XG4YMS4nDgECBIjLcbmHdLmGzjh5OS7H5cShxoGsLweIy1W63G/v/+FyXI7LVbic+XLiECBAgLgcl+NyXI7LrcXlYilFHAIEaH77T4ABAKzsRPWz+TQ7AAAAAElFTkSuQmCCgg';
	var chartData = [
	    {
	        name: '杭州',
	        value: 240
	    }, 
	    {
	        name: '金华',
	        value: 500
	    }, 
	    {
	        name: '舟山',
	        value: 750
	    },
	    {
	        name: '台州',
	        value: 1000
	    },
	    {
	        name: '温州',
	        value: 550
	    },
	    {
	        name: '湖州',
	        value: 650
	    },
	    {
	        name: '嘉兴',
	        value: 890
	    },
	    {
	        name: '宁波',
	        value: 790
	    },
	    {
	        name: '绍兴',
	        value: 600
	    },
	    {
	        name: '衢州',
	        value: 600
	    },
	    {
	        name: '丽水',
	        value: 800
	    },
	];	
	var bgData = [];
	var itemData = [];	
	// 取出每一条数据value,作为显示数据
	chartData.forEach(function(items, index) {
	    itemData.push(items.value);
	})
	
	// 取出所有数据最大值,作为背景象形柱图数据
	chartData.forEach(function(items, index) {
	    bgData.push({
	        name: items.name,
	        value: Math.max.apply(null, itemData)
	    });
	})	
	// 所有数据最大值
	var maxValue = Math.max.apply(null, itemData);	
	// 字体 distance放大参数
	var scale = 1;
	//富文本配置
	var rich = {
	    white: {
	        color: "#fff",
	        align: 'left',
	        fontSize: 18 * scale,
	        padding: [0, 0]
	    },
	};	
	var optionxmjgBar41 = {
	    tooltip:{
	        formatter:'{b} : {c}',
	    },
	    grid: {
	        left: '3%',
	        right: '6%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: [{
	        type: 'category',
	        data:(function(data){
	            var arr=[];
	            data.forEach(function(items){
	                arr.push(items.name);   
	            });
	            return arr;
	        })(chartData),
	      	        
	        boundaryGap: ['20%', '20%'],
	        splitLine: {
	            show: false
	        },
	        axisLine: {
	            show: true,
                lineStyle: {//水平州的颜色
                    color: '#3a3c4c',
                    type: 'solid',
                    width: 1
                }
	        },
	        axisTick: {
	            show: false
	        },
	        axisLabel: {
	            textStyle: {
	                fontSize: 12 * scale,
	                color: '#838489'
	            }
	        }
	    }],
	    yAxis: [{
	        type: 'value',
	        splitLine: {
	            show: false
	        },
	        axisTick: {
	            show: false,
	            length: 10 * scale,
	            lineStyle: {//水平州的颜色
	                color: '#3a3c4c',
                    type: 'solid',
                    width: 1
	            }
	        },
	        axisLabel: {
	            textStyle: {
	                color: '#838489',
	                fontSize: 12 * scale
	            }
	        },
	    }],
	    series: [
	        {
	            name: '数据',
	            type: 'pictorialBar',
	            barWidth: '16px',
	            barGap: '20px',
	            data: chartData,
	            z: 3,
	            symbol: 'image://'+ fillImg,
	            symbolClip:true,
	            symbolBoundingData: maxValue,
	            symbolSize: [16, '100%']
	        },
	    ]
	};	
	xmjgBar41.setOption(optionxmjgBar41)	
	
	
	
	
	//今日，本周，本月切换
	function objClick(clickObj,obj1,obj2,obj3){
		$(clickObj).on("click",function(){
			var index=$(this).index();
			$(this).css({"color": "#00cfff"}).siblings().css({"color": "#888"})
			if(index==0){
				$(obj2).css("display","block");$(obj1).css("display","none");$(obj3).css("display","none");			
			}else if(index==1){
				$(obj3).css("display","block");$(obj1).css("display","none");$(obj2).css("display","none");
			}else if(index==2){			
				$(obj1).css("display","block");$(obj2).css("display","none");$(obj3).css("display","none");
			}
		})
	}
	
	//流通趋势和主体分析切换
	function ltztTab(objCli,tabs1,tabs2){
		$(objCli).on("click",function(){
			var index=$(this).index();
			if(index==0){
				$("#ltqs").css({"background":"#1e4877","color":"#fff"})
				$("#ztfx").css({"background":"#171546","color":"#888"})
				$(tabs1).css({"display":"block"});
				$(tabs2).css({"display":"none"});
			}else if(index==1){
				$("#ztfx").css({"background":"#1e4877","color":"#fff"})
				$("#ltqs").css({"background":"#171546","color":"#888"})
				$(tabs2).css({"display":"block"});
				$(tabs1).css({"display":"none"});
			}
		})
	}
	ltztTab("#ltqs","#tab1","#tab2");
	ltztTab("#ztfx","#tab1","#tab2");
	
	//今日流通中流通趋势切换
	function tabClick(eleClick,obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9){
		$(eleClick).on("click",function(){
			var $index=$(this).index();
			if(!$(this).hasClass('active')){
				$(this).addClass('active').siblings().removeClass('active')
			}else{
				$(this).removeClass('active').siblings().addClass('active')
			}
			if($index==0){
				$(obj1).css("display","block");$(obj2).css("display","none");$(obj3).css("display","none")
			}else if($index==1){
				$(obj4).css("display","block");$(obj5).css("display","none");$(obj6).css("display","none")
			}else if($index==2){
				$(obj7).css("display","block");$(obj8).css("display","none");$(obj9).css("display","none")
			}
		})
	}
	tabClick("#tab1>ul>li","#tab1-1","#tab1-2","#tab1-3","#tab1-2","#tab1-1","#tab1-3","#tab1-3","#tab1-1","#tab1-2")
	
	//主体分析中的内容切换
	function ztfxCont(ztCon,zto1,zto2,zto3,zto4,zto5,zto6,zto7,zto8,zto9,zto10){
		$(ztCon).on("click",function(){
			var ztIndex=$(this).index();
			console.log(ztIndex)
			if(!$(this).hasClass('actives')){
				$(this).addClass('actives').siblings().removeClass('actives')
			}else{
				$(this).removeClass('actives').siblings().addClass('actives')
			}
			if(ztIndex==0){
				$(zto1).css('display','block');$(zto2).css('display','none');$(zto3).css('display','none');$(zto4).css('display','none');$(zto5).css('display','none');$(zto6).css('display','none');$(zto7).css('display','none');$(zto8).css('display','none');$(zto9).css('display','none');$(zto10).css('display','none')
			}else if(ztIndex==1){
				$(zto2).css('display','block');$(zto1).css('display','none');$(zto3).css('display','none');$(zto4).css('display','none');$(zto5).css('display','none');$(zto6).css('display','none');$(zto7).css('display','none');$(zto8).css('display','none');$(zto9).css('display','none');$(zto10).css('display','none')
			}else if(ztIndex==2){
				$(zto3).css('display','block');$(zto1).css('display','none');$(zto2).css('display','none');$(zto4).css('display','none');$(zto5).css('display','none');$(zto6).css('display','none');$(zto7).css('display','none');$(zto8).css('display','none');$(zto9).css('display','none');$(zto10).css('display','none')
			}else if(ztIndex==3){
				$(zto4).css('display','block');$(zto1).css('display','none');$(zto2).css('display','none');$(zto3).css('display','none');$(zto5).css('display','none');$(zto6).css('display','none');$(zto7).css('display','none');$(zto8).css('display','none');$(zto9).css('display','none');$(zto10).css('display','none')			
			}else if(ztIndex==4){
				$(zto5).css('display','block');$(zto1).css('display','none');$(zto2).css('display','none');$(zto3).css('display','none');$(zto4).css('display','none');$(zto6).css('display','none');$(zto7).css('display','none');$(zto8).css('display','none');$(zto9).css('display','none');$(zto10).css('display','none')				
			}else if(ztIndex==5){
				$(zto6).css('display','block');$(zto1).css('display','none');$(zto2).css('display','none');$(zto3).css('display','none');$(zto4).css('display','none');$(zto5).css('display','none');$(zto7).css('display','none');$(zto8).css('display','none');$(zto9).css('display','none');$(zto10).css('display','none')				
			}else if(ztIndex==6){
				$(zto7).css('display','block');$(zto1).css('display','none');$(zto2).css('display','none');$(zto3).css('display','none');$(zto4).css('display','none');$(zto5).css('display','none');$(zto6).css('display','none');$(zto8).css('display','none');$(zto9).css('display','none');$(zto10).css('display','none')				
			}else if(ztIndex==7){
				$(zto8).css('display','block');$(zto1).css('display','none');$(zto2).css('display','none');$(zto3).css('display','none');$(zto4).css('display','none');$(zto5).css('display','none');$(zto6).css('display','none');$(zto7).css('display','none');$(zto9).css('display','none');$(zto10).css('display','none')				
			}else if(ztIndex==8){
				$(zto9).css('display','block');$(zto1).css('display','none');$(zto2).css('display','none');$(zto3).css('display','none');$(zto4).css('display','none');$(zto5).css('display','none');$(zto6).css('display','none');$(zto7).css('display','none');$(zto8).css('display','none');$(zto10).css('display','none')				
			}else if(ztIndex==9){
				$(zto10).css('display','block');$(zto1).css('display','none');$(zto2).css('display','none');$(zto3).css('display','none');$(zto4).css('display','none');$(zto5).css('display','none');$(zto6).css('display','none');$(zto7).css('display','none');$(zto8).css('display','none');$(zto9).css('display','none')				
			}
		})
	}
	ztfxCont("#zt-center>ul>li",".zt-list1",".zt-list2",".zt-list3",".zt-list4",".zt-list5",".zt-list6",".zt-list7",".zt-list8",".zt-list9",".zt-list10")
	
	
	
	//切换省变数据
	function option(value,data1,data2,data3,id1,id2,id3){
		var selectedOption=value.options[value.selectedIndex];    
		if(selectedOption.value==data1){
			$(id1).css("display","block");
			$(id2).css("display","none");
			$(id3).css("display","none");
		}else if(selectedOption.value==data2){
			$(id2).css("display","block");
			$(id1).css("display","none");
			$(id3).css("display","none");
		}else if(selectedOption.value==data3){
			$(id3).css("display","block");
			$(id2).css("display","none");
			$(id1).css("display","none");
		}
	}
	function eleClick(ele){
		$(ele).click(function(){
			option(this,"zhejiang","anhui","jiangxi","#sliderQydph","#sliderQydph2","#sliderQydph3");		
			option(this,"zhejiang","anhui","jiangxi","#sliderLtlph","#sliderLtlph2","#sliderLtlph3");
			option(this,"zhejiang","anhui","jiangxi","#sliderCldt","#sliderCldt2","#sliderCldt3");
			option(this,"zhejiang","anhui","jiangxi","#sliderChldt","#sliderChldt2","#sliderChldt3");
		})
	}
	eleClick("#select1");
	eleClick("#select2");
	eleClick("#select3");
	eleClick("#select4");
	
	//点击tab切换
	function dataClick(tabEle,obj,num){
		$(tabEle).click(function(){
			$(obj).text(num)
		})
	}
	dataClick(".drl",".drlNum","314106");
	dataClick(".ltl",".drlNum","314106");
	dataClick(".cll",".drlNum","314106");
	dataClick(".chul",".drlNum","314106");
	
})









