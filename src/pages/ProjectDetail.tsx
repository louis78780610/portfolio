import React from 'react'
import { useParams } from 'react-router-dom'
import projects from '../data/projects'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const ProjectDetail: React.FC = () => {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return <Typography>作品が見つかりません。</Typography>
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {project.title}
      </Typography>
      {project.image && <img src={project.image} alt={project.title} style={{ maxWidth: '100%' }} />}
      <Typography variant="body1" sx={{ mt: 2 }}>
        {project.description}
      </Typography>
    </Box>
  )
}

export default ProjectDetail
