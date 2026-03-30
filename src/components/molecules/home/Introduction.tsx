import { Box, Typography, Button } from "@mui/material"
import Title from "../../atoms/Title"

const Introduction: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <Box sx={{ textAlign: 'left', mb: 6 }}>
        <Title variant="h3">Welcome to My Portfolio</Title>
        <Typography variant="body1" sx={{ color: '#616161', mb: 2 }}>
          短いキャッチコピー／自己紹介文をここに入れます。作品の要点を一行で伝えると良いです。
        </Typography>
        <Button variant="contained" size="large" href="/projects">
          作品を見る
        </Button>
      </Box>
    </>
  )
}

export default Introduction