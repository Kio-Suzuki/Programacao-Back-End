let ids = 0;
let tasks = [];

module.exports = {
  new(name, prioridade) {

    let prioridadeClass;
    switch (prioridade) {
      case 'Baixa':
          prioridadeClass = 'prioridade-baixa';
          break;
      case 'Média':
          prioridadeClass = 'prioridade-media';
          break;
      case 'Alta':
          prioridadeClass = 'prioridade-alta';
          break;
    }

    let task = {id: ++ids, name: name, prioridade: prioridade, prioridadeClass: prioridadeClass};
    tasks.push(task);
    return task;
  },
  update(id, name, prioridade) {
    let pos = this.getPositionById(id);
    if (pos >= 0) {
      if (name !== undefined) {
        tasks[pos].name = name;
      }
      if (prioridade !== undefined) {
        tasks[pos].prioridade = prioridade;

        let prioridadeClass;
        switch (prioridade) {
          case 'Baixa':
            prioridadeClass = 'prioridade-baixa';
            break;
          case 'Média':
            prioridadeClass = 'prioridade-media';
            break;
          case 'Alta':
            prioridadeClass = 'prioridade-alta';
            break;
        }
        tasks[pos].prioridadeClass = prioridadeClass;
      }
    }
  },
  list() {
    return tasks;
  },
  getElementById(id) {
    let pos = this.getPositionById(id)
    if (pos >= 0) {
      return tasks[pos];
    }
    return null;
  },
  getPositionById(id) {
    for (let i = 0; i<tasks.length; i++) {
      if (tasks[i].id == id) {
        return i;
      }
    }
    return -1;
  },
  delete(id) {
    let i = this.getPositionById(id);
    if (i >= 0) {
      tasks.splice(i, 1);
      return true;
    }
    return false; 
  },
  alfabetico() {
    return tasks.sort((a, b) => a.name.localeCompare(b.name));
  },
  contagem() {
    return tasks.length;
  }
}