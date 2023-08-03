import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const PasswordTextField = (props) => {
  const {setPassword} = props;
  const [showPassword, setShowPassword] = useState(false);
  const [password, setTextPassword] = useState('');

  const handlePasswordChange = (event) => {
    setTextPassword(event.target.value);
    setPassword(event.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password-field" style={{width:'100%'}}>
      <TextField
        label="Password"
        type={showPassword ? 'text' : 'password'}
        value={password}
        style={{width:'100%'}}
        onChange={handlePasswordChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleTogglePasswordVisibility}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default PasswordTextField;
