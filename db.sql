psql -U postgres 
\c test 

SELECT * FROM venda;
SELECT * FROM cliente;
SELECT * FROM usuario;
SELECT * FROM produto;
DROP TABLE cliente;
DROP TABLE produto;
DROP TABLE venda;
DROP TABLE usuario;

CREATE TABLE cliente(
    cliente_id SERIAL PRIMARY KEY,
    razao VARCHAR(255),
    cnpj VARCHAR(255),
    endereco VARCHAR(255)
);


CREATE TABLE produto(
    produto_id SERIAL PRIMARY KEY,
    codigo VARCHAR(255),
   descricao VARCHAR(255),
    medida VARCHAR(255),
    compra DECIMAL,
   venda DECIMAL
);

CREATE TABLE venda(
    venda_id SERIAL PRIMARY KEY,
    cliente VARCHAR(255),
   produto VARCHAR(255),
    valor DECIMAL,
    quantidade DECIMAL,
   status VARCHAR(255)
);

CREATE TABLE usuario(
    _id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    username VARCHAR(255),
    password VARCHAR(255)
);