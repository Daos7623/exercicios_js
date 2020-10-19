var texto = document.querySelector ("#texto1");
var botao1 = document.querySelector ("#botao1");
var botao2 = document.querySelector ("#botao2");

function iniciarJogo () {
    /* O texto mostrado na mensagem. */
    texto.textContent = "Em uma bela manhã, ao atender a campainha de sua porta você se depara com um pequeno filhote de gato. O que você faz?";
    
    /* O texto no corpo dos botões. */
    botao2.innerText = "Que gato é esse?";
    
    /* As funções que os botões chamam ao serem clicados. */
    botao2.onclick = atenderPorta;
}

function atenderPorta () {
    /* O texto mostrado na mensagem. */
    texto.textContent = "Esse pequeno felino se aproxima, como se estivesse esperando que você fizesse alguma coisa. O que pretende fazer?";

    /* Os botões que são mostrados e são escondidos. */
    botao1.style.display = "inline-block";
   
    /* O texto no corpo dos botões. */
    botao1.innerText = "Ignora o gato";
    botao2.innerText = "Pega o gato";
        
    /* As funções que os botões chamam ao serem clicados. */
    botao1.onclick = ignorarGato;
    botao2.onclick = miarDeGato;
}

function ignorarGato () {
    /* O texto mostrado na mensagem. */
    texto.textContent = "Ele resolve invadir sua casa e logo sobe em seu sofá. Acho que foi ele quem te adotou!";

    /* Os botões que são mostrados e são escondidos. */
    botao1.style.display = "none";

    /* O texto no corpo dos botões. */
    botao2.innerText = "O que foi isso?!";
        
    /* As funções que os botões chamam ao serem clicados. */
    botao2.onclick = miarDeGato;
}

function miarDeGato () {
    /* O texto mostrado na mensagem. */
    texto.textContent = "O gato logo em seguida olha no fundo dos seus olhos e solta o miado mais fofo que você já ouviu. Agora você tem um gato! O que vai fazer com ele?";

    /* Os botões que são mostrados e são escondidos. */
    botao1.style.display = "inline-block";
    
    /* O texto no corpo dos botões. */
    botao1.innerText = "Levar ele ao veterinário";
    botao2.innerText = "Dar um pulo no petshop";
        
    /* As funções que os botões chamam ao serem clicados. */
    botao1.onclick = irVeterinario;
    botao2.onclick = irPetshop;
}

function irVeterinario () {
    /* O texto mostrado na mensagem. */
    texto.textContent = "Você chegou ao veterinário. Após aguardar pouco tempo na fila de atendimento você rapidamente é chamado. O que deseja fazer?";

    /* Os botões que são mostrados e são escondidos. */
    
    /* O texto no corpo dos botões. */
    botao1.innerText = "Vacinar seu gato";
    botao2.innerText = "Ir para uma consulta";
        
    /* As funções que os botões chamam ao serem clicados. */
    botao1.onclick = vacinarGato;
    botao2.onclick = consultarVeterinario;
}

function consultarVeterinario () {
    /* O texto mostrado na mensagem. */
    texto.textContent = "Apesar do tempo que viveu nas ruas seu gato está bem de saúde. Após agendar alguns exames de rotina o veterinário menciona que ele precisa ser vacinado.";

    /* Os botões que são mostrados e são escondidos. */
    botao2.style.display = "none";
    
    /* O texto no corpo dos botões. */
    botao1.innerText = "Hora da vacina";
            
    /* As funções que os botões chamam ao serem clicados. */
    botao1.onclick = vacinarGato;
}

function consultarVeterinario2 () {
    /* O texto mostrado na mensagem. */
    texto.textContent = "Após o exame o veterinário diz que ele não se adaptou a ração que você comprou e recomenda escolher outra marca da próxima vez. Felizmente seu gato já está melhor, porém é hora de vaciná-lo.";

    /* Os botões que são mostrados e são escondidos. */
    botao2.style.display = "none";
    
    /* O texto no corpo dos botões. */
    botao1.innerText = "Gato: Miau, miau?!(Vacinas?!)";
            
    /* As funções que os botões chamam ao serem clicados. */
    botao1.onclick = vacinarGato;
}

function irPetshop () {
    /* O texto mostrado na mensagem. */
    texto.textContent = "Ao olhar as prateleiras do petshop você pensa: Ele deve estar com fome. O que devo levar?";

    /* Os botões que são mostrados e são escondidos. */
    
    /* O texto no corpo dos botões. */
    botao1.innerText = "Ração barata";
    botao2.innerText = "Sachê premium";
        
    /* As funções que os botões chamam ao serem clicados. */
    botao1.onclick = escolherRacao;
    botao2.onclick = escolherSache;    
}

function escolherRacao () {
    /* O texto mostrado na mensagem. */
    texto.textContent = "Seu gato come todo potinho de ração e logo após terminar começa a passar muito mal. Você precisa fazer algo urgentemente!";

    /* Os botões que são mostrados e são escondidos. */
    botao2.style.display = "inline-block";
    
    /* O texto no corpo dos botões. */
    botao1.innerText = "Veterinário agora!";
    botao2.innerText = "Cansei desse gato!";
        
    /* As funções que os botões chamam ao serem clicados. */
    botao1.onclick = consultarVeterinario2;
    botao2.onclick = abandonarGato;       
}

function escolherSache () {
    /* O texto mostrado na mensagem. */
    texto.textContent = "Pouco tempo depois de comer o sachê seu gato resolve tirar um cochilo. Por precaução é melhor levar ele para sua primeira consulta ao veterinário.";

    /* Os botões que são mostrados e são escondidos. */
    botao2.style.display = "inline-block";
    
    /* O texto no corpo dos botões. */
    botao1.innerText = "Agendar consulta";
    botao2.innerText = "Cansei desse gato!";
        
    /* As funções que os botões chamam ao serem clicados. */
    botao1.onclick = consultarVeterinario;
    botao2.onclick = abandonarGato;
}

function vacinarGato () {
    /* O texto mostrado na mensagem. */
    texto.textContent = "Você descobre que seu gato odeia agulhas. Você está todo arranhado mas agora o bichano está protegido.";

    /* Os botões que são mostrados e são escondidos. */
    botao2.style.display = "inline-block";
    
    /* O texto no corpo dos botões. */
    botao1.innerText = "Voltar pra casa";
    botao2.innerText = "Cansei desse gato!";
        
    /* As funções que os botões chamam ao serem clicados. */
    botao1.onclick = voltarParaCasa;
    botao2.onclick = abandonarGato;
}

function abandonarGato () {
    /* O texto mostrado na mensagem. */
    texto.textContent = "Você abandonou o gatinho, mostrando ser um péssimo ser humano e voltou a ter sua triste vida sozinho. Que decepção!";

    /* Os botões que são mostrados e são escondidos. */
    botao1.style.display = "none";
    
    /* O texto no corpo dos botões. */
    botao2.innerText = "Recomeçar";
            
    /* As funções que os botões chamam ao serem clicados. */
    botao2.onclick = iniciarJogo;    
}

function voltarParaCasa () {
    /* O texto mostrado na mensagem. */
    texto.textContent = "Lar doce lar, porém seu gato está revoltado pelas agulhadas que levou. E agora?";

    /* Os botões que são mostrados e são escondidos. */
          
    /* O texto no corpo dos botões. */
    botao1.innerText = "Dar um espaço ao bichano";
    botao2.innerText = "Cobrar atenção do felino";
         
    /* As funções que os botões chamam ao serem clicados. */
    botao1.onclick = respeitarGato;
    botao2.onclick = irritarGato;
}

function respeitarGato () {
    /* O texto mostrado na mensagem. */
    texto.textContent = "Seu gato entendeu que você só queria cuidar dele e sobe no seu colo, dormindo ronronante.";

    /* Os botões que são mostrados e são escondidos. */
    botao2.style.display = "none";
     
    /* O texto no corpo dos botões. */
    botao1.innerText = "Que lindo!";
             
    /* As funções que os botões chamam ao serem clicados. */
    botao1.onclick = nomearGato;    
}

function nomearGato () {
    /* O texto mostrado na mensagem. */
    texto.textContent = "Você percebe que ainda não deu um nome para o seu gato. É hora de resolver isso!";

    /* Os botões que são mostrados e são escondidos. */
    botao2.style.display = "inline-block";
     
    /* O texto no corpo dos botões. */
    botao1.innerText = "Será Tangerina!";
    botao2.innerText = "Será Curry!";
             
    /* As funções que os botões chamam ao serem clicados. */
    botao1.onclick = fimDeJogo1;
    botao2.onclick = fimDeJogo2;
}

function fimDeJogo1 () {
    /* O texto mostrado na mensagem. */
    texto.textContent = "Você finalmente está em casa com o Tangerina, que se encontra confortavelmente deitado em seu colo ganhando carinhos. Nada poderia ser mais perfeito até que... toca a campainha.";

    /* Os botões que são mostrados e são escondidos. */
    botao1.style.display = "none";
     
    /* O texto no corpo dos botões. */
    botao2.innerText = "Atender a porta (Recomeçar o jogo)";
                 
    /* As funções que os botões chamam ao serem clicados. */
    botao2.onclick = iniciarJogo;
}

function fimDeJogo2 () {
    /* O texto mostrado na mensagem. */
    texto.textContent = "Você finalmente está em casa com o Curry, que se encontra confortavelmente deitado em seu colo ganhando carinhos. Nada poderia ser mais perfeito até que... toca a campainha. ";

    /* Os botões que são mostrados e são escondidos. */
    botao1.style.display = "none";
     
    /* O texto no corpo dos botões. */
    botao2.innerText = "Atender a porta (Recomeçar o jogo)";
                 
    /* As funções que os botões chamam ao serem clicados. */
    botao2.onclick = iniciarJogo;
}



function irritarGato () {
    /* O texto mostrado na mensagem. */
    texto.textContent = "Seu gato não que mais saber de você e foge pela janela.";

    /* Os botões que são mostrados e são escondidos. */
         
    /* O texto no corpo dos botões. */
    botao1.innerText = "Hmmm...droga!";
    botao2.innerText = "Cansei desse gato!";
             
    /* As funções que os botões chamam ao serem clicados. */
    botao1.onclick = procurarGato;
    botao2.onclick = abandonarGato;
}

function procurarGato () {
    /* O texto mostrado na mensagem. */
    texto.textContent = "Você se toca que seu gato ter aparecido em sua porta foi a melhor coisa que lhe aconteceu e se desespera. O que vai fazer?";

    /* Os botões que são mostrados e são escondidos. */
         
    /* O texto no corpo dos botões. */
    botao1.innerText = "Procurar pela vizinhança";
    botao2.innerText = "Chorar e não fazer nada";
             
    /* As funções que os botões chamam ao serem clicados. */
    botao1.onclick = atenderVizinha;
    botao2.onclick = esperarGato;
}

function atenderVizinha () {
    /* O texto mostrado na mensagem. */
    texto.textContent = "Dona Gertrudes, sua vizinha, diz ter encontrado seu bichano se engracando com Margarida, uma de suas gatinhas.";

    /* Os botões que são mostrados e são escondidos. */
    botao2.style.display = "none";     

    /* O texto no corpo dos botões. */
    botao1.innerText = "Cadê meu gato?!";
                 
    /* As funções que os botões chamam ao serem clicados. */
    botao1.onclick = buscarGato;
}

function buscarGato () {
    /* O texto mostrado na mensagem. */
    texto.textContent = "Você encontra seu bichano em cima do telhado da sua vizinha. Finalmente vocês estão juntos novamente!";

    /* Os botões que são mostrados e são escondidos. */
    botao2.style.display = "none";     

    /* O texto no corpo dos botões. */
    botao1.innerText = "Dar nome ao gato";
                 
    /* As funções que os botões chamam ao serem clicados. */
    botao1.onclick = nomearGato;
}

function esperarGato () {
    /* O texto mostrado na mensagem. */
    texto.textContent = "Seu gato percebe que voce tinha boas intenções e resolve voltar pra casa por conta própria. Ao vê-lo chorando ele resolve se esfregar em você.";

    /* Os botões que são mostrados e são escondidos. */
    botao2.style.display = "none";     

    /* O texto no corpo dos botões. */
    botao1.innerText = "Dar nome ao gato";
                 
    /* As funções que os botões chamam ao serem clicados. */
    botao1.onclick = nomearGato;
}



iniciarJogo();