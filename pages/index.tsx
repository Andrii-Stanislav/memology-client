import {useEffect} from 'react'
import {useRouter} from 'next/router'
import {getServerSession} from 'next-auth/next'
import {Session} from 'next-auth'
import type {GetServerSideProps} from 'next'

import {authOptions} from './api/auth/[...nextauth]'

type Props = {
    session: Session
}

export default function Home({session}: Props) {
    const router = useRouter()

    useEffect(() => {
        if (!session) {
            router.push('/login')
        }
    }, [session])

    if (!session) {
        return null
    }

    return <div className="center">Home page</div>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            session: await getServerSession(context.req, context.res, authOptions),
        },
    }
}
