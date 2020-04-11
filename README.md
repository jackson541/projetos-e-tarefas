<h1 align='center'> Projetos e tarefas </h1>

## Funcionalidade
Está API foi criada com [Node.js](https://nodejs.org/en/about/) e [SQLite3](https://www.sqlite.org/index.html) com objetivo de estudar utilizando uma comunicação via [JSON](https://www.json.org/json-pt.html). Ela contém um [CRUD](http://devfuria.com.br/sql/mysql-crud/) de projetos e um CRUD de tarefas.
Cada projeto é descrito da seguinte maneira:

```json
{
  "id": number,
  "title": string
}
```
E cada tarefa:

```json
{
  "id": number,
  "title": string,
  "project_id": number
}
```

Ambos os IDs são autoincrementaveis.

<br>

# Rodando o projeto
#### [Yarn](https://yarnpkg.com/)
Entre na pasta do projeto e digite `yarn start` ou `yarn nodemon index.js`

<br>

#### [npm](https://www.npmjs.com/get-npm)
Entre na pasta do projeto e digite `npm start` ou `npm nodemon index.js`

<br>

## Observações
<ol>
	<li>
		A API recebe requisições de qualquer URL atualmente, isso pode ser alterado no arquivo src/index.js na linha 17. 
	</li>
	<li>
		A porta atual em que a API está rodando é a 3333, isso pode ser alterado na linha 24 do arquivo src/index.js .
	</li>
	<li>
		Apenas dois middlewares foram aplicados nas rotas. Qualquer erro decorrente deste ou de outros problemas é de total responsabilidade do usuário da API.
	</li>
	<li>
		Existe um erro que não deleta as tarefas de um projeto quando esse projeto é deletado. Este erro é decorrente do não funcionamento do onDelete('CASCADE') da versão utilizada da biblioteca Knex.
	</li>
	
</ol>

<br>

## Uso das rotas

### Projetos

<br>

**GET** `localhost:3333/projects` 

Retorna todos os projetos cadastrados no formato JSON. <br>

Exemplo de retorno:
```json
[
  {
    "id": 1,
    "title": "projeto 01"
  },
  {
    "id": 2,
    "title": "projeto 02"
  }
]
```

<br>

**POST** `localhost:3333/projects` 

Cadastra um novo projeto e nada é retornado. <br>
A informação **title** precisa ser passada no body da requisição. <br>

Exemplo de body:
```json
[
  {
    "title": "projeto"
  }
]
```

<br>

**PUT** `localhost:3333/projects/:id` 

Edita um projeto cadastrado no banco de dados e nada é retornado. <br>
Na URL deve ser passado o **id** de um projeto já cadastrado no lugar de **:id**. A informação **title** precisa ser passada no body da requisição. <br>

Exemplo de body:
```json
[
  {
    "title": "novo nome"
  }
]
```

<br>

**DELETE** `localhost:3333/projects/:id` 

Apaga um projeto cadastrado no banco de dados e nada é retornado. <br>
Na URL deve ser passado o **id** de um projeto já cadastrado no lugar de **:id**.

Exemplo de URL:
`localhost:3333/projects/1`

O projeto com id = 1 será deletado do banco de dados.

<br><br>

### Tarefas

<br>

**GET** `localhost:3333/projects/:id/tasks`

Retorna todos as tarefas cadastradas no projeto com o **id** passado no lugar de **:id**

Exemplo de retorno para: `localhost:3333/projects/1/tasks`
```json

[
  {
    "id": 2,
    "title": "tarefa 01",
    "project_id": 1
  },
  {
    "id": 3,
    "title": "tarefa 02",
    "project_id": 1
  }
]
```

<br>

**POST** `localhost:3333/projects/:id/tasks`

Cadastra uma nova tarefa vinculada ao **id** passado no lugar de **:id**. <br>
A informação **title** precisa ser passada no body da requisição. <br>

Exemplo de body para: `localhost:3333/projects/1/tasks`
```json

[
  {
	  "title": "nome da tarefa"
  }
]
```

<br>

**PUT** `localhost:3333/projects/:id/tasks/:task_id`

Edita a tarefa com o **id** passado em **:task_id** já cadastrada e vinculada ao **id** passado no lugar de **:id**. <br>
A informação **title** precisa ser passada no body da requisição. <br>

Exemplo de body para: `localhost:3333/projects/1/tasks/1`
```json

[
  {
	  "title": "novo nome da tarefa"
  }
]
```

<br>

**DELETE** `localhost:3333/projects/:id/tasks/:task_id`

Apaga a tarefa com o **id** passado em **:task_id** já cadastrada e vinculada ao **id** passado no lugar de **:id**. <br>

Exemplo de URL:
`localhost:3333/projects/1/tasks/5`

A tarefa com id = 5 vinculada ao projeto com id = 1 será deletada do banco de dados.
