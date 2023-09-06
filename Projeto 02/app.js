const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let produtos = [];

app.get('/produtos', (req, res) => {
    res.json(produtos);
});

app.get('/produtos/:id', (req, res) => {
    const productId = req.params.id;
    res.send(`Retorna o produto com o ID ${productId}`);
});

app.post('/produtos', (req, res) => {
    produtos.push(req.body);
    res.send('Produto Adicionado com SUCESSO');
});

app.put('/produtos/:id', (req, res) => {
    const productId = req.params.id;
    console.log(`Atualizando o produto com o ID ${productId}`);
    res.send(`Produto com o ID ${productId} foi atualizado`);
});

app.delete('/produtos/:id', (req, res) => {
    const productId = req.params.id;
    console.log(`Removendo o produto com o ID ${productId}`);
    res.send(`Produto com o ID ${productId} foi removido`);
});

app.listen(5000, () => {
    console.log('A aplicação está no ar em http://localhost:5000');
});
