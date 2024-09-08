const express = require('express')
const { 
    getAllUser,
    createNewUser,
    deleteUser,
    updateUser
} = require('../controller/userController')

const router = express.Router()

const initApiRoutes = (app) => {
    router.get('/read', getAllUser)
    router.post('/create', createNewUser)
    router.delete('/delete/:id', deleteUser)
    router.put('/update', updateUser)

    return app.use('/api/v1', router)
}

module.exports = {
    initApiRoutes
}