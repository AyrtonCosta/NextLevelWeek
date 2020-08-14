
import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)


app.listen(3333);


//METODOS HTTP
//GET: BUSCAR OU LISTAR UMA INFORMAÇÃO
//POST: CRIAR ALGUMA NOVA INFORMAÇÃO
//PUT: ATUALIZAR UMA INFORMAÇÃO EXISTENTE
//DELETE: DELETAR UMA INFORMAÇÃO EXISTENTE

//corpo(request body): Dados para criação ou atualização de um registro
//Route params: indentificar qual recurso eu quero atualizar ou deletar
//Query Params: paginação, filtros,ordenação