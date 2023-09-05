import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const {push} = useRouter()
  useEffect(() => {
    if (!isLogin){
      push("/auth/login")
    }
  }, [])
    return (
      <div className="flex justify-center items-center min-h-screen text-4xl font-bold">Product Page</div>
    )
  }
  
  export default ProductPage