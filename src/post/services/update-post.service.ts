import { db } from "../../db";
import { IdPostsData, UpdatePostData } from "../validations";

export const updatePostService = async (data: UpdatePostData, { id }: IdPostsData) => {
    
    await db.$transaction(async (trx) => {
        await trx.post.update({
            where: { id: id },
            data,
            select: { id: true }
        })
    })
}