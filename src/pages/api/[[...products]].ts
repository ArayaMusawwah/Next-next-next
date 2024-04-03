// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getDetailById, retrieveData } from "@/lib/firebase/service"
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
  if (req.query.products![1]) {
    const data = await getDetailById("products", req.query.products![1])
    res.status(200).json({
      status: true,
      codeStatus: 200,
      message: "success",
      data
    })
  } else {
    const data = await retrieveData("products")
    res.status(200).json({
      status: true,
      codeStatus: 200,
      message: "success",
      data
    })
  }
}
