import {useEffect} from 'react'
import {useRouter} from 'next/router'

import useAuth from './api/hooks/useAuth'

export default function About() {
    const router = useRouter()
    const {isAuth} = useAuth()

    useEffect(() => {
        if (!isAuth) {
            router.push('/login')
        }
    }, [isAuth])

    if (!isAuth) {
        return null
    }

    return (
        <>
            <h1>About</h1>
        </>
    )
}
