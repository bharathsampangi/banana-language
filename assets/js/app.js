var btnTranslate = document.querySelector("#btn-translate")

var txtInput = document.querySelector("#txt-input")

var outputDiv = document.querySelector("#output")

// var serverUrl = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json'

var serverUrl = 'https://api.funtranslations.com/translate/minion.json'

function getServerUrl(text) {
    return serverUrl + "?" + "text=" + text
}

function errorHandler(err) {
    console.log(err)
}

function callbackHandler() {
    var inputText = txtInput.value

    fetch(getServerUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var outputText = json.contents.translated
        outputDiv.innerText = outputText
    })
    .catch(errorHandler)
}


btnTranslate.addEventListener("click", callbackHandler)