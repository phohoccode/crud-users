const express = require('express')
const { 
    getAllUser,
    createNewUser,
    deleteUser
} = require('../controller/userController')

const router = express.Router()

const initApiRoutes = (app) => {
    router.get('/read', getAllUser)
    router.post('/create', createNewUser)
    router.delete('/delete/:id', deleteUser)

    return app.use('/api/v1', router)
}

module.exports = {
    initApiRoutes
}