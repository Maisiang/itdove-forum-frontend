<template>
    <el-button type="primary" @click="loginFormVisible = true" class="login-btn">登入</el-button>
    <!-- 表單對話框 -->
    <el-dialog v-model="loginFormVisible" title="會員登入" :width="dialogWidth" center draggable>
        <!-- 表單 -->
        <el-form label-width="70px">
            <el-form-item label="用戶名">
                <el-input />
            </el-form-item>
            <el-form-item label="密碼">
                <el-input />
            </el-form-item>
        </el-form>
        <!-- 表單按鈕 -->
        <template #footer>
            <el-button @click="loginFormVisible = false">取消</el-button>
            <el-button type="primary" @click="login">登入</el-button>
        </template>
    </el-dialog>
</template>
  
<script>
import { loginSuccess,loginFail } from '@/assets/scripts/notification'
import { isMobile } from '@/assets/scripts/common'
export default {
    name: 'Login',
    data(){
        return{
            loginFormVisible:false,
            dialogWidth:'30%'
        }
    },
    methods:{
        login(){
            loginSuccess();
            //loginFail();
            this.loginFormVisible=false;
        },
    },
    mounted(){
        // 更改手機用戶登入寬度
        if (isMobile()) {
            this.dialogWidth = '100%';
        }
        console.log(isMobile())
    }
}
</script>

<style scoped>
.login-btn{
    width:80%;
}
</style>

  