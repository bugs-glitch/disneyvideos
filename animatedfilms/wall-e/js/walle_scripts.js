function checkAvailability(streetDate) {
	var year=streetDate[0];
	var month=streetDate[1]-1;
	var date=streetDate[2];
	
	var today=new Date();
	var qString = location.search;
	var fakeDateLoc = qString.indexOf("today=");
	if (fakeDateLoc>0) {
		var fakeDateString = qString.substring((fakeDateLoc+6));
		var fakeDateAppend = fakeDateString.indexOf("&");
		if (fakeDateAppend>0) {
			var fakeDateString = fakeDateString.substring(0,fakeDateAppend);
		}
		var fakeDateAr = fakeDateString.split(",");
		today.setFullYear(Number(fakeDateAr[0]));
		today.setMonth(Number(fakeDateAr[1]-1));
		today.setDate(Number(fakeDateAr[2]));
	} else {
	}
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

function popWindow(url, width, height, windowName) {
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
