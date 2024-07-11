import { db } from "../../db";
import { CreatePostData } from "../validations";

export const createPostService = async (data: CreatePostData) => {
    const { ...rest } = data;

    const result = await db.post.create({
        data: {
            ...rest
        },
        select: { id: true }
    });

    return { result }
};
