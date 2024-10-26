import React from 'react'

export type LogoProps = {
  className?: string
	width?: number
}

const UnsplashLogo: React.FC<LogoProps> = (props) => {

  const { 
    className,
    width = 80 
  } = props || {}

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 456 100"
			width={width}
			height={(width * 100) / 456}
			className={ className }
			aria-label="Unsplash logo"
		>
			<path d="M59.9 38.7h27.5v48.8H0V38.7h27.5V63h32.3l.1-24.3zm93 25c0 8.3-5.4 13.1-12.9 13.1-7.3 0-12.8-4.9-12.8-13.1V24.4H115v39.1c0 15.4 11 25.2 25.1 25.2s25.1-9.8 25.1-25.2V24.4H153l-.1 39.3zm43.7-21.2c-4.7 0-9.9 2-12.6 6.6v-5.4h-11.4v43.6h11.8V62.2c0-5 3-9 8.2-9 5.7 0 8.1 3.8 8.1 8.7v25.4h11.8V59.8c-.1-9.6-5.1-17.3-15.9-17.3zm43.3 18.4l-6.5-1.3c-2.5-.5-4-1.8-4-3.9 0-2.5 2.2-4.3 5.3-4.3 4.4 0 6.1 2.2 6.5 4.9h10.2c-.1-6-4.8-13.8-16.5-13.8-9.4 0-16.3 6.5-16.3 14.3 0 6.1 3.8 11.2 12.2 13l6.1 1.3c3.4.7 4.7 2.3 4.7 4.3 0 2.3-2.1 4.3-6 4.3-4.7 0-7.3-2.7-7.9-5.8h-10.5c.6 6.5 5.3 14.8 18.5 14.8 11.4 0 17.2-7.3 17.2-14.4 0-6.4-4.4-11.6-13-13.4zm63.2 4.5c0 13.2-8.3 23-20.6 23-6 0-10.5-2.4-12.6-5.3v21.1h-11.8V43.7h11.5v5.4c2-3.4 6.8-6.4 13.4-6.4 12.7 0 20.1 9.7 20.1 22.7zm-11.7.1c0-7.7-4.8-12.2-10.8-12.2s-10.9 4.5-10.9 12.2 4.9 12.3 10.9 12.3 10.9-4.5 10.8-12.3zm68-21.8h11.5v43.6h-11.8V82c-2 3.5-6.6 6.4-12.6 6.4-12.3 0-20.6-9.8-20.6-23 0-13 7.4-22.7 20.1-22.7 6.6 0 11.3 3 13.4 6.4v-5.4zm-.1 21.8c0-7.7-4.9-12.2-10.9-12.2s-10.8 4.5-10.8 12.2 4.8 12.3 10.8 12.3 10.9-4.6 10.9-12.3zm-50.7 21.8h11.8V24.4h-11.8v62.9zM441 42.5c-4.2 0-9 1.4-11.8 4.8V24.4h-11.8v62.9h11.8V61.7c.3-4.8 3.2-8.5 8.2-8.5 5.7 0 8.1 3.8 8.1 8.7v25.5h11.8V59.8c-.1-9.6-5.2-17.3-16.3-17.3zm-42 18.4l-6.4-1.3c-2.5-.5-4-1.8-4-3.9 0-2.5 2.2-4.3 5.3-4.3 4.4 0 6.1 2.2 6.5 4.9h10.2c-.1-6-4.8-13.8-16.5-13.8-9.4 0-16.3 6.5-16.3 14.3 0 6.1 3.8 11.2 12.2 13l6 1.3c3.4.7 4.7 2.3 4.7 4.3 0 2.3-2.1 4.3-6 4.3-4.7 0-7.3-2.7-7.9-5.8h-10.5c.6 6.5 5.3 14.8 18.5 14.8 11.5 0 17.2-7.3 17.2-14.4 0-6.4-4.4-11.6-13-13.4zM59.9 0H27.5v24.4h32.3L59.9 0z" />
		</svg>
	)
}

export default UnsplashLogo
