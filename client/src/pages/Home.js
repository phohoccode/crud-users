import { useState, useEffect } from 'react'

import AddUser from "./AddUser";
import Users from "./Users";

function Home() {
    const [refreshUsers, setRefreshUsers] = useState(false);

    const handleUserAdded = () => {
        setRefreshUsers(prev => !prev);
    };

    return (
        <div className="container mt-5">
            <h1 className='d-block my-5 text-center btn btn-success'>CRUD USER BASIC</h1>
            <div className="row">
                <div className="col-3">
                    <AddUser
                        onUserAdded={handleUserAdded}
                    />
                </div>

                <div className="col-9">
                    <Users
                        refresh={refreshUsers}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;