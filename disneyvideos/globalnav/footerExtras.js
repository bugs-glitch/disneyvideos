function dvfooter_popup(pop_url, winname, windowWidth, windowHeight, scroll) {
    window.open(pop_url,winname,"scrollbars="+scroll+",width="+windowWidth+",height="+windowHeight);
}

function dvfooter_sendafriend(theurl) {
 window.open("http://disney.go.com/disneyvideos/sendafriend/sendafriendform.html?send_this_url="+theurl,"_sendafriend_window","scrollbars=yes,width=420,height=450");
}

function dvfooter_printpage() {
var PLATFORM = "WIN";
if ((navigator.userAgent.indexOf("Mac") > -1)){PLATFORM = "MAC";}
	if(PLATFORM=="WIN"){
		if ( (parseFloat(navigator.appVersion) >= 4) && ( (navigator.appName == "Netscape") || (parseFloat(navigator.appVersion.split(";")[1].split(" ")[2]) >= 5)) ){
			window.print();
		} else {
			alert('To print this page, choose\n"Print..." from your browser\'s\nFile menu.');
		}
	} else {
		alert('To print this page, choose\n"Print..." from your browser\'s\nFile menu.');
	}
}

document.writeln('	<div align="center">');
document.writeln('	<font face="verdana, arial, helvetica, sans-serif" size="1" class=textcolor>');

document.writeln('	<a href="javascript:dvfooter_popup(\'http://disney.go.com/disneyvideos/contactus/contactus.html\',\'contactus\',420,450,\'yes\')" class=linkcolor><b>Questions</b></a>&nbsp;&nbsp;|&nbsp;');
//document.writeln('	<a href="javascript:dvfooter_sendafriend(top.location.href)" class=linkcolor><b>Send this page to a friend</b></a>&nbsp;&nbsp;|&nbsp;');
document.writeln('	<a href="javascript:dvfooter_printpage()" class=linkcolor><b>Print this page</b></a>');
document.writeln('	<hr noshade width="350">');
document.writeln('	</div>');

var legalFooterCat = "Movies";