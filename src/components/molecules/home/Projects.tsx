import Grid from "@mui/material/GridLegacy"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import projects from "../../../data/projects"
import ProjectCard from "../project/ProjectCard"
import Title from "../../atoms/Title"

const Projects: React.FC = () => {
  return (
    <>
      {/* Featured Projects */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Title variant="h5">Projects</Title>
        {/* 実務の作品は守秘義務のため掲載できないため、その旨を明記 */}
        <Typography variant="body2" sx={{ color: '#9e9e9e', mb: 2 }}>
          ※ 掲載作品は、学習・ポートフォリオ用に自作したものです。
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {projects.slice(0, 3).map((p) => (
            <Grid item xs={12} sm={6} md={4} key={p.id}>
              <ProjectCard project={p} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default Projects