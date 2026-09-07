import React from 'react'
import Grid from '@mui/material/GridLegacy'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import Title from '../../atoms/Title'

// 実務経験（Experience）: これまで携わった開発案件を時系列で見せるセクション
// 守秘義務があるため、具体的な画面・コードは載せず「どんな開発か」だけを記載する
type Job = { tag: string; current?: boolean; title: string; description: string }

const JOBS: Job[] = [
  {
    tag: '現在',
    current: true,
    title: 'POSシステムの保守・運用／機能追加',
    description:
      '稼働中のPOSシステムの保守・運用を担当。バグ修正、お客様要望への対応、新規機能の追加を行っています。',
  },
  {
    tag: '新規開発',
    title: '住宅ローンサービス（行員・お客様向け）',
    description:
      '銀行の行員とお客様が利用する住宅ローンサービスをゼロから開発。フロントエンド・バックエンドの両方を担当しました。',
  },
  {
    tag: '新規開発',
    title: '半導体 工程管理システム',
    description:
      '半導体の書き込み作業における工程を管理するシステムを新規開発しました。',
  },
  {
    tag: '新規開発',
    title: '社内向け 社員情報管理システム',
    description: '社内で利用する社員情報の管理システムを開発しました。',
  },
]

const Experience: React.FC = () => {
  return (
    <Grid container spacing={2} sx={{ mt: 6 }} justifyContent="center">
      <Grid item xs={12} md={10}>
        <Title variant="h6">Experience</Title>
        <Typography sx={{ color: '#616161', mb: 3 }}>
          2024年2月よりエンジニアとして従事し、以下の開発に携わってきました。案件によりフロントエンド・バックエンドの両方を担当しています。
        </Typography>

        {/* 縦のタイムライン。左の丸（ドット）と線でつなぐ */}
        <Box>
          {JOBS.map((job, i) => (
            <Box key={job.title} sx={{ display: 'flex', gap: 2 }}>
              {/* 左側のレール（ドット＋つなぎ線） */}
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box
                  sx={{
                    width: 14,
                    height: 14,
                    borderRadius: '50%',
                    bgcolor: job.current ? 'secondary.main' : 'primary.main',
                    mt: 0.6,
                    flexShrink: 0,
                  }}
                />
                {i < JOBS.length - 1 && (
                  <Box sx={{ width: 2, flexGrow: 1, bgcolor: '#e0e0e0', my: 0.5 }} />
                )}
              </Box>

              {/* 右側の内容 */}
              <Box sx={{ pb: 3 }}>
                <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" sx={{ mb: 0.5 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {job.title}
                  </Typography>
                  <Chip
                    label={job.tag}
                    size="small"
                    color={job.current ? 'secondary' : 'default'}
                    variant={job.current ? 'filled' : 'outlined'}
                  />
                </Stack>
                <Typography variant="body2" sx={{ color: '#616161' }}>
                  {job.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* 守秘義務の注記＋作品が自作である説明 */}
        <Typography variant="caption" sx={{ display: 'block', color: '#9e9e9e', mt: 1 }}>
          ※ 守秘義務のため、実務で開発したプロダクトの画面・コードは掲載していません。本サイトに掲載している作品は、すべて学習・ポートフォリオ用に自作したものです。
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Experience
