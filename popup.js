// Script por por Guy Novaes
// Extensão para o google Chrome para incluir jogos no site de Loterias Online da Caixa (https://www.loteriasonline.caixa.gov.br/).
// É comum a Caixa modificar o site dela e ser necessário adequar este script. Este script não possui garantia alguma de funcionamento.
// Não comunique ao autor que o script deixou de funcionar. Sinta-se à vontade para alterá-lo e distribuí-lo gratuitamente.
// Script sem garantia. Use por sua conta e risco.

// função que clica nos números na DOM
function modifyDOM(linha, quantidade, qtdTeimosa, marcaEspelho) {

	var volante = linha.split(' ');
	document.getElementById('limparvolante').click();

	if (marcaEspelho == 1) {
		var esp = document.getElementById('apostaEspelho');
		esp.click();
	}
	// clica no botão aumentarnumero a quantidade de vezes que o usuário selecionou
	for(var i = 0;i < quantidade; i++){
		document.getElementById('aumentarnumero').click();
	}

	// clica no botão aumentarnumero a quantidade de vezes da Teimosinha
	for(var i = 0;i < qtdTeimosa; i++){
		document.getElementById('aumentarteimosinha').click();
	}	

	for(var i = 0;i < volante.length;i++){
		var v;
		if (volante[i] == 'JAN') v = document.querySelector("#carrossel_diadesorte").childNodes[0].childNodes[1].click()
		if (volante[i] == 'FEV') v = document.querySelector("#carrossel_diadesorte").childNodes[0].childNodes[3].click()
		if (volante[i] == 'MAR') v = document.querySelector("#carrossel_diadesorte").childNodes[0].childNodes[5].click()
		if (volante[i] == 'ABR') v = document.querySelector("#carrossel_diadesorte").childNodes[0].childNodes[7].click()
		if (volante[i] == 'MAI') v = document.querySelector("#carrossel_diadesorte").childNodes[0].childNodes[9].click()
		if (volante[i] == 'JUN') v = document.querySelector("#carrossel_diadesorte").childNodes[0].childNodes[11].click()
		if (volante[i] == 'JUL') v = document.querySelector("#carrossel_diadesorte").childNodes[0].childNodes[13].click()
		if (volante[i] == 'AGO') v = document.querySelector("#carrossel_diadesorte").childNodes[0].childNodes[15].click()
		if (volante[i] == 'SET') v = document.querySelector("#carrossel_diadesorte").childNodes[0].childNodes[17].click()
		if (volante[i] == 'OUT') v = document.querySelector("#carrossel_diadesorte").childNodes[0].childNodes[19].click()
		if (volante[i] == 'NOV') v = document.querySelector("#carrossel_diadesorte").childNodes[0].childNodes[21].click()
		if (volante[i] == 'DEZ') v = document.querySelector("#carrossel_diadesorte").childNodes[0].childNodes[23].click()
		else
 			v = document.getElementById('n'+volante[i] );
		if (v != null) v.click();
	}

	document.getElementById('colocarnocarrinho').click();
	return true; 
}

// Modulo para preencher a Loteca
function modifyDOMLoteca(linha) {

	var volante = linha.split(' ');
	document.getElementById('limparvolante').click();

    if (volante.length == 14) {
        var links = document.querySelectorAll("a.loteca_palpite");
        for(var i = 0;i < volante.length;i++){
            for(var contador = 0; contador <= 2; contador++) {
                if (volante[i][contador] == 'X') links[(i * 3) + contador].click();
            }
        }
    
        document.getElementById('colocarnocarrinho').click();
    }

	return true;
}

// função para mandar executar no DOM a função marca os números.
function marcaJogo(linha, quantidade, qtdTeimosa, marcaEspelho) {
	chrome.tabs.executeScript({
		code: "(" + modifyDOM + ")('"+ linha +"','" + quantidade + "','" + qtdTeimosa + "','" + marcaEspelho + "' );"
	}, (results) => {
		console.log('erro');
	});
}

// funcao para clicar nas modalidades do site da caixa pela extensao
function clickModalidade(modalidade) {
    document.querySelector("#menuPrincipal a#" + modalidade).click();
}

document.getElementById('modalidade').onchange = function() {
	chrome.tabs.executeScript({
		code: "(" + clickModalidade + ")('"+ this.value + "' );"
	}, (results) => {
		console.log('erro');
	});
}

// coloca o botão na extensão
document.write("<button id='mybutton'>Preencher jogos</button>");
var button = document.getElementById('mybutton');

// atribui a ação onclick do clicar no botão 
button.onclick = function() {

    var modalidade = document.getElementById("modalidade").value;
    var quantidadeAMarcar = document.getElementById("quantidade").value;
    var jogos = document.getElementById("listadejogos").value;
    var e = document.getElementById("quantidade");
    var t = document.getElementById("qtdTeimosinha");
    var esp = document.getElementById("espelho");
    var qtdTeimosa = t.options[t.selectedIndex].value;
    var quantidadeAMarcar = e.options[e.selectedIndex].value;
    var marcaEspelho = 0;
    if (esp.checked ) marcaEspelho = 1;

    if (modalidade == "") {
        alert("Por favor informe a modalidade");
    } else if (jogos == "") {
        alert("Preencha os jogos");
    } else {
        var lines = jogos.split('\n');
        if (modalidade == "Loteca") {
            for(var i = 0;i < lines.length;i++){
                chrome.tabs.executeScript({
                    code: "(" + modifyDOMLoteca + ")('"+ lines[i] +"');"
                }, (results) => {
                    console.log('erro');
                });
            };
        } else {
		for(var i = 0;i < lines.length;i++){
			marcaJogo( lines[i], quantidadeAMarcar, qtdTeimosa, marcaEspelho );
		};
        }
    }
}
