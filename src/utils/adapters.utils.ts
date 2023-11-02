import { config } from "@config/index";

export const ImageAdapter = (img: string) => {
    const URLvalid = /^(ftp|http|https):\/\/[^ "]+$/.test(img);
    return URLvalid ? img : `${config.API_URL}/storage/${img}`
}
