<template>
	<el-container>
        <Kanban class="hidden-xs-only"></Kanban>
        <el-main>
            <div class="el-main-wrapper">
                <router-view></router-view>
            </div>
        </el-main>
    </el-container>
</template>

<script>
import Kanban from '@/components/Kanban.vue';
export default {
    name: 'PublicView',
    data(){
        return{
        }
    },
    components:{
        Kanban
    },
}
</script>

<style scoped>
.el-container{
    height:100%;
    padding-bottom:20px;
    padding-top:20px;
}
.el-main{
    padding:0;
    height:auto;
}
.el-main-wrapper{
    min-height:100%;
    height:auto;
    box-sizing: border-box;
    padding: 30px;
    width: 70%;
    background-color: white;
}
@media (max-width:768px){
    .el-container{
        padding:0;
    }
    .el-main-wrapper{
        width: 100%;
    }
}

</style>