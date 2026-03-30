import Grid from "@mui/material/GridLegacy"
import Box from "@mui/material/Box"
import projects from "../../../data/projects"
import ProjectCard from "../project/ProjectCard"
import Title from "../../atoms/Title"

const Home: React.FC = () => {
  return (
    <>
      {/* Featured Projects */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Title variant="h5">Featured Projects</Title>
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

export default Home