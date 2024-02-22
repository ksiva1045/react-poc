import { React, useState, useEffect } from 'react'
import axios from 'axios'
import './style.css'
import ViewTickets from '../ViewTickets'
import { Card, CardContent, FormControl, Grid, BaseInput, InputLabel, List, ListItem, ListItemText, MenuItem, Select, TextareaAutosize, Button, Box, CardHeader, Divider, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material'
import TransferList from '../controls/TransferList'
import { DatePicker } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { useNavigate } from 'react-router-dom'

function TicketForm() {
  const [posted, setPosted] = useState(false)
  const [selectedValue, setSelectedValue] = useState()
  const [optionList, setOptionList] = useState([])
  const [multiOptionList, setMultiOptionList] = useState([])
  const [selectedOptions, setSelectedOptions] = useState([])
  const [selectedOptions1, setSelectedOptions1] = useState([])
  const [bscontact, setBscontact] = useState([])
  const [selectedDate, setSelectedDate] = useState('')
  const [description, setDescription] = useState('')
  const navigate = useNavigate();

  const fetchData = () => {
    // http://MMA0500P1.na.mmfg.net:9090/v1/server/all/os
    // http://localhost:4000/api/server/all/os
    axios
      .get('http://localhost:4000/server/all/os', {
        auth: {
          username: 'smValidationApp',
          password: 'smValidationApp'
        }
      })
      .then((response) => {
        if (response.status === 200) {
          setOptionList(response.data?.servers)
        } else {
          //
        }
        console.log(`optionList: ${optionList}`)
      })
      //.then(response => setOptionList(response.data?.servers))
      .catch((error) => console.error('Error fetching data:', error))
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    console.log(selectedOptions)
  }, selectedOptions, bscontact)

  useEffect(() => {
    // Make an API call when the selectedValue changes
    // `http://MMA0500P1.na.mmfg.net:9090/v1/server/all/${selectedValue}`
    if (selectedValue) {
      axios
        .get(`http://localhost:4000/server/all/os`, {
          auth: {
            username: 'smValidationApp',
            password: 'smValidationApp'
          }
        })
        .then((response) => {
          if (response.status === 200) {
            let items =
              response.data?.servers.map((item) =>
                item.name
              )
            console.log(items)
            setMultiOptionList(items)
          } else {
            //
          }
        }).catch((error) => console.log(error))
    }
  }, [selectedValue])

  useEffect(() => {

    const request = {
      servers: [
        {
          name: "devai050"
        },
        {
          name: "vrfai751"
        }
      ]
    }

    // const request = {
    //   servers: selectedOptions,
    // }
    // http://MM12445P3.na.mmfg.net:9090/v1/bs/all
    // http://localhost:4000/api/server/bs/all
    // if (selectedOptions) {
    const response = axios.post('http://localhost:4000/server/bs/all',
      request, {
      auth: {
        username: 'smValidationApp',
        password: 'smValidationApp'
      }
    })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data)
          let user_server_map = [];
          if (response.data?.servers) {
            response.data?.servers?.map((item) => {
              const user_server = {}
              user_server['name'] = item['name'];
              item['businessServices']?.map((server) => {
                if (server['itCIContacts']) {
                  user_server['itCIContacts'] = server['itCIContacts'].split(",");
                }
              })
              user_server_map.push(user_server)
            })

          }
          console.log(user_server_map)
          setBscontact([...user_server_map])
        }
      })
      .catch((error) => console.log(error))
    // }
  }, [selectedOptions]) // selectedOptions

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value)
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const request = {
        osName: selectedValue,
        servers: selectedOptions,
        activityDateAndTime: selectedDate?.format(),
        description: description
      }
      console.log("request", request);
      const response = await axios.post('http://localhost:4000/server/ticket/create',
        request)
        .then((response) => {
          if (response.status === 200 && response.data) {
            navigate("/smvalidation/ticketdetails?ticket_id=" + response.data?.id)
          } else { //
          }
        })
        .catch((error) => console.log(error))
    } catch (err) {
    }
  }
  const changeSelectedTarget = (list) => {
    setSelectedOptions([...list])
  }
  return (
    <div
      style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '2%' }}
    >
      <Grid container
        md={6}
        sm={12}
        lg={5}
        spacing={2}
        style={{ display: 'flex', fontSize: 12, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
        display="flex"
      >
        <Card
          style={{ padding: '2%', width: '100%' }}
        >
          <CardHeader title={'Create Ticket'}
            titleTypographyProps={{ variant: 'h5', alignSelf: 'center' }}
          >  </CardHeader>
          <Divider />
          <Grid item style={{ width: '100%', display: 'flex', marginTop: '4%', flexDirection: 'row', alignItems: 'center' }}>
            <Grid item sm={3} xs={6} md={3}>
              <label>Select OS Server</label>
            </Grid>
            <Grid item sm={9} xs={6} md={9}>
              <FormControl fullWidth>
                <Select
                  style={{ height: 35 }}
                  inputProps={{ 'aria-label': 'Without label' }}
                  id="demo-simple-select"
                  value={selectedValue}
                  label="Age"
                  onChange={handleDropdownChange}
                >
                  {optionList.map((item, index) => {
                    return (
                      <MenuItem value={item.name}>{item.name}</MenuItem>
                    )
                  })}

                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item style={{ width: '100%', display: 'flex', marginTop: '4%', flexDirection: 'row', alignItems: 'center' }}>
            <Grid item sm={3} md={3}>
              <label>Select Servers</label>
            </Grid>
            <Grid item sm={9} md={9} style={{ backgroundColor: '#fefefe' }}>
              <FormControl fullWidth>
                <TransferList source={multiOptionList} selectedTargets={(list) => changeSelectedTarget(list)} >

                </TransferList>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item style={{ width: '100%', display: 'flex', marginTop: '4%', flexDirection: 'row', alignItems: 'center' }}>
            <Grid item sm={3} md={3}>
              <label>BS Owner and IT contacts</label>
            </Grid>
            <Grid item sm={9} md={9} style={{ backgroundColor: '#fefefe' }}>

              <TableContainer
                sx={{maxHeight:250}}
                component={Paper}>
                <Table
                  stickyHeader
                  
                  sx={{}} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: '600' }}>Contact</TableCell>
                      <TableCell sx={{ fontWeight: '600' }} >Name</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>

                    {bscontact && bscontact.length > 0 && bscontact?.map((item) => {
                      return (
                        item && item?.itCIContacts?.length > 0 && item?.itCIContacts?.map((contact) => {
                          return (
                            <TableRow
                              key={item.name}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                              <TableCell component="th" scope="row">
                                {contact}
                              </TableCell>
                              <TableCell >{item?.name}</TableCell>
                            </TableRow>
                          )
                        })


                      )
                    })}

                  </TableBody>
                </Table>
              </TableContainer>


            </Grid>
          </Grid>
          <Grid item style={{ width: '100%', display: 'flex', marginTop: '4%', flexDirection: 'row', alignItems: 'center' }}>
            <Grid item sm={3} md={3}>
              <label>Activity Date and Time</label>
            </Grid>
            <Grid item sm={9} md={9} style={{ backgroundColor: '#fefefe' }}>
              <FormControl fullWidth>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={['DateTimePicker']}  >
                    <DateTimePicker label="Activity Date and Time" inputFormat="E MMM dd yyyy HH:MM:SS O" style={{ height: 35 }} value={selectedDate}
                      onChange={setSelectedDate} />
                  </DemoContainer>
                </LocalizationProvider>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item style={{ width: '100%', display: 'flex', marginTop: '4%', flexDirection: 'row', alignItems: 'center' }}>
            <Grid item sm={3} md={3}>
              <label>Description</label>
            </Grid>
            <Grid item sm={9} md={9} style={{ backgroundColor: '#fefefe' }}>
              <FormControl fullWidth>
                <TextareaAutosize minRows={4} value={description} onChange={(event) => setDescription(event.target.value)} />
              </FormControl>
            </Grid>
          </Grid>
          <div style={{ marginTop: '2%', display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'flex-end' }}>
            <Button variant="contained" onClick={handleSubmit}>Create</Button>
          </div>
        </Card>
      </Grid>

    </div>
  )
}

export default TicketForm
