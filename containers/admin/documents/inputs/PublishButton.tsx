'use client'

import React from 'react'
import { Button } from "../../../..//shadcn/ui/button"
import { CheckCircle } from "lucide-react"
import { cn } from "../../../../shadcn/lib/utils"

type PublishButtonProps = {
  loading: boolean
  document: any
  handleTogglePublish: () => void
  fullWidth?: boolean
}

const PublishButton: React.FC<PublishButtonProps> = ({   
  document, 
  handleTogglePublish, 
  fullWidth = false 
}) => {
  const isPublished = document?.published

  return (
    <Button
      variant={isPublished ? "secondary" : "default"}
      className={cn(
        "bg-green-500 hover:bg-green-600 text-white relative overflow-hidden transition-all duration-300",
        isPublished ? "justify-center" : "justify-center",
        fullWidth && "w-full",
        "h-10 px-4"
      )}
      onClick={handleTogglePublish}      
    >
      <div className={cn(
        "flex items-center transition-all duration-300",
        isPublished ? "space-x-2" : "space-x-0"
      )}>
        
        <span className={cn(
          "transition-all duration-300",
          isPublished ? "translate-x-0" : "translate-x-0"
        )}>
          {isPublished ? 'Published' : 'Publish'}
        </span> 
        <span className={cn(
          "transition-all duration-300 flex items-center",
          isPublished 
            ? "opacity-100 animate-slide-fade-in" 
            : "opacity-0"
        )}>
          <CheckCircle className="w-5 h-5" />
        </span>       
      </div>
    </Button>
  )
}

export default PublishButton