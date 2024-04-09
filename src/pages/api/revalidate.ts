import { NextApiResponse, NextApiRequest } from "next"

type Data = {
  revalidate: boolean
  message?: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  //"http://localhost:3000/api/revalidate?token=evgir_unslaad&data=products"

  if (req.query.token !== process.env.REVALIDATE_TOKEN) {
    return res.json({ revalidate: false, message: "Invalid token" })
  }

  if (req.query.data === "products") {
    try {
      await res.revalidate("/api/revalidate")
      return res.json({ revalidate: true })
    } catch (error: any) {
      return res.status(500).json({ revalidate: false, message: error.message })
    }
  }
  return res.json({
    revalidate: true,
    message: "Choose data to revalidate manually"
  })
}

export default handler
