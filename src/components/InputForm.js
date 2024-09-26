import React, {useEffect, useState} from "react";

const InputForm = ({ users, setUsers, editIndex, setEditIndex }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");

    useEffect(() => {
        if (editIndex !== -1) {
            setName(users[editIndex].name);
            setEmail(users[editIndex].email);
            setRole(users[editIndex].role);
        }
    }, [editIndex, users]);

    const clear = () => {
        setName("");
        setEmail("");
        setRole("");
    };

    const validateForm = () => {
        if (!name || !email || !role) {
            alert("Please fill out all fields.");
            return false;
        }
        return true;
    };

    const addUser = (name, email, role) => {
        setUsers([...users, { name, email, role }]);
        clear();
    };

    const updateUser = (index, name, email, role) => {
        let updatedUsers = [...users];
        updatedUsers[index] = { name, email, role };
        setUsers(updatedUsers);
        clear();
        setEditIndex(-1);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validateForm()) {
            return;
        }
        if (editIndex !== -1) {
            updateUser(editIndex, name, email, role);
        } else {
            addUser(name, email, role);
        }
    };

    return (
        <div className="center-container">
            <div className="col-md-9">
                <div className="card">
                    <h5 className="card-title">Add User</h5>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="userName" className="form-label">Name</label>
                                <input type="text" className="form-control" id="userName" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="userEmail" className="form-label">Email</label>
                                <input type="email" className="form-control" id="userEmail" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Role</label>
                                <select className="form-select" id="userRole" value={role} onChange={(e) => setRole(e.target.value)}>
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