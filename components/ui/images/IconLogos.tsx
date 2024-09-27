import React from "react"
import { Stack, Box } from "@mui/material"
import Image from "next/image"

type IconLogosProps = {
  logos: {
    title: string 
    image: string    
  }[]
}

const IconLogos: React.FC<IconLogosProps> = (props) => {
  const { logos=[] } = props || {}

  return(
    <Stack direction="row" spacing={2} sx={ sx.logos }>
    { logos.map((logo, i) => (
      <Box sx={ sx.logo }>
        <Image 
          key={i} 
          src={logo.image}                     
          height={48} 
          width={48}
          style={{
            objectFit: 'contain',
            height: 48,
            width: 48
          }}
          layout="responsive"
          alt={ logo?.title }
        />
      </Box>
    ))}
  </Stack>
  )
}

export default IconLogos

const sx = {
  logos: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 48,
    width: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1,
    overflow: 'hidden',
  }
}
