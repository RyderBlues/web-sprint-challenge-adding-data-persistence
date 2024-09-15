const db = require('../../data/dbConfig')

const getAll = async () => {
    const data = await db('tasks as t')
        .join('projects as p', 't.project_id', 'p.project_id')

    const transformed = data.map(x => {
        if (x.task_completed === 1) {
            return {...x, task_completed: true }
        }
        else {
            return {...x, task_completed: false}
        }
    })
    return transformed;
}

const getById = async (id) => {
    const result = await db('tasks')
        .where('task_id', id).first()
    
    return result
}

const create = async (task) => {
    const [task_id] = await db('tasks')
        .insert(task)

    const data = await getById(task_id)
        
    const transformed = (task) => {
        if(task.task_completed === 1) {
            return {...data, task_completed: true }
        }
        else {
            return {...data, task_completed: false }
        }
    }

    return transformed(data)
}


module.exports = {
    getAll,
    create
}