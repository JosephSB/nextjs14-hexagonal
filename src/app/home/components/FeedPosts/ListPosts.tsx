"use client";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
//import { MemoizedCardPost } from "@components/Cards/CardPost"
import { getListPosts } from "@modules/post/application/post.use-case";
import { TYPEPOST } from "@modules/post/domain/post.interface";
import { PostRepositoryImpl } from "@modules/post/infraestructure/post.repository.impl";
import { useInfiniteQuery } from "@tanstack/react-query";

interface props {
    typePost?: TYPEPOST;
}

const ListPosts = ({ typePost }: props) => {
    const { ref, inView } = useInView();

    const {
        status,
        data,
        isFetching,
        isFetchingNextPage,
        refetch,
        fetchNextPage,
    } = useInfiniteQuery(
        {
            queryKey: ["feed", (typePost || "all")],
            queryFn: ({ pageParam = 0 }) => getListPosts(PostRepositoryImpl(), { page: (pageParam + 1), size: 12, type: typePost }),
            refetchOnWindowFocus: false,
            retry: 0,
            getNextPageParam: (lastPage, allPages) => allPages.length,
            initialPageParam: 1
        }
    );

    useEffect(() => {
        if (inView) {
            fetchNextPage();
        }
    }, [inView]);

    if (status === "pending") {
        return <div>loading...</div>;
    }

    if (!data || data.pages.length === 0) {
        return <p>Sin publicaciones</p>;
    }

    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
            }}
        >
            {
                data.pages.map((page) => (
                    page.map(
                        (item, index) => (
                            <div key={index}>{item.title} {/*<MemoizedCardPost key={item.id} {...item} />*/}</div>
                            
                        )
                    )
                ))
            }
            {isFetching && !isFetchingNextPage && <div>loading...</div>}
            <div style={{ width: "100%", height: 20 }} ref={ref}></div>
        </div>
    );
};

export default ListPosts;
