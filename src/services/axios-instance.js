import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: 'http://3.81.254.132:3200/',
    // baseURL:'http://localhost:3200/',
    headers: {
        Authorization: '',
    },
});

axiosInstance.interceptors.response.use((response) => response, (error) => { 
    if(error.response.status === 401) {
        
    }
    throw error;
});

axiosInstance.interceptors.response.use(async (response) => response, (error) => { 
    if(error.response.status === 500){
        console.log('error.response', error.response)
    }
    if(error.response.status === 404){
        console.log('error.response', error.response)
        return error.response
    }
    throw error;
    // return error.response
});

axiosInstance.interceptors.request.use(
    async (config) => {
        const sessionToken = await localStorage.getItem('token');
        if (sessionToken !== null) {
            config.headers.Authorization = 'Bearer ' + sessionToken
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default axiosInstance;