import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type productType = {
  id: number;
  name: string;
  image: string;
  price: number;
  size: string;
  description: string;
};

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [products, setProducts] = useState([]);
  const { push } = useRouter();
  useEffect(() => {
    if (!isLogin) {
      push("/auth/login");
    }
  }, []);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      });
  }),
    [];

  return (
    <div className="flex flex-col">
      <div className="flex font-bold text-3xl px-5 py-5">Product Page</div>
      <div className="flex justify-center items-center px-5 py-5 space-x-6">
        {products.map((product: productType) => (
          <div className="flex flex-col" key={product.id}>
            <div><Image src={product.image} alt={product.name} width={300} height={200} /></div>
            <div className="flex flex-col items-start">
              <div className="flex font-bold text-2xl">{product.name}</div>
              <div className="flex font-bold text-2xl">{product.price.toLocaleString("id-ID", {style: "currency", currency: "IDR"})}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
