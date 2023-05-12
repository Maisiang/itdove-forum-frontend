<template>
    <h1>所有看板</h1>
    <ul 
    class="article-list"
    v-infinite-scroll="load" 
    :infinite-scroll-disabled="disabled">
        <li v-for="(item,index) in articleList" :key="index" class="article-list-item">
            <div style="display: flex; flex-direction: column; width:100%;">
                <h1><el-text truncated>{{ item.TITLE }}</el-text></h1>
                <el-text truncated>{{ item.CONTENT }}</el-text>
            </div>
        </li>
    </ul>
    <p v-if="isEmpty">目前沒有更多文章...</p>
</template>
  
<script>
import {apiGetArticle} from '@/assets/scripts/api';
export default{
    data(){
        return{
            page:       -1,  // 頁數
            articleList:[], // 文章列表
            isEmpty:    false,
            disabled:   false,
            loading:    false
        }
    },
    methods:{
        load (){
            this.disabled = true;
            setTimeout(async () => {
                this.page++;
                await apiGetArticle(this.$route.params.kanbanName,this.page).then((response)=>{
                    if(response.data.length != 0){
                        this.articleList = this.articleList.concat(response.data);
                        if(response.data.length < 10){
                            this.isEmpty = true;
                        } else {
                            this.disabled = false;
                        }
                    } else {
                        this.isEmpty = true;
                    }
                });
            }, 500);
        }
    },
    mounted(){
        this.load();
    },
    watch: {
        '$route.params.kanbanName'(newVal, oldVal) {
            this.isEmpty = false;
            this.page = -1;
            this.articleList = [];
            this.load();
        }
    },
}
</script>
  
<style scoped>
.article-list .article-list-item {
    display: flex;
    align-items: center;
    height: 80px;
    border:2px black solid;
    margin-top: 5px;
}
</style>