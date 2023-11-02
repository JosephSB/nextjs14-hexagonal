export const config = {
    MY_URL: (process.env.MY_URL || process.env.NEXT_PUBLIC_MY_URL) || "http://localhost:3000/",
    URL_AUTH_WEB: (process.env.URL_AUTH_WEB || process.env.NEXT_PUBLIC_URL_AUTH_WEB) || "https://auth.pozicion.com/",
    URL_AUTH_SERVICE: (process.env.URL_AUTH_SERVICE || process.env.NEXT_PUBLIC_URL_AUTH_SERVICE) || "https://auth-service.pozicion.com/",
    API_URL: (process.env.API_URL || process.env.NEXT_PUBLIC_API_URL) || "https://pozicion-admin.preciso.website",

    URL_STUDIO: (process.env.URL_STUDIO || process.env.NEXT_PUBLIC_URL_STUDIO) || "https://studio.pozicion.com/",
    TOKEN_AUTH: (process.env.NEXT_PUBLIC_API_TOKEN || process.env.API_TOKEN) || "pz-token",
    URL_STREAM_API: (process.env.URL_STREAM_API || process.env.NEXT_PUBLIC_URL_STREAM_API) || "http://localhost:4000",
    URL_STREAM: (process.env.URL_STREAM_SERVICE || process.env.NEXT_PUBLIC_URL_STREAM_SERVICE) || "http://localhost:5000",
}