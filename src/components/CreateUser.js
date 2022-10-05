import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const CreateUser = () => {
  const [ fname, setFname ] = useState('')
  const [ lname, setLname ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ username, setUsername ] = useState('')
  const [ avatar, setAvatar ] = useState('')
  
  const handleSubmit = e => {
    e.preventDefault()
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    const raw = JSON.stringify({
    "fname": fname,
    "lname": lname,
    "username": username,
    "email": email,
    "avatar": avatar
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://www.mecallapi.com/api/users/create", requestOptions)
    .then(response => response.json())
    .then(result => {
        alert(result['message'])
        if(result['status'] === 'ok') {
            window.location.href = '/'
        }
    })
    .catch(error => console.log('error', error));
  }
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
            <Typography variant="h5" gutterBottom>
                CREATE USER
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField id="fname" label="First Name" variant="outlined" fullWidth required 
                         onChange={(e) => setFname(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="lname" label="last Name" variant="outlined" fullWidth required 
                        onChange={(e) => setLname(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="username" label="username" variant="outlined" fullWidth required 
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="email" label="Email" variant="outlined" fullWidth required 
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="avatar" label="Avatar" variant="outlined" fullWidth required 
                        onChange={(e) => setAvatar(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type='submit' variant="outlined" fullWidth>CREATE</Button>
                    </Grid>
                </Grid>
            </form>
      </Container>
    </>
  )
}

export default CreateUser