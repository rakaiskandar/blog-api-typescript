import { InferOutput, number, object, optional, string } from "valibot";

export const IdPostsSchema = object({
    id: number('Id must be an integer')
});

export const CreatePostSchema = object({
    title: string('Title must be a string'),
    content: string('Content must be a string')
});

export const UpdatePostSchema = object({
    title: optional(string('Title must be a string')),
    content: optional(string('Content must be a string')),
});

export type IdPostsData = InferOutput<typeof IdPostsSchema>;
export type CreatePostData = InferOutput<typeof CreatePostSchema>;
export type UpdatePostData = InferOutput<typeof UpdatePostSchema>;

