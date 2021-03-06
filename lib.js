var debug = require('debug')('lib')
var lib = {}

lib.generateHeading1 = function(text) {
    return "<h1>" + text + "</h1>"
}

lib.generateHeading = function(level, text) {
    return "<h"+level+">"+text+"</h"+level+">"
}

lib.generateOrderedList = function(arrayOfText) {
    var str="\n<ol>\n"
    for(var x in arrayOfText){
        str+="  <li>"+arrayOfText[x]+"</li>\n"
    }
    str+="</ol>\n"
    return str
}

lib.generateUnorderedList = function(arrayOfText) {
    var str="\n<ul>\n"
    for(var x in arrayOfText){
        str+="  <li>"+arrayOfText[x]+"</li>\n"
    }
    str+="</ul>\n"
    return str

}


lib.generateTableRow = function (arrayOfText) {
    var str="\n<tr>\n"
    for(var x in arrayOfText){
        str+="  <td>"+arrayOfText[x]+"</td>\n"
    }
    str+="</tr>\n"
    return str
}

lib.generateTable = function(twoDimensionalArrayOfText) {
    var str="\n<table>\n"
    for(var x in twoDimensionalArrayOfText){
        str+="<tr>\n"
        for(var y in twoDimensionalArrayOfText[x]){
            str+="  <td>"+twoDimensionalArrayOfText[x][y]+"</td>\n"
        }
        str+="</tr>\n"
    }
    str+="</table>\n"
    return str
}

lib.generateHyperLink = function(url, text) {

    return "<a href=\""+url+"\">"+text+"</a>" 
}

lib.generateFormTextField = function(name) {
    
    return "\n<form action=\"\">\n"+name+": <input type=\"text\" name=\""+name+"\"><br>\n</form>"
}



lib.generateFormTextFieldWithLabel = function(name, label) {
    return "\n<form action=\"\">\n"+"<label for=\""+label+"\">"+label+"</label>\n"+name+": <input type=\"text\" name=\""+name+"\"><br>\n</form>"
}

lib.generateDropdownList = function(arrayOfValues, arrayOfText) {
    var str="\n<select>\n"
    for(var x in arrayOfValues){
        str+="<option value=\""+arrayOfValues[x]+"\">"+arrayOfText[x]+"</option>\n"
    }
    str+="</select>\n"
    return str
}

lib.generateYoutubeVideoEmbeddableFrame = function(width, height, videoId, allowfullscreen) {
    var str="<iframe width=\""+width+"\" height=\""+height+"\" src=\"http://www.youtube.com/embed/"+videoId+"\" "+ allowfullscreen+"></iframe>"
    return str
}

module.exports = lib
