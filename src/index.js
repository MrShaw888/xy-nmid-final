function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload!='function'){
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}
//头部导航栏颜色变化
function changeHeadColor(){
	if(!document.getElementById) return false;
	var precolor=document.getElementById("top_1")
	if(!document.getElementsByTagName) return false;
	var hcolor=precolor.getElementsByTagName("a");
	for(var i=0;i<hcolor.length;i++){
		hcolor[i].onmouseover=function(){
			this.style.color="red";
		}
		hcolor[i].onmouseout=function(){
			this.style.color="#999";
		}
	}
}
//主导航栏颜色变化
function changePut(){
	if(!document.getElementById) return false;
	var preul=document.getElementById("ul1");
	if(!document.getElementsByTagName) return false;
	var hul=preul.getElementsByTagName("li");
	for(var i=0;i<hul.length;i++){
		hul[i].onmouseover=function(){
			this.style.backgroundColor="#FFFFFF";
		}
		hul[i].onmouseout=function(){
			this.style.backgroundColor="#E8E8E8";
		}
	}
}
//轮播图
function lunpopic(){
		var container=document.getElementById('container');
		var list=document.getElementById('list');
		var buttons=document.getElementById('buttons').getElementsByTagName('span');
		var index=1;
		var timer;
		function showButton(){
			for(var i=0;i<buttons.length;i++){
				if(buttons[i].className=='on'){
					buttons[i].className='';
					break;
				}
			}
			buttons[index-1].className="on";

		}
        
        function animate(offset){
        	var newleft=parseInt(list.style.left)+offset;

            list.style.left=newleft+'px';
            if(newleft>-1085){
            	list.style.left=-7959+'px';
            }
            if(newleft<-7959){
            	list.style.left=-1085+'px';
            }
		}
		function play(){
            timer=setInterval(function(){
            	next.onclick();
            },3000);
		}
        for(var i=0;i<buttons.length;i++){
        	if(this.className=='on'){
        		return;
        	}
        	buttons[i].onmouseover =function(){
              var myindex=parseInt(this.getAttribute('index'));
              var offset=-1085*(myindex-index);
              animate(offset);
              index=myindex;
              showButton();
        	}
        }
	}

function picChange(){
	var picA=document.getElementsByClassName("word");
}
//图片透明度变化
function opacityChange(){
	var picB=document.getElementsByClassName("two1");
	for(var i=0;i<picB.length;i++){
		picB[i].onmouseover=function(){
			this.style.opacity="0.5";
		}
		picB[i].onmouseout=function(){
			this.style.opacity="1";
		}
	}
	var picB1=document.getElementsByClassName("two");
	for(var i=0;i<picB1.length;i++){
		picB1[i].onmouseover=function(){
			this.style.opacity="0.5";
		}
		picB1[i].onmouseout=function(){
			this.style.opacity="1";
		}
	}
	var picB2=document.getElementsByClassName("foot_1_1_3a");
	for(var i=0;i<picB2.length;i++){
		picB2[i].onmouseover=function(){
			this.style.opacity="0.5";
		}
		picB2[i].onmouseout=function(){
			this.style.opacity="1";
		}
	}
}

//右侧导航浪背景颜色变化
function backGroudChangeright(){
      var colorChange=document.getElementsByClassName("floatright_3");
      for(var i=0;i<colorChange.length;i++){
      colorChange[i].onmouseover=function(){
      	this.style.backgroundColor="red";
      }
      colorChange[i].onmouseout=function(){
      	this.style.backgroundColor="black";
      }
    }
}

//点击图片放大
function bigPic(){
       

}

//左侧导航栏背景颜色变化
function backgroundChangeleft(){
	var colorB=document.getElementsByClassName("navlefta");
	for(var i=0;i<colorB.length;i++){
      colorB[0].onmouseover=function(){
      	this.style.backgroundColor="#EA5F8D";
      }
      colorB[0].onmouseout=function(){
      	this.style.backgroundColor="grey";
      }
      colorB[1].onmouseover=function(){
      	this.style.backgroundColor="#0AA6E8";
      }
      colorB[1].onmouseout=function(){
      	this.style.backgroundColor="grey";
      }
      colorB[2].onmouseover=function(){
      	this.style.backgroundColor="#64C333";
      }
      colorB[2].onmouseout=function(){
      	this.style.backgroundColor="grey";
      }
      colorB[3].onmouseover=function(){
      	this.style.backgroundColor="#F15453";
      }
      colorB[3].onmouseout=function(){
      	this.style.backgroundColor="grey";
      }
      colorB[4].onmouseover=function(){
      	this.style.backgroundColor="#19C8A9";
      }
      colorB[4].onmouseout=function(){
      	this.style.backgroundColor="grey";
      }
      colorB[5].onmouseover=function(){
      	this.style.backgroundColor="#F7A945";
      }
      colorB[5].onmouseout=function(){
      	this.style.backgroundColor="grey";
      }
      colorB[6].onmouseover=function(){
      	this.style.backgroundColor="black";
      }
      colorB[6].onmouseout=function(){
      	this.style.backgroundColor="grey";
      }
    }
}


//显示猫头
function showMao(){
      var hrf=document.getElementsByClassName("nav_top_3");
      for(var i=0;i<hrf.length;i++){
      	hrf[i].onmouseover=function(){
      		var mao=document.getElementsByClassName("headmao1");
      		this.style.display="block";
      	}
      }
}


addLoadEvent(showMao);
addLoadEvent(backgroundChangeleft);
addLoadEvent(bigPic);
addLoadEvent(backGroudChangeright);
addLoadEvent(opacityChange);
addLoadEvent(picChange);
addLoadEvent(lunpopic);
addLoadEvent(changePut);
addLoadEvent(changeHeadColor);