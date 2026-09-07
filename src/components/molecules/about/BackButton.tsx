import React from 'react'
import Button from '@mui/material/Button'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'

// 「戻る」ボタン: 直前のページに戻る（例: Home →「詳しく見る」→ About →「戻る」で Home へ）
const BackButton: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Button startIcon={<ArrowBackIcon />} onClick={() => navigate(-1)} sx={{ color: '#616161' }}>
      戻る
    </Button>
  )
}

export default BackButton
