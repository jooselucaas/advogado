const buttons = document.querySelectorAll('.missao, .visao, .valores');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const textoContainer = button.querySelector('.texto'); // Seleciona o texto dentro do botão

        // Verifica se o texto já está visível
        if (textoContainer.classList.contains('oculto')) {
            // Oculta todos os outros textos
            buttons.forEach((btn) => {
                const otherTextoContainer = btn.querySelector('.texto');
                otherTextoContainer.style.maxHeight = '0'; // Esconde o texto
                otherTextoContainer.classList.add('oculto');
                btn.classList.remove('expanded');
                btn.classList.remove('active'); // Remove a classe active dos outros botões
            });

            // Exibe o texto clicado
            textoContainer.classList.remove('oculto');
            textoContainer.style.maxHeight = '200px'; // Define uma altura máxima para a animação
            button.classList.add('expanded');
            button.classList.add('active'); // Adiciona a classe active ao botão clicado
        } else {
            // Oculta o texto clicado
            textoContainer.style.maxHeight = '0'; // Esconde o texto
            textoContainer.classList.add('oculto');
            button.classList.remove('expanded');
            button.classList.remove('active'); // Remove a classe active do botão clicado
        }
    });
});
