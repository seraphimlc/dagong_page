
//tab切换的代码

			
		   $(".check").click(function(){
			   $(".check").removeClass('on')
			   $(this).addClass('on');
           });
		   

		   
		   $('.click li').click(function(){
			   $(this).find('.s_span').toggleClass('on');
           });
		   
		   
		   
		   $(".tab_title a").click(function(){
			    $('.tab_title a').removeClass('on')
                $(this).addClass("on");
               var index = $(".tab_title a").index($(this));
               $(".tab_box").css("display","none");
               $(".tab_box").eq(index).css("display","block");
           });
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   
		   $('.baohan>li>span').click(function(){
			   $(this).next('.smallul').slideToggle();
			})
			
/*			$('body').click(function(){
				
				$('.nav').toggleClass('navclick');
			})*/
			$('.nav').click(function(){
                 $(this).addClass('navclick');
			})
			$('body').on('click','div[data-ssbplugin="mask"]',function(){
				$('.nav').removeClass('navclick');
			});
			
			
			
			
		   
		   
		   
		   
		   
		   
		   
		   //加载更多
	var $category=$('.content_short ul li:gt(4)');
	var index=$('.content_short ul li').length;
	$category.hide();
	if(index>3)
		{
			$(".loading").show();
			}
		else
		{
			$(".loading").hide();
			}
	var n=1;
	$(window).scroll(function(){
		 totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop());
		 if($(document).height()-20 <= totalheight)
					{
					setTimeout(stop1,2000);
					 }
			
		});
		 function stop1(){
				var i= 3+3*n;	
				var $category_next=$(".content_short ul li:lt("+i+")");
				$category_next.fadeIn("slow");
				n++;
				if(3+3*(n-1)>=index)
					{
						$(".loading").fadeOut("slow");
					}		
			 }
		   