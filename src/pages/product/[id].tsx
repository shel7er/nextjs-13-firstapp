import { useRouter } from "next/router"

const DetailProductPage = () => {
    const { query } = useRouter()
    return (
      <div className="flex justify-center items-center min-h-screen text-4xl font-bold">
            <div className="flex flex-col">
                <h1>Detail Product</h1>
                <p>Product : {query.id} </p>
            </div>
      </div>
    )
  }
  
  export default DetailProductPage