import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Home: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Welcome
      </Typography>
      <Typography variant="body1">これは私の作品ポートフォリオのトップページです。</Typography>
    </Box>
  )
}

export default Home
