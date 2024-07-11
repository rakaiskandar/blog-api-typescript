import { Request, Response, Router } from "express";
import { listPostService } from "../services/list-post.service";

export const listPostRouter = Router();
listPostRouter.get(
    '/post',
    async (req: Request, res: Response) => {
        try {
            const blogs = await listPostService();
            
            return res.status(200).json({ ok: true, ...blogs });
        } catch (error) {
            return res.status(500).json({ message: 'Error fetching blogs' });
        }
    }
)