var express = require('express'); // importei o modulo express.
const app = express(); // estou criando u aplicacao web.

//Criando a rota Raiz.
app.get('/',(req, res) => {
    res.send('A aplicação está rodando');
});

// Rotas para o recurso 'Produtos'
app.get('/produtos',(req, res) => {
    res.send('retorna todos os produtos cadastrados no Sistema');
});

app.get('/produtos/:id',(req, res) => {
    res.send('retorna o produto' + req.params.id);
});

// Rotas nova do dia !!! === Adicionar um novo produto.
app.post('/produtos/',(req, res) => {
    console.log(req);
});

//Abaixo a gente inicia o servidor (Ele fica escutando, fica esperando uma msg chegar).
//Fim do Novo
app.listen(5000, () => {
    console.log('A aplicação está no ar em http://localhost:5000');
});