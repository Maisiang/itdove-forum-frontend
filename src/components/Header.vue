<template>
        <el-row type="flex" justify="space-between" align="middle">
            <el-col :span="3"   :xs="10"><a href="/"><img src="@/assets/images/logo.png"></a></el-col>
            <el-col :span="8"   :pull="1" class="hidden-xs-only"><ArticleSearch></ArticleSearch></el-col>
            <el-col :span="2"   :push="3" class="hidden-xs-only"><Login></Login></el-col>
            <el-col :span="2"   class="hidden-xs-only"><Register></Register></el-col>
            <!-- 手機板 -->

            <el-col :xs="4" :push="3"   class="hidden-sm-and-up"><el-icon size="30" color="white"><Search /></el-icon></el-col>
            <el-col :xs="4"             class="hidden-sm-and-up"><Menu></Menu></el-col>
        </el-row>
</template>

<Login></Login>
<script>
import Menu from '@/components/Menu.vue'
import ArticleSearch from '@/components/ArticleSearch.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
export default {
    name: 'Header',
    components:{
        Menu,
        ArticleSearch,
        Login,
        Register
    }
}
</script>
  
<style scoped>
.el-row{
    height:100%;
}
.el-col{
    display:flex;
    justify-content: flex-end;
}

</style>