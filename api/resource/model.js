const db = require('../../data/dbConfig')

const getAll = () => {
    return db('resources')
}

const create = async (resource) => {
    await db('resources')
        .insert(resource)
    
    return resource;
}


module.exports = {
    getAll,
    create
}