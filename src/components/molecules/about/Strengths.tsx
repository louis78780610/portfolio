import React from 'react'
import Grid from '@mui/material/GridLegacy'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CodeIcon from '@mui/icons-material/Code'
import BrushIcon from '@mui/icons-material/Brush'
import DevicesIcon from '@mui/icons-material/Devices'
import SpeedIcon from '@mui/icons-material/Speed'
import Title from '../../atoms/Title'

// 提供できること（強み）: 「何を発注できるか」をカードで一覧化する
// ここを見て発注者が依頼内容をイメージできるようにするのが目的
const STRENGTHS: { icon: React.ReactNode; title: string; description: string }[] = [
  {
    icon: <CodeIcon fontSize="large" />,
    title: 'React / TypeScript 開発',
    description: 'コンポーネント設計を意識した、型安全で保守しやすいSPA開発。バックエンドの実務経験を活かし、API連携もスムーズに進めます。',
  },
  {
    icon: <BrushIcon fontSize="large" />,
    title: 'デザイン再現',
    description: 'Figma などのデザインを、余白や配色まで忠実にコーディングします。',
  },
  {
    icon: <DevicesIcon fontSize="large" />,
    title: 'レスポンシブ対応',
    description: 'スマホ・タブレット・PCで崩れない、レスポンシブなUIを実装します。',
  },
  {
    icon: <SpeedIcon fontSize="large" />,
    title: 'UI実装 / 改善',
    description: 'MUI などを用いた素早いUI構築と、既存画面の改善に対応します。',
  },
]

const Strengths: React.FC = () => {
  return (
    <Grid container spacing={2} sx={{ mt: 6 }} justifyContent="center">
      <Grid item xs={12} md={12}>
        <Title variant="h6">Can Do</Title>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {STRENGTHS.map((s) => (
            <Grid item xs={12} sm={6} md={3} key={s.title}>
              <Paper
                elevation={0}
                sx={{
                  height: '100%',
                  p: 3,
                  bgcolor: '#f6f8fa',
                  borderRadius: 2,
                  textAlign: 'center',
                  transition: 'transform .18s ease, box-shadow .18s ease',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: 3 },
                }}
              >
                <Box sx={{ color: 'primary.main', mb: 1 }}>{s.icon}</Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                  {s.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#616161' }}>
                  {s.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Strengths
