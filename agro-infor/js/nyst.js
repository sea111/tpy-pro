$(function(){
	//tab切换
	function nystTab(objClick,obj1,obj2){
		$(objClick).click(function(){
			var index=$(this).index();
			if($(this).hasClass('active')){
				$(this).removeClass('active').siblings().addClass('active')
			}else{
				$(this).addClass('active').siblings().removeClass('active')
			}
			if(index==0){
				$(obj1).show();
				$(obj2).hide();
			}else{
				$(obj2).show();
				$(obj1).hide();
			}
		})
	}
	nystTab('.tabs-today>li','#tab-1','#tab-2')
		
	//第3天，第5天，第7天
	function dayClick(clickObj,obj1,obj2,obj3,color1,color2,color3){
		$(clickObj).on("click",function(){
			var index=$(this).index();
			if(index==0){
				$(obj1).css({"display":"block"});$(obj2).css("display","none");$(obj3).css("display","none");			
				$(color1).css({"color":"#fff","background":"#0b4b63"});
				$(color2).css({"color":"#888","background":""});
				$(color3).css({"color":"#888","background":""});
			}else if(index==1){
				$(obj2).css({"display":"block"});$(obj1).css("display","none");$(obj3).css("display","none");
				$(color2).css({"color":"#fff","background":"#0b4b63"});
				$(color1).css({"color":"#888","background":"#080b1d"});
				$(color3).css({"color":"#888","background":""});
			}else if(index==2){
				$(obj3).css({"display":"block"});$(obj1).css("display","none");$(obj2).css("display","none");
				$(color3).css({"color":"#fff","background":"#0b4b63"});
				$(color1).css({"color":"#888","background":"#080b1d"});
				$(color2).css({"color":"#888","background":""});
			}
		})
	}
	dayClick(".tabs-btn>li","#tr-ztMap2","#tr-ztMap3","#tr-ztMap4",'.dst','.dwt','.dqt')
	dayClick(".tabs-btn>li","#hc-ztMap2","#hc-ztMap3","#hc-ztMap4",'.dst','.dwt','.dqt')
	dayClick(".tabs-btn>li","#js-ztMap2","#js-ztMap3","#js-ztMap4",'.dst','.dwt','.dqt')
	//土壤墒情,寒潮预测,降水量
//	function trhcjsClick(clickObj,obj1,obj2,obj3,color1,color2,color3,trsq,hcyc,jsl){
//		$(clickObj).on("click",function(){
//			var index=$(this).index();
//			if(index==0){
//				$(obj1).css({"display":"block"});$(obj2).css("display","none");$(obj3).css("display","none");			
//				$(color1).css({"color":"#0d8aa7",});
//				$(color2).css({"color":"#a5a5a8",});
//				$(color3).css({"color":"#a5a5a8",});
//				$(trsq).css({'background':'url(./images/nyst-trsq-blue.png) no-repeat'});
//				$(hcyc).css({'background':'url(./images/nyst-hcyc.png) no-repeat'});
//				$(jsl).css({'background':'url(./images/nyst-jsl.png) no-repeat'});
//				$("#sq-line").css({'top':'66px'})
//			}else if(index==1){
//				$(obj2).css({"display":"block"});$(obj1).css("display","none");$(obj3).css("display","none");
//				$(color2).css({"color":"#0d8aa7",});
//				$(color1).css({"color":"#a5a5a8",});
//				$(color3).css({"color":"#a5a5a8",});
//				$(hcyc).css({'background':'url(./images/nyst-hcyc-blue.png) no-repeat'});
//				$(trsq).css({'background':'url(./images/nyst-trsq.png) no-repeat'})
//				$(jsl).css({'background':'url(./images/nyst-jsl.png) no-repeat'})
//				$("#sq-line").css({'top':'130px'})
//			}else if(index==2){
//				$(obj3).css({"display":"block"});$(obj1).css("display","none");$(obj2).css("display","none");
//				$(color3).css({"color":"#0d8aa7",});
//				$(color1).css({"color":"#a5a5a8",});
//				$(color2).css({"color":"#a5a5a8",});
//				$(jsl).css({'background':'url(./images/nyst-jsl-blue.png) no-repeat'});
//				$(trsq).css({'background':'url(./images/nyst-trsq.png) no-repeat'})
//				$(hcyc).css({'background':'url(./images/nyst-hcyc.png) no-repeat'})
//				$("#sq-line").css({'top':'200px'})
//			}
//		})
//	}
//	trhcjsClick(".sq-map-legend>li","#sq-tr","#sq-hc","#sq-js",'.sq-tr','.sq-hc','.sq-js','.trsq','.hcyc','.jsl',)
	
	


    	var sqMapLegend=document.getElementById('tab-ul');
        var tabs=sqMapLegend.getElementsByTagName('li');
            contents=$('#tab-con').find('.tab-div');
           	timer=null,
            mark=0;
        //改变状态
        function change(index){
            for(var j=0;j<tabs.length;j++){
                tabs[j].className='';
                contents[j].style.display='none';
            }
            tabs[index].className="mouseover";
            contents[index].style.display='block';
            mark=index;
        }
        //自动轮播函数
        function play(){
            mark++;           
            if (mark==tabs.length) {
                mark=0;
            }
            //setInterval(function(){
            	change(mark);
            //},3000)
            
        }
        //添加事件，轮播开始
        timer=setInterval(play,5000);
       $("#tab-2").on('mouseover','#eventr',function(){
       		if (timer) {
                clearInterval(timer);
           }                     
       })
       $('#tab-2').on('mouseout','#eventr',function(){
       		if (timer) {
                clearInterval(timer);
            }
            timer=setInterval(play,5000);
       })
       $("#evenhc").on('mouseover',function(){
       		if (timer) {
                clearInterval(timer);
           }
       })
       $('#evenhc').on('mouseout',function(){
       		if (timer) {
                clearInterval(timer);
            }
            timer=setInterval(play,5000);
       })
       $("#evenjs").on('mouseover',function(){
       		if (timer) {
                clearInterval(timer);
           }
       })
       $('#evenjs').on('mouseout',function(){
       		if (timer) {
                clearInterval(timer);
            }
            timer=setInterval(play,5000);
       })
       $(".sq-tr").on('mouseover',function(){
       		if (timer) {
                clearInterval(timer);
           }
       })
       $('.sq-tr').on('mouseout',function(){
       		if (timer) {
                clearInterval(timer);
            }
            timer=setInterval(play,4000);
       })
       $(".sq-hc").on('mouseover',function(){
       		if (timer) {
                clearInterval(timer);
           }
       })
       $('.sq-hc').on('mouseout',function(){
       		if (timer) {
                clearInterval(timer);
            }
            timer=setInterval(play,4000);
       })
       $(".sq-js").on('mouseover',function(){
       		if (timer) {
                clearInterval(timer);
           }
       })
       $('.sq-js').on('mouseout',function(){
       		if (timer) {
                clearInterval(timer);
            }
            timer=setInterval(play,4000);
       })
        for(var i=0;i<tabs.length;i++){
            tabs[i].index=i;
            tabs[i].addEventListener('mouseover',function(){
                change(this.index);
            },false);
        }

	
	
})
