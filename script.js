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
    mensagem = "A consulta nutricional recomendada para orientação personalizada.";
} else if (imc < 24.9) {
    percentual = 50;
    cor = "#28a745";
    classificacao = "Peso ideal";
    mensagem = "Parabéns! Consultas regulares ajudam a manter a saúde.";
} else if (imc < 29.9) {
    percentual = 70;
    cor = "#ffb703";
    classificacao = "Sobrepeso";
    mensagem = "A consulta pode ajudar a criar um plano alimentar saudável.";
} else if (imc < 34.9) {
    percentual = 85;
    cor = "#fb8500";
    classificacao = "Obesidade Grau I";
    mensagem = "Agendar uma consulta ajuda a prevenir riscos à saúde.";
} else if (imc < 39.9) {
    percentual = 90;
    cor = "#d65a31";
    classificacao = "Obesidade Grau II";
    mensagem = "É fortemente recomendado marcar uma consulta com um profissional.";
} else {
    percentual = 100;
    cor = "#d90429";
    classificacao = "Obesidade Grau III";
    mensagem = "A consulta nutricional é imediatamente recomendada.";
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

// Seleciona todos os carrosséis
document.querySelectorAll('.carrossel-wrapper').forEach(wrapper => {
  const slides = wrapper.querySelectorAll('.slide');
  const bolinhas = wrapper.querySelectorAll('.bolinha');
  let index = 0;

  function showSlide(i) {
    slides.forEach((slide, idx) => {
      slide.style.display = idx === i ? 'flex' : 'none';
      bolinhas[idx].classList.toggle('active', idx === i);
    });
    index = i;
  }

  // Inicializa
  showSlide(0);

  // Clique nas bolinhas
  bolinhas.forEach((bolinha, i) => {
    bolinha.addEventListener('click', () => {
      showSlide(i);
      resetAutoPlay(); // reinicia autoplay ao clicar
    });
  });

  // --- AUTOPLAY ---
  function autoPlay() {
    let next = (index + 1) % slides.length;
    showSlide(next);
  }

  let play = setInterval(autoPlay, 8000); // muda a cada 8 segundos

  function resetAutoPlay() {
    clearInterval(play);
    play = setInterval(autoPlay, 8000);
  }
});


// script.js

function enviarWhatsAppFinal(event) {
    event.preventDefault();

    const nome = document.getElementById('nomeFinal').value.trim();
    const estado = document.getElementById('estadoFinal').value.trim();
    const telefone = document.getElementById('telefoneFinal').value.trim();
    const objetivoSelect = document.getElementById('objetivoFinal');
    const objetivo = objetivoSelect.options[objetivoSelect.selectedIndex].text;

    const tipoAtendimento = document.getElementById('tipoAtendimentoFinal').value;

    if (!nome || !estado || !telefone || !objetivo || !tipoAtendimento) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    const telefoneLimpo = telefone.replace(/\D/g, ''); // remove espaços e símbolos
    const numeroNutricionista = '5521993111831'; // DDD + número do WhatsApp da nutricionista

    const mensagem = `Olá, meu nome é ${nome}.\n` +
                     `Estado: ${estado}\n` +
                     `Gostaria de agendar uma consulta.\n\n` +
                     `WhatsApp: ${telefoneLimpo}\n` +
                     `Objetivo principal: ${objetivo}\n` +
                     `Tipo de atendimento: ${tipoAtendimento}`;

    const urlWhats = `https://wa.me/${numeroNutricionista}?text=${encodeURIComponent(mensagem)}`;

    // Abre o WhatsApp em nova aba ou no app do celular
    window.open(urlWhats, '_blank');
}




