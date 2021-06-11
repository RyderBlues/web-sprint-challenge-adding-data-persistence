const Projects = require('../project/model')

const checkProjectId = (req, res, next) => {
    Projects.getProjectById(req.body.project_id)
        .then(id => {
            if (!id) {
                res.status(404).json({
                    message: 'No project found'})
            }
            else {
                next()
            }
        })
        .catch(err => {
            next(err)
        })
}

module.exports = { checkProjectId }