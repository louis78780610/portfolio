import React from 'react'
import Grid from '@mui/material/GridLegacy'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Link as RouterLink } from 'react-router-dom'
import Title from '../../atoms/Title'

// CTA（Call To Action）: 読み終えた人を次の行動へ誘導する導線
// RouterLink を使うと、ページ全体を再読み込みせずスムーズに遷移できる
const CallToAction: React.FC = () => {
  return (
    <Grid container spacing={2} sx={{ mt: 8, mb: 4 }} justifyContent="center">
      <Grid item xs={12} md={10}>
        <Box sx={{ textAlign: 'center' }}>
          <Title variant="h6">Contact</Title>
          <Typography sx={{ color: '#616161', mb: 3 }}>
            お仕事のご相談・ご依頼はお気軽にどうぞ。まずは作品もご覧ください。
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={RouterLink}
            to="/projects"
            sx={{
              mr: 2,
              boxShadow: 3,
              transition: 'transform .18s ease, box-shadow .18s ease',
              '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 },
            }}
          >
            作品を見る
          </Button>
          <Button variant="outlined" size="large" component={RouterLink} to="/contact">
            お問い合わせ
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default CallToAction
