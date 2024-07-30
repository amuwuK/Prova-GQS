Repositório dedicado para prova da 2ª Unidade de Gestão de Qualidade de Software.

Recomendado utilizar a extensão "Postman" para utilizar os metodos.

Inicializar o servidor utilizando o Node.js com o comando node index.js, que vai estar rodando na porta 3000.

Metodos GET em: /pedidos, /rotas e /melhor-rota/:id;
Metodos POST em: /pedidos e /rotas.

No Postman, para utilizar os metodos POST, ir na aba "body", selecionar a opção raw no tipo JSON.

Exemplo de POST em /pedidos:
<p>
{
  "endereco": {
    "rua": "Rua A",
    "numero": "123"
  },
  "latitude": 10,
  "longitude": 15,
  "produto": "Coquinha",
  "quantidade": 12
}
</p>

Exemplo de POST em /rotas:
<p>
{
  "latitude": 10,
  "longitude": 15
}
</p>

Exemplo de GET em /melhor-rota:
localhost:3000/melhor-rota/1
