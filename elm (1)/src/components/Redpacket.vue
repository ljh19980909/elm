<template>
    <div class="redpacket">
        <div class="head_top">
            <div @click="back()" class="back">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div class="top_tittle">
                <h4><strong>红包问题</strong></h4>
            </div>
        </div>
        <h2>
          Q1: 特权介绍 * 免配送费：饿了么会员卡绑定账户，每日前3单在「蜂鸟专送」标识商家免配送费。 * 更多特权，敬请期待！ ### Q2: 温馨提示 * 用户在当前会员服务失效前，无法购买新卡。 * 请认准饿了么官方渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。
        </h2>
    </div>
</template>

<script>
    export default {
        name:"Redpacket",
        methods:{
            back() {
                this.changea()
                this.$router.go(-1)   
            },
            changea(){
                this.$store.commit("changea")
            }
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
    h2{
        margin-top: 1rem;
        padding: .4rem;
    }
</style>