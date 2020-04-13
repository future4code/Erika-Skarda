export function criarTask(taskId, tarefa, completa) {
    return {
        type: 'CREATE_TASK',
        payload: {
          taskId: taskId,
          tarefa:tarefa,
          completa:false
        }
    }
 }
 export function toDoTasks(taskDone) {
    return {
        type: 'REMOVE_TASK',
        payload: {
            taskDone: false
        }
    }
}
export function apagarTask(taskId, tarefa, completa) {
    return {
        type: 'REMOVE_TASK',
        payload: {
          taskId: taskId,
          tarefa:tarefa,
          completa:false
        }
    }
 }
