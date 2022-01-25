//for making header
var toRoot = "../../";
var links = ["../../","../../schedule/","../","../../pictures/"];
var linkNames = ["Home","Schedule","Events","Pictures"];

// get event url so the name can be determined based on the name of its parent folder
// this code is adapted from StackOverflow so it may not be most efficient for this particular situation
var url = window.location.href;
url = url.lastIndexOf('/') == (url.length - 1) ? url.substr(0, url.length - 1) : url.substr(0, url.lastIndexOf('/'));
url = url.substr(url.lastIndexOf('/') + 1);

//get variables for the actual page
//events is defined in the event-list.js script which must be called before this script
var name;
var category;
var type;
var resourceId;
for(var i = 0; i < events.length; i++) {
  if(url == events[i][0]) {
    name = events[i][1];
    category = events[i][2];
    type = events[i][3];
    resourceId = events[i][4];
    break;
  }
}

//capitalize category, one word so no fancy space finders needed
category = category[0].toUpperCase() + category.substring(1);

//get full type name
//types is defined in the event-list.js script which must be called before this script
for(var i = 0; i < types.length; i++) {
  if(type == types[i][1]) {
    type = types[i][0];
    break;
  }
}

var title = name;

content = `
<h1>` + name + `</h1>
<table>
<tbody>
<tr>
<td class="listTable" height="40px" style="text-align: center; padding: 10px;">
<img style="display: inline-block" src="../` + category.toLowerCase() + `-logo.png"></td>
<td class="listTable" style="height:2em; font-size: 1.8em;">`+ category + ` Event</td>
</tr>
</tbody>
</table>
<p style="font-size: 1.8em">` + type + `<br><br>
<a href="./rules/">Rules</a><br><br><br>
<b>Useful Links:</b></p>`;

name = name.replace("&","and").replace(/ /g,"-");

content = content + `
<table>
<tbody>
<tr>
<td class="listTable" height="40px" style="text-align: center; padding: 10px;">
<a href="https://www.soinc.org/`+name.toLowerCase().replace("of-","")+`-c">
<img style="display: inline-block;" src="../../resources/soinc-logo.jpg">
</a></td>
<td class="listTable" style="height:2em; font-size: 1.8em;">
<a href="https://www.soinc.org/`+name.toLowerCase().replace("of-","")+`-c">
Official Science Olympiad page for this event
</a></td>
</tr>
<tr>
<td class="listTable" height="40px" style="text-align: center; padding: 10px;">
<a href="https://scioly.org/wiki/index.php/`+name.replace(/-/g,"_")+`">
<img style="display: inline-block;" src="../../resources/scioly-logo.png">
</a></td>
<td class="listTable" style="height:2em; font-size: 1.8em;">
<a href="https://scioly.org/wiki/index.php/`+name.replace(/-/g,"_")+`">
Science Olympiad Student Center page for this event
</a></td>
</tr>
<tr>
<td class="listTable" height="40px" style="text-align: center; padding: 10px;">
<a href="https://drive.google.com/open?id=`+resourceId+`">
<img style="display: inline-block; max-height: 100%;" src="../../resources/drive-logo.png">
</a></td>
<td class="listTable" style="height:2em; font-size: 1.8em;">
<a href="https://drive.google.com/open?id=`+resourceId+`">
Google Drive Shared Resources
</a></td>
</tr>
</tbody>
</table>
`;

document.head.innerHTML += `
<title>` + title + ` | HHS Science Olympiad</title>
<style>
.listTable img {
  max-height: 80%;
}
</style>
`;
