import Link from "next/link"
import { useRouter } from "next/router"
const LoginViews = () => {
    const {push} = useRouter()
    const handleLogin = () => {
        push("/product")
    }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center space-y-5">
        <h1 className="text-4xl font-semibold">Login Page</h1>
        <button className="border border-blue-500 bg-blue-500 rounded-md hover:shadow-lg hover:shadow-blue-600 p-2 hover:-translate-y-2 hover:bg-blue-400 hover:duration-500 transition">Login</button>
        <p className="text-gray-400 font-bold">
          Don&apos;t have an account?<Link href="/auth/register" className="hover:text-gray-700"> Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginViews