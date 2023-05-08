<template>
    <h1>所有看板</h1>
    <ul 
    class="article-list"
    v-infinite-scroll="load" 
    :infinite-scroll-disabled="disabled">
        <li v-for="(item,index) in articleList.slice(0, num)" :key="index" class="article-list-item">
            <div style="display: flex; flex-direction: column;">
                <el-text truncated>{{ item.TITLE }}</el-text>
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
            num:5,
            articleList:[],
            isLoading:false,
            isEmpty:false,
            disabled:false
        }
    },
    methods:{
        load (){
            setTimeout(() => {
                if(this.num >= this.articleList.length){
                    this.disabled = true;
                    this.isEmpty = true;
                } else {
                    this.num +=4;
                }
            }, 1000);
        }
    },
    mounted(){
        apiGetArticle(this.$route.params.id).then((response)=>{
            this.articleList = Object.assign([], response.data);
        });
    },
    watch: {
        '$route.params.id'(newVal, oldVal) {
            if (this.$route.path.startsWith('/kanban/')){
                apiGetArticle(this.$route.params.id).then((response)=>{
                    this.articleList = Object.assign([], response.data);
                });
            }
        }
    },
}
</script>
  
<style scoped>
.article-list .article-list-item {
    display: flex;
    align-items: center;
    height: 150px;
    border-top:2px black solid;

}
</style>