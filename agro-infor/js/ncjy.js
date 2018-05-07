$(function(){
    //基本信息
    var ncjyPie=echarts.init(document.getElementById('ncjyPie'))
    var optionncjyPie = {
        color:['#4dd3e2','#fbc11c','#2e7cc9'],//修改的颜色
        tooltip : {
            trigger: 'item',
            //formatter: "{b}: {c} ({d}%)"//a（系列名称），b（数据项名称），c（数值）, d（百分比）
            formatter: "{b}:{c}"
        },
        legend: {
            orient : 'horizonal',
            x : 'left',
            y:'bottom',
            data:['农村小组数','乡镇数','村社数'],
            textStyle:{    //图例文字的样式
                color:'rgb( 223, 223, 223 )',
                fontSize:12,
            },
        },
        series : [
            {
                name:'农村小组数',
                type:'pie',
                radius : '73%',//饼图的半径大小
                center:['68%','58%'],//饼图的位置
                label:{
                    normal:{
                        show:false ,//去掉外面的导线
                        position : 'outside'
                    },
                    //emphasis:{//鼠标移上去显示的外面的导线
                    //show :true
                    //}
                },
                data:[
                    {value:2996, name:'农村小组数'},
                    {value:12, name:'乡镇数'},
                    {value:160, name:'村社数'},
                ]
            }
        ]
    };
    ncjyPie.setOption(optionncjyPie)

    //收益分配
    var ncjyBar=echarts.init(document.getElementById('ncjyBar'))
    var optionncjyBar={
        tooltip : {
            trigger: 'item'
        },
        title : {
            text:'单位:元',
            textStyle:{    //图例文字的样式
                color:'rgba( 255, 255, 255, 0.4 )',
                fontSize:12,
            },
            itemGap:3
        },
        color:['#0fb4d6'],
        xAxis : [
            {
                type : 'category',
                data:['2011','','2012','','2013','','2014','','2015','2016'],
                axisTick : {    // 轴标记
                    show:false
                },
                axisLine : {    // 轴线
                    show: true,
                    lineStyle: {//水平州的颜色
                        color: 'rgb( 255, 255, 255 )',
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
        yAxis : [
            {
                type : 'value',
                //name : '水量',
                axisTick : {    // 轴标记
                    show:false,
                },
                splitLine : {
                    show: false
                },
                axisLine : {    // 轴线
                    show: true,
                    lineStyle: {//水平州的颜色
                        color: 'rgb( 255, 255, 255 )',
                        type: 'solid',
                        width: 1
                    }
                },
                axisLabel : {
                    show:true,
                    textStyle: {//水平轴字体颜色
                        color: 'rgba( 255, 255, 255, 0.4 )',
                        fontSize: 12
                    }
                }
            }
        ],
        series : [
            {
                //name:'降水量',
                type:'bar',
                barWidth :16,//柱图宽度
                data:[18,24,32,46,46,32,24,24,46,32]
            },
            {
                //name:'平均温度',
                type:'line',
                symbol: 'circle',//折线上的点
				smooth:true,
                symbolSize:'8',//折线上的点的大小
                itemStyle:{
                    normal:{
                        color:'#fff',//折线上的点的颜色
                        lineStyle:{//修改折线的颜色
                            color:'#4dcb73'
                        }
                    }
                },
                data:[0,20,26,39,28,20,22,24,32,22]
            }
        ]
    }
    ncjyBar.setOption(optionncjyBar)

    //农户及人口
    var ncjyPie1=echarts.init(document.getElementById('ncjyPie1'))
    var optionncjyPie1={
        tooltip : {
            trigger: 'item',
            formatter: "{b} :({d}%)"
        },
        color:['#4dd3e2','#2e7cc9'],//修改的颜色
        legend: {
            orient : 'vertical',
            x : 'left',
        },
        series : [
            {
                //name:'访问来源',
                type:'pie',
                radius : ['50%', '70%'],
                center:['40%','45%'],//饼图的位置
                label:{
                    normal:{
                        show:true ,//去掉外面的导线
                        position : 'outside'
                    }
                },
                data:[
                    {value:64, name:'农户人数'},
                    {value:36, name:'其他'}
                ]
            }
        ]
    }
    ncjyPie1.setOption(optionncjyPie1)
    var ncjyPie2=echarts.init(document.getElementById('ncjyPie2'))
    var optionncjyPie2={
        tooltip : {
            trigger: 'item',
            formatter: "{b} :({d}%)"
        },
        color:['#4dd3e2','#2e7cc9'],//修改的颜色
        legend: {
            orient : 'vertical',
            x : 'left',
        },
        series : [
            {
                //name:'访问来源',
                type:'pie',
                radius : ['50%', '70%'],
                center:['60%','45%'],//饼图的位置
                label:{
                    normal:{
                        show:true ,//去掉外面的导线
                        position : 'outside'
                    }
                },
                data:[
                    {value:64, name:'股东数'},
                    {value:36, name:'社员数'}
                ]
            }
        ]
    }
    ncjyPie2.setOption(optionncjyPie2)

    //资产负债
    var ncjyPie3=echarts.init(document.getElementById('ncjyPie3'))
    var optionncjyPie3={
        tooltip : {
            trigger: 'item',
            formatter: "{b} :({d}%)"
        },
        color:['#4dd3e2','#706f83'],//修改的颜色
        legend: {
            orient : 'vertical',
            x : 'left',
        },
        series : [
            {
                //name:'访问来源',
                type:'pie',
                radius : ['50%', '70%'],
                center:['45%','48%'],//饼图的位置
                avoidLabelOverlap:false,//避免圈内的文字重复
                label:{
                    normal:{
                        show:true ,//去掉外面的导线和显示在圈内的文字
                        position : 'center',
                        //formatter:'{b}\n\n {d}%',
                        formatter:function(){//显示在圈内的文字
                            return '同比\n\n50%'
                        },
                        textStyle:{
                            color:'#fff',
                            fontSize:'16'
                        }
                    }
                },
                data:[
                    {value:80, name:''},
                    {value:20, name:''}
                ]
            }
        ]
    }
    ncjyPie3.setOption(optionncjyPie3)

    var ncjyPie4=echarts.init(document.getElementById('ncjyPie4'))
    var optionncjyPie4={
        tooltip : {
            trigger: 'item',
            formatter: "{b} :({d}%)"
        },
        color:['#4dd3e2','#706f83'],//修改的颜色
        legend: {
            orient : 'vertical',
            x : 'left',
        },
        series : [
            {
                //name:'访问来源',
                type:'pie',
                radius : ['50%', '70%'],
                center:['45%','48%'],//饼图的位置
                avoidLabelOverlap:false,//避免圈内的文字重复
                label:{
                    normal:{
                        show:true ,//去掉外面的导线和显示在圈内的文字
                        position : 'center',
                        //formatter:'{b}\n\n {d}%',
                        formatter:function(){//显示在圈内的文字
                            return '同比\n\n30%'
                        },
                        textStyle:{
                            color:'#fff',
                            fontSize:'16'
                        }
                    }
                },
                data:[
                    {value:80, name:''},
                    {value:20, name:''}
                ]
            }
        ]
    }
    ncjyPie4.setOption(optionncjyPie4)

    var ncjyPie5=echarts.init(document.getElementById('ncjyPie5'))
    var optionncjyPie5={
        tooltip : {
            trigger: 'item',
            formatter: "{b} :({d}%)"
        },
        color:['#4dd3e2','#706f83'],//修改的颜色
        legend: {
            orient : 'vertical',
            x : 'left',
        },
        series : [
            {
                type:'pie',
                radius : ['50%', '70%'],
                center:['45%','48%'],//饼图的位置
                avoidLabelOverlap:false,//避免圈内的文字重复
                label:{
                    normal:{
                        show:true ,//去掉外面的导线和显示在圈内的文字
                        position : 'center',
                        //formatter:'{b}\n\n {d}%',
                        formatter:function(){//显示在圈内的文字
                            return '同比\n\n25%'
                        },
                        textStyle:{
                            color:'#fff',
                            fontSize:'16'
                        }
                    }
                },
                data:[
                    {value:80, name:''},
                    {value:20, name:''}
                ]
            }
        ]
    }
    ncjyPie5.setOption(optionncjyPie5)

    var ncjyBar2=echarts.init(document.getElementById('ncjyBar2'))
    var optionncjyBar2={
        tooltip : {
            trigger: 'item'
        },
        legend: {
            data:['资产总计','负债及所有者权益合计','负债合计'],
            textStyle:{
                color:'rgb( 152, 155, 158 )',
                fontSize:'12',
            },
            itemGap:22,//各个item之间的间隔
            itemWidth:12,//图例图形宽度
            itemHeight:7//图例图形高度
        },
        color:['#0fb4d6','#2e7cc9','#4dcb73'],//修改的颜色
        title : {
            text:'单位:元',
            textStyle:{    //图例文字的样式
                color:'rgba( 255, 255, 255, 0.4 )',
                fontSize:12,
            },
        },
        xAxis:[
            {
                type:'category',
                data:['2011','2012','2013','2014','2015','2016','2017'],
                axisTick : {    // 轴标记
                    show:false
                },
                axisLine : {    // 轴线
                    show: true,
                    lineStyle: {//水平州的颜色
                        color: 'rgb( 255, 255, 255 )',
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
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:'rgb( 255, 255, 255 )',
                        type: 'solid',
                        width: 1
                    }
                },
                axisLabel : {
                    show:true,
                    textStyle: {//垂直轴字体颜色
                        color: 'rgba( 255, 255, 255, 0.4 )',
                        fontSize: 12,
                    }
                },
                axisLabel : {
                    formatter: '{value} k'
                }
            }
        ],
        series : [
            {
                type:'bar',
                name:'资产总计',
                barGap:'0%',//柱间距离
                barWidth :12,//柱图宽度
                data: [36,23,34,26,23,26,22]
            },
            {
                name:'负债及所有者权益合计',
                type:'bar',
                barGap:'0%',
                barWidth :12,
                data: [42,32,37,28,33,30,26]
            },
            {
                name:'负债合计',
                type:'bar',
                barGap:'0%',
                barWidth :12,
                data: [33,38,22,33,22,39,35]
            }

        ]
    }
    ncjyBar2.setOption(optionncjyBar2)

    //仪表部分图表
    var gauge1=echarts.init(document.getElementById('gauge1'));
    option = {
        tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
        },
        title:{
            text: '农民专业合作社数 (个)',
            x:'center',
            textStyle: {
                fontSize:'14',
                color: '#989b9e'
            },
            top:'145'
        },
        series : [
            {
                name:'个数',
                type:'gauge',
                //  z: 1,
                min:0,
                max:300,
                splitNumber:3,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 7,
                        shadowBlur: 0,
                        color: [[0.2, '#fcc21c'],[0.53, '#175c96'],[0.8, '#0ae39a']]
                    }
                },
                axisLabel:{
                    formatter: function (value, index) {
                        return value.toFixed(1);  // y周小数点保留1位
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length :6,        // 属性length控制线长
                    show:false,
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                splitLine: {           // 分隔线
                    length :10,         // 属性length控制线长
                    //                    show:false,
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                title : {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontSize: 20,
                        fontStyle: 'italic'
                    },
                    show:false
                },
                pointer: {
                    show: true,
                    width:'4'
                },
                detail : {
                    offsetCenter: ['50%', '25%'],       // x, y，单位px
                },
                data:[{value: 40, name: '个'}]
            }
        ]
    };
    gauge1.setOption(option, true);

    var gauge2=echarts.init(document.getElementById('gauge2'));
    option2 = {
        tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
        },
        title:{
            text: '农民专业合作社成员数 (个)',
            x:'center',
            textStyle: {
                fontSize:'14',
                color: '#989b9e'
            },
            top:'190'
        },
        series : [
            {
                name:'个数',
                type:'gauge',
                //  z: 1,
                min:0,
                max:300,
                splitNumber:3,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 7,
                        shadowBlur: 0,
                        color: [[0.33, '#fcc21c'],[0.66, '#175c96'],[1, '#0ae39a']]
                    }
                },
                axisLabel:{
                    formatter: function (value, index) {
                        return value.toFixed(1);  // y周小数点保留1位
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length :6,        // 属性length控制线长
                    show:false,
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                splitLine: {           // 分隔线
                    length :10,         // 属性length控制线长
                    //                    show:false,
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                title : {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontSize: 20,
                        fontStyle: 'italic'
                    },
                    show:false
                },
                pointer: {
                    show: true,
                    width:'6'

                },
                detail : {
                    offsetCenter: ['-6%', '27%'],       // x, y，单位px
                },
                data:[{value: 140, name: '个'}]
            }
        ]
    };
    gauge2.setOption(option2, true);
    var gauge3=echarts.init(document.getElementById('gauge3'));
    option3 = {
        tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
        },
        title:{
            text: '农民专业合作社带动\n非成员农户数 (户)',
            x:'center',
            textStyle: {
                fontSize:'14',
                color: '#989b9e'
            },
            top:'146'
        },
        series : [
            {
                name:'个数',
                type:'gauge',
                //  z: 1,
                min:0,
                max:300,
                startAngle: 150,
                endAngle : -80,
                splitNumber:3,
                axisLine: {
                    show: true,
                    lineStyle: {
                        width: 7,
                        shadowBlur: 0,
                        color: [[0.5, '#fcc21c'],[0.7, '#175c96'],[1, '#0ae39a']]
                    }
                },
                axisLabel:{
                    formatter: function (value, index) {
                        return value.toFixed(1);  // y周小数点保留1位
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length :6,        // 属性length控制线长
                    show:false,
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto'
                    }
                },
                splitLine: {           // 分隔线
                    length :10,         // 属性length控制线长
                    //                    show:false,
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: 'auto'
                    }
                },
                title : {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontSize: 20,
                        fontStyle: 'italic'
                    },
                    show:false
                },
                pointer: {
                    show: true,
                    width:'4'

                },
                detail : {
                    offsetCenter: ['-66%', '37%']       // x, y，单位px
                },
                data:[{value: 140, name: '个'}]
            }
        ]
    };
    gauge3.setOption(option3, true);

    //土地流转
    var ncjyLine=echarts.init(document.getElementById('ncjyLine'));
    var optionncjyLine={
        tooltip : {
            trigger: 'item'
        },
        legend: {
            data:['家庭承包耕地流转总面积','流转出承包耕地的农户数'],
            textStyle:{
                color:'rgb( 152, 155, 158 )',
                fontSize:'12',
            },
            itemGap:22,//各个item之间的间隔
        },
        color:['#0d8aa7','#b9df84'],//修改的颜色
        title : {
            text:'单位:元',
            textStyle:{    //图例文字的样式
                color:'rgba( 255, 255, 255, 0.4 )',
                fontSize:12,
            },
        },
        xAxis:[
            {
                type:'category',
                data:['2011','2012','2013','2014','2015','2016','2017'],
                axisTick : {    // 轴标记
                    show:false
                },
                axisLine : {    // 轴线
                    show: true,
                    lineStyle: {//水平州的颜色
                        color: 'rgb( 255, 255, 255 )',
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
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:'rgb( 255, 255, 255 )',
                        type: 'solid',
                        width: 1
                    }
                },
                axisLabel : {
                    show:true,
                    textStyle: {//垂直轴字体颜色
                        color: 'rgba( 255, 255, 255, 0.4 )',
                        fontSize: 12
                    }
                }
            }
        ],
        series : [
            {
                type:'line',
                name:'家庭承包耕地流转总面积',
                smooth: true, //这句就是让曲线变平滑的
                symbol: 'circle', //这句就是去掉点的
                symbolSize:'10',
                data: [30,23,34,26,23,26,22],
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(13,138,167, 0.3)'
                        }, {
                                offset: 0.8,
                                color: 'rgba(13,138,167, 0)'
                            }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
					}
                }

            },
            {
                name:'流转出承包耕地的农户数',
                type:'line',
                smooth: true, //这句就是让曲线变平滑的
                symbol: 'circle', //这句就是去掉点的
                symbolSize:'10',
                data: [20,32,37,28,33,30,26],
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(185,223,132, 0.2)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(185,223,132, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                }
            }

        ]
    };
    ncjyLine.setOption(optionncjyLine)
});
