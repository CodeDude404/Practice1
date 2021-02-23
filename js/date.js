function GetDate() {
	var d = new Date();


	var day = d.getDate();
	var month = d.getMonth() + 1;
	var year = d.getFullYear();
	var hour = d.getHours();
	var minute = d.getMinutes();
	var second = d.getSeconds();
	var milli = d.getMilliseconds();

	var fullDay = month + "/" + day + "/" + year + " " + hour + ":" + minute + ":" + second + "." + milli;
	
	postMessage(fullDay);
  	setTimeout("GetDate()",1);
}



GetDate();