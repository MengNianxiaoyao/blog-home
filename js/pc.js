// 进入页面就执行
window.onload=function()
{
	// 展示框架宽度-显示
	// var conw = $("#content").width();
	// $("#cright").css({"width":(conw-30)+"px"});
	
	// 判断是否有操作 并 执行大小宽度的变化$("#cright")
	// $(window).resize(function()
	// {
	// 	conw = $("#content").width();
	// 	$("#content").css({"height":(conw*0.5)+"px"});
	// 	$("#cright").css({"width":(conw-30)+"px"});
	// });
	
	// 文字输入特效
	let divTyping = document.getElementById('etext')
	let i = 0,
		timer = 0,
		str = '一日之计在于晨。'
	function typing()
	{
		if (i <= str.length)
		{
			divTyping.innerHTML = str.slice(0, i++) + '_'
			timer = setTimeout(typing, 80)
		}else
		 {
			divTyping.innerHTML = str //结束打字,移除 _ 光标
			clearTimeout(timer)
			$("#ebga").animate({width:'100%',height:'100%'},800);
			setTimeout(function(){$("#content").animate({height:'80%'},100)},300);
		}
	}
	typing();
	
	setTimeout(function(){$("#xuna").show();},8000);
	
	//单击选择框-宽度变化
	$("#cleft_li01").click(function(){
		$("#cleft_li01").css({"background-color":"#ececec"});
		$("#cleft_li02").css({"background-color":"#f9f9f9"});
		$("#nav01").animate({"left":"0%"},800);
		$("#nav02").animate({"left":"0%"},800);
		
	})
	$("#cleft_li02").click(function(){
		$("#cleft_li01").css({"background-color":"#f9f9f9"});
		$("#cleft_li02").css({"background-color":"#ececec"});
		$("#nav01").animate({"left":"-100%"},800);
		$("#nav02").animate({"left":"0%"},800);
	})
}