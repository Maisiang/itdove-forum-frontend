<template>
    <h1>所有看板</h1>
    <ul 
    class="article-list"
    v-infinite-scroll="loadArticle" 
    :infinite-scroll-disabled="disabled">
        <li v-for="(item,index) in articleList" :key="index" class="article-list-item">
            <div style="display: flex; flex-direction: column; width:100%;">
                <h1><el-text truncated>{{ item.title }}</el-text></h1>
                <el-text truncated>{{ item.content }}</el-text>
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
        loadArticle (){
            this.disabled = true;
            this.page++;
            apiGetArticle(this.$route.params.kanbanName,this.page).then((response)=>{
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
        }
    },
    mounted(){
        this.loadArticle ();
    },
    watch: {
        '$route.params.kanbanName'(newVal, oldVal) {
            if(newVal != undefined){
                this.isEmpty = false;
                this.page = -1;
                this.articleList = [];
                this.loadArticle();
            }
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