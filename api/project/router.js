const express = require('express')
const router = express.Router()
const Projects = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const data = await Projects.getAll()
        
        const transformedData = data.map(x => {
            const completed = () => {
                if(x.project_completed == 1) {
                    return 'true'
                }
                else {
                    return 'false'
                }
            }
            return {
                project_id: x.project_id,
                project_name: x.project_name,
                project_description: x.project_description,
                project_completed: completed
            }
        })
        res.json(transformedData)
        
    }
    catch (err) {
        next(err)
    }
})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({message: err.message, stack: err.stack})
})

module.exports = router