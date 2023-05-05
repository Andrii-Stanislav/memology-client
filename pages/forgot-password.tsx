import {FormEvent} from 'react'

import {Button, TextField, Link, Box, Typography, Container} from '@mui/material'

export default function ForgotPassword() {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(event.currentTarget)
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Forgot password
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />

                    <Button type="submit" fullWidth variant="contained" sx={{mt: 2, mb: 2}}>
                        Sign In
                    </Button>

                    <Link href="/login" variant="body2">
                        Go to Sign In
                    </Link>
                </Box>
            </Box>
        </Container>
    )
}
