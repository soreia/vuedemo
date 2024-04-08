// apiService.js
import axios from 'axios';
import router from '../../router'; // 根据你的项目结构调整路径

const apiClient = axios.create({
    baseURL: 'http://localhost:8091', // 你的 API 基础 URL
    headers: {
        'Content-Type': 'application/json',
    },
});

export default {
    async get(url) {
        try {
            const response = await apiClient.get(url);
            return response;
        } catch (error) {
            console.error(`Failed to get data from ${url}: ${error}`);
            router.push({
                path: '/error',
                query: { errorMessage: `Failed to get data from ${url}: ${error}` }
            });
            throw error;
        }
    },
    async post(url, body) {
        try {
            const response = await apiClient.post(url, body);
            return response;
        } catch (error) {
            console.error(`Failed to post data to ${url}: ${error}`);
            router.push({
                path: '/error',
                query: { errorMessage: `Failed to get data from ${url}: ${error}` }
            });
            throw error;
        }
    },
};