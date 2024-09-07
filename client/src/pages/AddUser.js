import { useState, useEffect } from 'react'
import _ from 'lodash'
import { createNewUser } from '../service/userService'

function AddUser({onUserAdded}) {
    const [user, setUser] = useState({
        username: '',
        email: '',
        address: '',
        phonenumber: '',
        sex: ''
    })

    const handleCheckInputs = () => {
        if (!user.username || !user.email || !user.address || !user.phonenumber || !user.sex) {
            return false
        }
        return true
    }

    const handleOnchangeInputs = (value, name) => {
        const _user = _.cloneDeep(user)
        _user[name] = value
        setUser(_user)
    }

    const handleAddUser = async () => {
        const check = handleCheckInputs()
        if (!check) {
            alert('Vui lòng nhập nội dung!')
            return
        }

        const response = await createNewUser(user)

        if (response && response.data && +response.data.EC === 0) {
            onUserAdded()
        }
    }

    return (
        <>
            <div className='mb-3'>
                <label className="form-label">Tên người dùng</label>
                <input
                    value={user.username}
                    onChange={(e) => handleOnchangeInputs(e.target.value, 'username')} type="text" className='form-control' />
            </div>

            <div className='mb-3'>
                <label className="form-label">Email</label>
                <input
                    value={user.email}
                    onChange={(e) => handleOnchangeInputs(e.target.value, 'email')} type="email" className="form-control" />
            </div>

            <div className='mb-3'>
                <label className="form-label">Địa chỉ</label>
                <input
                    value={user.address}
                    onChange={(e) => handleOnchangeInputs(e.target.value, 'address')} type="text" className="form-control" />
            </div>

            <div className='mb-3'>
                <label className="form-label">Số điện thoại</label>
                <input
                    value={user.phonenumber}
                    onChange={(e) => handleOnchangeInputs(e.target.value, 'phonenumber')} type="tel" className="form-control" />
            </div>

            <div className='mb-3'>
                <label className="form-label">Giới tính</label>
                <select onChange={(e) => handleOnchangeInputs(e.target.value, 'sex')} className="form-select">
                    <option selected>--- Chọn giới tính ---</option>
                    <option value="1">Nam</option>
                    <option value="2">Nữ</option>
                </select>
            </div>

            <button onClick={() => handleAddUser()} className='btn btn-primary'>Thêm</button>
        </>
    );
}

export default AddUser;
