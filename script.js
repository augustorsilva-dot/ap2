// script.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('/api')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('mensagem-do-servidor');
            container.innerHTML = `
                <div style="
                    background: #2d3748; 
                    color: #ffffff; 
                    padding: 20px; 
                    border-radius: 10px; 
                    margin-top: 20px;
                    border-left: 5px solid #4299e1;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                ">
                    <h3 style="color: #90cdf4; margin-top: 0;">📨 Mensagem do Servidor:</h3>
                    <p style="font-size: 18px;"><strong>"${data.mensagem}"</strong></p>
                    <small style="color: #cbd5e0;">Esta mensagem veio do server.js via API</small>
                </div>
            `;
        })
        .catch(error => {
            console.error('Erro:', error);
            const container = document.getElementById('mensagem-do-servidor');
            container.innerHTML = `
                <div style="
                    background: #fed7d7; 
                    color: #9b2c2c; 
                    padding: 15px; 
                    border-radius: 8px; 
                    margin-top: 20px;
                ">
                    <p>Erro ao carregar mensagem do servidor</p>
                </div>
            `;
        });
});
