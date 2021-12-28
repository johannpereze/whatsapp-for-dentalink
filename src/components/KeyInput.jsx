import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Typography } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function KeyInput({ componentVisibility, setComponentVisibility }) {

    const [secretKeys, setSecretKeys] = useState({
        dentalinkKey: '',
        dentalinkKeyShowPassword: '',
        b2ChatToken: '',
        b2ChatExpiration: '0',
    })

    const { dentalinkKey, dentalinkKeyShowPassword } = secretKeys

    const handleInputChange = (e) => {
        const { value } = e.target
        setSecretKeys({ dentalinkKey: value })
    }

    const handleClickShowPassword = () => {
        setSecretKeys({
            ...secretKeys,
            dentalinkKeyShowPassword: !dentalinkKeyShowPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault(); //esto no se que hace
    };

    const saveDentalinkKey = (e) => {
        e.preventDefault()
        console.log(dentalinkKey);
        console.log("Ocultamos componente");
        setComponentVisibility({ ...componentVisibility, lineSelection: true, keyInput: false })
    }

    return (
        <Paper>
            <Typography sx={{ mt: 2 }} variant="h6" component="h2">
                Iniciar Sesión
            </Typography>
            <FormControl fullWidth sx={{ mt: 2 }} variant="outlined">
                {/* debería tener onsubmit o algo así para que funcione con el enter */}
                <InputLabel htmlFor="outlined-adornment-password">Contraseña Dentalink</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    type={dentalinkKeyShowPassword ? 'text' : 'password'}
                    value={dentalinkKey}
                    onChange={handleInputChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {dentalinkKeyShowPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Contraseña Dentalink"
                />
                <Button sx={{ mt: 2, width: '30%' }} variant="contained" type="submit" label="Siguiente" onClick={saveDentalinkKey}>Siguiente</Button>
            </FormControl>
        </Paper>
    )
}