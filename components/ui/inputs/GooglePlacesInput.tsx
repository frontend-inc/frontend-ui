import React, { useEffect, useState } from "react";
import { useGooglePlaces } from "../../../hooks";
import { Autosuggest } from '../../../components'
import { TextInputPropsType } from '../../../types'
import { useDebounce } from 'use-debounce'


const GooglePlacesInput: React.FC<TextInputPropsType> = (props) => {
  
  const { 
    name, 
    value, 
    handleChange, 
    direction='column' 
  } = props || {};

  const { 
    loading, 
    error, 
    place, 
    places, 
    fetchPlace,     
    fetchPlaces 
  } = useGooglePlaces();

  const [keywords, setKeywords] = useState('')
	const [debouncedValue] = useDebounce(keywords, 500)

  const handleKeywordChange = (keywords) => {
    setKeywords(keywords)
  };

  useEffect(() => {
    fetchPlaces(debouncedValue);
  }, [debouncedValue])

  const handleInputChange = async (ev) => {
    const { value } = ev?.target;    
    resp = await fetchPlace(value);
    console.log("Place", resp);
  };

  const [options, setOptions] = useState([]);
  
  useEffect(() => {
    if (places?.length > 0) {
      setOptions(places?.map((p) => ({ 
        label: p?.displayName?.text, 
        value: p.id 
      })));
    }
  }, [places])

  return (
    <Autosuggest 
      freeSolo
      name="google_place_id"
      value={keywords}
      options={options}
      handleChange={handleInputChange}
      handleInputChange={handleKeywordChange}
      direction={direction}
      loading={loading}
      placeholder="Search places"
    />
  );
};
export default GooglePlacesInput;

const sx = {
  autocomplete: {
    width: "100%",
  },
  textInput: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    wrap: "no-wrap",
  },
  textField: {
    borderColor: 'divider',
    width: "100%",
    "& .MuiInputBase-root": {
      border: "none",
    },
  },
};
