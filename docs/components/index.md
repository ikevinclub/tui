# 使用方法

::: warning 注意
目前没有打包合并样式，所以使用时，建议单独新建引用tui.css文件，并且此文件只有tui相关样式。
为使页面布局更健壮且易维护，应尽量避免使用float。
:::

在tui.css文件前面，添加样式重置，编写结束使用Autoprefixer添加兼容前缀(请自行查找相关编辑器插件)

```css
@charset "utf-8";

/*样式重置start*/
html,body,a,div,audio,br,button,canvas,font,form,footer,header,frame,h1,h2,h3,h4,h5,h6,head,foot,hr,i,iframe,img,input,label,li,link,map,menu,nav,object,ol,option,p,section,select,source,span,table,tbody,thead,td,th,textarea,tfoot,time,title,tr,ul,video{
	-webkit-box-sizing: border-box;
	   -moz-box-sizing: border-box;
	        box-sizing: border-box;
	outline: none;
	-webkit-font-smoothing: antialiased;   /*字体抗锯齿*/
	-webkit-overflow-scrolling: touch;   /*IOS端平滑滚动*/
	overscroll-behavior: contain;    /*解决滚动冒泡*/
	position: relative;
	text-decoration: none;
	font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
a:hover,a:active,a:visited,a:link,a:focus{
	-webkit-tap-highlight-color: rgba(0,0,0,0);
	-webkit-tap-highlight-color: transparent;
	-webkit-user-select: none;
	-moz-user-focus: none;
	-moz-user-select: none;
}
ol,ul,li{
	list-style: none;
}
input{
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}
button{
	border: none;
	background-color: rgba(0,0,0,0);
}
img{
	vertical-align: top;
}
/*样式重置end*/
```