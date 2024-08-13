
import React from 'react'
import { ResourceList } from '../../../components'
import { useAdmin } from '../../../hooks'
import { AdminSubscriptionPlanItem } from '../../../containers'

const AdminSubscriptionPlansList: React.FC = () => {

  const { apiUrl } = useAdmin()

  return(
    <ResourceList      
      url={`${apiUrl}/subscription_plans`}
      name="subscription_plan"
      enableSearch
      enableCreate
      enableEdit
      enableDelete
      sortOptions={[
        { name: 'name', label: 'Name' },
        { name: 'price', label: 'price' },
      ]}
      fields={[
        { name: 'label', label: 'Label', variant: 'string' },
        { name: 'name', label: 'Name', variant: 'string' },
        {
          name: 'description',
          label: 'Description',
          variant: 'text',
        },
        {
          name: 'stripe_plan_id',
          label: 'Stripe plan ID',
          variant: 'string',
        },
        { name: 'price', label: 'Price', variant: 'number' },
        {
          name: 'recurring_interval',
          label: 'Subscription Interval',
          variant: 'select',
          options: [
            { label: 'Daily', value: 'day' },
            { label: 'Weekly', value: 'week' },
            { label: 'Monthly', value: 'month' },
            { label: 'Quarter', value: 'quarter' },
            { label: 'Yearly', value: 'year' },
          ],
        },
        {
          name: 'recurring',
          label: 'This is a recurring plan',
          variant: 'boolean',
        },
        {
          name: 'free_trial_period',
          label: 'Free trial period',
          variant: 'select',
          options: [
            { label: '1 day', value: '1' },
            { label: '3 days', value: '3' },
            { label: '7 days', value: '7' },
            { label: '14 days', value: '14' },
            { label: '30 days', value: '30' },
          ],
        },
        {
          name: 'free_trial',
          label: 'This plan includes a free trial',
          variant: 'boolean',
        },
        {
          name: 'features',
          label: 'Plan features',
          variant: 'array',
        },
      ]}
      component={AdminSubscriptionPlanItem}
    />
  )
}

export default AdminSubscriptionPlansList