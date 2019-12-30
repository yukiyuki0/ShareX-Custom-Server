import "./libs/dotenv"
import express from "express"
import v1 from "./routes/v1"
import { createDefaultResponse } from "./utils/createResponse"

export const app = express()

app.get('/', (req: express.Request, res: express.Response) =>
  createDefaultResponse(res, 200, "ShareX-Custom-Server is now working."))
app.use('/v1', v1)