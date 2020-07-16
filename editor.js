function saveTextAsFile() {
    var textToWrite = document.getElementById('editor').innerHTML;
    var textFileAsBlob = new Blob([ textToWrite ], { type: 'text/plain' });
    var fileNameToSaveAs = "answer.html";
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
        // Chrome allows the link to be clicked without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
        // Firefox requires the link to be added to the DOM before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }
    downloadLink.click();
}

function updateDiv()
{
    $("#editor").load(" #editor *");
}

function destroyClickedElement(event) {
    // remove the link from the DOM
    document.body.removeChild(event.target);
}

function addchild() {
    let text = document.getElementById('fname').value;
    console.log(text);
    let latex = document.createElement('span');
    latex.innerHTML = text;
    document.getElementById('editor').appendChild(latex);
    $("#editor").load(" #editor *");
}





