import React, { useEffect, useState } from "react";
import { useGooglePlaces } from "../../../hooks";
import { Autosuggest } from '../../../components'
import { TextInputPropsType } from '../../../types'
import { useDebounce } from 'use-debounce'

const GooglePlacesInput: React.FC<TextInputPropsType> = (props) => {
  
  const { 
    name='google_place_id', 
    value='', 
    label,
    placeholder="Search location",
    handleChange, 
    direction='column' 
  } = props || {};

  const { 
    loading, 
    places, 
    fetchPlaces 
  } = useGooglePlaces();

  const [keywords, setKeywords] = useState(value)
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
        label: place?.formattedAddress, 
        value: place?.formattedAddress
      })));
    }
  }, [places])

  useEffect(() => {
    setOptions([
      { label: value, value: value }
    ])
  }, [value])

  return (
    <Autosuggest 
      name={name}
      label={label}
      value={keywords}
      options={options}
      handleChange={handleChange}
      handleInputChange={handleKeywordChange}
      direction={direction}
      loading={loading}
      placeholder={ placeholder }
    />
  );
};
export default GooglePlacesInput;
