import { createPostRouter } from "./create-post.router";
import { deletePostRouter } from "./delete-post.router";
import { listPostRouter } from "./list-post.router";
import { updatePostRouter } from "./update-post.router";

export const postRouters = [
    createPostRouter,
    listPostRouter,
    updatePostRouter,
    deletePostRouter
];