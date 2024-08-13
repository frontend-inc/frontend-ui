import React from "react"
import { Box } from "@mui/material"
import { 
  AdminHeader,
  AdminMenu,
  AdminLayoutCenter 
} from '../../../components'
import { AdminMenusType } from "../../../types"
import { useAdmin, useTabs } from '../../../hooks'
import { useRouter } from "next/router"

export type AdminPageProps = {
  title: string 
  actions?: React.ReactNode
  activeTab: string
  activeMenu: string
  menuItems: AdminMenusType
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
    disablePadding=false, 
    children 
  } = props || {}

  useTabs(activeTab)

  const handleClick = (menuItem) => {
    router.push(`${clientUrl}${menuItem.value}`)
  }

  return(
    <>
      { menuItems && (        
        <AdminMenu  
          activeMenu={ activeMenu } 
          menuItems={ menuItems }
          handleClick={ handleClick }
        />        
      )}
      <AdminLayoutCenter>
        <AdminHeader
          title={ title }
          buttons={ actions }
          enableExpandLeftPanel
        />
        <Box p={disablePadding ? 0 : 2}>
          { children }
        </Box>
      </AdminLayoutCenter>
    </>
  )
}

export default AdminPage 