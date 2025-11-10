tabelas do banco

enderecos - id, id_pessoa(fk pessoas(id)), id_cidade(fk cidades(id)), rua, numero, bairro, cep, telefone

pessoas -   id, nome, cpf, setor, tipo, id_endereco(fk enderecos(id))

usuarios - id, id_pessoa(fk pessoas(id)), usuario, senha