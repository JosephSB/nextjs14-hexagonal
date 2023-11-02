import { config }  from "@config/index";
import Cookies from "js-cookie";

export const CreateHeader = () =>{
    const token = Cookies.get(config.TOKEN_AUTH)

    const header = {
        headers:{
            "Content-type": "application/json; charset=UTF-8",
            Authorization: `Bearer ${token}`,
        }
    }

    return header;
    
}

export function getSearchParams(url: string): Record<string, string> {
    const searchParams: Record<string, string> = {};
    const queryStartIndex = url.indexOf('?');

    if (queryStartIndex !== -1) {
        const queryStr = url.substring(queryStartIndex + 1);
        const queryArr = queryStr.split('&');

        queryArr.forEach((pair) => {
            const [key, value] = pair.split('=');
            searchParams[key] = value;
        });
    }

    return searchParams;
}