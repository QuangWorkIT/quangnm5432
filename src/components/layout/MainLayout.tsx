import Header from './Header'

function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className='w-screen min-h-screen p-8 bg-[#1C1F26] text-[#F0F2F5]'>
            <Header />
            <div className='mt-5'>{children}</div>
        </main>
    )
}

export default MainLayout
