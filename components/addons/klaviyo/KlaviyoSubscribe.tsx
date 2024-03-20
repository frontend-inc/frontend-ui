import React, { useEffect, useState } from 'react'
import { Stack, Box, Button } from '@mui/material'
import { TextInput, ButtonLoader } from '../..'
import { useAlerts, useKlaviyo } from '../../../hooks'

type KlaviyoSubscribeProps = {
	listId: string
  apiKey: string
  buttonText?: string
}

const KlaviyoSubscribe: React.FC<KlaviyoSubscribeProps> = (props) => {
	const { listId, apiKey, buttonText='Subscribe' } = props || {}

  const {
    loading,
    handleSubmit
  } = useKlaviyo({    
    apiKey
  })

  const [email, setEmail] = useState('')
  
  const handleFormSubmit = async () => {
    try{
      let resp = await handleSubmit({
        email,
        listId
      })      
    }catch(e){
      console.log("Error", e)
    }
  }

  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(ev.target.value)
  }

	if(!listId || !apiKey) return null
	return (
		<Box sx={sx.root}>
      <Stack direction="row" spacing={0} sx={ sx.form }>
        <TextInput 
          direction="row"
          placeholder={'Enter email...'}
          name="email"
          value={ email }
          handleChange={ handleChange }
          styles={ sx.input }
        />
        <Button 
          sx={ sx.button }
          variant="contained"
          color="secondary"
          onClick={ handleFormSubmit }          
        >
          { loading ? <ButtonLoader loading={loading} /> : `${buttonText}` }
        </Button>
      </Stack>
		</Box>
	)
}

export default KlaviyoSubscribe

const sx = {
	root: {
		py: 2,
    width: "100%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
	},
  form: {
    maxWidth: 400,
  },
  text: {
    pt: 2
  },
  button: {
    minWidth: 120,
    borderRadius: theme => `0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0`,
  },
  input: {
    '& .MuiInputBase-input': {
      borderRadius: theme => `${theme.shape.borderRadius}px 0 0 ${theme.shape.borderRadius}px`,
    }
  }
}
