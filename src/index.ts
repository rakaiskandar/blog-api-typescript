import express, { Express, Request, Response } from "express";
import { config as c } from "dotenv";
import { routers } from "./routers";
c();

const app: Express = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.json({ message: "Express + Typescript Server" });
})

app.use('/api/v1', routers);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});