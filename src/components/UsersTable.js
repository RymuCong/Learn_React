import React, {useState} from 'react';
import SearchFilter from "./SearchFilter";
import DataTable from "./DataTable";

const UsersTable = ({ users, onEdit, onDelete }) => {
    const [filter, setFilter] = useState({ search: "", role: "All" });
    const [page, setPage] = useState(1);

    const filteredUsers = users.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(filter.search.toLowerCase());
        const matchesRole = filter.role === "All" || user.role === filter.role;
        return matchesSearch && matchesRole;
    });

    return (
        <div className="center-container">
            <div className="col-md-9">
                <table className="table table-striped table-borderless" id="main-tb">
                    <thead>
                    <tr>
                        <th colSpan="6" style={{background: '#222222', color: 'white'}}>User List</th>
                    </tr>
                    <SearchFilter filter={filter} setFilter={setFilter}/>
                    </thead>
                    <tbody>
                    <DataTable users={filteredUsers} onEdit={onEdit} onDelete={onDelete} page={page} setPage={setPage}/>
                    </tbody>
                    {/*s*/}
                </table>
            </div>
        </div>
    );
}

export default UsersTable;