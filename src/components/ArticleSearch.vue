<template>
    <el-autocomplete
    v-model="inputValue"
    :fetch-suggestions="suggestions"
    placeholder="搜尋..."
    clearable
    :style="{width:'100%'}">
        <template #append>
            <el-button circle @click="goSearch()">
                <el-icon><Search /></el-icon>
            </el-button>
        </template>
    </el-autocomplete>


</template>

<script>
import { updateSearchList } from '@/assets/scripts/common'
import { ElMessage } from 'element-plus'
export default{
    data(){
        return{
            inputValue:'',
            suggestions: []
        }
    },
    methods:{
        goSearch(){
            // 需扣掉重複項
            updateSearchList('ArticleSearch',this.inputValue,this.$route.query.key);
            this.suggestions.unshift({value: this.inputValue});
            ElMessage({
                message: this.inputValue,
                type: 'success',
                duration:2000
            })
        }
    },
    mounted(){
        // 取出現有搜尋紀錄
        if(localStorage.getItem('ArticleSearch')){
            var tmp =JSON.parse(localStorage.getItem('ArticleSearch'));
            for(var i=0 ; i<tmp.length ; i++){
                this.suggestions.push({value:tmp[i]});
            }
        }
    }
}
</script>

<style scoped>

</style>