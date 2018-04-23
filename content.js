function selectText() {
    var selectionText = "";
    if (document.getSelection) {
        selectionText = document.getSelection();
    } else if (document.selection) {
        selectionText = document.selection.createRange().text;
    }
    return selectionText;
}

document.onmouseup = function() {
    //spring 으로 번역 호출
    var text = selectText().toString();
    console.log(text);
    $.ajax({
        url:'https://222.104.209.37:8080/trans?text=' + text,
        type : "get",
        success : function(data){
            toastr.info(JSON.parse(data).message.result.translatedText, 'Result', {
                "positionClass": "toast-top-right",
                timeOut: 7000,
                "closeButton": true,
                "debug": false,
                "newestOnTop": true,
                "progressBar": true,
                "preventDuplicates": true,
                "onclick": null,
                "showDuration": "300",
                "hideDuration": "1000",
                "extendedTimeOut": "1000",
                "showEasing": "swing",
                "hideEasing": "linear",
                "showMethod": "fadeIn",
                "hideMethod": "fadeOut",
                "tapToDismiss": false
            })
            console.log(JSON.parse(data).message.result.translatedText);
        }
    })
    chrome.extension.sendMessage({
        action :"getSrc",
        source:text
    });
}

