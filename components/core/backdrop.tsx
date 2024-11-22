'use client'

import React from 'react'
import { cn } from 'frontend-shadcn'
import { motion, AnimatePresence } from 'framer-motion'

interface BackdropProps extends React.HTMLAttributes<HTMLDivElement> {
	open: boolean
	onClick?: () => void
}

export function Backdrop({
	children,
	open,
	onClick,
	className,
	...props
}: BackdropProps) {
	return (
		<AnimatePresence>
			{open && (
				<motion.div
					initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
					animate={{
						opacity: 1,
						backdropFilter: 'blur(5px)',
						transition: { duration: 0.3 },
					}}
					exit={{
						opacity: 0,
						backdropFilter: 'blur(0px)',
						transition: { duration: 0.3, delay: 0.1 },
					}}
					onClick={onClick}
					className={cn(
						'fixed inset-0 z-40 flex items-center justify-center bg-black/60',
						className
					)}
					{...props}
				>
					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{
							scale: 1,
							opacity: 1,
							transition: { delay: 0.1, duration: 0.2 },
						}}
						exit={{
							scale: 0.9,
							opacity: 0,
							transition: { duration: 0.2 },
						}}
					>
						{children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
