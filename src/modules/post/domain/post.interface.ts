export type TYPEPOST = 1 | 2 | 3 | 4

export interface Post {
    id:             number;
    urlImage:       string | null;
    title:          string;
    slug:           string;
    subtitle:       string | null;
    categories:     any[]; // falta tipar
    tags:           any[]; // falta tipar
    typePost:       TYPEPOST;
    medias: MediaPost[]
    dataPost?:       DataPost;
    dataPublisher:  DataPublisher;
    extract:        string | null;
    date:           string;
    credits:        string | null;
    collaborators:  any[]; // falta tipar
    link:           string | null;
    totalComments: number;
    totalFavs:     number;
}

export interface MediaPost {
    id: number
    mediaTypeId: number
    url: string
    order: number
    isFeatured: boolean
}

export interface DataPost {
    embedYoutube: string | null;
    contentPost:  string | null;
}

export interface DataPublisher {
    id:          number;
    urlPhoto:    string;
    name:        string;
    lastName:   string;
    fullName:   string;
    slug:        string;
    isFollowing: boolean;
}
