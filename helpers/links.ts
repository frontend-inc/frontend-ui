export const filterLinkVisibility = (link, currentUser) => {
  let visible = true;  
  if (link.visibility == 'user' && !currentUser?.id) {
    visible = false
  }
  if (link.visibility == 'guest' && currentUser?.id) {
    visible = false 
  }
  if (link.visibility == 'admin' && !currentUser?.admin) {
    visible = false 
  }
  return visible 
}