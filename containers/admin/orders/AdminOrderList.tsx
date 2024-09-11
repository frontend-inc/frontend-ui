import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import AdminOrderItem from './AdminOrderItem'
import AdminOrderForm from './AdminOrderForm'
import AdminOrderShow from './AdminOrderShow'
import AdminOrderToolbar from './AdminOrderToolbar'
import { useRouter } from 'next/router'
import { OrderType } from '../../../types'

const AdminOrdersList: React.FC = (props) => {
	const { apiUrl } = useAdmin()  
  const router = useRouter()

  const { clientUrl } = useAdmin()
  
  const handleClick = (order: OrderType) => {
    router.push(`${clientUrl}/shop/orders/${order.id}`)
  }

	return (
		<ResourceList
			selectable
			url={`${apiUrl}/orders`}
			name={'order'}
			enableSearch
			enableEdit
      handleClick={ handleClick }
      query={{
        sort_by: 'number',
        sort_direction: 'desc'
      }}
      edit={AdminOrderForm}
			toolbar={AdminOrderToolbar}
			component={AdminOrderItem}			
			emptyIcon="ShoppingCart"
			emptyTitle="No orders"
			emptyDescription="No orders added yet."
		/>
	)
}

export default AdminOrdersList
