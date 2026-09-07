import React from 'react'
import Grid from '@mui/material/GridLegacy'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import Title from '../../atoms/Title'

// 概要（ヒーロー）: 一目で「誰・何屋さん・今頼めるか」を伝えるセクション
const Profile: React.FC = () => {
  return (
    <Grid container spacing={2} sx={{ mt: 4 }} justifyContent="center" alignItems="center">
      <Grid item xs={12} md={10}>
        <Box sx={{ textAlign: 'center' }}>
          {/* プロフィール画像。public/images に画像を置いて src を差し替えてください */}
          <Avatar
            src="/images/avatar.png"
            alt="三重野 瑠生"
            sx={{ width: 120, height: 120, mx: 'auto', mb: 2, boxShadow: 3 }}
          />

          <Title variant="h4" sx={{ fontFamily: "'Noto Serif JP', 'Playfair Display', serif" }}>
            三重野 瑠生
          </Title>

          <Typography sx={{ color: '#616161', mb: 2 }}>
            みえの るい ｜ フロントエンドエンジニア ｜ 28歳
          </Typography>

          {/* 一言キャッチ。実務経験と得意分野を伝える */}
          <Typography sx={{ maxWidth: 680, mx: 'auto', mb: 3 }}>
            2024年2月よりエンジニアとして、フロントエンド・バックエンド双方の開発に携わってきました。React / TypeScript を軸に、使いやすく保守しやすいUIづくりを大切にしています。副業での開発は今回が初めての挑戦です。
          </Typography>

          {/* 稼働状況。発注者が最初に知りたい情報なので目立たせる */}
          <Stack direction="row" spacing={1} justifyContent="center" flexWrap="wrap" sx={{ gap: 1 }}>
            <Chip label="副業案件を募集中" color="primary" />
            <Chip label="実務経験 2年以上" variant="outlined" />
            <Chip label="フルリモート可" variant="outlined" />
          </Stack>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Profile
