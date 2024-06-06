import React from "react";
import { GooglePlacesInput } from "../../../components";

type LocationInputProps = {
  name?: string
  handleChange: (ev: any) => void
  value?: string
  label?: string
  placeholder?: string
  direction?: "row" | "column"
}

const LocationInput: React.FC<LocationInputProps> = (props) => {
  
  const { 
    name='location', 
    handleChange, 
    value,
    label,
    placeholder,
    direction 
  } = props || {};

  const handlePlaceChange = (place) => {
    handleChange({
      target: {
        name,
        value: place.value
      }
    })
  }

  return (
    <GooglePlacesInput  
      handleChange={ handlePlaceChange }
      name={ name }
      value={ "801 S Miami Ave" }
      label={ label }
      placeholder={ placeholder }
      direction={ direction }
    />
  );
}

export default LocationInput;
