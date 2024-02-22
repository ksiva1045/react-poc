import React from 'react'
import { Link } from 'react-router-dom'
import './ViewTicketsStyle.css'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'

const data = [
    { T_No: 1023, Server_OS: 'Windows', Server_Name: 'prdai002', BS_Owners: 'UBD Support', IT_Contacts: 'Frank Santos', Activity_Date: '2023-09-28', Time: '9:30:00', Description: 'there will be database connectivity issues during the DB activity schedule' },
    { T_No: 1045, Server_OS: 'Ubuntu', Server_Name: 'prdai013', BS_Owners: 'ABC Support', IT_Contacts: 'Harry Seth', Activity_Date: '2023-10-08', Time: '6:30:00', Description: 'there will be connectivity issues during the DB activity schedule' },
    { T_No: 1013, Server_OS: 'Windows', Server_Name: 'prdai002', BS_Owners: 'UBD Support', IT_Contacts: 'Frank Santos', Activity_Date: '2023-09-28', Time: '9:30:00', Description: 'there will be database connectivity issues during the DB activity schedule' },
    { T_No: 113, Server_OS: 'Windows', Server_Name: 'prdai002', BS_Owners: 'UBD Support', IT_Contacts: 'Frank Santos', Activity_Date: '2023-09-28', Time: '9:30:00', Description: 'there will be database connectivity issues during the DB activity schedule' },
    { T_No: 1021, Server_OS: 'Ubuntu', Server_Name: 'prdai013', BS_Owners: 'ABC Support', IT_Contacts: 'Harry Seth', Activity_Date: '2023-10-08', Time: '6:30:00', Description: 'there will be connectivity issues during the DB activity schedule' },
    { T_No: 1029, Server_OS: 'Windows', Server_Name: 'prdai002', BS_Owners: 'UBD Support', IT_Contacts: 'Frank Santos', Activity_Date: '2023-09-28', Time: '9:30:00', Description: 'there will be database connectivity issues during the DB activity schedule' },
    { T_No: 1021, Server_OS: 'Windows', Server_Name: 'prdai002', BS_Owners: 'UBD Support', IT_Contacts: 'Frank Santos', Activity_Date: '2023-09-28', Time: '9:30:00', Description: 'there will be database connectivity issues during the DB activity schedule' },
]
const data1 = [
    { T_No: 1113, Server_OS: 'Windows', Server_Name: 'prdai002', BS_Owners: 'UBD Support', IT_Contacts: 'Frank Santos', Activity_Date: '2023-09-28', Time: '9:30:00', Description: 'there will be database connectivity issues during the DB activity schedule' },
    { T_No: 1145, Server_OS: 'Ubuntu', Server_Name: 'prdai013', BS_Owners: 'ABC Support', IT_Contacts: 'Harry Seth', Activity_Date: '2023-10-08', Time: '6:30:00', Description: 'there will be connectivity issues during the DB activity schedule' },
]
const ViewTickets = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div style={{ padding: '2%' }}>
            <label style={{ fontSize: 16 }}>Ticket No. 1234 created successfully </label>
            <div style={{ marginTop: '2%' }}>
                <label style={{ fontSize: 16, fontWeight: '600', marginTop: "2%", marginBottom: '2%' }}>Active Tickets</label>
                <div className='tableContainer' style={{ marginTop: '2%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                    <TableContainer component={Paper} sx={{}}>
                        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: '600' }} component="th" scope="row">
                                        T.No
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: '600' }}>Server OS</TableCell>
                                    <TableCell sx={{ fontWeight: '600' }}>Server Name</TableCell>
                                    <TableCell sx={{ fontWeight: '600' }}>BS Owners</TableCell>
                                    <TableCell sx={{ fontWeight: '600' }}>IT Contacts</TableCell>
                                    <TableCell sx={{ fontWeight: '600' }}>Activity Date</TableCell>
                                    <TableCell sx={{ fontWeight: '600' }}>Time</TableCell>
                                    <TableCell sx={{ fontWeight: '600' }}>Description</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (

                                            <TableRow
                                                key={row.T_No}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                   <Link to={'/smvalidation/ticketdetails?ticket_id='+row.T_No}>{row.T_No}</Link>
                                                </TableCell>
                                                <TableCell  >{row.Server_OS}</TableCell>
                                                <TableCell  >{row.Server_Name}</TableCell>
                                                <TableCell  >{row.BS_Owners}</TableCell>
                                                <TableCell  >{row.IT_Contacts}</TableCell>
                                                <TableCell  >{row.Activity_Date}</TableCell>
                                                <TableCell  >{row.Time}</TableCell>
                                                <TableCell  >{row.Description}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={data.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </div>
            </div>
            <div>
                <label style={{ fontSize: 16, fontWeight: '600', marginTop: "2%", marginBottom: '2%' }}>Closed Tickets</label>
                <div className='tableContainer' style={{ marginTop: '2%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                    <TableContainer component={Paper} sx={{}}>
                        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ fontWeight: '600' }}>T.No</TableCell>
                                    <TableCell sx={{ fontWeight: '600' }}>Server OS</TableCell>
                                    <TableCell sx={{ fontWeight: '600' }}>Server Name</TableCell>
                                    <TableCell sx={{ fontWeight: '600' }}>BS Owners</TableCell>
                                    <TableCell sx={{ fontWeight: '600' }}>IT Contacts</TableCell>
                                    <TableCell sx={{ fontWeight: '600' }}>Activity Date</TableCell>
                                    <TableCell sx={{ fontWeight: '600' }}>Time</TableCell>
                                    <TableCell sx={{ fontWeight: '600' }}>Description</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (

                                            <TableRow
                                                key={row.T_No}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >

                                                <TableCell component="th" scope="row">
                                                    <Link to={'/smvalidation/ticketdetails?ticket_id='+row.T_No}>{row.T_No}</Link>
                                                </TableCell>
                                                <TableCell >{row.Server_OS}</TableCell>
                                                <TableCell >{row.Server_Name}</TableCell>
                                                <TableCell  >{row.BS_Owners}</TableCell>
                                                <TableCell >{row.IT_Contacts}</TableCell>
                                                <TableCell  >{row.Activity_Date}</TableCell>
                                                <TableCell  >{row.Time}</TableCell>
                                                <TableCell >{row.Description}</TableCell>
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={data.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </div>
            </div>
        </div>
    )
}

export default ViewTickets
