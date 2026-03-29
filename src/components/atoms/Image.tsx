import React from 'react'

type Props = React.ImgHTMLAttributes<HTMLImageElement>

const Image: React.FC<Props> = (props) => {
  return <img {...props} />
}

export default Image
