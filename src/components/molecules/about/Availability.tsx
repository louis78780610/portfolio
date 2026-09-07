import React from 'react'
import Grid from '@mui/material/GridLegacy'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Title from '../../atoms/Title'

// 稼働条件: 発注できるかどうかをすぐ判断してもらうための表
// 単価は案件ごとに個別相談としているため、あえて載せていません
const CONDITIONS: { label: string; value: string }[] = [
  { label: '稼働形態', value: '副業（平日夜・週末）' },
  { label: '稼働時間', value: '週10〜15時間' },
  { label: '働き方', value: 'フルリモート' },
  { label: '対応範囲', value: 'フロントエンド実装（HTML / CSS / React / TypeScript / MUI）' },
  { label: '連絡手段', value: 'メール / Slack / Chatwork など' },
  { label: '返信目安', value: '平日24時間以内' },
]

const Availability: React.FC = () => {
  return (
    <Grid container spacing={2} sx={{ mt: 6 }} justifyContent="center">
      <Grid item xs={12} md={10}>
        <Title variant="h6">Availability</Title>
        <Paper elevation={0} sx={{ bgcolor: '#f6f8fa', borderRadius: 2, p: { xs: 2, md: 3 }, mt: 1 }}>
          <Grid container spacing={2}>
            {CONDITIONS.map((c) => (
              <Grid item xs={12} sm={6} key={c.label}>
                <Grid container>
                  <Grid item xs={4}>
                    <Typography variant="body2" sx={{ color: '#707070', fontWeight: 600 }}>
                      {c.label}
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="body2">{c.value}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Availability
