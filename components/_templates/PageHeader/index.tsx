import Link from 'next/link'

import useAuth from '../../../pages/api/hooks/useAuth'

export const PageHeader = () => {
    const {signOut} = useAuth()

    return (
        <header
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px',
                padding: '10px',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    gap: '10px',
                }}
            >
                <Link href="/">Home</Link>
            </div>
            <button type="button" onClick={signOut}>
                Log out
            </button>
        </header>
    )
}
