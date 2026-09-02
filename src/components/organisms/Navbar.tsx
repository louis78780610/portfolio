import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link as RouterLink } from 'react-router-dom'
import Box from '@mui/material/Box'

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={
            {
              color: 'inherit',
              fontFamily: "'Noto Serif JP', 'Playfair Display', serif",
              textDecoration: 'none'
              }
            }
          >
          My Portfolio
        </Typography>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            sx={{ fontFamily: "'Noto Serif JP', 'Playfair Display', serif" }}
            color="inherit"
            component={RouterLink}
            to="/projects"
          >
            Projects
          </Button>
          <Button
            sx={{ fontFamily: "'Noto Serif JP', 'Playfair Display', serif" }}
            color="inherit"
            component={RouterLink}
            to="/about"
          >
            About
          </Button>
          <Button
            sx={{ fontFamily: "'Noto Serif JP', 'Playfair Display', serif" }}
            color="inherit"
            component={RouterLink}
            to="/contact"
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
