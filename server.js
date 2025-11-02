const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Servir arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname)));

// Rota principal que serve o index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota API que mantém a funcionalidade JSON original
app.get('/api', (req, res) => {
    res.json({ mensagem: 'Olá, mundo!' });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
