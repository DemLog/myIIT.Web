type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

type ApiParams = {
    method: HttpMethod;
    url: string;
    body?: object;
    token?: string;
};

type ApiResponse = {
    response_code: number;
    data: any;
    error?: { message: string };
};

const API_URL = "http://api.myiit.ru/methods/";

const apiService = async ({method, url, body, token}: ApiParams): Promise<ApiResponse | null> => {
    try {
        const options: RequestInit = {
            method,
            headers: {
                "Content-Type": "application/json",
                "Authorization": token ? "Bearer " + token : ""
            },
        };

        if (method !== "GET" && body) {
            options.body = JSON.stringify(body);
        }

        const response = await fetch(API_URL + url, options);
        return await response.json() as ApiResponse;

    } catch (error) {
        return null;
    }
    return null;
};

export default apiService;