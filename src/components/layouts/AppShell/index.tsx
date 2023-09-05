import { useRouter } from 'next/router'
import Navbar from '../Navbar'

type AppShellProps ={
    children: React.ReactNode
}

const disbaleNavbar = ["/auth/login", "/auth/register", "/404"]

const AppShell = (props: AppShellProps) => {
    const {children} = props;
    const {pathname} = useRouter()
  return (
    <main>
        {disbaleNavbar.includes(pathname) ? null : <Navbar />}
        {children}
    </main>
  )
}

export default AppShell