<template>
    <div class="jusdapro">
        <div class="head_top">
            <div @click="back()" class="back">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div class="top_tittle">
                <h4><strong>准时达问题</strong></h4>
            </div>
        </div>
        <h2>
           Q1: 准时达规则： 饿了么用户在饿了么App带有「准时达」标签的商家下单，若商品送达时间超过承诺送达时间10分钟，我们将为您赔付一个无门槛红包。 ### Q2: 关于准时达的特殊情况： a. 预订单暂不参加赔付； b. 夜间部分时段下单暂不参加赔付； c. 恶劣天气（雨、雪等）暂不参加赔付； d. 每位用户每天最多赔付3个红包； ### Q3: 常见问题Q&A Q1：我怎么收到赔付红包？ A1：当确认送达商品时已超过承诺送达时间10分钟，我们将向您的饿了么账户发放一个无门槛红包，同时会有短信通知到您的手机号码。 ### 饿了么保留法律允许范围内对活动的解释权
        </h2>
    </div>
</template>

<script>
    export default {
        name:"Jusdapro",
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
        left: 36%;
        font-size: .5rem;
        color: #FFFFFF;
    }
    h2{
        margin-top: 1rem;
        padding: .4rem;
    }
</style>