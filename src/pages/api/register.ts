import { signUp } from "@/lib/firebase/service"
import { NextApiRequest, NextApiResponse } from "next"

type Data = {
  status: boolean
  message: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method === "POST") {
    await signUp(
      req.body,
      ({ status, message }: { status: boolean; message: string }) => {
        status
          ? res.status(200).json({ status, message })
          : res.status(400).json({ status, message })
      }
    )
  } else {
    res.status(405).json({ status: false, message: "Method not allowed" })
  }
}

export default handler
