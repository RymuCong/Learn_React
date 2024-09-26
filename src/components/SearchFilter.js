import React from 'react';

const SearchFilter = ({ filter, setFilter }) => {
    const handleSearchChange = (event) => {
        setFilter({ ...filter, search: event.target.value });
    };

    const handleRoleChange = (event) => {
        setFilter({ ...filter, role: event.target.value });
    };

    return (
        <div className="row">
            <div className="col-md-8">
                <form className="form-group d-flex">
                    <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        id="searchInput"
                        value={filter.search}
                        onChange={handleSearchChange}
                    />
                    <button className="btn btn-outline-success" type="button">Search</button>
                </form>
            </div>
            <div className="col-md-4">
                <div className="form-group d-flex">
                    <select
                        className="form-control"
                        id="filterRole"
                        value={filter.role}
                        onChange={handleRoleChange}
                    >
                        <option value="All">All</option>
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default SearchFilter;