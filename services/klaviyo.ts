export const subscribe = async ({ apiKey, listId, email }) => {
  try {
    let body = JSON.stringify({
      api_key: apiKey,
      profiles: [
        {
          email: email
        }
      ]
    })
    let resp = await fetch(`https://a.klaviyo.com/api/v2/list/${listId}/members`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body
    })
    const data = await resp.json()
    return data
  }catch(e){
    console.log("Error", e)
  }  
}

