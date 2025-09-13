document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("imcForm");
    const barra = document.getElementById("barra-progresso");
    const mensagemDiv = document.getElementById("mensagem");
    const btnWhatsApp = document.getElementById("btn-whatsapp");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const peso = parseFloat(document.getElementById("peso").value);
        const altura = parseFloat(document.getElementById("altura").value);

        if (!peso || !altura || peso <= 0 || altura <= 0) {
            barra.style.width = "100%";
            barra.style.backgroundColor = "#f8d7da";
            mensagemDiv.innerHTML = "Por favor, insira valores válidos.";
            btnWhatsApp.style.display = "none";
            return;
        }

        const imc = (peso / (altura * altura)).toFixed(1);
        let percentual = 0;
        let cor = "#28a745";
        let mensagem = "";
        let classificacao = "";

        if (imc < 18.5) {
            percentual = 20;
            cor = "#ffe066";
            classificacao = "Abaixo do peso";
            mensagem = "Consulta nutricional recomendada para orientação personalizada.";
        } else if (imc < 24.9) {
            percentual = 50;
            cor = "#28a745";
            classificacao = "Peso ideal";
            mensagem = "Parabéns! Consultas regulares ajudam a manter a saúde.";
        } else if (imc < 29.9) {
            percentual = 70;
            cor = "#ffb703";
            classificacao = "Sobrepeso";
            mensagem = "Consulta pode ajudar a criar um plano alimentar saudável.";
        } else if (imc < 34.9) {
            percentual = 85;
            cor = "#fb8500";
            classificacao = "Obesidade Grau I";
            mensagem = "Agendar consulta ajuda a prevenir riscos à saúde.";
        } else {
            percentual = 100;
            cor = "#d90429";
            classificacao = "Obesidade Grau II/III";
            mensagem = "É fortemente recomendado marcar uma consulta com um profissional.";
        }

        // Atualiza barra de progresso
        barra.style.width = percentual + "%";
        barra.style.backgroundColor = cor;

        // Atualiza mensagem
        mensagemDiv.innerHTML = `<strong>IMC:</strong> ${imc} (${classificacao})<br>${mensagem}`;

       // Botão WhatsApp
        const telefone = "5521993111831"
        const texto = encodeURIComponent(`Olá, meu IMC é ${imc} (${classificacao}) e gostaria de agendar uma consulta.`);
        btnWhatsApp.href = `https://wa.me/${telefone}?text=${texto}`;
        btnWhatsApp.style.display = "inline-block"; // mostra o botão após calcular
    });
});

// Carrosel 1// 

// Função para criar o carrossel com bolinhas
function initCarrossel(carrosselSelector, bolinhasSelector) {
    const carrossel = document.querySelector(carrosselSelector);
    const slides = carrossel.querySelectorAll('.slide');
    const bolinhas = document.querySelectorAll(bolinhasSelector);

    bolinhas.forEach((bolinha, index) => {
        bolinha.addEventListener('click', () => {
            // Remove active das bolinhas
            bolinhas.forEach(b => b.classList.remove('active'));
            bolinha.classList.add('active');

            // Move o carrossel
            carrossel.querySelector('.slides').style.transform = `translateX(-${index * 100}%)`;
        });
    });
}

// Inicializa os dois carrosséis
initCarrossel('.carrossel-1', '.bolinhas-1 .bolinha');
initCarrossel('.carrossel-2', '.bolinhas-2 .bolinha');


// Carrosel 2// 

document.addEventListener("DOMContentLoaded", function () {
  // função genérica para cada carrossel
  function initCarrossel(slidesClass, bolinhasClass) {
    const slidesContainer = document.querySelector(`.${slidesClass}`);
    const bolinhas = document.querySelectorAll(`.${bolinhasClass} .bolinha`);
    let currentIndex = 0;

    function goToSlide(index) {
      currentIndex = index;
      slidesContainer.style.transform = `translateX(-${index * 100}%)`;

      // atualizar bolinhas
      bolinhas.forEach(b => b.classList.remove("active"));
      bolinhas[index].classList.add("active");
    }

    bolinhas.forEach((bolinha, index) => {
      bolinha.addEventListener("click", () => {
        goToSlide(index);
      });
    });

    // iniciar no primeiro
    goToSlide(0);
  }

  // inicializar os dois carrosseis
  initCarrossel("slides-1", "bolinhas-1");
  initCarrossel("slides-2", "bolinhas-2");
});





// JavaScript para formulário
document.getElementById('formContatoFinal').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nomeFinal').value.trim();
    const telefone = document.getElementById('telefoneFinal').value.trim();
    const email = document.getElementById('emailFinal').value.trim();
    const objetivo = document.getElementById('objetivoFinal').value;
    const tipoAtendimento = document.getElementById('tipoAtendimentoFinal').value;

    if (!nome || !telefone || !email || !objetivo || !tipoAtendimento) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    const telefoneLimpo = telefone.replace(/\D/g, ''); // remove espaços e símbolos
    const numeroNutricionista = '5521993111831'; // DDD + número

    const mensagem = `Olá, meu nome é *${nome}*.\n` +
                     `Gostaria de agendar uma consulta.\n\n` +
                     `WhatsApp: ${telefoneLimpo}\n` +
                     `E-mail: ${email}\n` +
                     `Objetivo principal: ${objetivo}\n` +
                     `Tipo de atendimento: ${tipoAtendimento}\n`;

    const urlWhats = `https://wa.me/${numeroNutricionista}?text=${encodeURIComponent(mensagem)}`;

    // Abre o WhatsApp
    window.location.href = urlWhats; // usando location.href evita bloqueio de pop-up
});