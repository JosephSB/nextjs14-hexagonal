import { CreateHeader } from "@utils/http.utils";
import { PostRepository } from "../domain/post.repository";
import axios from "axios";
import { config } from "@config/index";
import { CustomError } from "@modules/error/custom.error";
import { TYPEPOST } from "../domain/post.interface";
import { ListPostAdapter } from "./post.adapter";

export const getListPosts = async (page: number = 1, size: number = 10, type?: TYPEPOST) => {
    try {
        const header = CreateHeader();

        const resp = await axios.get(`${config.API_URL}/api/portal/v2/getPosts`, {
            headers: header.headers,
            params: { page, size, type }
        });
        if (resp.status !== 200) throw new Error("Error to get posts")
        if (!Array.isArray(resp.data.data)) return []

        return resp.data.data.map((x: any) => ListPostAdapter(x))
    } catch (error) {
        if(error instanceof CustomError) throw error
        throw CustomError.internalServer();
    }
}

export function PostRepositoryImpl(): PostRepository {
    return {
        getListPosts
    }
}