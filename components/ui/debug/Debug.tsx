import React, { useEffect } from 'react' 

const Debug: React.FC<any> = (props) => {

  useEffect(() => {
    console.log('Debug', props)
  }, [props])

  return null
}

export default Debug