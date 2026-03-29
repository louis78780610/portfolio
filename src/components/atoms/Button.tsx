import Button, { type ButtonProps } from '@mui/material/Button'
import React from 'react'

const AtomButton: React.FC<ButtonProps> = (props) => {
  return <Button variant="contained" color="primary" {...props} />
}

export default AtomButton
