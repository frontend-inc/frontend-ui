import React from 'react'

type GorgiasContactFormProps = {
  src?: string
}

const GorgiasContactForm: React.FC<GorgiasContactFormProps> = (props) => {
  const { src } = props || {}
  if(!src) return null;
  return (
    <div>      
      <iframe 
        src={src} 
        style={sx.root}
    />
    </div>
  )
}

export default GorgiasContactForm

const sx = {
  root: {
    height: '100%',
    minHeight: '1100px',
    width: '100%',
    border: 'none',
  }
}
