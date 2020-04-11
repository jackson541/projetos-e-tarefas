<h1 align='center'> Projetos e tarefas </h1>

## Funcionalidade
Está API foi criada com Node.js e SQLite3 com objetivo de estudar utilizando uma comunicação via JSON. Ela contém um CRUD de projetos e um CRUD de tarefas.
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

## Uso das rotas

### Projetos

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

**DELETE** `localhost:3333/projects/:id/tasks/:task_id`

Apaga a tarefa com o **id** passado em **:task_id** já cadastrada e vinculada ao **id** passado no lugar de **:id**. <br>

Exemplo de URL:
`localhost:3333/projects/1/tasks/5`

A tarefa com id = 5 vinculada ao projeto com id = 1 será deletada do banco de dados.
