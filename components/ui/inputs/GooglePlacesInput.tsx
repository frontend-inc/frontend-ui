import React, { useEffect, useState } from "react";
import { useGooglePlaces } from "../../../hooks";
import { Autosuggest } from '../../../components'
import { TextInputPropsType } from '../../../types'
import { useDebounce } from 'use-debounce'


const GooglePlacesInput: React.FC<TextInputPropsType> = (props) => {
  
  const { 
    name, 
    value, 
    label,
    placeholder,
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


  const [options, setOptions] = useState([]);
  
  useEffect(() => {
    if (places?.length > 0) {
      setOptions(places?.map((place) => ({ 
        label: place?.displayName?.text, 
        value: place
      })));
    }
  }, [places])

  return (
    <Autosuggest 
      freeSolo
      name="google_place_id"
      label={label}
      value={keywords}
      options={options}
      handleChange={handleChange}
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