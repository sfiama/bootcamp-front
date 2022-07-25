let products = require('../products');

const express = require("express");
const router = express.Router()


// 1. Retornar todos os produtos da array. “/api/products”
router.get("/products", (req, res) => {
  return res.status(200).json(products);
});

// 2. Obter um produto específico pelo ID “/api/products/:id”
router.get('/products/:id', (req, res) => {
  const id = Number(req.params.id);

  products.map((product) => {
    if(product.id === id) {
      return res.status(200).json(product)
    }
  });
});

// 3. Adicionar um novo produto “/api/products”,
router.post('/products', (req, res) => {
  const content = req.body;

  products = [...products, content];

  res.status(201).json(products);
})

// 4. Mudar uma propriedade do produto (qualquer uma) “/api/products/:id”,
router.put('/products/:id', (req, res) => {
  const content = req.body;
  const id = Number(req.params.id);

  const newContent = products.map((product) => {
    if(product.id === id) {
        return res.status(200).json(content);
    }
    return product;
  });

  return res.status(200).json(newContent);
});

// 5. Deletar um produto utilizando o ID “/api/products/:id”.
router.delete('/products/:id', (req, res) => {
  const id = Number(req.params.id);

  const product = products.find((produto) => produto.id === id);

  if (!product) {
    return res.status(400).json({ "message": "Produto não encontrado" })
  }

  products = products.filter((produto) => produto.id !== id );

  return res.status(200).json(products);
})

module.exports = router;