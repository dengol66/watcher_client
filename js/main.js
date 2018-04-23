var checkprop = true;

$(function(){
    $('#toggle-one').change(function(){
        checkprop = $(this).prop('checked');
        console.log(checkprop);
    })
})

chrome.extension.onMessage.addListener(function(request,sender){
    if(request.action == "getSrc"){
        console.log(request.source);
    }
});

function onWindowLoad(){
    chrome.tabs.executeScript(null,{
        file: "content.js"
    },function(){
       if(chrome.extension.lastError){
           console.log("Error");
       }
    });
    $('#settings').click(function(){
        window.open("https://222.104.209.37:8080/");
        return false;
    });
}

window.onload = onWindowLoad;