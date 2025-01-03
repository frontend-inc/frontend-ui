import React from 'react'
import { Heading } from '../../../components'
import { Button } from '@nextui-org/react'
import { useNavigate } from '../../../hooks'
import { HeadingProps } from '../../../types'
import { cn } from '@nextui-org/react'

export type VideoCoverProps = HeadingProps & {
	src: string
	height?: number
	path?: string
	handleClick?: (ev: any) => void
	alignItems?: 'items-center' | 'items-start' | 'items-end'
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
		alignItems = 'items-center',
		actions,
		height = 400,
		enableOverlay,
		fontSize = 'md',
		editable,
		handleChange,
	} = props

	const onClick = useNavigate({
		path,
		handleClick,
	})

	return (
		<div
			className={cn(
				'dark relative w-full overflow-hidden',
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
					'relative flex items-center justify-center w-full h-full',
					enableOverlay && 'bg-black bg-opacity-50'
				)}
			>
				<div className={cn('flex flex-col space-y-4', alignItems)}>
					<Heading
						label={label}
						title={title}
						subtitle={subtitle}
						textAlign={alignItems === 'items-center' ? 'center' : 'left'}
						size={fontSize}
						editable={editable}
						handleChange={handleChange}
					/>
					{actions}
					{buttonText && (
						<div>
							<Button
								size="lg"
								color="primary"
								//@ts-ignore
								onPress={onClick}
								variant="solid"
							>
								{buttonText}
							</Button>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default VideoCover
