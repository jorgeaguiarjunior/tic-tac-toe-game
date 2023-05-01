/* Busco os elementos do html, 
sendo eles a posição de cada jogador, a mensagem informativa e o botão de reiniciar*/

let posi = document.getElementsByClassName("posi");
let mensagem = document.getElementById("mensagem");
let reiniciar = document.getElementById("reiniciar");

// Variavel usada para definir de quem é a vez de jogar, false é a vez do "O", true é a vez do "X"
let vez = false;
// Variavel usada para definir se houve um ganhador ou não
let vitoria = false;

// Percorro todas as posições do meu tabuleiro e adiciono um evento de click
for(let p of posi){
	p.addEventListener("click", () => {
		// Verifico se ninguém ganhou
		if(vitoria === false){
			// Verifico de quem é a vez de jogar, se for true é a vez o 'X'
			if(vez === true){
				// Verifico se o espaço clicado está vazio, para não substituir o jogo do outro
				if(p.textContent === " "){
					// Altero o conteudo de acordo com o jogador correspondente
					p.textContent = "X";
					// Altero o estado da variavel vez para alterar o jogador
					vez = !vez;
					// Mudo o conteudo da minha mensagem informando quem é o proximo jogador
					mensagem.textContent = "Vez do 'O'";
				}
				// Se a variavel vez for false, é a vez do 'O'
			}else{
				// Verifico se o espaço clicado está vazio, para não substituir o jogo do outro
				if(p.textContent === " "){
					// Altero o conteudo de acordo com o jogador correspondente
					p.textContent = "O";
					// Altero o estado da variavel vez para alterar o jogador
					vez = !vez;
					// Mudo o conteudo da minha mensagem informando quem é o proximo jogador
					mensagem.textContent = "Vez do 'X'";
				}
			}
			// Verifico se já há um ganhador
			validaVitoria();
			// Verifico se já houve um empate
			validaEmpate();
		}
	});
}

// Adiciono um evento de click ao meu botão de reiniciar e torno todos os atributos para o estado original
reiniciar.addEventListener("click", () => {
	vitoria = false;
	vez = false;

	// Percorro minhas posições para deixar no estado original, ou seja, vazio e com background branco
	for(let p of posi){
		p.textContent = " ";
		p.style.backgroundColor = "white";
	}

	mensagem.textContent = "Primeiro a jogar é o 'O'";
});

/* Metodo para validar se houve uma vitoria
No jogo da velha há 8 formas de ganhar, considerando o tabuleiro a baixo
[0][1][2]
[3][4][5]
[6][7][8]

as combinações de vitoria são:
[0][1][2];

[3][4][5];

[6][7][8];

[0][3][6];

[1][4][7];

[2][5][8];

[0][4][8];

[2][4][8];

Seguinto essa logica, validei se os espaços já foram clicados e se o conteudo dessas posições é do mesmo jogador
altero o background para verde e mudo o texto da mensagem para um informativo de vitoria
altero o estado da minha vitoria para true
*/
let validaVitoria = () => {
	if(posi[0].textContent !== " " && posi[0].textContent === posi[1].textContent && posi[1].textContent === posi[2].textContent){
		posi[0].style.backgroundColor = "green";
		posi[1].style.backgroundColor = "green";
		posi[2].style.backgroundColor = "green";
		mensagem.textContent = "Vitória do '" + posi[0].textContent + "'";
		vitoria = true;
	}
	if(posi[3].textContent !== " " && posi[3].textContent === posi[4].textContent && posi[4].textContent === posi[5].textContent){
		posi[3].style.backgroundColor = "green";
		posi[4].style.backgroundColor = "green";
		posi[5].style.backgroundColor = "green";
		mensagem.textContent = "Vitória do '" + posi[3].textContent + "'";
		vitoria = true;
	}
	if(posi[6].textContent !== " " && posi[6].textContent === posi[7].textContent && posi[7].textContent === posi[8].textContent){
		posi[6].style.backgroundColor = "green";
		posi[7].style.backgroundColor = "green";
		posi[8].style.backgroundColor = "green";
		mensagem.textContent = "Vitória do '" + posi[6].textContent + "'";
		vitoria = true;
	}
	if(posi[0].textContent !== " " && posi[0].textContent === posi[3].textContent && posi[3].textContent === posi[6].textContent){
		posi[0].style.backgroundColor = "green";
		posi[3].style.backgroundColor = "green";
		posi[6].style.backgroundColor = "green";
		mensagem.textContent = "Vitória do '" + posi[0].textContent + "'";
		vitoria = true;
	}
	if(posi[1].textContent !== " " && posi[1].textContent === posi[4].textContent && posi[4].textContent === posi[7].textContent){
		posi[1].style.backgroundColor = "green";
		posi[4].style.backgroundColor = "green";
		posi[7].style.backgroundColor = "green";
		mensagem.textContent = "Vitória do '" + posi[1].textContent + "'";
		vitoria = true;
	}
	if(posi[2].textContent !== " " && posi[2].textContent === posi[5].textContent && posi[5].textContent === posi[8].textContent){
		posi[2].style.backgroundColor = "green";
		posi[5].style.backgroundColor = "green";
		posi[8].style.backgroundColor = "green";
		mensagem.textContent = "Vitória do '" + posi[2].textContent + "'";
		vitoria = true;
	}
	if(posi[2].textContent !== " " && posi[2].textContent === posi[4].textContent && posi[4].textContent === posi[6].textContent){
		posi[2].style.backgroundColor = "green";
		posi[4].style.backgroundColor = "green";
		posi[6].style.backgroundColor = "green";
		mensagem.textContent = "Vitória do '" + posi[2].textContent + "'";
		vitoria = true;
	}
	if(posi[0].textContent !== " " && posi[0].textContent === posi[4].textContent && posi[4].textContent === posi[8].textContent){
		posi[0].style.backgroundColor = "green";
		posi[4].style.backgroundColor = "green";
		posi[8].style.backgroundColor = "green";
		mensagem.textContent = "Vitória do '" + posi[0].textContent + "'";
		vitoria = true;
	}
}

// Método para validar se houve um empate
let validaEmpate = () => {
	let i = 0;

	/* Percorro todos os elementos do meu tabuleiro verificando se ja foram clicados, ou seja, se há algo
	no conteudo deles diferente de um espaço em branco, e se não houve vitoria ainda
	Adiciono um na minha variavel auxiliar "i" para verificar se todos os espaços já foram clicados
	*/
	for(let p of posi){
		if(p.textContent !== " " && vitoria === false){
			i++;
		}
	}

	// Se todas as posições já foram clicadas, eu altero a cor do tabuleiro para amarelo e informo um empate
	if(i === 9){
		for(let p of posi){
			p.style.backgroundColor = "yellow";		
		}
		mensagem.textContent = "Empate!";
	}

}