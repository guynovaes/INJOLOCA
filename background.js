// funcao para clicar nas modalidades do site da caixa pela extensao
function clickModalidade(modalidade) {
    document.querySelector("#menuPrincipal a#" + modalidade).click();
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "executar_script") {
        chrome.scripting.executeScript({
            target: { tabId: message.tabId },
            function: clickModalidade,
            args: [message.value]
        }).catch((error) => {
            console.error("Erro ao executar o script:", error);
        });
    }
});



