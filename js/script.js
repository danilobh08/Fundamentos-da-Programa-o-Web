/* Script de interação e validação do formulário de contato.
   Desenvolvido para atender aos requisitos da Atividade Prática de Fundamentos Web.
*/

// Captura o evento de submissão do formulário para processamento via JavaScript
document.getElementById('formContato').addEventListener('submit', function(event) {
    
    // Impede o comportamento padrão de recarregar a página (item 5 da orientação)
    event.preventDefault(); 

    // Captura dos elementos de input e da área de status do envio
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    const status = document.getElementById('statusEnvio');

    // Validação obrigatória: Garante que o usuário preencheu todos os campos
    if (nome.trim() === "" || email.trim() === "" || mensagem.trim() === "") {
        alert("Erro: Todos os campos (Nome, E-mail e Mensagem) são obrigatórios.");
        return;
    }

    // Validação de formato de e-mail simples via Regex (conforme sugestão do item 5)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um e-mail válido (exemplo: usuario@dominio.com).");
        return;
    }

    // Simulação de envio com feedback visual para o usuário
    status.innerHTML = "Processando envio...";
    status.style.color = "#003366";

    // Simula um atraso de rede de 1.5 segundos para mostrar a confirmação
    setTimeout(function() {
        // Exibe o alerta de sucesso solicitado na atividade
        alert("Mensagem enviada com sucesso! Obrigado, " + nome + ".");
        
        // Atualiza o texto na página e limpa o formulário
        status.innerHTML = "Mensagem enviada com sucesso!";
        status.style.color = "green";
        document.getElementById('formContato').reset();
    }, 1500);
});