import { ActionType } from ".."

type BuildActionParams = {
  enableEdit: boolean
  handleEdit: () => void
  actions: ActionType[]
}

export const buildActions = ({ 
  enableEdit, 
  handleEdit, 
  actions 
}: BuildActionParams ) => {

  const EDIT_ACTION = {
    label: 'Edit',
    color: 'secondary',
    name: 'click',
    onClick: handleEdit,
  }

  let newActions = <ActionType[]>[] 
  if(actions) {
    newActions = newActions.concat(actions)
  }
  if(enableEdit) {
    //@ts-ignore
    newActions.push(EDIT_ACTION)
  }      
  return newActions
}
