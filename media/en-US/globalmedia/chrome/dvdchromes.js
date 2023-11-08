var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/* Include file for Disney DVD Movie/WDSHE Chromes */


function showHeader(data){
				var container = document.getElementById("DVDMoviesChrome");
				container.innerHTML = data.htmlText;
			}


function showNav(data){
				var container = document.getElementById("DVDWDSHEChrome");
				container.innerHTML = data.htmlText;
			}

function showFooter(data){  
				var container = document.getElementById("DVDFooterChrome");
				container.innerHTML = data.htmlText;
			}	


function topShow(id){
		var elem = document.getElementById(id);
		elem.style.display = 'block';
		
	}


function topHide(myid){
		var ele = document.getElementById(myid);
		ele.style.display = 'none';
	}

function showMe(id){
		var elem = document.getElementById(id);
		elem.style.visibility = 'visible';	
	}
	
function hideMe(myid){
		var ele = document.getElementById(myid);
		ele.style.visibility = 'hidden';
	}

	
function setSelectedLink (id, selectedClass) {
	var link = document.getElementById(id);
	link.className=selectedClass;
}

        
var cssNode = document.createElement('link');
cssNode.type = 'text/css';
cssNode.rel = 'stylesheet';
cssNode.href = 'https://web.archive.org/web/20100328170658/http://disneydvd.disney.go.com/managed/dvdchromes.css';
cssNode.media = 'screen';
document.getElementsByTagName("head")[0].appendChild(cssNode);


if(document.getElementById("DVDMoviesChrome")) {
script1 = document.createElement('script');
script1.type= 'text/javascript';
script1.src = 'https://web.archive.org/web/20100328170658/http://disneydvd.disney.go.com/ajax/json/ajaxCmsModule.action?module=MoviesChromeModuleExternal&callback=showHeader&siteLabel='+escape(linkName)+'&siteUri='+linkURL+'&blockOnNumber='+((typeof(footerSlot)== "undefined")?2:footerSlot);
document.getElementsByTagName("head")[0].appendChild(script1);
}

if(document.getElementById("DVDWDSHEChrome")) {
script2 = document.createElement('script');
script2.type= 'text/javascript';
script2.src = 'https://web.archive.org/web/20100328170658/http://disneydvd.disney.go.com/ajax/json/ajaxCmsModule.action?module=WDSHEChromeModuleContainer&callback=showNav';
document.getElementsByTagName("head")[0].appendChild(script2);
}

if(document.getElementById("DVDFooterChrome")){
script3 = document.createElement('script');
script3.type= 'text/javascript';
script3.src = 'https://web.archive.org/web/20100328170658/http://disneydvd.disney.go.com/ajax/json/ajaxCmsModule.action?module=DisneyMoviesFooterModuleContainer&callback=showFooter&blockOnNumber='+((typeof(footerSlot)== "undefined")?2:footerSlot);
document.getElementsByTagName("head")[0].appendChild(script3);
}



}