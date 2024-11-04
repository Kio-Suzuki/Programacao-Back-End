var express = require('express');
var Task = require("../model/Tasks")
var TaskSchema = require("../validators/TaskValidator")
const Joi = require("joi")
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (Task.list().length == 0) {
    Task.new("Tarefa 1");
    Task.new("Tarefa 2");
  }

  let obj = Task.getElementById(req.query.tid);
  res.render('index', { tasks: Task.list(), task: obj });
});

router.get('/lista', function(req, res, next) {
  let obj = Task.getElementById(req.query.tid);
  res.render('lista', { tasks: Task.alfabetico(), task: obj });
});

router.get('/contagem', function(req, res, next) {
  let obj = Task.getElementById(req.query.tid);
  res.render('contagem', { tasks: Task.contagem(), task: obj, taskCont: Task.list().length });
});

router.post("/tarefas", function (req, res){
    const {error, value} = TaskSchema.validate(req.body);
    if (error) {
      res.render('index', { tasks: Task.list(), erro: "Dados incompletos" });
      return;
    }
    
    const {id, nome, prioridade} = value
    if (id === undefined) {
      //Inserir
      Task.new(nome, prioridade);
    } else {
      //Alterar
      Task.update(id, nome, prioridade);
    }
    
    res.redirect("/");
})

router.get("/tarefas/del/:id", function(req, res){
  const {id} = req.params;
  const {error, value} = Joi.number().integer().greater(0).validate(id)

  if (error || !Task.delete(value)) {
    res.send("Falha ao excluir uma tarefa");
    return;
  }
  res.redirect("/");
})

module.exports = router;
