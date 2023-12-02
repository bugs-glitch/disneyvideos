var so = new SWFObject("stub.swf", "main", "100%", "700", "8", "#FFFFFF", "best", "", "http://home.disney.go.com/guestservices/getflash");
so.addVariable("cid", cid);
so.addVariable("deeplink", getQueryParamValue("deeplink"));
so.addVariable("sublink", getQueryParamValue("sublink"));
so.addParam("allowScriptAccess", "always");
so.write("flashcontent");
