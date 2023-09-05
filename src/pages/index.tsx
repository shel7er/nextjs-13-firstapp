import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className='flex justify-center items-center min-h-screen font-bold text-4xl'>
        <div className=''>Hello World</div>
      </div>
    </>
  )
}
