<template>
    <MediaMaxWidth>
        <el-aside>
            <el-menu 
            @select="handleMenuSelect"
            :default-active="this.$route.path"
            active-text-color="#66b1ff"
            background-color="#1d3043"
            text-color="white"
            class="noselect">
                <!-- 資料庫看板 -->
                <el-menu-item v-for="(item,index) in kanbanList" :key="index" :index="'/kanban/'+item.NAME_EN">
                    <div>
                        <el-icon><IceTea /></el-icon>
                        {{item.NAME}}
                    </div>
                    <div v-if="item.KANBAN_ID!=1" @click.stop="this.starStatus = !this.starStatus;">
                        <el-icon v-if="!starStatus"><Star /></el-icon>
                        <el-icon v-if="starStatus"><StarFilled /></el-icon>
                    </div>
                </el-menu-item>
                
                <!-- 預設看板 -->
                <el-menu-item index="/about">
                    <div><el-icon><Watermelon /></el-icon>常見問題</div>
                </el-menu-item>
                <el-menu-item disabled>
                    <div><el-icon><Watermelon /></el-icon>研究所板</div>
                </el-menu-item>

            </el-menu>
        </el-aside>
    </MediaMaxWidth>
</template>

<script>
import {apiGetKanban} from '@/assets/scripts/api';
import styled from 'vue3-styled-components';
import { MEDIA_MAX_WIDTH } from '@/assets/scripts/common';
const MediaMaxWidth = styled.div`
    @media (max-width: ${MEDIA_MAX_WIDTH}px) {
        .el-aside,
        .el-menu{
            width:100% !important;
        }
    }
`;
export default {
    name: 'Kanban',
    data(){
        return{
            kanbanList:[],
            starStatus:false
        }
    },
    methods:{
        // 看板跳轉
        handleMenuSelect(path){
            this.$router.push(path);
        },
    },
    mounted(){
        // 取得所有看板
        apiGetKanban().then((response)=>{
            this.kanbanList = Object.assign([], response.data);
        })
    },
    components:{
        MediaMaxWidth
    }
}
</script>

<style scoped>
.el-menu{
    width:90%;
    margin:0 auto;
    border:none; /* 右邊一條白線? */
}
/* 更改被選擇的看板的背景顏色 */
.el-menu-item.is-active{
    background-color: rgba(255, 255, 255, 0.2) !important;
}
.el-menu-item{
    display:flex; 
    justify-content:space-between;
}
</style>
  
  