<template>
    <div class="coupon">
        <div><img src="../assets/wufa.png" alt=""></div>
        <h3>无法使用代金券</h3>
        <p>非客户端或客户端版本过低</p>
        <el-button type="success" class="coupon_btn" @click="toDownload">下载或升级客户端</el-button>
    </div>
</template>

<script>
    export default {
        name:"Coupon",
        methods:{
            toDownload(){
                this.$router.push('/download')
            }
        }
    }
</script>

<style scoped>
    .coupon{
        margin-top: 50%;
        text-align: center;
    }
    .coupon div{
        width: 60%;
        margin: 0 auto;
    }
    .coupon div img{
        width: 100%;
        margin-bottom: .2rem;
    }
    .coupon h3{
        color: #666666;
        font-size: .44rem;
        margin-bottom: .2rem;
    }
    .coupon p {
        color: #999999;
        font-size: .31rem;
        margin-bottom: .2rem;
    }
    .coupon_btn{
        width: 50%;
        background-color: #56d176;
        font-size: .4rem;
    }
</style>