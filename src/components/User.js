import React, { useEffect, useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Avatar from '@mui/material/Avatar'
import Link from '@mui/material/Link'
import ButtonGroup from '@mui/material/ButtonGroup'



const User = () => {
  const [ items, setItems ] = useState([])
  useEffect(() => {
    userGet()
  },[])

  const userGet = () => {
    fetch('https://www.mecallapi.com/api/users')
    .then(res => res.json())
    .then(
        (result) => setItems(result)
    )
  }

  const userUpdate = id => {
    window.location.href = 'update/' + id
  }

  const userDelete = id => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "id": id
    });

    const requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("https://www.mecallapi.com/api/users/delete", requestOptions)
    .then(response => response.json())
    .then(result => {
        alert(result['message'])
        if(result['status'] === 'ok') {
            userGet()
        }
    })
    .catch(error => console.log('error', error));
  }


  return (
    <>
     <CssBaseline />
      <Container maxWidth="lg">
        <Paper sx={{ padding: 2 }}>
            <Box display='flex' sx={{ pb: 2}}>
                <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" gutterBottom color="#f25f39" fontWeight="bold">
                        USER
                    </Typography>
                </Box>
                <Box>
                    <Link href="create" sx={{ textDecoration: 'none'}}>
                        <Button variant="contained" color="neutral">CREATE</Button>
                    </Link>
                </Box>
            </Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="center">Avatar</TableCell>
                        <TableCell align="right">First Name</TableCell>
                        <TableCell align="right">Last Name</TableCell>
                        <TableCell align="right">Username</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {items.map(({ id, fname, lname, username, avatar}) => (
                        <TableRow
                        key={id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {id}
                        </TableCell>
                        <TableCell align="center">
                            <Box display="flex" justifyContent="center">
                                <Avatar alt="avatar" src={avatar} />
                            </Box>
                        </TableCell>
                        <TableCell align="right">{fname}</TableCell>
                        <TableCell align="right">{lname}</TableCell>
                        <TableCell align="right">{username}</TableCell>
                        <TableCell align='right'>
                        <ButtonGroup variant="outlined" aria-label="outlined primary button group">
                            <Button onClick={() => userUpdate(id)} color="neutral">Edit</Button>
                            <Button onClick={() => userDelete(id)} color="del">Del</Button>
                        </ButtonGroup>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
      </Container>
    </>
  )
}

export default User