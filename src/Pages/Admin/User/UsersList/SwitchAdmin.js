import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

export default function SwitchAdmin({
  disable = true, isAdmin, edit,
}) {
  const handleChange = (event) => {
    isAdmin({ [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          control={(
            <Switch
              checked={edit}
              onChange={handleChange}
              disabled={disable}
              inputProps={{ 'aria-label': 'disabled checkbox' }}
              id="isAdmin"
              name="isAdmin"
              value={edit}
            />
                    )}
          label={edit ? 'Admin' : 'User'}
          labelPlacement="end"
        />
      </FormGroup>
    </div>
  );
}
