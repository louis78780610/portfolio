import React from 'react'
import { Box, Container } from '@mui/material'
import BackButton from '../../molecules/about/BackButton'
import Profile from '../../molecules/about/Profile'
import Strengths from '../../molecules/about/Strengths'
import Skills from '../../molecules/home/Skills'
import Experience from '../../molecules/about/Experience'
import Availability from '../../molecules/about/Availability'
import CallToAction from '../../molecules/about/CallToAction'

// About ページ本体。Home と同じく molecule を積み重ねて構成する
const OrganismsAbout: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 6, px: 2 }}>
      {/* ページ上部の「戻る」ボタン（左寄せ）。
          ページ全体は #root の text-align:center で中央寄せなので、
          ここだけ textAlign:'left' に上書きして左に置く */}
      <Box sx={{ mb: 2, textAlign: 'left' }}>
        <BackButton />
      </Box>

      {/* 1. 概要（誰・何屋さん・稼働状況） */}
      <Profile />

      {/* 2. 提供できること（強み） */}
      <Strengths />

      {/* 3. スキル（Home と共通のコンポーネントを再利用） */}
      <Skills />

      {/* 4. 実務経験（守秘義務に配慮した内容） */}
      <Experience />

      {/* 5. 稼働条件 */}
      <Availability />

      {/* 6. CTA（問い合わせ導線） */}
      <CallToAction />
    </Container>
  )
}

export default OrganismsAbout
