import axios from 'axios';

const axiosRequest = axios.create({
    baseURL: `https://pestnclean.vercel.app/`,
    // baseURL: `http://localhost:3000/`,
});

export const get = async (endpoint: string, body: any) => {
    const res = await axiosRequest.get(endpoint, body);
    return res;
};