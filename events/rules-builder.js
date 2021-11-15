var url = window.location.href;
url = url.substring(0, url.lastIndexOf("/"));
url = url.substring(0, url.lastIndexOf("/"));
name = url.substring(url.lastIndexOf("/") + 1);
url = url.substring(0, url.lastIndexOf("/") + 1);
url += "rules/" + name + "-rules.pdf";
window.location.replace(url);