import { createTheme } from '@mui/material/styles';

const theme = createTheme({

    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#4caf50',
            // dark: will be calculated from palette.primary.main,
            contrastText: '#fff'
        },
        background: {
            default: '#4caf50'
        }
    }
})

export default theme