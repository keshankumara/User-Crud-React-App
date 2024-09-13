import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const UsersTable = ({rows, selectedUser, deleteUser}) => {
    return (
        <TableContainer component={Paper}>
            <Table 
                style={{ 
                    marginLeft: '30px',
                    marginRight: '30px', 
                    marginBottom: '30px',
                }}
                border={5}
                
             >
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Action for Update</TableCell>
                        <TableCell>Action for Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.length > 0 ? rows.map(row =>(
                            <TableRow key={row.id} sx={{'&:last-child td, &:last-child th': {border:1}}}>
                                <TableCell component='th' scope="row"  >{row.id}</TableCell>
                                <TableCell component='th' scope="row">{row.name}</TableCell>
                                <TableCell >
                                    <button
                                        sx={{ margin: '0px 10px' }}
                                        onClick={() => selectedUser({
                                            id: row.id,
                                            name: row.name
                                        })}  
                                    >
                                        Update
                                    </button>
                                </TableCell>
                                <TableCell>
                                    <button
                                            sx={{ margin: '0px 10px' }}
                                            onClick={() => deleteUser({id: row.id})}  
                                        >
                                            Delete
                                        </button>
                                </TableCell>
                            </TableRow>
                            )) : (
                                <TableRow  sx={{'&:last-child td, &:last-child th': {border:0}}}>
                                    <TableCell component='th' scope="row">No Data</TableCell>
                                </TableRow>
                                )
                    }

                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default UsersTable;