const { 
    handleGetAllUser,
    handleDeteleUser,
    handleCreateNewUser,
    handleUpdateUser
} = require("../service/userService");

const getAllUser = async (req, res) => {
    try {
        const data = await handleGetAllUser()

        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: 'Lỗi từ máy chủ!',
            EC: '-1',
            DT: ''
        })
    }
}

const createNewUser = async (req, res) => {
    try {
        const data = await handleCreateNewUser(req.body.data)

        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: 'Lỗi từ máy chủ!',
            EC: '-1',
            DT: ''
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const data = await handleDeteleUser(req.params.id)

        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: 'Lỗi từ máy chủ!',
            EC: '-1',
            DT: ''
        })
    }
}

const updateUser = async (req, res) => {
    try {
        const data = await handleUpdateUser(req.body.data)

        return res.status(200).json({
            EM: data.EM,
            EC: data.EC,
            DT: data.DT
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            EM: 'Lỗi từ máy chủ!',
            EC: '-1',
            DT: ''
        })
    }
}

module.exports = {
    getAllUser, createNewUser, deleteUser, updateUser
}