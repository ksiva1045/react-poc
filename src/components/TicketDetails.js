import React, { useEffect, useState } from 'react'
import './TicketDetails.css'
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios';



function TicketDetails() {
  const queryParams = new URLSearchParams(window.location.search)
  const [ticketDetails,setTicketDetails]=  useState();
  
  useEffect(()=> {
    const ticket_id = queryParams.get("ticket_id")
    console.log(ticket_id)
    loadTicketDetailsById(ticket_id);
  }, [])

  const loadTicketDetailsById = async(ticket_id) => {
    const response = await axios.get('http://localhost:4000/server/ticket_details?ticket_id=' + ticket_id)
      .then((response) => {
        if (response.status === 200) {
          setTicketDetails(response.data);
          console.log(response.data)          
        } else { //
        }
      })
      .catch((error) => console.log(error))
  }
  
  const subticketdata = [
    { T_No: 1113, Server_OS: 'Windows', Server_Name: 'prdai002', BS_Owners: 'UBD Support', IT_Contacts: 'Frank Santos', Description: 'there will be database connectivity issues during the DB activity schedule' },
    { T_No: 1145, Server_OS: 'Ubuntu', Server_Name: 'prdai013', BS_Owners: 'ABC Support', IT_Contacts: 'Harry Seth', Description: 'there will be connectivity issues during the DB activity schedule' },
  ]


  return (
    <div>
      <div style={{ padding: '2%' }}>
        <h4>Ticket Details</h4>
        <div style={{ borderWidth: 1, borderColor: 'lightgray', borderStyle: 'solid' }}>
          <ul>
            <li>T.No : <span>{ticketDetails?.id}</span></li>
            <li>Created Date : <span>{ticketDetails?.createdDate}</span></li>
            <li>Status : <span>{ticketDetails?.status}</span></li>
            <li>Description : <span>{ticketDetails?.eventDescription}</span></li>
          </ul>
          <div style={{ paddingBottom: '2%', display: 'flex', width: '98%', marginRight: '2%', flexDirection: 'row', justifyContent: 'flex-end' }}>
            <Button variant="contained" >Start Validation</Button>
          </div>
        </div>
        <div style={{marginTop:'2%'}}>
        <h4>Sub Task Details:</h4>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{fontWeight:'600'}}>ST.No</TableCell>
                  <TableCell sx={{fontWeight:'600'}} >Server Name</TableCell>
                  <TableCell sx={{fontWeight:'600'}} >Typo Of Server</TableCell>
                  <TableCell sx={{fontWeight:'600'}} >Owner Group</TableCell>
                  <TableCell sx={{fontWeight:'600'}} >Owned By</TableCell>
                  <TableCell sx={{fontWeight:'600'}} >Support Group</TableCell>
                  <TableCell sx={{fontWeight:'600'}} >Environment</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ticketDetails?.subTicketDetails.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell >{row?.serverDetails?.name}</TableCell>
                    <TableCell >{row?.serverDetails?.typeOfServer}</TableCell>
                    <TableCell >{row?.serverDetails?.ciOwnerGroup}</TableCell>
                    <TableCell >{row?.serverDetails?.ownedBy}</TableCell>
                    <TableCell >{row?.serverDetails?.supportGroup}</TableCell>
                    <TableCell >{row?.serverDetails?.environment}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>

    </div>
  )
}

export default TicketDetails
