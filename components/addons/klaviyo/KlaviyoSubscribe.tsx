import React, { useState } from 'react'
import { Stack, Button } from '@mui/material'
import { Heading, TextInput, ButtonLoader } from '../..'
import { useKlaviyo } from '../../../hooks'

type KlaviyoSubscribeProps = {
	listId: string
  apiKey: string
  buttonText?: string
  title?: string
  description?: string
}

const KlaviyoSubscribe: React.FC<KlaviyoSubscribeProps> = (props) => {
	const { 
    listId, 
    apiKey, 
    buttonText='Subscribe',
    title,
    description 
  } = props || {}

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
		<Stack direction="column" spacing={2} sx={sx.root}>
      { (title || description) && (
        <Heading 
          title={ title } 
          description={ description }
          textAlign='center'
        />
      )}
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
		</Stack>
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
