<template>
    <div class="integral">
        <div class="head_top">
            <div @click="back()" class="back">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div class="top_tittle">
                <h4><strong>积分问题</strong></h4>
            </div>
        </div>
        <h2>Q1: 怎么获得积分？ 在线支付的订单将获得订单积分奖励： * 积分将在用户完成评价后获得,会根据订单实际支付金额和评价的质量发放。 * 每位用户每天最多可以获得2000积分，体验商家的订单和评价不会增加积分。 ### Q2: 积分用来做什么？ 可以在积分商城兑换各种礼品。 ### Q3: 礼品兑换很多天了还没有收到，该怎么办？ 礼品从兑换日起，3个工作日（周末不算）内处理发货，发货后，通常会在3个工作日左右送达。 ### Q4: 礼品兑换中的手机充值卡兑换，怎么样进行充值，充值之前会和我电话确认嘛？ 不会，手机充值卡兑换，是直接充值到您填写的手机号上，充值之前不会和您电话确认，所以您在填写电话的时候，请确认电话是否正确。
        </h2>
    </div>
</template>

<script>
    export default {
        name:"Integral",
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