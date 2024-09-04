import React from 'react'
import { Box } from '@mui/material'
import { 
  AdminHeader, 
  AdminMenu, 
  AdminLayoutLeft,
  AdminLayoutCenter 
} from '../../../components'
import { AdminMenusType, AdminMenuType } from '../../../types'
import { useAdmin, useTabs } from '../../../hooks'
import { useRouter } from 'next/router'

export type AdminPageProps = {
	title: string
	actions?: React.ReactNode
	activeTab: string
	activeMenu: string
	menuItems?: AdminMenusType
  enableEdit?: boolean
  enableDelete?: boolean
  handleEdit?: (menuItem: AdminMenuType ) => void
  handleDelete?: (menuItem: AdminMenuType ) => void
	disablePadding?: boolean
	children: React.ReactNode
}

const AdminPage: React.FC<AdminPageProps> = (props) => {
	const router = useRouter()
	const { clientUrl } = useAdmin()

	const {
		title,
		actions,
		activeTab,
		activeMenu,
		menuItems,
    enableEdit,
    enableDelete,
    handleEdit,
    handleDelete,
		disablePadding = false,
		children,
	} = props || {}

	useTabs(activeTab)

	const handleClick = (menuItem) => {
		router.push(`${clientUrl}${menuItem.value}`)
	}

	return (
		<>
    <AdminLayoutLeft>    
			{menuItems && (
				<AdminMenu
          enableEdit={enableEdit} 
          enableDelete={enableDelete}
					activeMenu={activeMenu}
					menuItems={menuItems}
					handleClick={handleClick}
          handleEdit={ handleEdit }
          handleDelete={ handleDelete }          
				/>
			)}
      </AdminLayoutLeft>
			<AdminLayoutCenter>
				<AdminHeader title={title} buttons={actions} enableExpandLeftPanel />
				<Box p={disablePadding ? 0 : 2}>{children}</Box>
			</AdminLayoutCenter>
		</>
	)
}

export default AdminPage
