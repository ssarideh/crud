import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'


const Navbar = () => {
const primary = '#fef1ec'
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static"  sx={{ bgcolor: primary }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ lineHeight: 1, pl:0, pr:0}}>
            <Box component="div" sx={{ alignSelf: 'center' }}><img src='/images/logo.svg' alt=""></img></Box>ฃ
        </Toolbar>
        </Container>
        </AppBar>
    </Box>
  )
}

export default Navbar