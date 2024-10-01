import { DataGrid} from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const DataTable = ({users, setUsers ,setEditUser}) => {

    const handleEdit = (id) => {
        const user = users.find(user => user.id === id);
        setEditUser(user);
    };

    const handleDelete = (id) => {
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
    };

    const columns = [
        { field: 'id', headerName: '#', width: 100 },
        { field: 'name', headerName: 'Name', width: 250 },
        { field: 'email', headerName: 'Email', width: 250 },
        { field: 'role', headerName: 'Role', width: 150 },
        {
            field: 'options',
            headerName: 'Options',
            width: 250,
            renderCell: (params) => (
                <div>
                    <button
                        className="btn btn-warning"
                        onClick={() => handleEdit(params.row.id)}
                    >
                        Edit
                    </button>
                    <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(params.row.id)}
                    >
                        Delete
                    </button>
                </div>
            ),
        },
    ];

    const rows = users.map((user, index) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
    }));

    const paginationModel = { page: 0, pageSize: 5 };

    return (
        <Paper sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10, 25, 50, 100]}
                sx={{ border: 1, borderColor: 'divider'}}
            />
        </Paper>
    );
}

export default DataTable;