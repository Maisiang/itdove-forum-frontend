<template>
    <el-button type="primary" @click="registerFormVisible = true" class="register-btn">註冊</el-button>
    <!-- 表單對話框 -->
    <el-dialog v-model="registerFormVisible" title="會員註冊" :width="dialogWidth" center draggable>
        <!-- 表單 -->
        <el-form label-width="70px">
            <el-form-item label="用戶名">
                <el-input v-model="username" />
            </el-form-item>
            <el-form-item label="密碼">
                <el-input v-model="password" show-password />
            </el-form-item>
            <el-form-item label="電子信箱">
                <el-input v-model="email" />
            </el-form-item>
        </el-form>
        <!-- 表單按鈕 -->
        <template #footer>
            <el-button @click="registerFormVisible = false">取消</el-button>
            <el-button type="primary" @click="register">註冊</el-button>
        </template>
    </el-dialog>
</template>
  
<script>
import { successNotify, failNotify } from '@/assets/scripts/notification';
import { isMobile } from '@/assets/scripts/common';
import { apiUserRegister } from '@/assets/scripts/api';
export default {
    name: 'Register',
    data(){
        return{
            username:   '',
            password:   '',
            email:      '',
            registerFormVisible: false,
            dialogWidth:'30%'
        }
    },
    methods:{
        register(){
            apiUserRegister({
                username: this.username,
                password: this.password,
                email:    this.email
            }).then((response)=>{
                if(response.data.isSuccess){
                    successNotify('註冊提示','註冊成功！')
                    this.registerFormVisible=false;
                } else {
                    failNotify('註冊提示','帳號或信箱重複！請重新再試...');
                }
            })
        },
    },
    mounted(){
        // 更改手機用戶登入寬度
        if (isMobile()) {
            this.dialogWidth = '90%';
        }
        console.log(isMobile())
    }
}
</script>

<style scoped>
.register-btn{
    width:80%;
}
</style>

  