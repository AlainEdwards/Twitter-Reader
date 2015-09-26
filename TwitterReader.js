// ==UserScript==
// @name	Twitter Reader
// @namespace	http://ubiquity-inc.com/
// @description	Downloads all the twitter messages from a search
// @include	https://twitter.com/*
// @author Alain Edwards
// @version     1.0
// ==/UserScript==


var btnTR = document.createElement("BUTTON");
var btnTRLabel = document.createTextNode("Twitter Text Reader");

btnTR.appendChild(btnTRLabel);
btnTR.addEventListener("click", getText);
btnTR.style.border = "1px solid #606060";
btnTR.style.padding = "2px 2px 2px 2px";
btnTR.style.backgroundColor = "#55ACEE";
btnTR.style.borderRadius = "10px";
btnTR.style.marginTop = "13px";
document.getElementsByClassName("global-nav-inner")[0].appendChild(btnTR);

var downloadlink = document.createElement("a");
downloadlink.innerHTML = "Twitter Reader Data Download!";
downloadlink.setAttribute("id", "downloadlink");
downloadlink.setAttribute("download", "TwitterReaderData.txt");
//downloadlink.style.fontSize = "x-small";
//downloadlink.style.marginTop = "14px";
//downloadlink.style.paddingLeft = "20px";
downloadlink.style.marginLeft = "14px";
downloadlink.style.display = "none";
document.getElementsByClassName("global-nav-inner")[0].appendChild(downloadlink);


var authorLabel = document.createElement("a");
authorLabel.innerHTML = "Created by: Alain Edwards";
authorLabel.href = "http:\\\\ ubiquity-inc.com";
authorLabel.style.color = "#707070";
authorLabel.style.fontSize = "x-small";
authorLabel.style.marginTop = "14px";
authorLabel.style.marginLeft = "14px";
document.getElementsByClassName("global-nav-inner")[0].appendChild(authorLabel);

var textSection = document.createElement("textarea");
textSection.setAttribute("id", "TwitterReaderData");
document.getElementsByClassName("AppContent-main")[0].appendChild(textSection);

    //TwitterReaderData = document.getElementById('TwitterReaderData');

alert("Twitter Reader: Locked & Loaded!\n (c)Alain Edwards 2015");


var textFile = null;

function makeTextFile(text) {
        var data = new Blob([text], {type: 'text/plain'});

        // If we are replacing a previously generated file we need to
        // manually revoke the object URL to avoid memory leaks.
        if (textFile !== null) {
            window.URL.revokeObjectURL(textFile);
        }

        textFile = window.URL.createObjectURL(data);

        return textFile;
};

//NOT BEING USED
function writeToFile(d1){
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    //alert("good");
    var fh = fso.OpenTextFile("/Users/alainedwards/Desktop/TwitterReader.txt", 8, true, 0);
    //var fh = fso.OpenTextFile("C:\\TwitterReader.txt", 8, true, 0);
    fh.WriteLine(d1);
    fh.Close();
    
}

function writeToBottom(text, text2){
    //var para = document.createElement("p");
    //para.textContent = text;
    //para.innerHTML = para.innerHTML + "<br>";
    //textSection.appendChild(para);
    //para.innerHTML = para.innerHTML + "<br>";
    textSection.innerHTML = textSection.innerHTML + "\n\n" + text + "\n" + text2;
    //alert("good");
}

function getText(){
    //var userparagrahs = document.getElementsByTagName("p");
    var userparagrahs = document.getElementsByClassName("tweet-text");
    var usertimestamps = document.getElementsByClassName("_timestamp");
    var count = userparagrahs.length;

    //alert(count);
    for (var i = 0; i<count; i++){
      //writeToFile(userparagrahs[i].textContent);
      writeToBottom(userparagrahs[i].textContent,usertimestamps[i].textContent);
    }
    
    var link = document.getElementById('downloadlink');
    link.href = makeTextFile(textSection.value);
    link.style.display = 'inline';
    
    //alert(userparagrahs[0].textContent);
    alert("Done!");
}



