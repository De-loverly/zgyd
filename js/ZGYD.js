$(function(){
	var box=$("#banner9");
	var img=$(".banner0",box)
	var min=$(".yuan",box);
	var width=box.offsetWidth;
	var left=$("#two");
	var right=$("#one");
	var n=0;
	var next=0;
	var flag=true;
	var time=setInterval(con,2000);
	function con(type){
		var type=type||"l";
		if(!flag){
			flag=true;
			return;
		}
		flag=false;
		if(type=="l"){
			next=n+1;
			if(next>=img.length){
				next=0;
			}
			img[next].style.left=width+"px";
			animate(img[n],{left:-width},600);
		}else if(type=="r"){
				next=n-1;
				if(next<=0){
					next=img.length-1;
				}
				img[next].style.left=-width+"px";
				animate(img[n],{left:width},600);
			}
		animate(img[next],{left:0},600,function(){
			flag=true;});
		min[n].style.background="gray";
		min[next].style.background="red";
		n=next;
	}
	// 清除时间进程时，清除的只是进程号。生命的变量没有清除，所以移出鼠标后还是接着往下移动
	box.onmouseover=function(){
		clearInterval(time);
	}
	box.onmouseout=function(){
		time=setInterval(con,2000);
	}
	// 点击左边按钮，应该从左往右走

	left.onclick=function(){
		con("r");
	}
	right.onclick=function(){
		con("l");
	}
	// 右边按钮点击事件。点击从左往右。
	for(var i=0;i<min.length;i++){
		min[i].index=i;
		min[i].onclick=function(){
			//点击的点比现在图片对应的点打，则应该从右往左走
			if(this.index>n){
				if(!flag){
					flag=true;
					return;
				}
				flag=false;
				img[this.index].style.left=width+"px";
				animate(img[n],{left:-width},600);
			}
//				小于n，则从左往右走
			else if(this.index<n){
				if(flag==false){
				return;
				}
				flag=false;
				img[this.index].style.left=-width+"px";
				animate(img[n],{left:width},600);
			}
			animate(img[this.index],{left:0},600,function(){
				flag=true;
			});
			min[n].style.background="gray";
			min[this.index].style.background="red";
			n=this.index;
		}
	}
	var carousel=$(".carousel")[0];
	var theLeft=$(".lunbo-left")[0];
	var theRight=$(".lunbo-right")[0];
	var theBox=$(".img-box")[0];
	var theImg=$(".img-lis")[0];
	nodeLunbo(carousel,theLeft,theRight,theBox,theImg);
	// 上面的移入移出
	var frist=$(".loading")[0];
	var phone=$(".shoujiyingye")[0];
	var _load=$(".load")[0];
	hover(frist,function(){
		_load.style.display="block";
		frist.style.backgroundColor="#fff";
	},function(){
		_load.style.display="none";
		frist.style.backgroundColor="";
	})
	var _img=$(".imga")[0];
	hover(phone,function(){
		_img.style.display="block";
		phone.style.backgroundColor="#fff";
	},function(){
		_img.style.display="none";
		phone.style.backgroundColor="";
	})
	var _daohang=$(".haohang")[0];
	var _shouye=$(".shouye");
	for(var i=0;i<_shouye.length;i++){
		if(i==0){
			continue;
		}
		hover(_shouye[i],function(){
			var height=this.offsetHeight;
			var ul=$(".dh-bottom",this)[0];
			this.style.background="#E4E4E4";
			animate(ul,{height:height},500);
		},function(){
			var that=this;
			that.style.background="";
			var ul=$(".dh-bottom",that)[0];
			animate(ul,{height:0},500);
		})
	}
	// 定位移动的事件
	// var kefu=$("#kefu");
	// var _kefu=$("img",kefu);
	// var _kefu_width=_kefu[0].offsetWidth;
	// for(var i=0;i<_kefu.length;i++){
	// 	_kefu.index=i;
	// 	hover(_kefu[i],function(){
	// 		animate(_kefu[this.index],{left:-_kefu_width},500)
	// 	},function(){
	// 		animate(_kefu[this.index],{left:0},500)
	// 	})
	// }
	// 类似下拉框的东西
	var select=$(".select")[0];
	var allsheng=$(".allsheng")[0];
	var body=$("body")[0];
	select.onclick=function(e){
		var e=e||window.event;
		if(e.cancelBubble){
			e.cancelBubble=true;
		}else if(e.stopPropagation){
			e.stopPropagation();
		}
		allsheng.style.display="block";
	}
	body.onclick=function(e){
		var e=e||window.event;
		var objs=e.target||e.srcElement;
		if(objs.className!=select){
			allsheng.style.display="none";
		}
	}
	var dong=$(".dong");
	for(var i=0;i<dong.length;i++){
		dong[i].index=i;
		hover(dong[i],function(){
			animate(dong[this.index],{marginRight:15},300);
		},function(){
			animate(dong[this.index],{marginRight:0},300)
		})
	}
	var lianjie=$('.lianjie');
	for(var i=0;i<lianjie.length;i++){
		lianjie[i].index=i;
		hover(lianjie[i],function(){
	    animate(lianjie[this.index],{right:0},500);
	    },function(){
	    	animate(lianjie[this.index],{right:-70},500);
	    })
	}
    var gg_left=$(".gg-left");
    var youaa=$(".youaa")[0];
    var zuoaa=$(".zuoaa")[0];
    var n=0;
    var next=0;
    youaa.onclick=function(){
    	next=n+1;
    	if(next>gg_left.length-1){
    		next=0;
    	}
    	for(var i=0;i<gg_left.length;i++){
    		gg_left[i].style.display="none";
    	}
    	gg_left[next].style.display="block";
    	n=next
    }
    zuoaa.onclick=function(){
    	next=n-1;
    	if(next<0){
    		next=gg_left.length-1;
    	}
    	for(var i=0;i<gg_left.length;i++){
    		gg_left[i].style.display="none";
    	}
    	gg_left[next].style.display="block";
    	n=next;
    }
})
