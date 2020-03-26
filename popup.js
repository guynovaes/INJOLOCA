// Script por por Guy Novaes
// Extensão para o google Chrome para incluir jogos no site de Loterias Online da Caixa (https://www.loteriasonline.caixa.gov.br/).
// É comum a Caixa modificar o site dela e ser necessário adequar este script. Este script não possui garantia alguma de funcionamento.
// Não comunique ao autor que o script deixou de funcionar. Sinta-se à vontade para alterá-lo e distribuí-lo gratuitamente.
// Script sem garantia. Use por sua conta e risco.

// função que clica nos números na DOM
function modifyDOM(linha) {

	var volante = linha.split(' ');
	document.getElementById('limparvolante').click();

	for(var i = 0;i < volante.length;i++){
		var v = document.getElementById('n'+volante[i] );
		if (v != null) v.click();
	}

	document.getElementById('colocarnocarrinho').click();
	return true; 
}

// função para mandar executar no DOM a função marca os números.
function marcaJogo(linha) {
	chrome.tabs.executeScript({
		code: "(" + modifyDOM + ")('"+linha+"');"
	}, (results) => {
		console.log('erro');
	});
}

// coloca o botão na extensão
document.write("<button id='mybutton'>Preencher jogos</button>");
var button = document.getElementById('mybutton');

// atribui a ação onclick do clicar no botão 
button.onclick = function() {
	var lines = document.getElementById("listadejogos").value.split('\n');
	for(var i = 0;i < lines.length;i++){
		marcaJogo( lines[i] );
	};
}


