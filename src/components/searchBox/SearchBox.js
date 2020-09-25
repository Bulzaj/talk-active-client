import React, {useEffect, useState} from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
const SearchBox = props => {

  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(props.options)
  }, [props.options]);

  return (
    <Autocomplete
      id={props.id}
      options={options}
      getOptionLabel={props.optionLabel}
      renderInput={(params) =>(<TextField {...params} label={props.label} variant='outlined'/>)}
      onChange={props.onChangeHandler}
      selectOnFocus
      clearOnBlur
      freeSolo
    />
  );
}

export default SearchBox;