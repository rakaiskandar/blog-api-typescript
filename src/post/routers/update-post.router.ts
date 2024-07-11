import { Request, Response, Router } from "express";
import { updatePostService } from "../services";

export const updatePostRouter = Router();
updatePostRouter.put(
    '/post/:id', async (req: Request, res: Response) => {        
        try {
            const payload = req.body;
            await updatePostService(payload, { id: parseInt(req.params.id) });

            return res.status(200).json({ message: 'Update blog successfully' } );
        } catch (error) {   
            return res.status(500).json({ message: 'Error updating blog' });
        }
    }
)