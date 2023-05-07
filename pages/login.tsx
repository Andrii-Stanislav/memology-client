import {Link} from '@mui/material'

import AurhForm from '../components/_templates/AurhForm'

import useAuth from './api/hooks/useAuth'

export default function Login() {
    const {signIn} = useAuth()

    return (
        <AurhForm
            title="Sign in"
            submitApiRequest={signIn}
            anotherFormLink={
                <Link href="/register" variant="body2">
                    Sign Up
                </Link>
            }
        />
    )
}
