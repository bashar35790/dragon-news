import Header from '@/components/shared/Header'
import Navbar from '@/components/shared/Navbar'


function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            {
                children
            }

        </>
    )
}

export default MainLayout
