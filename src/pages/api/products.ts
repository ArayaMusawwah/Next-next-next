// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { retrieveData } from "@/lib/firebase/service"
import type { NextApiRequest, NextApiResponse } from "next"

type Products = {
  status: boolean
  codeStatus: number
  message: string
  data: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Products>
) {
  const data = await retrieveData("products")

  res.status(200).json({
    status: true,
    codeStatus: 200,
    message: "success",
    data
  })
}
