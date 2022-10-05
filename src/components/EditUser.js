import React, { useState, useEffect }  from 'react'
import { useParams } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const EditUser = () => {
  const [ fname, setFname ] = useState('')
  const [ lname, setLname ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ username, setUsername ] = useState('')
  const [ avatar, setAvatar ] = useState('')
  const { id } = useParams()

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://www.mecallapi.com/api/users/"+id, requestOptions)
      .then(response => response.json())
      .then(result => {
        if(result['status'] === 'ok') {
          setFname(result['user']['fname'])
          setLname(result['user']['lname'])
          setEmail(result['user']['email'])
          setUsername(result['user']['username'])
          setAvatar(result['user']['avatar'])
        }
      })
      .catch(error => console.log('error', error));
  },[id])

  const handleSubmit = e => {
    e.preventDefault()
    const myHeaders = new Headers()
    myHeaders.append("Content-Type", "application/json")

    const raw = JSON.stringify({
    "id": id,
    "fname": fname,
    "lname": lname,
    "username": username,
    "email": email,
    "avatar": avatar
    });

    const requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://www.mecallapi.com/api/users/update", requestOptions)
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
                EDIT USER
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField id="fname" label="First Name" variant="outlined" 
                          fullWidth required 
                          onChange={(e) => setFname(e.target.value)}
                          value={fname}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="lname" label="last Name" variant="outlined" 
                        fullWidth required 
                        onChange={(e) => setLname(e.target.value)}
                        value={lname}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="username" label="username" variant="outlined" 
                        fullWidth required 
                        onChange={(e) => setEmail(e.target.value)}
                        value={username}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="email" label="Email" variant="outlined" 
                        fullWidth required 
                        onChange={(e) => setUsername(e.target.value)}
                        value={email}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="avatar" label="Avatar" variant="outlined" 
                        fullWidth required 
                        onChange={(e) => setAvatar(e.target.value)}
                        value={avatar}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type='submit' variant="outlined" fullWidth>Update</Button>
                    </Grid>
                </Grid>
            </form>
      </Container>
    </>
  )
}

export default EditUser