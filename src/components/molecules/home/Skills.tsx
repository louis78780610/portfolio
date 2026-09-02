import React from 'react'
import Grid from '@mui/material/GridLegacy'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import Title from '../../atoms/Title'

const SKILL_CATEGORIES: { name: string; skills: string[]; color: string }[] = [
  { name: 'Cloud', skills: ['Amazon CloudWatch', 'Amazon S3', 'AWS Lambda'], color: '#1976d2' },
  { name: 'Languages', skills: ['TypeScript', 'JavaScript', 'Python', 'HTML', 'CSS', 'SQL'], color: '#00796b' },
  { name: 'Frameworks', skills: ['React', 'Vue.js', 'jQuery', 'Node.js'], color: '#8e24aa' },
  { name: 'DB', skills: ['MySQL', 'PostgreSQL', 'SQLite'], color: '#2e7d32' },
  { name: 'Tools', skills: ['Git', 'Figma', 'Adobe XD'], color: '#616161' },
]

const Skills: React.FC = () => {
  return (
    <Grid container spacing={2} sx={{ mt: 4 }} justifyContent="center">
      <Grid item xs={12} md={12}>
        <Title variant="h6">Tech</Title>

        <Box sx={{ width: '100%', mt: 2 }}>
          {/* background band */}
          <Paper elevation={0} sx={{ bgcolor: '#f6f8fa', py: 3, px: 2, borderRadius: 2 }}>
            <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center" alignItems="center" sx={{ gap: 1 }}>
              {SKILL_CATEGORIES.map((cat) => (
                cat.skills.map((s) => (
                  <Chip
                    key={s}
                    label={s}
                    variant="filled"
                    sx={{
                      borderRadius: '999px',
                      px: 1.5,
                      py: 0.6,
                      bgcolor: cat.color,
                      color: '#fff',
                      fontWeight: 500,
                      margin: 0.5,
                      transition: 'transform .18s ease, box-shadow .18s ease',
                      '&:hover': { transform: 'translateY(-4px)', boxShadow: 3 }
                    }}
                  />
                ))
              ))}
            </Stack>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Skills