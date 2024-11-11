export const isEmptyObject = (object) => {
	if (Object.values(object).every((x) => x === null || x === '')) {
		return false
	} else {
		return true
	}
}

export const buildOptions = (items, key, value) => {
	if (!items) return null
	let list = items?.data || items
	return list.map((item) => ({
		value: item[key],
		label: item[value],
	}))
}

export const truncate = (str, length = 60) => {
	if (!str) return ''
	if (str.length > length) {
		return str.substring(0, length) + '...'
	}
	return str
}

export function getInitials(name) {
	if (!name) return ''
	// Trim any extra spaces and split the name into parts based on spaces
	const parts = name.toUpperCase().trim().split(/\s+/)

	// Check if we have at least two parts (multiple words)
	if (parts.length >= 2) {
		// Use the first letter of the first two parts
		return parts[0][0] + parts[1][0]
	} else {
		// Use the first two letters of the single part, if it's at least 2 characters long
		return parts[0].length > 1
			? parts[0].substring(0, 2)
			: parts[0][0] + parts[0][0]
	}
}

export const groupBy = (arr, name) => {
	const grouped = {}

	arr.forEach((item) => {
		if (!item || !item[name]) return
		const groupBy = item[name]

		if (!grouped[groupBy]) {
			grouped[groupBy] = []
		}

		grouped[groupBy].push(item)
	})

	return grouped
}

export const groupResourcesByField = (resources, fieldName, allowedValues) => {
	// Initialize the grouped result object with keys from allowedValues
	const grouped = {}
	allowedValues.forEach((value) => {
		grouped[value] = []
	})

	// Iterate over each resource
	resources.forEach((resource) => {
		// Check if the resource has the specified field and if its value is allowed
		if (
			resource.hasOwnProperty(fieldName) &&
			allowedValues.includes(resource[fieldName])
		) {
			// Add the resource to the appropriate group
			grouped[resource[fieldName]].push(resource)
		}
	})

	return grouped
}

// https://cloudinary.com/documentation/resizing_and_cropping
export const resizeCloudinaryImage = (
	src,
	{ width, height, transform = 'fill' } // fit | fill | crop | scale | pad | lfill | limit
) => {
	if (!src) return null
	let index = src.indexOf('/upload') + 7 // 7 is number of chars in '/upload'
	let params = [`/c_${transform},q_auto`]
	if (width && width > 0) params.push(`w_${width}`)
	if (height && height > 0) params.push(`h_${height}`)
	let transformedUrl =
		src.substring(0, index) + params.join(',') + src.substring(index)
	return transformedUrl
}

export const cloudinaryConvertToJpeg = (url) => {
	return url.replace(/\.\w+$/, '.jpg')
}

export const cloudinaryImageFromVideoUrl = (url) => {
	if (!url || url?.length <= 3 ) return null;
	return url?.replace(/mp4|mpeg|ogg|mkv|mov/i, 'jpg')
}

export const scrollTo = (domId) => {
	const elem = document.getElementById(domId)
	elem?.scrollIntoView({ behavior: 'smooth' })
}

export const formatCurrency = (amount, currency = 'USD') => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency,
	}).format(amount)
}
