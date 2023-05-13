import router from '@/router';

export const MEDIA_MAX_WIDTH = '768';

// 檢查用戶設備是否為手機
export function isMobile(){
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if(isMobile)
        return true;
    else
        return false;
}

// ArticleSearch
export function updateSearchList(sListName,sSearch,sKey)
{
    console.log(sListName,sSearch,sKey);
    
    let aSearchTmp = [];
    // 判斷搜尋為空，用 trim() 空格更嚴謹
    if(!sSearch) return;
    // 判斷是否為重複的搜尋
    if(sKey === sSearch) return;
    // 判斷 Local Storage 是否存在搜尋紀錄
    if(!localStorage.getItem(sListName)){
        localStorage.setItem(sListName,'[]');
    } else {
        // 取出舊的搜尋紀錄
        aSearchTmp = JSON.parse(localStorage.getItem(sListName));
    }
    // 新增到暫存陣列開頭
    aSearchTmp.unshift(sSearch);
    // 利用 Set 去掉重複項
    let searchSet = new Set(aSearchTmp);
    // Set 轉 Array後存放到 Local Storage
    localStorage.setItem(sListName,JSON.stringify(Array.from(searchSet)));
    // 路由到搜尋頁
    /*this.$router.push({
        name:'search',
        query:{
            key:this.searchStr
        }
    });*/
    
}