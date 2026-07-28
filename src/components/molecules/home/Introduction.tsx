import { Box, Button } from "@mui/material"
import Title from "../../atoms/Title"
import React from 'react'
import Fade from '@mui/material/Fade'
// import Slide from '@mui/material/Slide'
import { useRef, useState } from 'react'
import Typography from '@mui/material/Typography'

const BlurReveal: React.FC<{ mounted: boolean; children: React.ReactNode; maxBlur?: number; duration?: number; sx?: any }> = ({ mounted, children, maxBlur = 8, duration = 1200, sx }) => {
  const rafRef = useRef<number | null>(null)
  const startRef = useRef<number | null>(null)
  const [blur, setBlur] = useState(maxBlur)

  React.useEffect(() => {
    if (!mounted) return
    startRef.current = Date.now()
    const animate = () => {
      const now = Date.now()
      const elapsed = Math.min(now - (startRef.current ?? now), duration)
      const p = Math.min(elapsed / duration, 1)
      setBlur(maxBlur * (1 - p))
      if (p < 1) {
        rafRef.current = requestAnimationFrame(animate)
      }
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [mounted, maxBlur, duration])

  // Blur-only reveal (no movement/clipPath)
  return (
    <Box
      component="span"
      sx={{
        display: 'inline-block',
        width: '100%',
        filter: `blur(${blur}px)`,
        transition: 'filter 120ms linear',
        ...sx,
      }}
    >
      {children}
    </Box>
  )
}

const Introduction: React.FC = () => {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    const t = setTimeout(() => setMounted(true), 120)
    return () => clearTimeout(t)
  }, [])

  const underlineSx = {
    display: 'inline-block',
    position: 'relative',
    '&::after': {
      content: '""',
      display: 'block',
      height: 6,
      borderRadius: 2,
      mt: 1,
      background: 'linear-gradient(90deg, rgba(71,64,72,0.95), rgba(156,39,176,0.95))',
      transform: mounted ? 'scaleX(1)' : 'scaleX(0)',
      transformOrigin: 'left',
      transition: 'transform 600ms ease'
    }
  }

  return (
    <>
      {/* Hero */}
      <Box sx={{ textAlign: 'center', mb: 6, py: 6 }}>
        {/* <Fade in={mounted} timeout={600}> */}
          <div>
            <BlurReveal mounted={mounted}>
              <Title variant="h3" sx={underlineSx}>
                Welcome to My Portfolio
              </Title>
            </BlurReveal>
          </div>
        {/* </Fade> */}

        {/* <Slide in={mounted} direction="up" timeout={700}> */}
          <Box sx={{ mt: 2 }}>
            <BlurReveal mounted={mounted}>
              <Typography component="p" sx={{ color: '#616161', mb: 3, maxWidth: 720, margin: '0 auto' }}>
                短いキャッチコピー／自己紹介文をここに入れます。作品の要点を一行で伝えると良いです。
              </Typography>
            </BlurReveal>
          </Box>
        {/* </Slide> */}

        <Fade in={mounted} timeout={1100}>
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              size="large"
              href="/projects"
              sx={{ mr: 2, boxShadow: 3, transition: 'transform .18s ease, box-shadow .18s ease', '&:hover': { transform: 'translateY(-4px)', boxShadow: 6 } }}
            >
              作品を見る
            </Button>
            <Button variant="outlined" size="large" href="/about">
              詳しく見る
            </Button>
          </Box>
        </Fade>
      </Box>
    </>
  )
}

export default Introduction