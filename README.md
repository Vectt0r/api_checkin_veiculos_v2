tabelas do banco

enderecos - id, id_pessoa(fk pessoas(id)), id_cidade(fk cidades(id)), rua, numero, bairro, cep, telefone

pessoas -   id, nome, cpf, setor, tipo, id_endereco(fk enderecos(id))

usuarios - id, id_pessoa(fk pessoas(id)), usuario, senha

========================================================================================================================

src/
├── config/                  # Configurações de banco, autenticação, etc.
├── controllers/
│   ├── PessoasController.js
│   ├── UsuariosController.js
│   ├── VeiculosController.js
│   ├── RotasController.js
│   ├── EntregasController.js
│   ├── PedidosController.js
│   └── FinanceiroController.js
├── models/
│   ├── Pessoas.js
│   ├── Usuarios.js
│   ├── Veiculos.js
│   ├── Rotas.js
│   ├── Entregas.js
│   ├── Pedidos.js
│   ├── Cidades.js
│   └── Enderecos.js
├── routes/
│   ├── PessoasRoutes.js
│   ├── UsuariosRoutes.js
│   ├── VeiculosRoutes.js
│   ├── RotasRoutes.js
│   ├── EntregasRoutes.js
│   ├── PedidosRoutes.js
│   └── FinanceiroRoutes.js
├── services/                # Lógica de negócios complexa (ex: cálculo de rotas, fretes)
├── utils/                   # Funções auxiliares
└── server.js
