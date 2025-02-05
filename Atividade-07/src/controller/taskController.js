const taskService = require('../service/taskService');

class TaskController {
  static async createTask(req, res) {
    const { name, description } = req.body;
    try {
      const task = await taskService.createTask(name, description);
      res.json(task);
    } catch (error) {
      res.status(500).json({ msg: 'Erro ao criar tarefa' });
    }
  }

  static async getTasks(req, res) {
    try {
      const tasks = await taskService.getTasks();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ msg: 'Erro ao buscar tarefas' });
    }
  }

  static async getTask(req, res) {
    const { id } = req.params;
    try {
      const task = await taskService.getTask(id);
      res.json(task);
    } catch (error) {
      res.status(500).json({ msg: 'Erro ao buscar tarefa' });
    }
  }

  static async deleteTask(req, res) {
    const { id } = req.params;
    try {
      await taskService.deleteTask(id);
      res.json({ msg: 'Tarefa deletada com sucesso' });
    } catch (error) {
      res.status(500).json({ msg: 'Erro ao deletar tarefa' });
    }
  }
}

module.exports = TaskController;
