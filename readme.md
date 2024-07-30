Repositório dedicado para prova da 2ª Unidade de Gestão de Qualidade de Software.

Recomendado utilizar a extensão "Postman" para utilizar os metodos.

Inicializar o servidor utilizando o Node.js com o comando node index.js, que vai estar rodando na porta 3000.

Metodos GET em: /pedidos, /rotas e /melhor-rota/:id;
Metodos POST em: /pedidos e /rotas.

No Postman, para utilizar os metodos POST, ir na aba "body", selecionar a opção raw no tipo JSON.

Exemplo de POST em /pedidos:
<p>
<br>{
<br>  "endereco": {
<br>    "rua": "Rua A",
<br>    "numero": "123"
<br>  },
<br>  "latitude": 10,
<br>  "longitude": 15,
<br>  "produto": "Coquinha",
<br>  "quantidade": 12
<br>}
</p>

Exemplo de POST em /rotas:
<p>
<br>{
<br>  "latitude": 10,
<br>  "longitude": 15
<br>}
</p>

Exemplo de GET em /melhor-rota:
localhost:3000/melhor-rota/1
