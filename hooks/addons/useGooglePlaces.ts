import React, { useState } from 'react'

type GooglePredictionType = {
	description: string
	place_id: string
}

type GooglePlaceType = {
	formatted_address: string
	geometry: {
		location: {
			lat: number
			lng: number
		}
	}
	name: string
	place_id: string
}

const useGooglePlaces = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const [place, setPlace] = useState<GooglePlaceType | null>(null)
	const [places, setPlaces] = useState<GooglePredictionType[] | []>([])

	const fetchPlace = async (placeId) => {
		let resp
		try {
			setLoading(true)
			setError(null)
			resp = await fetch(`/api/google-place?placeid=${placeId}`)
			resp = await resp.json()
			setPlace(resp.data?.data)
		} catch (e) {
			console.log('Error', e)
			setError(e)
		} finally {
			setLoading(false)
		}
		return resp.data?.data
	}

	const fetchPlaces = async (keywords) => {
		let resp
		try {
			setLoading(true)
			setError(null)
			resp = await fetch(`/api/google-places?keywords=${keywords}`)
			resp = await resp.json()
			setPlaces(resp?.data)
		} catch (e) {
			console.log('Error', e)
			setError(e)
		} finally {
			setLoading(false)
		}
		return resp?.data
	}

	return {
		loading,
		error,

		place,
		places,
		fetchPlace,
		fetchPlaces,
	}
}

export default useGooglePlaces
