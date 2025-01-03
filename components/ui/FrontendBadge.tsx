import React from 'react'
import Link from 'next/link'

const FrontendBadge: React.FC = () => {
	return (
		<div className="absolute bottom-0 right-0 w-full flex flex-row justify-end pb-4 pr-4">
			<Link
				href="https://www.frontend.co"
				target="_blank"
				className="relative p-[2px] rounded-full hover:scale-105 transition-transform cursor-pointer overflow-hidden"
			>
				<div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500">
					<div className="px-3 py-1 rounded-full bg-background">
						<span className="text-sm font-bold bg-gradient-to-r from-purple-500 via-violet-500 to-blue-500 text-transparent bg-clip-text">
							Built with Frontend
						</span>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default FrontendBadge
