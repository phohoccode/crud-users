const db = require('../models')

const handleGetAllUser = async () => {
    try {
        const users = await db.Users.findAll()

        return {
            EM: 'Lấy danh sách người dùng thành công!',
            EC: 0,
            DT: users
        }
    } catch (error) {
        return {
            EM: 'Lỗi!',
            EC: -1,
            DT: ''
        }
    }
}

const handleCreateNewUser = async (rawData) => {
    try {
        await db.Users.create({
            username: rawData.username,
            email: rawData.email,
            phone: rawData.phone,
            address: rawData.address,
            sex: rawData.sex,
        })

        return {
            EM: 'Tạo người dùng thành công!',
            EC: 0,
            DT: ''
        }
    } catch (error) {
        return {
            EM: 'Lỗi!',
            EC: -1,
            DT: ''
        }
    }
}

const handleDeteleUser = async (userId) => {
    try {
        const user = await db.Users.findOne({
            where: { id: userId }
        })


        if (!user) {
            return {
                EM: 'Người dùng không tồn tại!',
                EC: 2,
                DT: ''
            }
        }

        await user.destroy()

        return {
            EM: 'Xoá người dùng thành công!',
            EC: 0,
            DT: ''
        }
    } catch (error) {
        return {
            EM: 'Lỗi!',
            EC: -1,
            DT: ''
        }
    }
}

module.exports = {
    handleGetAllUser,
    handleCreateNewUser,
    handleDeteleUser
}