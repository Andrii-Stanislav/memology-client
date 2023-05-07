import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {CssBaseline} from '@mui/material'

import {wrapper} from '../store'
import {PageLayaut} from '../components/_templates/PageLayaut'

const theme = createTheme({
    palette: {
        primary: {
            main: '#000',
            contrastText: '#fff',
            // light: '',
            // dark: '',
        },
    },
})

function App({Component, pageProps: {session, ...pageProps}}: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <PageLayaut>
                <Component {...pageProps} />
            </PageLayaut>
        </ThemeProvider>
    )
}

export default wrapper.withRedux(App)
