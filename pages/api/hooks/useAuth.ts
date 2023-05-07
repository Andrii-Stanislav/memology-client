import {useRouter} from 'next/router'

import {ACCESS_TOKEN_KEY} from '../../../constants/localStorage'
import {LoginData} from '../../../types/auth'

import {loginReq} from '../auth'

const useAuth = () => {
    const router = useRouter()

    if (typeof window === 'undefined') {
        return {isAuth: false, signIn: () => {}, signOut: () => {}}
    }

    const isAuth = Boolean(localStorage.getItem(ACCESS_TOKEN_KEY))

    const signIn = async (loginData: LoginData) => {
        try {
            const {data} = await loginReq(loginData)
            localStorage.setItem(ACCESS_TOKEN_KEY, data.token)
            router.push('/')
        } catch (error) {
            console.log('error: ', error)
        }
    }

    const signOut = () => {
        localStorage.removeItem(ACCESS_TOKEN_KEY)
        router.push('/login')
    }

    return {isAuth, signIn, signOut}
}

export default useAuth
