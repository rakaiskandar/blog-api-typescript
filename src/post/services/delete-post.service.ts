import { db } from "../../db";
import { IdPostsData } from "../validations";

export const deletePostService = async ({ id }: IdPostsData) => {
    await db.post.delete({
        where: { id: id }
    });
}