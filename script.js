// script.js - este arquivo roda no navegador do usuário

document.addEventListener('DOMContentLoaded', function() {
    // Fazer uma requisição para a API do seu servidor
    fetch('/api')
        .then(response => response.json())
        .then(data => {
            // Inserir a mensagem do servidor no HTML
            const container = document.getElementById('mensagem-do-servidor');
            container.innerHTML = `
                <div style="background: #e8f5e8; padding: 15px; border-radius: 8px; margin-top: 20px;">
                    <h3>📨 Mensagem do Servidor:</h3>
                    <p><strong>"${data.mensagem}"</strong></p>
                    <small>Esta mensagem veio do server.js via API</small>
                </div>
            `;
        })
        .catch(error => {
            console.error('Erro:', error);
            document.getElementById('mensagem-do-servidor').innerHTML = 
                '<p>Erro ao carregar mensagem do servidor</p>';
        });
});
