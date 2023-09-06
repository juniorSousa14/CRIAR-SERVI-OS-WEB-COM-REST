// 1. Importar bibliotecas
const express = require('express'); // Importei o módulo express
const bodyParser = require('body-parser');
const cors = require('cors');

// 2. Criar o servidor web
const app = express();

// 3. Configurar o servidor web
app.use(cors());
app.use(bodyParser.json()); // Aceita dados no formato JSON
app.use(bodyParser.urlencoded({ extended: true })); // Aceita dados no formato URL-encoded.

// 4. Configurar as rotas para o recurso 'produtos'
let produtos = []; // Estou simulando um banco de dados.

// Rota para listar todos os produtos
app.get('/produtos', (req, res) => {
    res.json(produtos);
});

// Rota para retornar um produto pelo ID
app.get('/produtos/:id', (req, res) => {
    const productId = req.params.id;
    // Aqui você pode adicionar lógica para buscar o produto pelo ID no seu array de produtos.
    res.send(`Retorna o produto com o ID ${productId}`);
});

// Rota para adicionar um novo produto
app.post('/produtos', (req, res) => {
    produtos.push(req.body);
    res.send('Produto Adicionado com SUCESSO');
});

// Rota para atualizar um produto pelo ID usando o método PUT
app.put('/produtos/:id', (req, res) => {
    const productId = req.params.id;
    console.log(`Atualizando o produto com o ID ${productId}`);
    // Aqui você pode adicionar o código para atualizar o produto com base no ID fornecido.
    res.send(`Produto com o ID ${productId} foi atualizado`);
});

// Rota para excluir um produto pelo ID usando o método DELETE
app.delete('/produtos/:id', (req, res) => {
    const productId = req.params.id;
    console.log(`Removendo o produto com o ID ${productId}`);
    // Aqui você pode adicionar o código para excluir o produto com base no ID fornecido.
    res.send(`Produto com o ID ${productId} foi removido`);
});

// 5. Colocar o servidor no ar
app.listen(5000, () => {
    console.log('A aplicação está no ar em http://localhost:5000');
});

