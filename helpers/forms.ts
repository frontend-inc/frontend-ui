type FormMetafieldParams = {
  enableCompany?: boolean
  enablePhone?: boolean
  enableReason?: boolean
  enableMessage?: boolean
  reasonOptions?: string[]
}

export const buildFormMetafields = (params: FormMetafieldParams) => {

  const { 
    enableCompany,
    enablePhone,
    enableReason,  
    enableMessage,
    reasonOptions=[],
  } = params || {}

  let metafields = [] as any 
  if(enableCompany){
    metafields.push({
      label: 'Company',
      name: 'company',
      placeholder: 'Company',
      variant: 'string',
    })
  }

  if(enablePhone){
    metafields.push({
      label: 'Phone',
      name: 'phone',
      placeholder: 'Phone',
      variant: 'string',
    })
  }

  if(enableReason){
    metafields.push({
      label: 'Reason',
      name: 'reason',
      placeholder: 'Reason',
      variant: 'select',
      options: reasonOptions,
    })
  }

  if(enableMessage){
    metafields.push({
      label: 'Message',
      name: 'message',
      placeholder: 'Message',
      variant: 'textarea',
    })
  }

  return metafields
}