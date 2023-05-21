import axios from 'axios';
import store from '@/assets/scripts/store';

// 建立各API的Axios實體
const apiServerURL = 'http://itdove.ddns.net:3000';
//const apiServerURL = 'https://itdove-forum-backend.onrender.com';

const publicRequest = axios.create({
    baseURL: apiServerURL + '/public/',
    withCredentials: true
});
const userRequest = axios.create({
    baseURL: apiServerURL + '/user/',
});
const adminRequest = axios.create({
    baseURL: apiServerURL + '/admin/',
});

// 公開頁面
export const apiGetKanban   = ()                    => publicRequest.get('/kanban');
export const apiGetArticle  = (kanbanName, page)    => publicRequest.get('/article/' + kanbanName + "?page=" + page);
export const apiUserLogin   = data                  => publicRequest.post('/login', data);
export const apiUserRegister= data                  => publicRequest.post('/register', data);

// 用戶頁面
// 管理員頁面

// Request攔截器
const reqInterceptors = (instance)=>{
    instance.interceptors.request.use(
    config => {
        store.commit('changeLoading', true);
        return config;
    }, 
    error => {
        throw error;
    });
}
reqInterceptors(publicRequest);
reqInterceptors(userRequest);
reqInterceptors(adminRequest);
  
// Response攔截器
const resInterceptors = (instance)=>{
    instance.interceptors.response.use(
    response => {
        store.commit('changeLoading', false);
        return response;
    }, 
    error => {
        alert('Server目前不在...請稍後再試');
        store.commit('changeLoading', false);
        throw error;
    });
}
resInterceptors(publicRequest);
resInterceptors(userRequest);
resInterceptors(adminRequest);

