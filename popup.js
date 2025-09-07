// Script por Guy Novaes
// Extensão para o google Chrome para incluir jogos no site de Loterias Online da Caixa (https://www.loteriasonline.caixa.gov.br/).
// É comum a Caixa modificar o site dela e ser necessário adequar este script. Este script não possui garantia alguma de funcionamento.
// Não comunique ao autor que o script deixou de funcionar. Sinta-se à vontade para alterá-lo e distribuí-lo gratuitamente.
// Script sem garantia. Use por sua conta e risco.


// Variáveis globais para controle do processo
let processing = false;
let cancelRequested = false;

// Função para atualizar a barra de progresso
function updateProgress(current, total) {
    const progressBar = document.getElementById('progressBar');
    const percentage = Math.round((current / total) * 100);
    progressBar.style.width = percentage + '%';
    progressBar.textContent = `${current}/${total} (${percentage}%)`;
}

// Função para mostrar/ocultar elementos durante o processamento
function toggleProcessingUI(isProcessing) {
    document.getElementById('progressContainer').style.display = isProcessing ? 'block' : 'none';
    document.getElementById('mybutton').disabled = isProcessing;
    document.getElementById('modalidade').disabled = isProcessing;
    document.getElementById('quantidade').disabled = isProcessing;
    document.getElementById('qtdTeimosinha').disabled = isProcessing;
    document.getElementById('espelho').disabled = isProcessing;
    document.getElementById('listadejogos').disabled = isProcessing;
}


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

	for(var i = 0;i < volante.length;i++){
		var v;

		if (volante[i] == 'T1')	v = document.getElementById('trevo1').click();
		if (volante[i] == 'T2')	v = document.getElementById('trevo2').click();
		if (volante[i] == 'T3')	v = document.getElementById('trevo3').click();
		if (volante[i] == 'T4')	v = document.getElementById('trevo4').click();
		if (volante[i] == 'T5')	v = document.getElementById('trevo5').click();
		if (volante[i] == 'T6')	v = document.getElementById('trevo6').click();

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

		if (volante[i] == 'TM01') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[1].childNodes[0].click()
		if (volante[i] == 'TM02') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[3].childNodes[0].click()
		if (volante[i] == 'TM03') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[5].childNodes[0].click()
		if (volante[i] == 'TM04') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[7].childNodes[0].click()
		if (volante[i] == 'TM05') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[9].childNodes[0].click()
		if (volante[i] == 'TM06') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[11].childNodes[0].click()
		if (volante[i] == 'TM07') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[13].childNodes[0].click()
		if (volante[i] == 'TM08') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[15].childNodes[0].click()
		if (volante[i] == 'TM09') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[17].childNodes[0].click()
		if (volante[i] == 'TM10') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[19].childNodes[0].click()

		if (volante[i] == 'TM11') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[21].childNodes[0].click()
		if (volante[i] == 'TM12') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[23].childNodes[0].click()
		if (volante[i] == 'TM13') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[25].childNodes[0].click()
		if (volante[i] == 'TM14') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[27].childNodes[0].click()
		if (volante[i] == 'TM15') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[29].childNodes[0].click()
		if (volante[i] == 'TM16') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[31].childNodes[0].click()
		if (volante[i] == 'TM17') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[33].childNodes[0].click()
		if (volante[i] == 'TM18') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[35].childNodes[0].click()
		if (volante[i] == 'TM19') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[37].childNodes[0].click()

		if (volante[i] == 'TM20') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[39].childNodes[0].click()

		if (volante[i] == 'TM21') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[41].childNodes[0].click()
		if (volante[i] == 'TM22') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[43].childNodes[0].click()
		if (volante[i] == 'TM23') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[45].childNodes[0].click()
		if (volante[i] == 'TM24') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[47].childNodes[0].click()
		if (volante[i] == 'TM25') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[49].childNodes[0].click()
		if (volante[i] == 'TM26') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[51].childNodes[0].click()
		if (volante[i] == 'TM27') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[53].childNodes[0].click()
		if (volante[i] == 'TM28') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[55].childNodes[0].click()
		if (volante[i] == 'TM29') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[57].childNodes[0].click()
		if (volante[i] == 'TM30') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[59].childNodes[0].click()

		if (volante[i] == 'TM31') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[61].childNodes[0].click()
		if (volante[i] == 'TM32') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[63].childNodes[0].click()
		if (volante[i] == 'TM33') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[65].childNodes[0].click()
		if (volante[i] == 'TM34') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[67].childNodes[0].click()
		if (volante[i] == 'TM35') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[69].childNodes[0].click()
		if (volante[i] == 'TM36') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[71].childNodes[0].click()
		if (volante[i] == 'TM37') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[73].childNodes[0].click()
		if (volante[i] == 'TM38') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[75].childNodes[0].click()
		if (volante[i] == 'TM39') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[77].childNodes[0].click()
		if (volante[i] == 'TM40') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[79].childNodes[0].click()

		if (volante[i] == 'TM41') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[81].childNodes[0].click()
		if (volante[i] == 'TM42') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[83].childNodes[0].click()
		if (volante[i] == 'TM43') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[85].childNodes[0].click()
		if (volante[i] == 'TM44') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[87].childNodes[0].click()
		if (volante[i] == 'TM45') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[89].childNodes[0].click()
		if (volante[i] == 'TM46') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[91].childNodes[0].click()
		if (volante[i] == 'TM47') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[93].childNodes[0].click()
		if (volante[i] == 'TM48') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[95].childNodes[0].click()
		if (volante[i] == 'TM49') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[97].childNodes[0].click()
		if (volante[i] == 'TM50') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[99].childNodes[0].click()

		if (volante[i] == 'TM51') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[101].childNodes[0].click()
		if (volante[i] == 'TM52') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[103].childNodes[0].click()
		if (volante[i] == 'TM53') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[105].childNodes[0].click()
		if (volante[i] == 'TM54') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[107].childNodes[0].click()
		if (volante[i] == 'TM55') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[109].childNodes[0].click()
		if (volante[i] == 'TM56') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[111].childNodes[0].click()
		if (volante[i] == 'TM57') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[113].childNodes[0].click()
		if (volante[i] == 'TM58') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[115].childNodes[0].click()
		if (volante[i] == 'TM59') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[117].childNodes[0].click()
		if (volante[i] == 'TM60') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[119].childNodes[0].click()

		if (volante[i] == 'TM61') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[121].childNodes[0].click()
		if (volante[i] == 'TM62') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[123].childNodes[0].click()
		if (volante[i] == 'TM63') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[125].childNodes[0].click()
		if (volante[i] == 'TM64') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[127].childNodes[0].click()
		if (volante[i] == 'TM65') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[129].childNodes[0].click()
		if (volante[i] == 'TM66') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[131].childNodes[0].click()
		if (volante[i] == 'TM67') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[133].childNodes[0].click()
		if (volante[i] == 'TM68') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[135].childNodes[0].click()
		if (volante[i] == 'TM69') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[137].childNodes[0].click()
		if (volante[i] == 'TM70') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[139].childNodes[0].click()

		if (volante[i] == 'TM71') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[141].childNodes[0].click()
		if (volante[i] == 'TM72') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[143].childNodes[0].click()
		if (volante[i] == 'TM73') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[145].childNodes[0].click()
		if (volante[i] == 'TM74') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[147].childNodes[0].click()
		if (volante[i] == 'TM75') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[149].childNodes[0].click()
		if (volante[i] == 'TM76') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[151].childNodes[0].click()
		if (volante[i] == 'TM77') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[153].childNodes[0].click()
		if (volante[i] == 'TM78') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[155].childNodes[0].click()
		if (volante[i] == 'TM79') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[157].childNodes[0].click()
		if (volante[i] == 'TM80') v = document.querySelector("#carrossel_timemania").childNodes[0].childNodes[159].childNodes[0].click()

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
    return new Promise((resolve) => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length === 0) return resolve();

            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                function: modifyDOM,
                args: [linha, quantidade, qtdTeimosa, marcaEspelho]
            }).then(resolve).catch((error) => {
                console.error('Erro ao executar o script:', error);
                resolve();
            });
        });
    });
}

// Funcionalidade do select "modalidade"
document.getElementById('modalidade').addEventListener('change', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length === 0) return;

        chrome.runtime.sendMessage({
            action: "executar_script",
            tabId: tabs[0].id,
            value: this.value
        });
    });
});

// Cria e configura o botão principal
const button = document.getElementById('mybutton');
button.addEventListener('click', async function() {
    if (processing) return;
    
    const modalidade = document.getElementById("modalidade").value;
    const jogos = document.getElementById("listadejogos").value;
    const e = document.getElementById("quantidade");
    const t = document.getElementById("qtdTeimosinha");
    const esp = document.getElementById("espelho");
    const qtdTeimosa = t.options[t.selectedIndex].value;
    const quantidadeAMarcar = e.options[e.selectedIndex].value;
    const marcaEspelho = esp.checked ? 1 : 0;

    // Validações
    if (!modalidade) {
        alert("Por favor informe a modalidade");
        return;
    }
    
    if (!jogos.trim()) {
        alert("Preencha os jogos");
        return;
    }

    const lines = jogos.split('\n').filter(line => line.trim());
    if (lines.length === 0) {
        alert("Nenhum jogo válido encontrado");
        return;
    }

    // Configura UI para processamento
    processing = true;
    cancelRequested = false;
    toggleProcessingUI(true);
    updateProgress(0, lines.length);

    try {
        if (modalidade === "Loteca") {
            for (let i = 0; i < lines.length; i++) {
                if (cancelRequested) break;
                
                await new Promise((resolve) => {
                    chrome.tabs.executeScript({
                        code: "(" + modifyDOMLoteca + ")('" + lines[i] + "');"
                    }, () => resolve());
                });
                
                await delay(600);
                updateProgress(i + 2, lines.length );
            }
        } else {
            for (let i = 0; i < lines.length; i++) {
                if (cancelRequested) break;
                
                await marcaJogo(lines[i], quantidadeAMarcar, qtdTeimosa, marcaEspelho);
                await delay(600);
                updateProgress(i + 2, lines.length);
            }
        }

        if (cancelRequested) {
            alert("Processamento cancelado pelo usuário");
        } else {
            alert(`Processamento concluído! ${lines.length} jogos preenchidos.`);
        }
    } catch (error) {
        console.error("Erro durante o processamento:", error);
        alert("Ocorreu um erro durante o processamento.");
    } finally {
        processing = false;
        toggleProcessingUI(false);
    }
});

// Mantenha o event listener para o select de modalidade
document.getElementById('modalidade').addEventListener('change', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length === 0) return;

        chrome.runtime.sendMessage({
            action: "executar_script",
            tabId: tabs[0].id,
            value: this.value
        });
    });
});

// Função de delay não-bloqueante
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
