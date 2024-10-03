import React, { useContext, useEffect, useState} from "react";
import UserContext from "../user/UserContext";
import {useNavigate, useParams } from "react-router-dom";
import swal from 'sweetalert';

const InputForm = () => {
    const { users, setUsers } = useContext(UserContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const { editId } = useParams();
    const navigate = useNavigate();

    // Tối ưu việc tìm kiếm người dùng cần chỉnh sửa
    useEffect(() => {
        const editUser = users.find(user => user.id === Number(editId));
        if (editUser) {
            setName(editUser.name);
            setEmail(editUser.email);
            setRole(editUser.role);
        }
    }, [editId, users]);

    const clear = () => {
        setName("");
        setEmail("");
        setRole("");
    };

    const validateForm = () => {
        if (!name && !email && !role)
            swal("All fields are required", "", "error");
        else if (!name)
            swal("Name is required", "", "error");
        else if (!email)
            swal("Email is required", "", "error");
        else if (!role)
            swal("Role is required", "", "error");
        else
            return true;
    };

    const addUser = () => {
        const id = users.length + 1;
        setUsers([...users, { id, name, email, role }]);
        clear();
    };

    const updateUser = () => {
        let updatedUsers = [...users];
        const index = updatedUsers.findIndex(user => user.id === Number(editId));
        updatedUsers[index] = { id: Number(editId), name, email, role };
        setUsers(updatedUsers);
        clear();
        navigate("/users");
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validateForm()) return;
        if (editId) {
            updateUser();
        } else {
            addUser();
            navigate("/users");
        }
    };

    return (
        <div className="center-container">
            <div className="col-md-9">
                <div className="card">
                    <h5 className="card-title">{editId ? "Edit user" : 'Add user'}</h5>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="userName" className="form-label">Name</label>
                                <input type="text" className="form-control" id="userName" placeholder="Enter your name"
                                       value={name} onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="userEmail" className="form-label">Email</label>
                                <input type="email" className="form-control" id="userEmail"
                                       placeholder="Enter your email" value={email}
                                       onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Role</label>
                                <select className="form-select" id="userRole" value={role}
                                        onChange={(e) => setRole(e.target.value)}>
                                    <option value="">Choose...</option>
                                    <option value="Admin">Admin</option>
                                    <option value="User">User</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default InputForm;