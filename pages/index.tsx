import {useEffect} from 'react'
import {useRouter} from 'next/router'
import type {GetServerSideProps} from 'next'

import useAuth from './api/hooks/useAuth'

export default function Home() {
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

    return <div className="center">Home page</div>
}
