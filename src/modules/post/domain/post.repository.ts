import { Post, TYPEPOST } from "./post.interface";

export interface PostRepository {
    getListPosts(page: number, size: number, type?: TYPEPOST) : Promise<Post[]>
}