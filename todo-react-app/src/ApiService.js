import { API_BASE_URL } from "./api-config";

//                  /todo  GET    item
export function call(api, method, req) {

    let options = {
        headers: new Headers({
            "Content-Type": "application/json"
        }),
        url: API_BASE_URL + api,
        method: method
    }

    if (req) {
        options.body = JSON.stringify(req); 
    }

    return fetch(options.url, options)
            .then(res => res.json());
}