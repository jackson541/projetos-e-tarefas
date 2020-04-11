<h1 align='center'> Projetos e tarefas </h1>

## Funcionalidade
Está API foi criada com Node.js e SQLite3 com objetivo de estudar. Ela contém um CRUD de projetos e um CRUD de tarefas.
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

## Rotas

### Projetos

**GET** `localhost:3333/projects` <br>
Retorna todos os projetos cadastrados no formato JSON <br>

Exemplo:
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


**POST** `localhost:3333/projects` <br>
Cadastra um novo projeto e nada é retornado <br>
A informação **title** precisa ser passada no body da requisição <br>

Exemplo:
```json
[
  {
    "title": "projeto"
  }
]
```
