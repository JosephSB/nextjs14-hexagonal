import { Post, TYPEPOST } from "../domain/post.interface"

export interface IRespListPost {
    id:             number;
    urlImage:       string | null;
    title:          string;
    slug:           string;
    subtitle:       string | null;
    categories:     any[]; // falta tipar
    tags:           any[]; // falta tipar
    typePost:       number;
    dataPost:       {
        embedYoutube: string | null;
        contentPost:  string | null;
    };
    dataPublisher:  {
        id:          number;
        urlPhoto:    string;
        name:        string;
        last_name:   string;
        full_name:   string;
        slug:        string;
        isFollowing: boolean;
    };
    medias: {
        id: number
        media_type_id: number
        url: string
        order: number
        is_featured: boolean
    }[]
    extract:        string | null;
    date:           string;
    credits:        string | null;
    collaborators:  any[]; // falta tipar
    link:           string | null;
    total_comments: number;
    total_favs:     number;
}

export const ListPostAdapter = (data: IRespListPost) : Post => {
    return {
        id:             data.id,
        urlImage:       data.urlImage,
        title:          data.title,
        slug:           data.slug,
        subtitle:       data.subtitle,
        categories:     data.categories,
        tags:           data.tags,
        typePost:       data.typePost as TYPEPOST,
        dataPost:       data.dataPost,
        dataPublisher:  {
            id:          data.dataPublisher.id,
            urlPhoto:    data.dataPublisher.urlPhoto,
            name:        data.dataPublisher.name,
            lastName:   data.dataPublisher.last_name,
            fullName:   data.dataPublisher.full_name,
            slug:        data.dataPublisher.slug,
            isFollowing: data.dataPublisher.isFollowing,
        },
        medias: (data.medias && Array.isArray(data.medias)) ? data.medias.map( x => {
            return {
                id: x.id,
                mediaTypeId: x.media_type_id,
                url: x.url,
                order: x.order,
                isFeatured: x.is_featured
            }
        } ) : [],
        extract:        data.extract,
        date:           data.date,
        credits:        data.credits,
        collaborators:  data.collaborators,
        link:           data.link,
        totalComments: data.total_comments,
        totalFavs:     data.total_favs,
    }
}
