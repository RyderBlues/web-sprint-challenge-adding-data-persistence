const express = require('express')
const router = express.Router()
const Tasks = require('./model')
const {checkProjectId} = require('./middleware')

router.get('/', async (req, res, next) => {
    try {
        const data = await Tasks.getAll()

        
        res.json(data)
        
    }
    catch (err) {
        next(err)
    }
})

router.post('/', checkProjectId, async (req, res, next) => {
    try {
        const data = await Tasks.create(req.body)
        res.json(data);
    }   
    catch (err) {
        next(err)
    }
})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({message: err.message, stack: err.stack})
})

module.exports = router

