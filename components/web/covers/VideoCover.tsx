import React from 'react'
import { Heading, Button } from '../../../components'
import { useNavigate } from '../../../hooks'
import { cn } from 'frontend-shadcn'

export type VideoCoverProps = {
  src: string 
  height?: number
  label?: string
  title?: string
  subtitle?: string
  path?: string
  handleClick?: () => void
  alignItems?: 'center' | 'items-start' | 'items-end'
  buttonText?: string
  actions?: React.ReactNode
  enableOverlay?: boolean  
}

const VideoCover: React.FC<VideoCoverProps> = (props) => {

  const { 
    src, 
    label,
    title,
    subtitle,
    buttonText,
    handleClick,
    path,
    alignItems = 'center',
    actions,    
    height = 400, 
    enableOverlay,      
  } = props 

  const onClick = useNavigate({
    path,
		handleClick,
	})

  return (
    <div 
      className={cn(
        "dark relative w-full overflow-hidden",
        height && `h-[${height}px]`      
      )}
    >
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={src}
        autoPlay
        loop
        muted
        playsInline
      />
      <div 
        className={cn(
          "relative z-10 flex items-center justify-center w-full h-full",
          enableOverlay && "bg-black bg-opacity-50"
        )}>
        <div
					className={cn(
						'flex flex-col space-y-4',
            alignItems
					)}
				>
					<Heading
						label={label}
						title={title}
						subtitle={subtitle}
						textAlign={alignItems === 'center' ? 'center' : 'left'}
						size="lg"
					/>
					{actions}
					{buttonText && (
						<div className="py-2">
							<Button size="lg" onClick={onClick} variant="default">
								{buttonText}
							</Button>
						</div>
					)}
				</div>
      </div>
    </div>
  );
};

export default VideoCover;