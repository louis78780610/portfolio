import React from 'react'
import Typography, { type TypographyProps } from '@mui/material/Typography'

type TitleProps = TypographyProps & {
  children?: React.ReactNode
}

const Title: React.FC<TitleProps> = ({ children, variant = 'h4', gutterBottom = true, ...props }) => {
  return (
    <Typography variant={variant} gutterBottom={gutterBottom} {...props}>
      {children}
    </Typography>
  )
}

export default Title