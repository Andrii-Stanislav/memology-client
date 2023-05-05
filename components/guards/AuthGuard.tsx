import {ReactNode, useEffect} from 'react'
import {useSession} from 'next-auth/react'
import {useRouter} from 'next/router'

type Props = {
    children: ReactNode
}

function AuthGuard({children}: Props) {
    const router = useRouter()
    const {data: session} = useSession()

    if (typeof window === 'undefined') return null

    if (!session) {
        router.push('/login')
    }

    return <>{children}</>
}

export default AuthGuard
