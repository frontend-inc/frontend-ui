import React from 'react'
import { cn } from '../../../../shadcn/lib/utils'
import { Box, Stack, Typography } from '../../../../tailwind'
import { Image } from '../../..'

export type ProductCardProps = {
	ref?: React.Ref<HTMLDivElement>
	avatar?: React.ReactNode
	image: string
	label?: string
	primary: string
	secondary?: string | React.ReactNode
	actions?: React.ReactNode
	secondaryAction?: React.ReactNode
	price: string
	compareAtPrice?: string
	handleClick?: () => void
	height?: number
	addToCart?: React.ReactNode
	slots?: {
		item?: any
		image?: any
	}
}

const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
	(props, ref) => {
		const {
			label,
			primary,
			secondary,
			price,
			compareAtPrice,
			actions,
			secondaryAction,
			handleClick,
			image,
			height = 240,
			addToCart,
			slots = {
				item: {},
				image: {},
			},
		} = props

		return (
			<Stack
				ref={ref}
				className={cn(
					'w-full overflow-hidden rounded-sm transition-shadow duration-300 hover:shadow-md bg-background border border-border',
					`min-h-[${height + 80}px]`
				)}
				{...slots.item}
			>
				<Box className="h-[230px] min-h-[230px] w-full relative overflow-hidden">
					<Image
						src={image}
						height={height}
						alt={primary}
						label={label}
						handleClick={handleClick}
						className="object-cover w-full h-full"
						{...slots.image}
					/>
				</Box>
				<Stack
					className="p-4 space-y-4 w-full h-full justify-between items-between"
					spacing={1}
				>
					<Box className="h-full">
						<Typography variant="subtitle1">{primary}</Typography>
						<Stack direction="row" className="space-x-2">
							<Typography className="text-sm text-foreground" variant="caption">
								{price}
							</Typography>
							{compareAtPrice && (
								<Typography className="line-through" variant="caption">
									{compareAtPrice}
								</Typography>
							)}
						</Stack>
						{secondary && (
							<Typography
								className="text-sm text-muted-foreground mt-1"
								variant="body2"
							>
								{secondary}
							</Typography>
						)}
					</Box>
					{addToCart}
					<Stack direction="row" className="justify-between">
						{actions}
						{secondaryAction}
					</Stack>
				</Stack>
			</Stack>
		)
	}
)

ProductCard.displayName = 'ProductCard'

export default ProductCard
