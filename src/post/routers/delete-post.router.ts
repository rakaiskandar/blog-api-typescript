import { Request, Response, Router } from "express";
import { deletePostService } from "../services";

export const deletePostRouter = Router();
deletePostRouter.delete(
    '/post/:id', async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            await deletePostService({ id: parseInt(id) });

            return res.status(200).json({ message: 'Delete blog successfully' } );
        } catch (error) {
            return res.status(500).json({ message: 'Error deleting blog' });
        }
    }
)