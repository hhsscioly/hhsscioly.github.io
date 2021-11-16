document.head.innerHTML +=
`<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="charset" content="UTF-8">
<link rel="stylesheet" href="`+toRoot+`resources/style.css">
<link rel="shortcut icon" href="`+toRoot+`resources/icon.ico" type="image/x-icon">
`;
var body =
`<table class="hdr">
<tbody>
<tr>
<td width="25%" colspan="1">
<a href="http://www.hassk12.org" target="_blank"><img src="`+toRoot+`resources/saxons.png" style="max-height: 1000% !important"></a>
</td>
<td width="75%" colspan="6"><h1 style="color: gold;">Hastings High School<br>Science Olympiad</h1></td>
</tr>
<tr class="links">
<td width="25%" class="pageName"></td>
<td width="15%"></td>
<td width="15%" class="link"></td>
<td width="15%" class="link"></td>
<td width="15%" class="link"></td>
<td width="15%" colspan="2" class="link"></td>
</tr>
<tr class="dropRow" style="background-color: #0B1692; color: white;">
<td width="25%" class="pageName"></td>
<td width="65%" colspan="5"></td>
<td width="10%" id="drop">&#8801;</td>
</tr>
<tr class="drops" style="background-color: transparent" width="25%">
<td colspan="5"></td>
<td colspan="2" class="drop"></td>
</tr>
<tr class="drops" style="background-color: transparent" width="25%">
<td colspan="5"></td>
<td colspan="2" class="drop"></td>
</tr>
<tr class="drops" style="background-color: transparent" width="25%">
<td colspan="5"></td>
<td colspan="2" class="drop"></td>
</tr>
<tr class="drops" style="background-color: transparent" width="25%">
<td colspan="5"></td>
<td colspan="2" class="drop"></td>
</tr>
</tbody>
</table>
<br><br><br><br><br><br><br><br><br><br><br><br>
<div style="padding: 1em;">`+content+`</div>`;
document.body.innerHTML = body;
var linkTds = document.getElementsByClassName("link");
var dropTds = document.getElementsByClassName("drop");
for(var i = 0; i < links.length; i++) {
  var anchor = '<a href="' + links[i] + `">` + linkNames[i] + `</a>`;
  linkTds[linkTds.length - 1 - i].innerHTML = anchor;
  linkTds[linkTds.length - 1 - i].classList.add("linked");
  dropTds[i].innerHTML = anchor;
}
var titles = document.getElementsByClassName("pageName");
for(var i = 0; i < titles.length; i++)
  titles[i].innerHTML = title;
document.head.innerHTML += `
<style id="dropsStyle">
.drops {display: none;}
</style>`;
var showDropLinks = false;
drop.onclick = function() {
  if(showDropLinks) {
    showDropLinks = false;
    dropsStyle.innerHTML = '.drops {display: none}';
  } else {
    showDropLinks = true;
    dropsStyle.innerHTML = '.drops {display: table-row}';
  }
}
