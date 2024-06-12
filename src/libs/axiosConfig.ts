import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? 'https://couple-be.vercel.app/' : 'http://localhost:8080/';

const axiosRequest = axios.create({
    baseURL,
});

export const get = async (endpoint: string, body: any) => {
    const res = await axiosRequest.get(endpoint, body);
    return res;
};

export const post = async (endpoint: string, data: any) => {
    const res = await axiosRequest.post(endpoint, data);
    return res;
};

export const remove = async (endpoint: string) => {
    const res = await axiosRequest.delete(endpoint);
    return res;
};

export const put = async (endpoint: string, data: any) => {
    const res = await axiosRequest.put(endpoint, data);
    return res;
};
