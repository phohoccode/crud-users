import axios from "axios"

const getAllUser = () => {
    return axios.get('http://localhost:8888/api/v1/read')
}

const createNewUser = (data) => {
    return axios.post('http://localhost:8888/api/v1/create', { data })
}

const deleteUser = (id) => {
    return axios.delete(`http://localhost:8888/api/v1/delete/${id}`)
}

export {
    getAllUser, createNewUser, deleteUser
}