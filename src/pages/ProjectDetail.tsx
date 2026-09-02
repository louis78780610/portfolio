import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import projects from '../data/projects'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const ProjectDetail: React.FC = () => {
  const { id } = useParams()
  const navigate = useNavigate() // ひとつ前のページに戻るために使う
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <Box>
        <Typography sx={{ mb: 2 }}>作品が見つかりません。</Typography>
        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
        >
          戻る
        </Button>
      </Box>
    )
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {project.title}
      </Typography>

      {/* 画像。link があれば、クリックで制作物ページ（別タブ）へ移動する */}
      {project.image &&
        (project.link ? (
          <Box
            component="a"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: 'block',
              transition: 'opacity 0.2s',
              '&:hover': { opacity: 0.85 },
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{ maxWidth: '100%', display: 'block' }}
            />
          </Box>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            style={{ maxWidth: '100%', display: 'block' }}
          />
        ))}

      <Typography variant="body1" sx={{ mt: 2 }}>
        {project.description}
      </Typography>

      {/* ページ下部の戻るボタン（ひとつ前のページに戻る） */}
      <Box sx={{ mt: 4 }}>
        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
        >
          戻る
        </Button>
      </Box>
    </Box>
  )
}

export default ProjectDetail
