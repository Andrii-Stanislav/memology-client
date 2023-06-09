import {ReactNode} from 'react'
import {useForm} from 'react-hook-form'
import {styled} from '@mui/material/styles'

import {Button, TextField, Link, Stack, Backdrop, CircularProgress, Typography, Container} from '@mui/material'

import {LoginData} from '../../../types/auth'

type Props = {
    title: string
    submitApiRequest: (loginData: LoginData) => Promise<any>
    anotherFormLink: ReactNode
}

const AurhForm = ({title, submitApiRequest, anotherFormLink}: Props) => {
    const {register, handleSubmit, formState} = useForm<LoginData>()
    const {isSubmitting} = formState

    const onSubmit = handleSubmit(submitApiRequest)

    return (
        <Container component="main" maxWidth="xs">
            <Stack direction="column" alignItems="center" pt={8}>
                <Typography component="h1" variant="h5">
                    {title}
                </Typography>
                <Form onSubmit={onSubmit}>
                    <Stack direction="column" pt={2} spacing={2}>
                        <TextField {...register('email')} fullWidth label="Email Address" autoFocus />
                        <TextField {...register('password')} fullWidth label="Password" type="password" />
                    </Stack>{' '}
                    <Button type="submit" fullWidth variant="contained" sx={{mt: 2, mb: 2}}>
                        Sign In
                    </Button>
                    <Stack direction="row" justifyContent="space-between">
                        <Link href="#" variant="body2">
                            Forgot password
                        </Link>
                        {anotherFormLink}
                    </Stack>
                </Form>
            </Stack>

            <Backdrop open={isSubmitting}>
                <CircularProgress color="inherit" />
            </Backdrop>
        </Container>
    )
}

export default AurhForm

const Form = styled('form')`
    width: 100%;
    max-width: 400px;
`
