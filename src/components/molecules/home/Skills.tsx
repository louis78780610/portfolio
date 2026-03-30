import React from 'react'
import Grid from '@mui/material/GridLegacy'
import Typography from '@mui/material/Typography'
import Title from '../../atoms/Title'

const Skills: React.FC = () => {
  return (
    <>
      <Grid container spacing={2} sx={{ mt: 4 }} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Title variant="h6">Tech</Title>
          <Typography>React · TypeScript · MUI · Vite など</Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default Skills
