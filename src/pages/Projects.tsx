import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ProjectCard from '../components/molecules/ProjectCard'
import type { Project } from '../components/molecules/ProjectCard'
import projects from '../data/projects'

const Projects: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <Grid container spacing={2}>
        {projects.map((p: Project) => (
          <Grid item xs={12} sm={6} md={4} key={p.id}>
            <ProjectCard project={p} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Projects
