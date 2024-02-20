import React from 'react'
import { useRouter } from 'next/router'

type UseNavigationProps = {
	url: string
}

const useNavigation = (props: UseNavigationProps) => {
	const { url } = props
	const router = useRouter()

	const handleShowClick = (resource) => router.push(`${url}/${resource.id}`)
	const handleEditClick = (resource) =>
		router.push(`${url}/${resource.id}/edit`)
	const handleAddClick = () => router.push(`${url}/new`)

	return {
		handleClick: handleShowClick,
		handleShowClick,
		handleEditClick,
		handleAddClick,

		toShow: handleShowClick,
		toEdit: handleEditClick,
		toAdd: handleAddClick,
	}
}

export default useNavigation
