import Link from "next/link"
const RegisterViews = () => {
  return (
    <div className="flex justify-center items-center min-h-screen font-bold">
    <div className="flex flex-col items-center space-y-5">
      <h1 className="text-2xl font-semibold">Register Page</h1>
      <p className="text-gray-400">Have an account?<Link href="/auth/login" className="hover:text-gray-700"> Log in</Link></p>
    </div>
  </div>
  )
}

export default RegisterViews