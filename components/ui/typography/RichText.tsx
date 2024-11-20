'use client'

import React from 'react'

export type RichTextProps = {  
	html: string	
}

const RichText: React.FC<RichTextProps> = (props) => {
	
  const {
		html,
	} = props || {}
  
	return (  
    <div className='w-full prose'>
      <div              
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
	)
}

export default RichText
