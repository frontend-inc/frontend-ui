import React from 'react'
import { Image, Typography } from '../..'
import { useNavigate } from '../../../hooks'
import { cn } from 'frontend-shadcn'
import { formatCurrency } from '../../../helpers'

export type PriceListItemProps = {
	variant?: 'fill' | 'outline' | 'default'
	image: string
	title: string
	subtitle: string
	price?: string
  precision?: number
	path?: string
	url?: string
	handleImageClick: () => void
}

const PriceListItem: React.FC<PriceListItemProps> = (props) => {
	const {
		variant,
		image,
		price,
    precision=0,
		title,
		subtitle,
		path,
		url,
		handleImageClick,
	} = props || {}

	const onClick = useNavigate({		
		path,
		url		
	})

	return (
		<li className={'w-full'}>
			<button
        //@ts-ignore
				onClick={onClick}
				className={cn(
					'w-full flex justify-between items-center rounded-xl p-4 focus:outline-none hover:bg-muted',
					variant == 'fill' && 'bg-muted p-6 rounded-lg',
					variant == 'outline' && 'border border-border p-6 rounded-lg'
				)}
			>
				<div className=" flex flex-row space-x-6 items-center">
					{image && (
						<div className="h-12 w-12">
							<Image
								src={image}
								alt={title}
								height={72}
								handleClick={handleImageClick}
							/>
						</div>
					)}
					<div className="flex flex-col space-y-0">
						<Typography variant="subtitle1" className="font-medium">
							{title}
						</Typography>
						<Typography variant="body2" className="text-muted-foreground">
							{subtitle}
						</Typography>
					</div>
				</div>
				<Typography variant="body1" className="text-foreground">
					{formatCurrency(price, precision)}
				</Typography>
			</button>
		</li>
	)
}

export default PriceListItem
