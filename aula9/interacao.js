document.querySelectorAll('form').forEach(function (formulario) {
  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    const dados = new FormData(formulario);
    const linhas = [];

    dados.forEach(function (valor, nome) {
      if (nome === 'senha') {
        linhas.push('Senha: preenchida (conteúdo oculto)');
      } else if (String(valor).trim() !== '') {
        linhas.push(nome + ': ' + valor);
      }
    });

    const resultado = document.getElementById(formulario.id + '-resultado');
    resultado.textContent = 'Simulação local — campos preenchidos:\n' + linhas.join('\n');
  });

  formulario.addEventListener('reset', function () {
    document.getElementById(formulario.id + '-resultado').textContent = '';
  });
});

document.querySelectorAll('[data-ajuda]').forEach(function (botao) {
  botao.addEventListener('click', function () {
    const formulario = botao.closest('form');
    document.getElementById(formulario.id + '-resultado').textContent =
      'Use dados fictícios. Preencha os campos obrigatórios e escolha Enviar respostas.';
  });
});