import React, { useContext, useEffect } from 'react'
import { AdminContext } from 'frontend-ui/context'

const useTabs = (tab: string) => {
	const { activeTab, setActiveTab } = useContext(AdminContext)

	useEffect(() => {
		if (tab) {
			setActiveTab(tab)
		}
	}, [tab])

	return {
		activeTab,
		setActiveTab,
	}
}

export default useTabs
