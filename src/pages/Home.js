import React, {useState} from 'react';
import InputForm from '../components/InputForm';
import UsersTable from '../components/UsersTable';

const Home = () => {

    const [editUser, setEditUser] = useState(null);

    return (
        <div>
            <InputForm editUser = {editUser} setEditUser={setEditUser} />
            <UsersTable setEditUser = {setEditUser} />
        </div>
    );
}

export default Home;

