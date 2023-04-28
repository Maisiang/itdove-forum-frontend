<template>
    <h1>所有看板</h1>
    <ul 
    class="article-list"
    v-infinite-scroll="load" 
    :infinite-scroll-disabled="disabled">
        <li v-for="(item,index) in count.slice(0, num)" :key="index" class="article-list-item">
            <el-text truncated>{{ item }}</el-text>
        </li>
    </ul>
    <p v-if="isEmpty">No more</p>
</template>
  
<script>
export default{
    data(){
        return{
            num:5,
            count:['hellohellohellohello','hello3','hello','hello2','hello3','hello','hello2','hello3','hello','hello2','hello3','hello','hello12321323232132','hello3','hello','hello2','hello3','hello','hello2','hello3','hello','hello2','hello3','hello','hello2','hello3','hello','hello2','hello3','hello','hello2','hell12321321321321o3',],
            isLoading:false,
            isEmpty:false,
            disabled:false
        }
    },
    methods:{
        load (){
            setTimeout(() => {
                if(this.num >= this.count.length){
                    this.disabled = true;
                    this.isEmpty = true;
                } else {
                    this.num +=4;
                }
            }, 1000);
        }
    }
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