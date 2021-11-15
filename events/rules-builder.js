var url = window.location.href;
url = url.substring(0, url.lastIndexOf("/"));
url = url.substring(0, url.lastIndexOf("/"));
url = url.substring(url.lastIndexOf("/") + 1);
document.head.innerHTML =  `<style type="text/css">
body {
   margin: 0;
   overflow: hidden;
}
#iframe1 {
    position:absolute;
    left: 0px;
    width: 100%;
    top: 0px;
    height: 100%;
}
</style>`;
document.body.innerHTML = `<iframe id="iframe1" name="iframe1" frameborder="0"  src="../../rules/` + url + `-rules.pdf"></iframe>`;