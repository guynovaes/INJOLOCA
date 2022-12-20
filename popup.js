// Script por Guy Novaes
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

	quantidade = 0;
	for(var i = 0;i < volante.length;i++){
		if (volante[i] == 'T1')	quantidade = quantidade + 1;
		if (volante[i] == 'T2')	quantidade = quantidade + 1;
		if (volante[i] == 'T3')	quantidade = quantidade + 1;
		if (volante[i] == 'T4')	quantidade = quantidade + 1;
		if (volante[i] == 'T5')	quantidade = quantidade + 1;
		if (volante[i] == 'T6')	quantidade = quantidade + 1;
	}

	// clica no botão aumentarnumero a quantidade trevos que o usuário selecionou
	for(var i = 2; i < quantidade; i++){
		document.getElementById('step6').childNodes[1].children[1].childNodes[0].click();
	}	

	var T = ['T1','T2','T3','T4','T5','T6'];
	var MESES = ['JAN','FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET','OUT','NOV','DEZ'];
	var TM = [];
	for(let i = 0; i < 80; i++)
		TM.push('TM' + String(i).padStart(2,'0'));

	for(var i = 0;i < volante.length;i++){
		var v;

		if (T.includes(volante[i])) v = document.getElementById('trevo' + volante[1].substr(-1)).click();

		if (MESES.includes(volante[i])) {
			posicao = Int(MESES.findIndex(volante[i])) * 2 + 1;
			v = document.querySelector("#carrossel_diadesorte").childNodes[0].childNodes[posicao].click()
		}

		if(TM.includes(volante[i])) {
			posicao = Int(TM.findIndex(volante[i])) * 2 + 1;
			v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[posicao].click()
		}
		
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

function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* faça nada */ } 
}

// coloca o botão na extensão
document.write("<button id='mybutton'>Preencher jogos</button>");
var button = document.getElementById('mybutton');

// atribui a ação onclick do clicar no botão 
button.onclick = function() {

    var modalidade = document.getElementById("modalidade").value;
    var quantidadeAMarcar = document.getElementById("quantidade").value;
    var jogos = document.getElementById("listadejogos").value;
	jogos = String(jogos).replace(/\b([1-9])\b/g,"0$1"); // admitindo entrada sem zero à esquerda

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
			sleepFor(600); //mileseg
		};
        }
    }
    alert("Processamento concluído!");
}
