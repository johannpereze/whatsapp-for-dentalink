import { createTheme } from '@mui/material/styles';

const theme = createTheme({

    palette: {
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#4caf50',
            // dark: will be calculated from palette.primary.main,
            contrastText: '#fff'
        },
    },
    // components: {
    //     MuiCssBaseline: {
    //         styleOverrides: {
    //             body: {
    //                 backgroundColor: "#f5f5f5f5",
    //             }
    //         }
    //     }
    // }
})

export default theme