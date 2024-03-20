import axios from 'axios'

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

export const lookup = async (listId, email) => {
  try {
    let resp = await axios.post(`https://a.klaviyo.com/api/v2/list/${listId}/get-members`, {
      api_key: KLAVIYO_API_KEY,
      emails: [email]
    })
    return resp?.data
  }catch(e){
    console.log("Error", e)
  }  
}
