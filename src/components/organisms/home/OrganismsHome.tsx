// src/pages/Home.tsx (サンプル)
import React from 'react'
import Introduction from '../../molecules/home/Introduction'
import { Container } from '@mui/material'
import Projects from '../../molecules/home/Projects'
import Skills from '../../molecules/home/Skills'
import About from '../../molecules/home/About'


const OrganismsHome: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 6, textAlign: 'center', px: 2 }}>
      {/* Hero */}
      <Introduction />

      {/* Featured Projects */}
      <Projects />

      {/* Short About */}
      <About />

      {/* Skills */}
      <Skills />
    </Container>
  )
}

export default OrganismsHome