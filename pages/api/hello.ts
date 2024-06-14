import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    const currentTime = new Date().toLocaleTimeString('en-US');
  res.status(200).json({ message: `Hello from the API! The current time is ${currentTime}.`})
}