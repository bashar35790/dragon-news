import Navbar from '@/components/shared/Navbar'

function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (

        <>
            <Navbar></Navbar>
            {children}
        </>
    )
}

export default AuthLayout
