import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const About: React.FC = () => {
  return (
    <Box>
      <Typography
        sx={{ color: '#707070', fontFamily: "'Noto Serif JP', 'Playfair Display', serif" }}
        variant="h4"
        gutterBottom
      >
        About
      </Typography>
      <Typography>自己紹介文をここに書きます。</Typography>
    </Box>
  )
}

export default About
