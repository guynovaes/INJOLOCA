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

		if (volante[i] == 'TM01') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[1].click()
		if (volante[i] == 'TM02') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[3].click()
		if (volante[i] == 'TM03') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[5].click()
		if (volante[i] == 'TM04') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[7].click()
		if (volante[i] == 'TM05') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[9].click()
		if (volante[i] == 'TM06') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[11].click()
		if (volante[i] == 'TM07') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[13].click()
		if (volante[i] == 'TM08') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[15].click()
		if (volante[i] == 'TM09') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[17].click()
		if (volante[i] == 'TM10') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[19].click()

		if (volante[i] == 'TM11') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[21].click()
		if (volante[i] == 'TM12') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[23].click()
		if (volante[i] == 'TM13') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[25].click()
		if (volante[i] == 'TM14') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[27].click()
		if (volante[i] == 'TM15') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[29].click()
		if (volante[i] == 'TM16') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[31].click()
		if (volante[i] == 'TM17') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[33].click()
		if (volante[i] == 'TM18') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[35].click()
		if (volante[i] == 'TM19') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[37].click()
		if (volante[i] == 'TM20') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[39].click()

		if (volante[i] == 'TM21') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[41].click()
		if (volante[i] == 'TM22') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[43].click()
		if (volante[i] == 'TM23') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[45].click()
		if (volante[i] == 'TM24') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[47].click()
		if (volante[i] == 'TM25') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[49].click()
		if (volante[i] == 'TM26') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[51].click()
		if (volante[i] == 'TM27') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[53].click()
		if (volante[i] == 'TM28') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[55].click()
		if (volante[i] == 'TM29') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[57].click()
		if (volante[i] == 'TM30') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[59].click()

		if (volante[i] == 'TM31') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[61].click()
		if (volante[i] == 'TM32') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[63].click()
		if (volante[i] == 'TM33') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[65].click()
		if (volante[i] == 'TM34') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[67].click()
		if (volante[i] == 'TM35') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[69].click()
		if (volante[i] == 'TM36') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[71].click()
		if (volante[i] == 'TM37') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[73].click()
		if (volante[i] == 'TM38') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[75].click()
		if (volante[i] == 'TM39') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[77].click()
		if (volante[i] == 'TM40') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[79].click()

		if (volante[i] == 'TM41') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[81].click()
		if (volante[i] == 'TM42') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[83].click()
		if (volante[i] == 'TM43') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[85].click()
		if (volante[i] == 'TM44') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[87].click()
		if (volante[i] == 'TM45') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[89].click()
		if (volante[i] == 'TM46') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[91].click()
		if (volante[i] == 'TM47') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[93].click()
		if (volante[i] == 'TM48') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[95].click()
		if (volante[i] == 'TM49') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[97].click()
		if (volante[i] == 'TM50') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[99].click()

		if (volante[i] == 'TM51') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[101].click()
		if (volante[i] == 'TM52') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[103].click()
		if (volante[i] == 'TM53') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[105].click()
		if (volante[i] == 'TM54') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[107].click()
		if (volante[i] == 'TM55') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[109].click()
		if (volante[i] == 'TM56') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[111].click()
		if (volante[i] == 'TM57') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[113].click()
		if (volante[i] == 'TM58') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[115].click()
		if (volante[i] == 'TM59') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[117].click()
		if (volante[i] == 'TM60') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[119].click()

		if (volante[i] == 'TM61') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[121].click()
		if (volante[i] == 'TM62') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[123].click()
		if (volante[i] == 'TM63') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[125].click()
		if (volante[i] == 'TM64') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[127].click()
		if (volante[i] == 'TM65') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[129].click()
		if (volante[i] == 'TM66') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[131].click()
		if (volante[i] == 'TM67') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[133].click()
		if (volante[i] == 'TM68') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[135].click()
		if (volante[i] == 'TM69') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[137].click()
		if (volante[i] == 'TM70') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[139].click()

		if (volante[i] == 'TM71') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[141].click()
		if (volante[i] == 'TM72') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[143].click()
		if (volante[i] == 'TM73') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[145].click()
		if (volante[i] == 'TM74') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[147].click()
		if (volante[i] == 'TM75') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[149].click()
		if (volante[i] == 'TM76') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[151].click()
		if (volante[i] == 'TM77') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[153].click()
		if (volante[i] == 'TM78') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[155].click()
		if (volante[i] == 'TM79') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[157].click()
		if (volante[i] == 'TM80') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[159].click()

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
