import {useContext, useEffect, useState} from 'react';
import UserContext from "../user/UserContext";
import AddButton from "../components/button/AddButton";
import DataTable from "../components/DataTable";
import SearchFilter from "../components/SearchFilter";

export const UsersList = () => {
    const users = useContext(UserContext).users;
    const [filter, setFilter] = useState({ search: "", role: "All" });
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        setFilteredUsers(users.filter(user => {
            const matchesSearch = user.name.toLowerCase().includes(filter.search.toLowerCase()) ||
                user.email.toLowerCase().includes(filter.search.toLowerCase()) ||
                user.id.toString().includes(filter.search);
            const matchesRole = filter.role === "All" || user.role === filter.role;
            return matchesSearch && matchesRole;
        }));
    }, [filter, users]);

    return (
        <div className="center-container">
            <div className="col-md-9">
                <div className="card">
                    <h5 className="card-title">Users Table</h5>
                    <div className="card-body" id="main-tb">
                        <AddButton />
                        <SearchFilter filter={filter} setFilter={setFilter}/>
                        <DataTable users={filteredUsers} setUsers={setFilteredUsers}/>
                    </div>
                </div>
            </div>

        </div>
    );
}