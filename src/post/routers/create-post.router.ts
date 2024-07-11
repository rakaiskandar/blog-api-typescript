import { Request, Response, Router } from "express";
import { createPostService } from "../services/create-post.service";

export const createPostRouter = Router();
createPostRouter.post(
    '/post', async (req: Request, res: Response) => {
        try {
            const payload = req.body;
            await createPostService(payload);
            
            return res.status(200).json({ message: 'Create blog successfully' } );
        } catch (error) {
            return res.status(500).json({ message: 'Error creating blog' });
        }
    }
)