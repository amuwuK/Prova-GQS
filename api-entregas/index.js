const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let pedidos = [];
let rotas = [];

app.get('/pedidos', (req, res) => {
  res.json(pedidos);
});

app.post('/pedidos', (req, res) => {
  const { endereco, latitude, longitude, produto, quantidade } = req.body;
  if ( !endereco || !latitude || !longitude || !produto || !quantidade ) {
    return res.status(400).json({ error: 'Dados insuficientes.' });
  }
  const novoPedido = { endereco, latitude, longitude, produto, quantidade };
  pedidos.push(novoPedido);
  res.status(201).json(novoPedido);
});

app.get('/rotas', (req, res) => {
  res.json(rotas);
});

app.post('/rotas', (req, res) => {
  const { id, origem, destino, distancia } = req.body;
  if (!id || !origem || !destino || !distancia) {
    return res.status(400).json({ error: 'Dados insuficientes.' });
  }
  const novaRota = { id, origem, destino, distancia };
  rotas.push(novaRota);
  res.status(201).json(novaRota);
});

app.get('/melhor-rota/:id', (req, res) => {
  const pedidoId = req.params.id;
  const pedido = pedidos.find(p => p.id === pedidoId);
  if (!pedido) {
    return res.status(404).json({ error: 'Pedido não encontrado.' });
  }

  const rota = rotas.find(r => r.destino === pedido.destino);
  if (!rota) {
    return res.status(404).json({ error: 'Rota não encontrada.' });
  }

  res.json(rota);
});

app.listen(port, () => {
  console.log(`API rodando na porta: ${port}`);
});
