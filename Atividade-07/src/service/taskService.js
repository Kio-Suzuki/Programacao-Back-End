const taskModel = require('../model/taskModel');

class TaskService {
  static async createTask(name, description) {
    try {
      const task = await taskModel.create({ name, description });
      return task;
    } catch (error) {
      throw new Error('Erro ao criar tarefa');
    }
  }

  static async getTasks() {
    try {
      const tasks = await taskModel.findAll();
      return tasks;
    } catch (error) {
      throw new Error('Erro ao buscar tarefas');
    }
  }

  static async getTask(id) {
    try {
      const task = await taskModel.findByPk(id);
      return task;
    } catch (error) {
      throw new Error('Erro ao buscar tarefa');
    }
  }

  static async deleteTask(id) {
    try {
      await taskModel.destroy({ where: { id } });
    } catch (error) {
      throw new Error('Erro ao deletar tarefa');
    }
  }
}

module.exports = TaskService;
