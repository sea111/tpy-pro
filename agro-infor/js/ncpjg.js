$(function(){
	//区域图
	function ncpjgArea(id,text,ydata,name,datas,min,max,){
		var ncpjgArea = echarts.init(document.getElementById(id));    
		var optionncpjgArea = {
	        title : {
	            text:text,
	            textStyle:{
	                textAlign:'center',
	                fontSize:'14px',
	                color:'rgba( 255, 255, 255, 0.6 )'
	            },
	            x:"5%",
	            y:'8%',
	        },
	        tooltip : {
	            trigger: 'axis'
	        },
	        calculable : true,
	        xAxis : [
	            {
	                type : 'category',
	                boundaryGap : false,
	                data:ydata,
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
	                },
	                min:min,
	                max:max,
	            }
	        ],
	        series : [
	            {
	                name:name,
	                type:'line',
	                symbol:"none",
	                smooth:true,
	                itemStyle: {
		                	normal: {
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
	                data:datas,
	            }
	        ]
	    }
		ncpjgArea.setOption(optionncpjgArea);
	}
	//蔬菜类
	ncpjgArea('ncpjgAreasc1','日平均价(元/公斤)',['2011','2012','2013','2014','2015','2016'],'年均价',[3.9, 4.1, 4, 4.1, 4.4, 4.5],3.5,4.5)
	ncpjgArea('ncpjgAreasc2','日同比',['2011','2012','2013','2014','2015','2016'],'总产值',[71000, 76000, 74000, 77000, 78000, 79000],68000,79800)
	ncpjgArea('ncpjgAreasc3','日平均价(元/公斤)',['2011','2012','2013','2014','2015','2016'],'年均价',[3.8, 4.1, 4, 4.1, 4.4, 4.5],3.5,4.5)
	ncpjgArea('ncpjgAreasc4','日同比',['2011','2012','2013','2014','2015','2016'],'总产值',[71000, 76000, 74000, 77000, 78000, 79000],68000,79800)
	ncpjgArea('ncpjgAreasc5','日平均价(元/公斤)',['2011','2012','2013','2014','2015','2016'],'年均价',[3.9, 4.1, 4, 4.1, 4.4, 4.5],3.5,4.5)
	ncpjgArea('ncpjgAreasc6','日同比',['2011','2012','2013','2014','2015','2016'],'总产值',[71000, 76000, 74000, 77000, 78000, 79000],68000,79800)
	//果品类
	ncpjgArea('ncpjgAreagp1','日平均价(元/公斤)',['2011','2012','2013','2014','2015','2016'],'年均价',[3.8, 4.1, 4, 4.1, 4.4, 4.5],3.5,4.5)
	ncpjgArea('ncpjgAreagp2','日同比',['2011','2012','2013','2014','2015','2016'],'总产值',[71000, 76000, 74000, 77000, 78000, 79000],68000,79800)
	ncpjgArea('ncpjgAreagp3','日平均价(元/公斤)',['2011','2012','2013','2014','2015','2016'],'年均价',[3.9, 4.1, 4, 4.1, 4.4, 4.5],3.5,4.5)
	ncpjgArea('ncpjgAreagp4','日同比',['2011','2012','2013','2014','2015','2016'],'总产值',[71000, 76000, 74000, 77000, 78000, 79000],68000,79800)
	ncpjgArea('ncpjgAreagp5','日平均价(元/公斤)',['2011','2012','2013','2014','2015','2016'],'年均价',[3.9, 4.1, 4, 4.1, 4.4, 4.5],3.5,4.5)
	ncpjgArea('ncpjgAreagp6','日同比',['2011','2012','2013','2014','2015','2016'],'总产值',[71000, 76000, 74000, 77000, 78000, 79000],68000,79800)
	//粮油类
	ncpjgArea('ncpjgArealy1','日平均价(元/公斤)',['2011','2012','2013','2014','2015','2016'],'年均价',[3.5, 4.1, 4, 4.1, 4.4, 4.5],3.5,4.5)
	ncpjgArea('ncpjgArealy2','日同比',['2011','2012','2013','2014','2015','2016'],'总产值',[71000, 76000, 74000, 77000, 78000, 79000],68000,79800)
	ncpjgArea('ncpjgArealy3','日平均价(元/公斤)',['2011','2012','2013','2014','2015','2016'],'年均价',[3.9, 4.1, 4, 4.1, 4.4, 4.5],3.8,4.5)
	ncpjgArea('ncpjgArealy4','日同比',['2011','2012','2013','2014','2015','2016'],'总产值',[71000, 76000, 74000, 77000, 78000, 79000],68000,79800)
	ncpjgArea('ncpjgArealy5','日平均价(元/公斤)',['2011','2012','2013','2014','2015','2016'],'年均价',[3.9, 4.1, 4, 4.1, 4.4, 4.5],3.5,4.5)
	ncpjgArea('ncpjgArealy6','日同比',['2011','2012','2013','2014','2015','2016'],'总产值',[71000, 76000, 74000, 77000, 78000, 79000],68000,79800)
	//水产类
	ncpjgArea('ncpjgAreashuic1','日平均价(元/公斤)',['2011','2012','2013','2014','2015','2016'],'年均价',[3.7, 4.1, 4, 4.1, 4.4, 4.5],3.5,4.5)
	ncpjgArea('ncpjgAreashuic2','日同比',['2011','2012','2013','2014','2015','2016'],'总产值',[71000, 76000, 74000, 77000, 78000, 79000],68000,79800)
	ncpjgArea('ncpjgAreashuic3','日平均价(元/公斤)',['2011','2012','2013','2014','2015','2016'],'年均价',[3.9, 4.1, 4, 4.1, 4.4, 4.5],3.5,4.5,)
	ncpjgArea('ncpjgAreashuic4','日同比',['2011','2012','2013','2014','2015','2016'],'总产值',[71000, 76000, 74000, 77000, 78000, 79000],68000,79800)
	ncpjgArea('ncpjgAreashuic5','日平均价(元/公斤)',['2011','2012','2013','2014','2015','2016'],'年均价',[3.9, 4.1, 4, 4.1, 4.4, 4.5],3.5,4.5)
	ncpjgArea('ncpjgAreashuic6','日同比',['2011','2012','2013','2014','2015','2016'],'总产值',[71000, 76000, 74000, 77000, 78000, 79000],68000,79800)
	//特产类
	ncpjgArea('ncpjgAreatc1','日平均价(元/公斤)',['2011','2012','2013','2014','2015','2016'],'年均价',[3.6, 4.1, 4, 4.1, 4.4, 4.5],3.5,4.5)
	ncpjgArea('ncpjgAreatc2','日同比',['2011','2012','2013','2014','2015','2016'],'总产值',[71000, 76000, 74000, 77000, 78000, 79000],68000,79800)
	ncpjgArea('ncpjgAreatc3','日平均价(元/公斤)',['2011','2012','2013','2014','2015','2016'],'年均价',[3.9, 4.1, 4, 4.1, 4.4, 4.5],3.5,4.5)
	ncpjgArea('ncpjgAreatc4','日同比',['2011','2012','2013','2014','2015','2016'],'总产值',[71000, 76000, 74000, 77000, 78000, 79000],68000,79800)
	ncpjgArea('ncpjgAreatc5','日平均价(元/公斤)',['2011','2012','2013','2014','2015','2016'],'年均价',[3.9, 4.1, 4, 4.1, 4.4, 4.5],3.5,4.5)
	ncpjgArea('ncpjgAreatc6','日同比',['2011','2012','2013','2014','2015','2016'],'总产值',[71000, 76000, 74000, 77000, 78000, 79000],68000,79800)
	//肉类
	ncpjgArea('ncpjgArearou1','日平均价(元/公斤)',['2011','2012','2013','2014','2015','2016'],'年均价',[3.7, 4.1, 4, 4.1, 4.4, 4.5],3.5,4.5)
	ncpjgArea('ncpjgArearou2','日同比',['2011','2012','2013','2014','2015','2016'],'总产值',[71000, 76000, 74000, 77000, 78000, 79000],68000,79800)
	ncpjgArea('ncpjgArearou3','日平均价(元/公斤)',['2011','2012','2013','2014','2015','2016'],'年均价',[3.9, 4.1, 4, 4.1, 4.4, 4.5],3.5,4.5)
	ncpjgArea('ncpjgArearou4','日同比',['2011','2012','2013','2014','2015','2016'],'总产值',[71000, 76000, 74000, 77000, 78000, 79000],68000,79800)
	ncpjgArea('ncpjgArearou5','日平均价(元/公斤)',['2011','2012','2013','2014','2015','2016'],'年均价',[3.9, 4.1, 4, 4.1, 4.4, 4.5],3.5,4.5)
	ncpjgArea('ncpjgArearou6','日同比',['2011','2012','2013','2014','2015','2016'],'总产值',[71000, 76000, 74000, 77000, 78000, 79000],68000,79800)
	//中药材
	ncpjgArea('ncpjgAreazy1','日平均价(元/公斤)',['2011','2012','2013','2014','2015','2016'],'年均价',[3.5, 4.1, 4, 4.1, 4.4, 4.5],3.5,4.5)
	ncpjgArea('ncpjgAreazy2','日同比',['2011','2012','2013','2014','2015','2016'],'总产值',[71000, 76000, 74000, 77000, 78000, 79000],68000,79800)
	ncpjgArea('ncpjgAreazy3','日平均价(元/公斤)',['2011','2012','2013','2014','2015','2016'],'年均价',[3.9, 4.1, 4, 4.1, 4.4, 4.5],3.5,4.5)
	ncpjgArea('ncpjgAreazy4','日同比',['2011','2012','2013','2014','2015','2016'],'总产值',[71000, 76000, 74000, 77000, 78000, 79000],68000,79800)
	ncpjgArea('ncpjgAreazy5','日平均价(元/公斤)',['2011','2012','2013','2014','2015','2016'],'年均价',[3.9, 4.1, 4, 4.1, 4.4, 4.5],3.5,4.5)
	ncpjgArea('ncpjgAreazy6','日同比',['2011','2012','2013','2014','2015','2016'],'总产值',[71000, 76000, 74000, 77000, 78000, 79000],68000,79800)
	//原粮类
	ncpjgArea('ncpjgAreayl1','日平均价(元/公斤)',['2011','2012','2013','2014','2015','2016'],'年均价',[3.7, 4.1, 4, 4.1, 4.4, 4.5],3.5,4.5)
	ncpjgArea('ncpjgAreayl2','日同比',['2011','2012','2013','2014','2015','2016'],'总产值',[71000, 76000, 74000, 77000, 78000, 79000],68000,79800)
	ncpjgArea('ncpjgAreayl3','日平均价(元/公斤)',['2011','2012','2013','2014','2015','2016'],'年均价',[3.8, 4.1, 4, 4.1, 4.4, 4.5],3.5,4.5)
	ncpjgArea('ncpjgAreayl4','日同比',['2011','2012','2013','2014','2015','2016'],'总产值',[71000, 76000, 74000, 77000, 78000, 79000],68000,79800)
	ncpjgArea('ncpjgAreayl5','日平均价(元/公斤)',['2011','2012','2013','2014','2015','2016'],'年均价',[3.9, 4.1, 4, 4.1, 4.4, 4.5],3.5,4.5)
	ncpjgArea('ncpjgAreayl6','日同比',['2011','2012','2013','2014','2015','2016'],'总产值',[71000, 76000, 74000, 77000, 78000, 79000],68000,79800)
	//饲料/饲料粮
	ncpjgArea('ncpjgAreasil1','日平均价(元/公斤)',['2011','2012','2013','2014','2015','2016'],'年均价',[3.6, 4.1, 4, 4.1, 4.4, 4.5],3.5,4.5)
	ncpjgArea('ncpjgAreasil2','日同比',['2011','2012','2013','2014','2015','2016'],'总产值',[71000, 76000, 74000, 77000, 78000, 79000],68000,79800)
	ncpjgArea('ncpjgAreasil3','日平均价(元/公斤)',['2011','2012','2013','2014','2015','2016'],'年均价',[3.9, 4.1, 4, 4.1, 4.4, 4.5],3.5,4.5)
	ncpjgArea('ncpjgAreasil4','日同比',['2011','2012','2013','2014','2015','2016'],'总产值',[71000, 76000, 74000, 77000, 78000, 79000],68000,79800)
	ncpjgArea('ncpjgAreasil5','日平均价(元/公斤)',['2011','2012','2013','2014','2015','2016'],'年均价',[3.9, 4.1, 4, 4.1, 4.4, 4.5],3.5,4.5)
	ncpjgArea('ncpjgAreasil6','日同比',['2011','2012','2013','2014','2015','2016'],'总产值',[71000, 76000, 74000, 77000, 78000, 79000],68000,79800)
	//茶类
	ncpjgArea('ncpjgAreacal1','日平均价(元/公斤)',['2011','2012','2013','2014','2015','2016'],'年均价',[3.8, 4.1, 4, 4.1, 4.4, 4.5],3.5,4.5)
	ncpjgArea('ncpjgAreacal2','日同比',['2011','2012','2013','2014','2015','2016'],'总产值',[71000, 76000, 74000, 77000, 78000, 79000],68000,79800)
	ncpjgArea('ncpjgAreacal3','日平均价(元/公斤)',['2011','2012','2013','2014','2015','2016'],'年均价',[3.9, 4.1, 4, 4.1, 4.4, 4.5],3.5,4.5)
	ncpjgArea('ncpjgAreacal4','日同比',['2011','2012','2013','2014','2015','2016'],'总产值',[71000, 76000, 74000, 77000, 78000, 79000],68000,79800)
	ncpjgArea('ncpjgAreacal5','日平均价(元/公斤)',['2011','2012','2013','2014','2015','2016'],'年均价',[3.9, 4.1, 4, 4.1, 4.4, 4.5],3.5,4.5)
	ncpjgArea('ncpjgAreacal6','日同比',['2011','2012','2013','2014','2015','2016'],'总产值',[71000, 76000, 74000, 77000, 78000, 79000],68000,79800)
	
	//日价格、月均价、历年均价、历年价格
	ncpjgArea('ncpjgArea3','价格趋势分析',['10月23周日','10月24周一','10月25周二','10月26周三','10月27周四'],'3.3元/公斤',[15, 30, 25, 45, 57],)
	ncpjgArea('ncpjgArea32','价格趋势分析',['10月23周日','10月24周一','10月25周二','10月26周三','10月27周四'],'3.3元/公斤',[15, 30, 25, 45, 57],)
	ncpjgArea('ncpjgArea33','价格趋势分析',['10月23周日','10月24周一','10月25周二','10月26周三','10月27周四'],'3.3元/公斤',[15, 30, 25, 45, 57],)
	ncpjgArea('ncpjgArea34','价格趋势分析',['10月23周日','10月24周一','10月25周二','10月26周三','10月27周四'],'3.3元/公斤',[15, 30, 25, 45, 57],)

	//日平均价，周平均价 ，月平均价
	function rzyClick(clickObj,obj1,obj2,obj3,color1,color2,color3){
		$(clickObj).on("click",function(){
			var index=$(this).index();
			if(index==0){
				$(obj1).css({"display":"block"});$(obj2).css("display","none");$(obj3).css("display","none");			
				$(color1).css({"color":"#fff","background":"#15204a"});
				$(color2).css({"color":"#888","background":""});
				$(color3).css({"color":"#888","background":""});
			}else if(index==1){
				$(obj2).css({"display":"block"});$(obj1).css("display","none");$(obj3).css("display","none");
				$(color2).css({"color":"#fff","background":"#15204a"});
				$(color1).css({"color":"#888","background":"#0c0d26"});
				$(color3).css({"color":"#888","background":""});
			}else if(index==2){
				$(obj3).css({"display":"block"});$(obj1).css("display","none");$(obj2).css("display","none");
				$(color3).css({"color":"#fff","background":"#15204a"});
				$(color1).css({"color":"#888","background":"#0c0d26"});
				$(color2).css({"color":"#888","background":""});
			}
		})
	}
	rzyClick('.rzy-nav>li','#scl-rpjj','#scl-zpjj','#scl-ypjj','.rpjj','.zpjj','.ypjj')
	rzyClick('.rzy-nav>li','#gpl-rpjj','#gpl-zpjj','#gpl-ypjj','.rpjj','.zpjj','.ypjj')
	rzyClick('.rzy-nav>li','#lyl-rpjj','#lyl-zpjj','#lyl-ypjj','.rpjj','.zpjj','.ypjj')
	rzyClick('.rzy-nav>li','#shuicl-rpjj','#shuicl-zpjj','#shuicl-ypjj','.rpjj','.zpjj','.ypjj')
	rzyClick('.rzy-nav>li','#tcl-rpjj','#tcl-zpjj','#tcl-ypjj','.rpjj','.zpjj','.ypjj')
	rzyClick('.rzy-nav>li','#roul-rpjj','#roul-zpjj','#roul-ypjj','.rpjj','.zpjj','.ypjj')
	rzyClick('.rzy-nav>li','#zyc-rpjj','#zyc-zpjj','#zyc-ypjj','.rpjj','.zpjj','.ypjj')
	rzyClick('.rzy-nav>li','#yll-rpjj','#yll-zpjj','#yll-ypjj','.rpjj','.zpjj','.ypjj')
	rzyClick('.rzy-nav>li','#sil-rpjj','#sil-zpjj','#sil-ypjj','.rpjj','.zpjj','.ypjj')
	rzyClick('.rzy-nav>li','#cal-rpjj','#cal-zpjj','#cal-ypjj','.rpjj','.zpjj','.ypjj')
	
	//价格趋势分析
	function dayClick(clickObj,obj1,obj2,obj3,obj4,color1,color2,color3,color4){
		$(clickObj).on("click",function(){
			var index=$(this).index();
			if(index==0){
				$(obj1).css({"display":"block"});$(obj2).css("display","none");$(obj3).css("display","none");$(obj4).css("display","none")			
				$(color1).css({"color":"#0fb4d6","border":"1px solid #0fb4d6"});
				$(color2).css({"color":"#b9b9bd","border":"none"});
				$(color3).css({"color":"#b9b9bd","border":"none"});
				$(color4).css({"color":"#b9b9bd","border":"none"});
			}else if(index==1){
				$(obj2).css({"display":"block"});$(obj1).css("display","none");$(obj3).css("display","none");$(obj4).css("display","none")	
				$(color2).css({"color":"#0fb4d6","border":"1px solid #0fb4d6"});
				$(color1).css({"color":"#b9b9bd","border":"none"});
				$(color3).css({"color":"#b9b9bd","border":"none"});
				$(color4).css({"color":"#b9b9bd","border":"none"});
			}else if(index==2){
				$(obj3).css({"display":"block"});$(obj1).css("display","none");$(obj2).css("display","none");$(obj4).css("display","none")	
				$(color3).css({"color":"#0fb4d6","border":"1px solid #0fb4d6"});
				$(color1).css({"color":"#b9b9bd","border":"none"});
				$(color2).css({"color":"#b9b9bd","border":"none"});
				$(color4).css({"color":"#b9b9bd","border":"none"});
			}else if(index==3){
				$(obj4).css("display","block");$(obj1).css("display","none");$(obj2).css({"display":"none"});$(obj3).css("display","none");
				$(color4).css({"color":"#0fb4d6","border":"1px solid #0fb4d6"});
				$(color1).css({"color":"#b9b9bd","border":"none"});
				$(color3).css({"color":"#b9b9bd","border":"none"});
				$(color2).css({"color":"#b9b9bd","border":"none"});
			}
		})
	}
	dayClick('.jgqs>li','#ncpjgArea3','#ncpjgArea32','#ncpjgArea33','#ncpjgArea34','.jrjg','.yjj','.rnjj','.rnjg');
	
	//左侧菜单栏切换
	function leftTab(objClick,obj1,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,obj10,color1,color2,color3,color4,color5,color6,color7,color8,color9,color10){
		$(objClick).click(function(){
			var index=$(this).index();
			if(index==0){
				$(obj1).css({"display":"block"});$(obj2).css("display","none");$(obj3).css("display","none");$(obj4).css("display","none");$(obj5).css("display","none");$(obj6).css("display","none");$(obj7).css("display","none");$(obj8).css("display","none");$(obj9).css("display","none");$(obj10).css("display","none");								
				$(color1).css({"color":"#fff","background":"#1a3163"});
				$(color2).css({"color":"#3569c9","background":""});
				$(color3).css({"color":"#3569c9","background":""});
				$(color4).css({"color":"#3569c9","background":""});
				$(color5).css({"color":"#3569c9","background":""});
				$(color6).css({"color":"#3569c9","background":""});
				$(color7).css({"color":"#3569c9","background":""});
				$(color8).css({"color":"#3569c9","background":""});
				$(color9).css({"color":"#3569c9","background":""});
				$(color10).css({"color":"#3569c9","background":""});
			}else if(index==1){
				$(obj2).css({"display":"block"});$(obj1).css("display","none");$(obj3).css("display","none");$(obj4).css("display","none");$(obj5).css("display","none");$(obj6).css("display","none");$(obj7).css("display","none");$(obj8).css("display","none");$(obj9).css("display","none");$(obj10).css("display","none");
				$(color2).css({"color":"#fff","background":"#1a3163"});
				$(color1).css({"color":"#3569c9","background":"#080b1c"});
				$(color3).css({"color":"#3569c9","background":""});
				$(color4).css({"color":"#3569c9","background":""});
				$(color5).css({"color":"#3569c9","background":""});
				$(color6).css({"color":"#3569c9","background":""});
				$(color7).css({"color":"#3569c9","background":""});
				$(color8).css({"color":"#3569c9","background":""});
				$(color9).css({"color":"#3569c9","background":""});
				$(color10).css({"color":"#3569c9","background":""});
			}else if(index==2){
				$(obj3).css({"display":"block"});$(obj2).css("display","none");$(obj1).css("display","none");$(obj4).css("display","none");$(obj5).css("display","none");$(obj6).css("display","none");$(obj7).css("display","none");$(obj8).css("display","none");$(obj9).css("display","none");$(obj10).css("display","none");
				$(color3).css({"color":"#fff","background":"#1a3163"});
				$(color2).css({"color":"#3569c9","background":""});
				$(color1).css({"color":"#3569c9","background":"#080b1c"});
				$(color4).css({"color":"#3569c9","background":""});
				$(color5).css({"color":"#3569c9","background":""});
				$(color6).css({"color":"#3569c9","background":""});
				$(color7).css({"color":"#3569c9","background":""});
				$(color8).css({"color":"#3569c9","background":""});
				$(color9).css({"color":"#3569c9","background":""});
				$(color10).css({"color":"#3569c9","background":""});
			}else if(index==3){
				$(obj4).css({"display":"block"});$(obj2).css("display","none");$(obj3).css("display","none");$(obj1).css("display","none");$(obj5).css("display","none");$(obj6).css("display","none");$(obj7).css("display","none");$(obj8).css("display","none");$(obj9).css("display","none");$(obj10).css("display","none");
				$(color4).css({"color":"#fff","background":"#1a3163"});
				$(color2).css({"color":"#3569c9","background":""});
				$(color3).css({"color":"#3569c9","background":""});
				$(color1).css({"color":"#3569c9","background":"#080b1c"});
				$(color5).css({"color":"#3569c9","background":""});
				$(color6).css({"color":"#3569c9","background":""});
				$(color7).css({"color":"#3569c9","background":""});
				$(color8).css({"color":"#3569c9","background":""});
				$(color9).css({"color":"#3569c9","background":""});
				$(color10).css({"color":"#3569c9","background":""});
			}else if(index==4){
				$(obj5).css({"display":"block"});$(obj2).css("display","none");$(obj3).css("display","none");$(obj4).css("display","none");$(obj1).css("display","none");$(obj6).css("display","none");$(obj7).css("display","none");$(obj8).css("display","none");$(obj9).css("display","none");$(obj10).css("display","none");
				$(color5).css({"color":"#fff","background":"#1a3163"});
				$(color2).css({"color":"#3569c9","background":""});
				$(color3).css({"color":"#3569c9","background":""});
				$(color4).css({"color":"#3569c9","background":""});
				$(color1).css({"color":"#3569c9","background":"#080b1c"});
				$(color6).css({"color":"#3569c9","background":""});
				$(color7).css({"color":"#3569c9","background":""});
				$(color8).css({"color":"#3569c9","background":""});
				$(color9).css({"color":"#3569c9","background":""});
				$(color10).css({"color":"#3569c9","background":""});
			}else if(index==5){
				$(obj6).css({"display":"block"});$(obj2).css("display","none");$(obj3).css("display","none");$(obj4).css("display","none");$(obj5).css("display","none");$(obj1).css("display","none");$(obj7).css("display","none");$(obj8).css("display","none");$(obj9).css("display","none");$(obj10).css("display","none");
				$(color6).css({"color":"#fff","background":"#1a3163"});
				$(color2).css({"color":"#3569c9","background":""});
				$(color3).css({"color":"#3569c9","background":""});
				$(color4).css({"color":"#3569c9","background":""});
				$(color5).css({"color":"#3569c9","background":""});
				$(color1).css({"color":"#3569c9","background":"#080b1c"});
				$(color7).css({"color":"#3569c9","background":""});
				$(color8).css({"color":"#3569c9","background":""});
				$(color9).css({"color":"#3569c9","background":""});
				$(color10).css({"color":"#3569c9","background":""});
			}else if(index==6){
				$(obj7).css({"display":"block"});$(obj2).css("display","none");$(obj3).css("display","none");$(obj4).css("display","none");$(obj5).css("display","none");$(obj6).css("display","none");$(obj1).css("display","none");$(obj8).css("display","none");$(obj9).css("display","none");$(obj10).css("display","none");
				$(color7).css({"color":"#fff","background":"#1a3163"});
				$(color2).css({"color":"#3569c9","background":""});
				$(color3).css({"color":"#3569c9","background":""});
				$(color4).css({"color":"#3569c9","background":""});
				$(color5).css({"color":"#3569c9","background":""});
				$(color6).css({"color":"#3569c9","background":""});
				$(color1).css({"color":"#3569c9","background":"#080b1c"});
				$(color8).css({"color":"#3569c9","background":""});
				$(color9).css({"color":"#3569c9","background":""});
				$(color10).css({"color":"#3569c9","background":""});
			}else if(index==7){
				$(obj8).css({"display":"block"});$(obj2).css("display","none");$(obj3).css("display","none");$(obj4).css("display","none");$(obj5).css("display","none");$(obj6).css("display","none");$(obj7).css("display","none");$(obj1).css("display","none");$(obj9).css("display","none");$(obj10).css("display","none");
				$(color8).css({"color":"#fff","background":"#1a3163"});
				$(color2).css({"color":"#3569c9","background":""});
				$(color3).css({"color":"#3569c9","background":""});
				$(color4).css({"color":"#3569c9","background":""});
				$(color5).css({"color":"#3569c9","background":""});
				$(color6).css({"color":"#3569c9","background":""});
				$(color7).css({"color":"#3569c9","background":""});
				$(color1).css({"color":"#3569c9","background":"#080b1c"});
				$(color9).css({"color":"#3569c9","background":""});
				$(color10).css({"color":"#3569c9","background":""});
			}else if(index==8){
				$(obj9).css({"display":"block"});$(obj2).css("display","none");$(obj3).css("display","none");$(obj4).css("display","none");$(obj5).css("display","none");$(obj6).css("display","none");$(obj7).css("display","none");$(obj8).css("display","none");$(obj1).css("display","none");$(obj10).css("display","none");
				$(color9).css({"color":"#fff","background":"#1a3163"});
				$(color2).css({"color":"#3569c9","background":""});
				$(color3).css({"color":"#3569c9","background":""});
				$(color4).css({"color":"#3569c9","background":""});
				$(color5).css({"color":"#3569c9","background":""});
				$(color6).css({"color":"#3569c9","background":""});
				$(color7).css({"color":"#3569c9","background":""});
				$(color8).css({"color":"#3569c9","background":""});
				$(color1).css({"color":"#3569c9","background":"#080b1c"});
				$(color10).css({"color":"#3569c9","background":""});
			}else if(index==9){
				$(obj10).css({"display":"block"});$(obj2).css("display","none");$(obj3).css("display","none");$(obj4).css("display","none");$(obj5).css("display","none");$(obj6).css("display","none");$(obj7).css("display","none");$(obj8).css("display","none");$(obj9).css("display","none");$(obj1).css("display","none");
				$(color10).css({"color":"#fff","background":"#1a3163"});
				$(color2).css({"color":"#3569c9","background":""});
				$(color3).css({"color":"#3569c9","background":""});
				$(color4).css({"color":"#3569c9","background":""});
				$(color5).css({"color":"#3569c9","background":""});
				$(color6).css({"color":"#3569c9","background":""});
				$(color7).css({"color":"#3569c9","background":""});
				$(color8).css({"color":"#3569c9","background":""});
				$(color9).css({"color":"#3569c9","background":""});
				$(color1).css({"color":"#3569c9","background":"#080b1c"});
			}
		})
	}
	leftTab('.ncp-type>li','#scl','#gpl','#lyl','#shuicl','#tcl','#roul','#zyc','#yll','#sil','#cal','.sc','.gp','.ly','.shuic','.tc','.rl','.zyc','.yll','.sl','.cl')
	//点击tab下面的切换地图
	function eleClick(clickObj,obj1,obj2,obj3,obj4,color1,color2,color3,color4){
		$(clickObj).on("click",function(){
			var index=$(this).index();
			if(index==0){
				$(obj1).css("display","block");$(obj2).css("display","none");$(obj3).css("display","none");$(obj4).css("display","none");
				$(color1).css({"color":"#fff","background":"#0b4b63"});
				$(color2).css({"color":"#888","background":""});
				$(color3).css({"color":"#888","background":""});
				$(color4).css({"color":"#888","background":""});
			}else if(index==1){
				$(obj2).css("display","block");$(obj1).css("display","none");$(obj3).css("display","none");$(obj4).css("display","none");
				$(color2).css({"color":"#fff","background":"#0b4b63"});
				$(color1).css({"color":"#888","background":"#080b1d"});
				$(color3).css({"color":"#888","background":""});
				$(color4).css({"color":"#888","background":""});
			}else if(index==2){
				$(obj3).css("display","block");$(obj1).css("display","none");$(obj2).css("display","none");$(obj4).css("display","none");
				$(color3).css({"color":"#fff","background":"#0b4b63"});
				$(color1).css({"color":"#888","background":"#080b1d"});
				$(color2).css({"color":"#888","background":""});
				$(color4).css({"color":"#888","background":""});
			}else if(index==3){
				$(obj4).css("display","block");$(obj2).css("display","none");$(obj3).css("display","none");$(obj1).css("display","none");
				$(color4).css({"color":"#fff","background":"#0b4b63"});
				$(color1).css({"color":"#888","background":"#080b1d"});
				$(color3).css({"color":"#888","background":""});
				$(color2).css({"color":"#888","background":""});
			}
		})
	}
	eleClick('.tabs-btn>li','#jinr','#jinqr','#jiny','#benn','.jr','.jqr','.jy','.bn');



})
