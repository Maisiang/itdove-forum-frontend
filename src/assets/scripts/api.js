import axios from 'axios';

// 建立各API的Axios實體
const apiServerURL = 'http://itdove.ddns.net:3000';

const publicRequest = axios.create({
    baseURL: apiServerURL + '/public/',
});
const userRequest = axios.create({
    baseURL: apiServerURL + '/user/',
});
const adminRequest = axios.create({
    baseURL: apiServerURL + '/admin/',
});

// 公開頁面
export const apiGetKanban   = () => publicRequest.get('/kanban');
export const apiGetArticle  = (kanbanName, page) => publicRequest.get('/article/' + kanbanName + "?page=" + page);

// 用戶頁面
// 管理員頁面

