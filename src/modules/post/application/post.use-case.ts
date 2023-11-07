import { TYPEPOST } from "../domain/post.interface";
import { PostRepository } from "../domain/post.repository";

export const getListPosts = async (repository: PostRepository, params: {page: number, size: number, type?: TYPEPOST}) => {
    try {
        const { page, size, type } = params
        const resp = await repository.getListPosts(page, size, type);

        return resp
    } catch (error) {
        return []
    }
}