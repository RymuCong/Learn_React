import {useEffect, useState} from 'react';
import SearchFilter from "./SearchFilter";
import DataTable from "./DataTable";
import users from "../User/User";

const UsersTable = ({setEditUser}) => {
    const [filter, setFilter] = useState({ search: "", role: "All" });
    const [filteredUsers, setFilteredUsers] = useState(users);

    useEffect(() => {
        setFilteredUsers(users.filter(user => {
            const matchesSearch = user.name.toLowerCase().includes(filter.search.toLowerCase()) ||
                user.email.toLowerCase().includes(filter.search.toLowerCase()) ||
                user.id.toString().includes(filter.search);
            const matchesRole = filter.role === "All" || user.role === filter.role;
            return matchesSearch && matchesRole;
        }));
    }, [filter]);

    return (
        <div className="center-container">
            <div className="col-md-9">
                <div className="card">
                    <h5 className="card-title">Users Table</h5>
                    <div className="card-body" id="main-tb">
                        <SearchFilter filter={filter} setFilter={setFilter}/>
                        <DataTable users={filteredUsers} setUsers={setFilteredUsers} setEditUser={setEditUser}/>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default UsersTable;