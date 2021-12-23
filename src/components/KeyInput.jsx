import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function KeyInput() {

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
    }

    return (
        <div>
            <h3>Iniciar Sesión</h3>


            <FormControl fullWidth sx={{ mt: 2}} variant="outlined">
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
            {/* <form action="">
                <div >
                    <div >
                        <span ><i >key_icon</i></span>
                        <input
                            type="password"
                            name="dentalinkKey"
                            id="dentalinkKey"
                            value={dentalinkKey}
                            onChange={handleInputChange}
                            placeholder="Contraseña de Dentalink..."
                        />
                    </div>
                    <Button variant="contained" type="submit" label="Siguiente" onClick={saveDentalinkKey}>Siguiente</Button>
                </div>
            </form> */}
        </div>
    )
}