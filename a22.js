;$(function()
{
	'use strict';

	var sidebar=$('#sidebar'),//选择侧栏
        mask=$('.mask'),//mask
        backButton=$('.back-to-top'),//返回菜单
        sidebar_trigger=$('#sidebar_trigger');
    
    function showSideBar()//显示侧栏
     {
     	mask.fadeIn();
     	sidebar.css('right',0);
     }

     function hideSideBar()//隐藏侧栏
     {
     	mask.fadeOut();
     	sidebar.css('right',-sidebar.width());
     }
     backButton.on('click',function()//监听返回按钮点击事件
     {
     	$('html,body').animate({
     		scrollTop:0
     	},400)
     })
     $(window).on('scroll',function(){//监听srcoll事件
     	if($(window).scrollTop()<$(window).height())
     		backButton.fadeIn();
     	else
     		backButton.fadeOut();
     })
     $(window).trigger('scroll');

    sidebar_trigger.on('click',showSideBar)
    mask.on('click',hideSideBar)//监听mask	

     })
