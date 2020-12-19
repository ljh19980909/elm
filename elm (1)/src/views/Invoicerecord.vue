<template>
    <div class="invoicerecord">
        <div class="head_top">
            <div @click="back()" class="back">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div class="top_tittle">
                <h4><strong>购买记录</strong></h4>
            </div>
        </div>
        <div class="content">
            <div><img src="../assets/integral.png" alt=""></div>
            <p>没有购买记录</p>
        </div>
        
    </div>
</template>

<script>
    export default {
        name:"Invoicerecord",
        methods:{
            back() {
                this.$router.go(-1)   
            },
        }
    }
</script>

<style scoped>
    .head_top {
        background-color: #3190e8;
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0;
        width: 100%;
        height: 1.2rem;
    }
    
    .back {
        left: .2rem;
        width: .7rem;
        height: .7rem;
        font-size: .7rem;
        color: white;
        position: absolute;
        top: 40%;
        transform: translateY(-50%);
    }
    
    .top_tittle {
        position: absolute;
        top: 20%;
        left: 40%;
        font-size: .5rem;
        color: #FFFFFF;
    }
    .content{
        position: absolute;
        top: 4rem;
        width: 100%;
    }
    .content>div{
        display: block;
        width: 8rem;
        margin: 0 auto;
    }
    .content>p{
        text-align: center;
        color: #999999;
        font-size: .4rem;
        margin-top: .2rem;
    }
    .content>div img{
        width: 100%;
    }
</style>s