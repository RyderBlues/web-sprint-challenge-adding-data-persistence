const db = require('../../data/dbConfig')

const getAll = async ()  => {
    const data = await db('projects')

    const transformed = data.map(x => {
        if (x.project_completed === 1) {
            return {...x, project_completed: true }
        }
        else {
            return {...x, project_completed: false}
        }
    })
    return transformed;
}

const getProjectById = async (id) => {
    const result = await db('projects')
        .where('project_id', id).first()

    return result
}

const create = async (project) => {
    await db('projects')
        .insert(project)
    
        const transformed = (project) => {
            if (project.project_completed === 1) {
                return {...project, project_completed: true }
            }
            else {
                return {...project, project_completed: false}
            }

        }
        
        return transformed(project);
}


module.exports = {
    getAll,
    create,
    getProjectById
}