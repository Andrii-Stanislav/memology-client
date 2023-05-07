import {ReactNode} from 'react'
import {useRouter} from 'next/router'

import useAuth from '../../pages/api/hooks/useAuth'

type Props = {
    children: ReactNode
}

function AuthGuard({children}: Props) {
    const router = useRouter()
    const {isAuth} = useAuth()

    if (typeof window === 'undefined') return null

    if (!isAuth) {
        router.push('/login')
    }

    return <>{children}</>
}

export default AuthGuard
