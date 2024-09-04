export type UnsplashImageType = {
	name: string
	description: string
	alt_description: string
	slug: string
	urls: {
		raw: string
		full: string
		regular: string
		small: string
		thumb: string
	}
	links: {
		html: string
		download_location: string
	}
	user: {
		profile_image: {
			small: string
			medium: string
			large: string
		}
		name: string
    links: {
      html: string
    }
	}
}
