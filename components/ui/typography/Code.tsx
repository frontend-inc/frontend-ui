'use client'

import React from 'react'
import { cn } from 'frontend-shadcn'


export type CodeProps = {  
	text: string	
}

const Code: React.FC<CodeProps> = (props) => {
	
  const {
		text,
	} = props || {}

	return (
    <pre className="p-4 rounded-lg bg-muted/50 overflow-x-auto">
      <code className="text-sm font-mono text-foreground whitespace-pre-wrap break-words">
        {text}
      </code>
    </pre>

	)
}

export default Code
