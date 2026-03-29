import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import { Link as RouterLink } from 'react-router-dom'

export type Project = {
  id: string
  title: string
  description: string
  image?: string
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Card>
      {project.image && (
        <CardMedia component="img" height="140" image={project.image} alt={project.title} />
      )}
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={RouterLink} to={`/projects/${project.id}`}>
          詳細
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProjectCard
