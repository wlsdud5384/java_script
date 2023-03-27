$(document).ready(function(){
	
	$("#gnb>ul>li").mouseover(function(){
		$(this).children("ul").slideDown().stop();
	});
	$("#gnb>ul>li").mouseout(function(){
		$(this).children("ul").hide();
	});
	
	
	$("#notice-tab-wrap .tab-btn-1 a").click(function(){
		if($(this).hasClass('on')){
			event.preventDefault;
		} else {
			$("#notice-tab-wrap .tab-btn-2 a").removeClass("on");	
			$(this).addClass('on');
			$(".tab-container-2").hide();
			$(".tab-container-1").show();
		}
	});
	$("#notice-tab-wrap .tab-btn-2 a").click(function(){
		if($(this).hasClass('on')){
			event.preventDefault;
		} else {
			$("#notice-tab-wrap .tab-btn-1 a").removeClass("on");	
			$(this).addClass('on');
			$(".tab-container-1").hide();
			$(".tab-container-2").show();
		}
	});
});