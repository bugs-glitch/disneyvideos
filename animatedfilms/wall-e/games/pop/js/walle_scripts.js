function checkAvailability() {
	var year=streetDate[0];
	var month=streetDate[1]-1;
	var date=streetDate[2];
	var today=new Date();
	var todaysYear=today.getFullYear();
	var todaysMonth=today.getMonth();
	var todaysDate=today.getDate();
	todayDateTime = today.getTime();
	var availableDate = new Date();
	availableDate.setFullYear(year);
	availableDate.setMonth(month);
	availableDate.setDate(date);
	availableDateTime = availableDate.getTime();
	if(todayDateTime >= availableDateTime){
		nowAvailable=true;
	}else{
		nowAvailable=false;
	}
}

// Wall-E Theatrical
function popWindow(url, width, height, windowName, legal) {
	//get center coords
	var left = (screen.width-width)/2;
	var top = (screen.height-height)/2;
	wallePop = window.open(url,windowName,'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width='+width+',height='+height+',left='+left+',top='+top);
	wallePop.window.focus();
}
function popScrollingWindow(url, width, height, windowName) {
	//get center coords
	var left = (screen.width-width)/2;
	var top = (screen.height-height)/2;
	wallePop = window.open(url,windowName,'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=0,width='+width+',height='+height+',left='+left+',top='+top);
	wallePop.window.focus();
}
function loadPage(url) {
	document.location.href=url;
}
function openWindow(url) {
	walleWin = window.open(url,"walleWin","directories=yes,location=yes,menubar=yes,scrollbars=yes,status=yes,toolbar=yes,resizable=yes");
	walleWin.window.focus();
}
function loadinparent(url, closeSelf){
	self.opener.location = url;
	if(closeSelf) self.close();
}
function getQueryVariable(variable) {
var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i<vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) {
			return pair[1];
		}
	}
}

// canned MM rollover functions

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
