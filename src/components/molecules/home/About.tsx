import React from 'react'
import Grid from '@mui/material/GridLegacy'
import Typography from '@mui/material/Typography'
import Title from '../../atoms/Title'
import { Button } from '@mui/material'

const About: React.FC = () => {
  return (
    <>
      <Grid container spacing={2} sx={{ mt: 4 }} justifyContent="center">
        <Grid item xs={12} md={10}>
          <Title variant="h6">About Me</Title>
          <Typography>
            2024年2月よりSES企業にて、フロントエンドエンジニアとして複数案件に携わってきました。主に React / TypeScript を用いた開発を担当しています。
          </Typography>
          <Button sx={{ mt: 2 }} component="a" href="/about">詳しく見る</Button>
        </Grid>
      </Grid>
    </>
  )
}

export default About
