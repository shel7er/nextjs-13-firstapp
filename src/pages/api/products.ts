// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import url from "url"
type Data = {
  status: boolean,
  statusCode: number,
  data: {
    id: number
    image: string
    name: string
    price: number
    size: string
    description: string
  }[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const serverOrigin = 'http://localhost:3000'
  const data = [
    {
      id: 1,
      name: "Addidas Shirt",
      image: url.resolve(serverOrigin, '/addidas.jpg'),
      price: 500000,
      size: "XL",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      name: "Nike Shirt",
      image: url.resolve(serverOrigin, '/nike.jpg'),
      price: 650000,
      size: "XL",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    }
  ]
  res.status(200).json({status:true, statusCode:200, data })
}
