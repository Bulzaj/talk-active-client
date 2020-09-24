import React from "react";
import {FormGroup} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import {useDispatch, useSelector} from "react-redux";
import {incognitoModeChanged} from "../../store/actions/incognitoModeActions";

const SwitchControl = props => {

  const isIncognitoMode = useSelector(state => state.isIncognitoMode);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(incognitoModeChanged());
  }

  return (
    <div>
      <FormGroup row>
        <FormControlLabel
          control=
            {
              <Switch
                checked={isIncognitoMode}
                onChange={handleChange}
                name={props.name}
                color='primary'/>
            }
          label={props.label}
        />
      </FormGroup>
    </div>
  )
}

export default SwitchControl;