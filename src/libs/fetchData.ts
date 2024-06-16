import { get } from "./axiosConfig";

const fetchDataMoments = async () => {
    try {
        const response = await get('api/firebase/moment', null);
        return response.data;
    } catch (error) {
        console.error(error); // Xử lý lỗi nếu có
    }
};

export { fetchDataMoments };
