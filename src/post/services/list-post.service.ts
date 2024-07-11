import { db } from "../../db"

export const listPostService = async () => {
    const result = await db.post.findMany({
        select: {
            id: true,
            title: true,
            content: true,
            createdAt: true,
            updatedAt: true
        },
    });

    if (result.length === 0) {
        return { result: [] };
    }

    return { result }
}