import React from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import User from "./components/User"
import CreateUser from "./components/CreateUser"
import EditUser from "./components/EditUser"
import Box from '@mui/material/Box'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    neutral: {
      main: '#f25f39',
      contrastText: '#fff',
    },
    main: {
      main: '#fef1ec',
      contrastText: '#000',
    },
    del: {
      main: '#000',
      contrastText: '#ccc',
    }
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Box  sx={{ mt:3 }}>
        <Routes>
          <Route path='/' element={<User />} />
          <Route path="create" element={<CreateUser />} />
          <Route path="update/:id" element={<EditUser />} />
        </Routes>
        </Box>
      </ThemeProvider>
    </div>
  )
}

export default App;
