const express = require('express')
const router = express.Router()
const Resources = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const data = await Resources.getAll()

        
        res.json(data)
        
    }
    catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const data = await Resources.create(req.body)
        res.json(data)
    }   
    catch (err) {
        next(err)
    }
})

router.use((err, req, res, next) => {
    res.status(err.status || 500).json({message: err.message, stack: err.stack})
})

module.exports = router
