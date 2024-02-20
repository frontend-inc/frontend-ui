import { muiTheme } from '../theme'

export const getCarouselResponsive = (theme = muiTheme) => {
	const {
		values: { xs, sm, md, lg, xl },
	} = theme?.breakpoints

	return {
		superLargeDesktop: {
			breakpoint: { max: xl, min: lg },
			items: 3,
		},
		desktop: {
			breakpoint: { max: lg, min: md },
			items: 3,
		},
		tablet: {
			breakpoint: { max: md, min: sm },
			items: 2,
		},
		mobile: {
			breakpoint: { max: sm, min: xs },
			items: 1,
		},
	}
}
